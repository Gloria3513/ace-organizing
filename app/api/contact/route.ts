import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, area, spaces, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "이름과 연락처는 필수입니다." },
        { status: 400 }
      );
    }

    // Log to console (for now — can integrate email service later)
    console.log("=== 새 상담 신청 ===");
    console.log(`이름: ${name}`);
    console.log(`연락처: ${phone}`);
    console.log(`지역: ${area || "미입력"}`);
    console.log(`희망 공간: ${spaces?.join(", ") || "미선택"}`);
    console.log(`메시지: ${message || "없음"}`);
    console.log("====================");

    // TODO: 이메일 전송 연동 (Resend, Nodemailer 등)
    // await sendEmail({
    //   to: "hsahhh@naver.com",
    //   subject: `[에이스정리수납] ${name}님 상담 신청`,
    //   body: `이름: ${name}\n연락처: ${phone}\n지역: ${area}\n공간: ${spaces?.join(", ")}\n메시지: ${message}`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
