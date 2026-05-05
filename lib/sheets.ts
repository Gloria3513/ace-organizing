export interface PortfolioItem {
  title: string;
  location: string;
  type: "image" | "video";
  before: string;
  after: string;
}

function parseCSV(csv: string): string[][] {
  const rows: string[][] = [];
  let current = "";
  let inQuotes = false;
  let row: string[] = [];

  for (let i = 0; i < csv.length; i++) {
    const ch = csv[i];
    if (inQuotes) {
      if (ch === '"' && csv[i + 1] === '"') {
        current += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        row.push(current.trim());
        current = "";
      } else if (ch === "\n" || (ch === "\r" && csv[i + 1] === "\n")) {
        row.push(current.trim());
        if (row.some((cell) => cell !== "")) rows.push(row);
        row = [];
        current = "";
        if (ch === "\r") i++;
      } else {
        current += ch;
      }
    }
  }
  if (current || row.length > 0) {
    row.push(current.trim());
    if (row.some((cell) => cell !== "")) rows.push(row);
  }
  return rows;
}

export async function fetchPortfolio(): Promise<PortfolioItem[]> {
  const sheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL;
  if (!sheetUrl) return [];

  try {
    const res = await fetch(sheetUrl, { next: { revalidate: 60 } });
    if (!res.ok) return [];

    const csv = await res.text();
    const rows = parseCSV(csv);

    // Skip header row
    return rows.slice(1).map((row) => ({
      title: row[0] || "",
      location: row[1] || "",
      type: (row[2] || "image") as "image" | "video",
      before: row[3] || "",
      after: row[4] || "",
    })).filter((item) => item.title && item.before);
  } catch {
    return [];
  }
}
