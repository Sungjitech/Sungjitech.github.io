export type ProcessStep = { title: string; image: string; points: string[] };
export type ProcessLine = { key: string; title: string; short: string; summary: string; steps: ProcessStep[] };

const img = (name: string) => `/images/process/${name}.webp`;

// 출처: 회사소개서 '공정 흐름도' 슬라이드 4장 (단계명·설명 원문 기준, 표기만 다듬음)
export const PROCESS_LINES: ProcessLine[] = [
  {
    key: "press",
    short: "프레스",
    title: "프레스 공정",
    summary: "원자재 입고부터 출하까지 16단계. 평와셔·사각와셔·특수와셔·프레스 가공품을 생산합니다.",
    steps: [
      { title: "원자재 입고", image: img("press-01"), points: ["원자재 입고", "주문 사양(SPEC) 점검"] },
      { title: "원자재 수입검사", image: img("press-02"), points: ["원자재 수입검사", "밀시트(M/SHEET) 확인·관리"] },
      { title: "원자재 보관", image: img("press-03"), points: ["원자재 전산 등록 관리", "선입선출 LOT 관리"] },
      { title: "원자재 투입 대기", image: img("press-04"), points: ["투입 수율 전산 관리", "투입 재고 관리"] },
      { title: "생산계획 수립·확인", image: img("press-05"), points: ["생산 계획 파악, 금형 사전 준비", "원자재 확인 및 작업 준비"] },
      { title: "금형 세팅", image: img("press-06"), points: ["해당 제품 금형 세팅"] },
      { title: "프레스 타발", image: img("press-07"), points: ["제품별 작업도면 게시", "작업조건 설정 후 타발"] },
      { title: "자주검사", image: img("press-08"), points: ["작업자 자주검사", "2시간마다 1회 주기 검사"] },
      { title: "공정 순회검사", image: img("press-09"), points: ["품질부 검사원 순회검사", "검사 샘플 보관 관리"] },
      { title: "바렐 가공", image: img("press-10"), points: ["표면 및 이물 제거", "톱밥 회전 바렐"] },
      { title: "기계 선별(롤러)", image: img("press-11"), points: ["슈트식 롤러 선별", "정밀 선별 세팅으로 품질 확보"] },
      { title: "포장", image: img("press-12"), points: ["고객 요구에 따른 포장", "포장 작업표준 준수"] },
      { title: "제품 창고 보관", image: img("press-13"), points: ["전산 프로그램으로 창고 관리", "적재량·재고량·위치 관리"] },
      { title: "전산 LOT 관리", image: img("press-14"), points: ["제품 재고 관리 소프트웨어", "생산 LOT·출하량·단가 관리"] },
      { title: "출하검사", image: img("press-15"), points: ["출하검사성적서 발행", "고객 협정 항목 검사"] },
      { title: "출하", image: img("press-16"), points: ["출하계획에 따른 출하", "자사 직송 및 화물 배송"] },
    ],
  },
  {
    key: "spring",
    short: "스프링와셔",
    title: "스프링와셔 공정",
    summary: "선재를 각선·코일링·절단해 스프링와셔를 만드는 8단계 라인입니다.",
    steps: [
      { title: "원자재 입고·투입", image: img("spring-01"), points: ["원자재 입고", "생산계획에 따른 투입"] },
      { title: "압연(각선)", image: img("spring-02"), points: ["와셔 외경 각선 작업", "초·중·종물 검사"] },
      { title: "권취(코일링)", image: img("spring-03"), points: ["각선 반제품 코일링", "공정 순회검사"] },
      { title: "절단", image: img("spring-04"), points: ["절단하여 스프링와셔 생성"] },
      { title: "열처리", image: img("spring-05"), points: ["경도 확보를 위한 열처리", "특수 열처리는 외주 처리"] },
      { title: "바렐", image: img("spring-06"), points: ["표면 및 이물 제거", "물 회전 바렐"] },
      { title: "기계 선별(롤러)", image: img("spring-07"), points: ["슈트식 기계 선별", "창고 보관"] },
      { title: "포장·출하", image: img("spring-08"), points: ["출하계획에 따른 출하", "자사 직송 및 화물 배송"] },
    ],
  },
  {
    key: "wave",
    short: "웨이브와셔",
    title: "웨이브 스프링와셔 공정",
    summary: "완성된 스프링와셔를 웨이브 형상으로 펀칭하는 8단계 라인입니다.",
    steps: [
      { title: "스프링와셔 투입", image: img("wave-01"), points: ["가공된 스프링와셔 투입"] },
      { title: "웨이브 펀칭", image: img("wave-02"), points: ["슈트식 웨이브 펀칭"] },
      { title: "열처리(외주)", image: img("wave-03"), points: ["SQ 인증 열처리 업체에 위탁"] },
      { title: "입고·수입검사", image: img("wave-04"), points: ["열처리 성적서 접수·검토"] },
      { title: "바렐 가공", image: img("wave-05"), points: ["표면 및 이물 제거", "톱밥 회전 바렐"] },
      { title: "기계 선별(롤러)", image: img("wave-06"), points: ["슈트식 롤러 선별", "창고 보관"] },
      { title: "제품 창고 보관", image: img("wave-07"), points: ["전산 프로그램으로 창고 관리", "적재량·재고량·위치 관리"] },
      { title: "포장·출하", image: img("wave-08"), points: ["출하계획에 따른 출하", "자사 직송 및 화물 배송"] },
    ],
  },
];

