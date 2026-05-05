/**
 * 홈페이지 제작 자료 수집 폼 자동 생성 스크립트
 *
 * 사용법:
 * 1. script.google.com 접속
 * 2. 새 프로젝트 생성
 * 3. 이 코드를 붙여넣기
 * 4. createWebsiteRequestForm() 함수 실행
 * 5. 생성된 폼 URL이 로그에 출력됩니다
 */

function createWebsiteRequestForm() {
  const form = FormApp.create("홈페이지 제작 자료 수집 폼");
  form.setDescription(
    "홈페이지 제작에 필요한 자료를 보내주세요.\n" +
    "아래 항목을 작성해주시면 3~4일 내에 홈페이지를 완성해드립니다.\n" +
    "사진은 가능한 고화질로 보내주세요."
  );
  form.setCollectEmail(true);
  form.setAllowResponseEdits(true);

  // ========================================
  // 섹션 1: 기본 정보
  // ========================================
  form.addSectionHeaderItem()
    .setTitle("1. 사업 기본 정보")
    .setHelpText("홈페이지에 표시될 기본 정보입니다");

  form.addTextItem()
    .setTitle("상호명 (사업체/브랜드 이름)")
    .setRequired(true)
    .setHelpText("예: 에이스정리수납");

  form.addTextItem()
    .setTitle("대표자 이름")
    .setRequired(true);

  form.addTextItem()
    .setTitle("연락처 (전화번호)")
    .setRequired(true)
    .setHelpText("예: 010-1234-5678");

  form.addTextItem()
    .setTitle("이메일")
    .setHelpText("홈페이지에 표시할 이메일 (없으면 비워두세요)");

  form.addTextItem()
    .setTitle("사업장 주소")
    .setHelpText("예: 서울시 시흥시 OO동 (없으면 비워두세요)");

  // ========================================
  // 섹션 2: 사업 소개
  // ========================================
  form.addSectionHeaderItem()
    .setTitle("2. 사업 소개")
    .setHelpText("고객에게 어떤 서비스를 제공하시나요?");

  form.addTextItem()
    .setTitle("한 줄 소개")
    .setRequired(true)
    .setHelpText("사업을 한 문장으로 표현해주세요. 예: '공간을 바꾸는 정리수납 전문가'");

  form.addParagraphTextItem()
    .setTitle("사업 소개 (상세)")
    .setHelpText("사업에 대해 자유롭게 적어주세요. 경력, 자격증, 특징 등");

  form.addParagraphTextItem()
    .setTitle("제공하는 서비스 목록")
    .setRequired(true)
    .setHelpText("서비스를 줄바꿈으로 구분해서 적어주세요.\n예:\n주방 정리\n옷장 정리\n사무실 정리\n이사 정리");

  // ========================================
  // 섹션 3: 사진 자료
  // ========================================
  form.addSectionHeaderItem()
    .setTitle("3. 사진 자료")
    .setHelpText("홈페이지에 사용할 사진을 올려주세요. 고화질일수록 좋습니다!");

  form.addFileUploadItem()
    .setTitle("대표 프로필 사진")
    .setRequired(true)
    .setHelpText("본인 사진 또는 로고 (1~2장)")
    .setMaxFiles(3);

  form.addFileUploadItem()
    .setTitle("서비스/작업 사진")
    .setRequired(true)
    .setHelpText("작업 결과물, 비포/애프터, 상품 사진 등 (최대 20장)")
    .setMaxFiles(20);

  form.addFileUploadItem()
    .setTitle("로고 이미지")
    .setHelpText("로고가 있으면 올려주세요 (없으면 텍스트로 대체합니다)")
    .setMaxFiles(2);

  form.addFileUploadItem()
    .setTitle("기타 참고 자료")
    .setHelpText("명함, 브로슈어, 자격증 사진 등 참고할 자료가 있으면 올려주세요")
    .setMaxFiles(10);

  // ========================================
  // 섹션 4: 고객 후기
  // ========================================
  form.addSectionHeaderItem()
    .setTitle("4. 고객 후기")
    .setHelpText("실제 고객 후기가 있으면 홈페이지 신뢰도가 높아집니다");

  form.addParagraphTextItem()
    .setTitle("고객 후기 (텍스트)")
    .setHelpText("후기를 줄바꿈으로 구분해서 적어주세요.\n예:\n김OO - 정말 깔끔하게 정리해주셨어요!\n이OO - 사무실이 완전히 달라졌습니다");

  form.addFileUploadItem()
    .setTitle("고객 후기 캡처 이미지")
    .setHelpText("카카오톡 후기, 블로그 후기 캡처 등 (최대 10장)")
    .setMaxFiles(10);

  // ========================================
  // 섹션 5: SNS 및 문의 채널
  // ========================================
  form.addSectionHeaderItem()
    .setTitle("5. SNS 및 문의 채널")
    .setHelpText("홈페이지에 연결할 SNS와 고객 문의 방법을 알려주세요");

  form.addTextItem()
    .setTitle("카카오톡 채널 URL")
    .setHelpText("예: https://pf.kakao.com/_xxxxx (없으면 비워두세요)");

  form.addTextItem()
    .setTitle("인스타그램 URL")
    .setHelpText("예: https://instagram.com/계정명");

  form.addTextItem()
    .setTitle("네이버 블로그 URL")
    .setHelpText("예: https://blog.naver.com/계정명");

  form.addTextItem()
    .setTitle("기타 SNS URL")
    .setHelpText("페이스북, 유튜브 등");

  form.addMultipleChoiceItem()
    .setTitle("고객 문의를 어떤 방식으로 받고 싶으세요?")
    .setRequired(true)
    .setChoiceValues([
      "카카오톡 채널 채팅",
      "전화 문의",
      "이메일 문의",
      "문의 폼 (이름, 연락처 입력)",
    ])
    .showOtherOption(true);

  // ========================================
  // 섹션 6: 디자인 선호
  // ========================================
  form.addSectionHeaderItem()
    .setTitle("6. 디자인 선호도")
    .setHelpText("원하시는 홈페이지 분위기를 알려주세요");

  form.addMultipleChoiceItem()
    .setTitle("원하는 홈페이지 타입")
    .setRequired(true)
    .setChoiceValues([
      "랜딩페이지 (1페이지 소개 사이트)",
      "회원가입 있는 사이트 (게시판, 예약 등)",
    ]);

  form.addCheckboxItem()
    .setTitle("원하는 색상 분위기 (복수 선택 가능)")
    .setChoiceValues([
      "깔끔한 화이트/그레이",
      "따뜻한 베이지/브라운",
      "신뢰감 있는 네이비/블루",
      "활기찬 그린/민트",
      "고급스러운 블랙/골드",
      "귀여운 파스텔톤",
      "잘 모르겠어요 (알아서 해주세요)",
    ]);

  form.addParagraphTextItem()
    .setTitle("참고할 사이트가 있나요?")
    .setHelpText("마음에 드는 홈페이지 URL이 있으면 적어주세요");

  form.addParagraphTextItem()
    .setTitle("기타 요청사항")
    .setHelpText("추가로 원하시는 기능이나 요청사항을 자유롭게 적어주세요");

  // 확인 메시지
  form.setConfirmationMessage(
    "자료가 정상적으로 접수되었습니다!\n\n" +
    "보내주신 자료를 검토한 후 1일 이내에 연락드리겠습니다.\n" +
    "3~4일 내에 홈페이지 초안을 보여드릴 예정입니다.\n\n" +
    "감사합니다 :)"
  );

  // 로그 출력
  Logger.log("=== 폼 생성 완료 ===");
  Logger.log("폼 편집 URL: " + form.getEditUrl());
  Logger.log("폼 응답 URL: " + form.getPublishedUrl());
  Logger.log("폼 ID: " + form.getId());

  return form;
}
