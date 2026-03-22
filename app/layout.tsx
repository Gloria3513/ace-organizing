import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "에이스정리수납 | 전문 정리수납 컨설팅",
  description:
    "홍선아 대표의 전문 정리수납 서비스. 가정, 사무실, 이사정리까지 깔끔하게 바꿔드립니다.",
  keywords:
    "정리수납, 정리정돈, 수납컨설팅, 홈정리, 이사정리, 에이스정리수납, 홍선아",
  openGraph: {
    title: "에이스정리수납 | 전문 정리수납 컨설팅",
    description: "전문 정리수납 컨설턴트가 당신의 공간을 새롭게 바꿔드립니다",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