export const PRESS_MACHINES = [
  { spec: "200 ton", count: 1 },
  { spec: "110 ton", count: 3 },
  { spec: "80 ton", count: 6 },
  { spec: "45 ton", count: 1 },
];

export const BARREL_MACHINES = [
  { spec: "700 kg", count: 2 },
  { spec: "500 kg", count: 2 },
];

export type Instrument = { name: string; spec: string; count: number; use: string };

export const TEST_EQUIPMENT: Instrument[] = [
  { name: "비커스 경도기", spec: "Akashi MVK-H100, ×400", count: 1, use: "경도 측정 · 조직 시험" },
  { name: "로크웰 경도기", spec: "Akashi, HRC68 · HRB100 (0.1)", count: 1, use: "경도 측정" },
  { name: "마운팅 프레스", spec: "HAR-M-31", count: 1, use: "시편 제작" },
  { name: "폴리싱기", spec: "HAR-P-200", count: 1, use: "시편 연마" },
  { name: "커팅기", spec: "HAR-C-250", count: 1, use: "시편 절단" },
  { name: "하중 시험기", spec: "—", count: 1, use: "크랙 시험" },
];

export const MEASURING_EQUIPMENT: Instrument[] = [
  { name: "비디오 측정기", spec: "VDM00128G", count: 1, use: "형상 측정" },
  { name: "하이트 게이지", spec: "0–300 mm (0.01)", count: 1, use: "치수 측정" },
  { name: "내·외측 캘리퍼스", spec: "0–150 mm (0.01)", count: 5, use: "치수 측정" },
  { name: "외측 마이크로미터", spec: "0–25 mm (0.01)", count: 1, use: "치수 측정" },
  { name: "포인트 마이크로미터", spec: "0–25 mm (0.01)", count: 1, use: "치수 측정" },
  { name: "디지털 현미경", spec: "AM311S (10×–200×)", count: 1, use: "외관 검사" },
  { name: "회전 속도계", spec: "ASAHI (1,000 rpm)", count: 1, use: "RPM 측정" },
  { name: "롤러 선별기", spec: "2 Roller", count: 2, use: "선별" },
];

// 사진 속 장비가 무엇인지 분명한 것만 이름을 붙인다.
export const INSPECTION_PHOTOS = [
  { src: "/images/inspection/r2.webp", alt: "비커스 경도기" },
  { src: "/images/inspection/r1.webp", alt: "로크웰 경도기" },
  { src: "/images/inspection/m1.webp", alt: "비디오 측정기" },
  { src: "/images/inspection/m2.webp", alt: "하이트 게이지" },
  { src: "/images/inspection/r5.webp", alt: "폴리싱기" },
  { src: "/images/inspection/m3.webp", alt: "외측 마이크로미터" },
];
