/**
 * 폼 제출 시 자동 알림 + 스프레드시트 정리
 *
 * 설정 방법:
 * 1. 01_createForm.gs 실행 후 생성된 폼의 스프레드시트를 열기
 *    (폼 편집 화면 → '응답' 탭 → 스프레드시트 아이콘 클릭)
 * 2. 스프레드시트에서 확장 프로그램 → Apps Script
 * 3. 이 코드를 붙여넣기
 * 4. setupTrigger() 함수를 한 번 실행 (트리거 등록)
 * 5. 이후 폼 제출마다 자동으로 이메일 알림이 옵니다
 */

/**
 * 트리거 설정 - 최초 1회만 실행
 */
function setupTrigger() {
  // 기존 트리거 제거
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(trigger => ScriptApp.deleteTrigger(trigger));

  // 새 트리거 등록
  ScriptApp.newTrigger("onFormSubmit")
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onFormSubmit()
    .create();

  Logger.log("트리거 설정 완료! 이제 폼 제출 시 자동 알림이 발송됩니다.");
}

/**
 * 폼 제출 시 자동 실행되는 함수
 */
function onFormSubmit(e) {
  const responses = e.namedValues;

  // 알림 받을 이메일 (본인 이메일로 변경하세요)
  const notifyEmail = "hsahhh@naver.com";

  // 응답 내용 정리
  const businessName = responses["상호명 (사업체/브랜드 이름)"] || "미입력";
  const ownerName = responses["대표자 이름"] || "미입력";
  const phone = responses["연락처 (전화번호)"] || "미입력";
  const tagline = responses["한 줄 소개"] || "미입력";
  const siteType = responses["원하는 홈페이지 타입"] || "미선택";
  const contactMethod = responses["고객 문의를 어떤 방식으로 받고 싶으세요?"] || "미선택";

  const subject = `[홈페이지 제작 신청] ${businessName} - ${ownerName}님`;

  const body = `
새로운 홈페이지 제작 신청이 접수되었습니다!

━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 기본 정보
━━━━━━━━━━━━━━━━━━━━━━━━━━
상호명: ${businessName}
대표자: ${ownerName}
연락처: ${phone}
한 줄 소개: ${tagline}

━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 홈페이지 요청
━━━━━━━━━━━━━━━━━━━━━━━━━━
홈페이지 타입: ${siteType}
문의 방식: ${contactMethod}

━━━━━━━━━━━━━━━━━━━━━━━━━━

📎 업로드된 사진 파일은 구글 드라이브에서 확인하세요.
📊 전체 응답 내용은 스프레드시트에서 확인할 수 있습니다.

접수 시간: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}
  `.trim();

  // 이메일 발송
  try {
    MailApp.sendEmail({
      to: notifyEmail,
      subject: subject,
      body: body,
    });
    Logger.log("알림 이메일 발송 완료: " + businessName);
  } catch (error) {
    Logger.log("이메일 발송 실패: " + error.message);
  }

  // 스프레드시트에 접수 상태 컬럼 추가
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const lastRow = sheet.getLastRow();
    const lastCol = sheet.getLastColumn();

    // '처리상태' 헤더가 없으면 추가
    const headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    let statusCol = headers.indexOf("처리상태") + 1;

    if (statusCol === 0) {
      statusCol = lastCol + 1;
      sheet.getRange(1, statusCol).setValue("처리상태");
      sheet.getRange(1, statusCol).setFontWeight("bold");
    }

    // 새 응답에 '접수완료' 표시
    sheet.getRange(lastRow, statusCol).setValue("접수완료");
    sheet.getRange(lastRow, statusCol)
      .setBackground("#e8f5e9")
      .setFontColor("#2e7d32");

  } catch (error) {
    Logger.log("시트 업데이트 실패: " + error.message);
  }
}

/**
 * 처리상태 업데이트 함수 (수동 사용)
 * 스프레드시트에서 직접 '처리상태' 컬럼을 수정해도 됩니다
 *
 * 상태 예시: 접수완료 → 자료검토중 → 제작중 → 피드백대기 → 완료
 */
