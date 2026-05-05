import { fetchPortfolio } from "@/lib/sheets";
import { NextResponse } from "next/server";

export const revalidate = 60; // 1분마다 갱신

export async function GET() {
  const items = await fetchPortfolio();
  return NextResponse.json(items);
}
