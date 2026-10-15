export type Certificate = {
  slug: string;
  title: string;
  scope: string;
  issuer: string;
  number: string;
  since: string;
  image: string;
};

// 출처: 인증서 원본 (번호·범위·일자는 인증서에 적힌 그대로)
export const CERTIFICATES: Certificate[] = [
  {
    slug: "ks",
    title: "KS 제품인증",
    scope: "평와셔 · KS B 1326",
    issuer: "한국표준협회",
    number: "제98-03-026호",
    since: "1998년 최초 인증",
    image: "/images/certs/ks.webp",
  },
  {
    slug: "sq",
    title: "SQ 인증",
    scope: "현대자동차·기아 협력사 품질인증 · 하드웨어(프레스/포밍)",
    issuer: "주관 (주)진합 · 후원 현대자동차·기아",
    number: "HWP30",
    since: "2018년 최초 취득",
    image: "/images/certs/sq.webp",
  },
  {
    slug: "iso9001",
    title: "ISO 9001",
    scope: "품질경영시스템 · 금속파스너(너트, 금속와셔류)의 생산",
    issuer: "한국생산성본부인증원",
    number: "KQC-3227",
    since: "KS Q ISO 9001:2015",
    image: "/images/certs/iso9001.webp",
  },
  {
    slug: "iso45001",
    title: "ISO 45001",
    scope: "안전보건경영시스템 · 금속파스너(너트, 금속와셔류)의 생산",
    issuer: "한국생산성본부인증원",
    number: "KOHS-0099",
    since: "KS Q ISO 45001:2018",
    image: "/images/certs/iso45001.webp",
  },
  {
    slug: "zero-accident",
    title: "무재해 4배 달성",
    scope: "무재해 1,661일 (2012.11.29 – 2018.06.14)",
    issuer: "한국산업안전보건공단",
    number: "제2018001198호",
    since: "2018년 인증",
    image: "/images/certs/zero-accident.webp",
  },
];

// 출처: 회사소개서 '대외 수상 현황'
export const AWARDS = [
  { date: "2016.09.29", title: "국가생산성대상", org: "산업통상자원부장관", image: "/images/awards/productivity-2016.webp" },
  { date: "2016.06.27", title: "표창", org: "한국산업안전보건공단 경기북부지사장", image: "/images/awards/kosha-2016.webp" },
  { date: "2014.06.09", title: "철의 날 표창", org: "산업통상자원부장관", image: "/images/awards/steel-day-2014.webp" },
  { date: "2006.12.28", title: "표창", org: "중소기업특별위원회", image: "/images/awards/sme-2006.webp" },
  { date: "2005.03.16", title: "표창", org: "경기도지사", image: "/images/awards/gyeonggi-2005.webp" },
  { date: "2000.12.13", title: "경기중소기업대상", org: "경기도지사", image: "/images/awards/gyeonggi-sme-2000.webp" },
];

export type Activity = { title: string; cycle: string; text: string; image: string };

// 출처: 회사소개서 '품질활동 현황' 2장, '기타 품질활동', '사내 활동 현황'
export const MEETINGS: Activity[] = [
  {
    title: "월간 KPI 회의",
    cycle: "매월",
    text: "대표이사 주관으로 부서별 핵심목표 실적을 발표합니다.",
    image: "/images/quality/kpi.webp",
  },
  {
    title: "주간 품질 대책회의",
    cycle: "매주 1회",
    text: "공정불량 WORST 항목을 선정하고 개선 대책을 협의합니다.",
    image: "/images/quality/worst.webp",
  },
  {
    title: "주간 업무회의",
    cycle: "매주 수요일",
    text: "업무 시작 전 부서별 주간 업무 진행 상황을 공유합니다.",
    image: "/images/quality/weekly.webp",
  },
  {
    title: "고객불만 개선대책 회의",
    cycle: "발생 즉시",
    text: "고객불만이 발생하면 전 직원을 긴급 소집해 원인을 파악하고 개선 대책을 세웁니다.",
    image: "/images/quality/complaint.webp",
  },
  {
    title: "HMC 부품 품질통신 교육",
    cycle: "접수 시",
    text: "고객사로부터 접수된 부품 품질 통신문을 근거로 전 직원 전달교육을 실시합니다.",
    image: "/images/quality/hmc.webp",
  },
  {
    title: "사내 정기교육",
    cycle: "정기 · 수시",
    text: "사내 교육계획에 따라 정기 또는 임시 교육을 실시합니다.",
    image: "/images/quality/training.webp",
  },
];

export const SHOPFLOOR: Activity[] = [
  {
    title: "설비 Fool-Proof",
    cycle: "프레스 라인",
    text: "프레스 설비에 오작업 방지(Fool-Proof) 장치를 적용하고 공정별로 표시·관리합니다.",
    image: "/images/quality/foolproof.webp",
  },
  {
    title: "3정 5S 활동",
    cycle: "상시",
    text: "3정 5S 실적을 현황판으로 관리하고, 정기 평가 후 우수자를 포상합니다.",
    image: "/images/quality/5s.webp",
  },
  {
    title: "공정 개선 활동",
    cycle: "상시",
    text: "공정 개선 사례를 현황판에 게시해 전 직원이 공유합니다.",
    image: "/images/quality/kaizen.webp",
  },
  {
    title: "금형 예비품 주소화",
    cycle: "상시",
    text: "금형 예비품을 위치별로 주소화해 관리합니다.",
    image: "/images/quality/die-spares.webp",
  },
  {
    title: "설비 예비부품 관리",
    cycle: "상시",
    text: "설비 예비부품과 원자재 보관 현황을 현장에 게시해 관리합니다.",
    image: "/images/quality/spare-parts.webp",
  },
  {
    title: "품질통신문 게시",
    cycle: "상시",
    text: "고객사 부품 품질통신문을 현장에 게시해 작업자와 공유합니다.",
    image: "/images/quality/notice-board.webp",
  },
];
