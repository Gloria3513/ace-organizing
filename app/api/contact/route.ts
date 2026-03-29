import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "카카오톡 채널로 문의해주세요." },
    { status: 301 }
  );
}
