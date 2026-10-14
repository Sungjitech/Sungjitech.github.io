// 출처: 회사소개서 '인사 말씀', '경영방침 및 목표', '조직도', 뿌리기업 확인서

// 원문의 표기만 다듬었다 (예: 'ISO41001' → 인증서에 적힌 ISO 45001).
export const GREETING = [
  "(주)성지테크는 1992년 설립 이래 와셔(특수와셔·스프링와셔)와 프레스 부품을 전문으로 제조해 왔으며, 국내 자동차 3사와 전기·전자제품 제조업체에 제품을 납품하고 있습니다.",
  "특히 와셔업계 국내 유일의 KS(한국산업표준) 인증을 보유하고 있으며, 더 넓은 시장에 진출하기 위해 전 사원이 한마음으로 노력하고 있습니다. 그 일환으로 설비 100% 자동화를 이루고, 현대자동차·기아 SQ 인증과 품질경영시스템 ISO 9001, 안전보건경영시스템 ISO 45001 인증을 구축해 실행하고 있습니다. 또한 연구개발전담부서와 인적 자원을 확보해 원가 절감과 기술력 향상으로 고객 만족에 최선을 다하고 있습니다.",
  "(주)성지테크는 최고 품질의 제품을 적정한 가격에, 필요한 때에 공급하여 고객 만족을 실현해 나가겠습니다. 감사합니다.",
];

export const MOTTO = [
  { hanja: "信賴第一", reading: "신뢰제일", meaning: "믿음을 첫째로 삼는다" },
  { hanja: "自力爲主", reading: "자력위주", meaning: "스스로의 힘을 바탕으로 한다" },
  { hanja: "人和團結", reading: "인화단결", meaning: "서로 화합하고 하나로 뭉친다" },
];

export const POLICY = ["고객만족", "품질안정", "주인의식"];

export const QUALITY_GOALS = {
  year: "2025",
  items: [
    { label: "고객 불량", value: "20%", note: "감소" },
    { label: "품질 비용", value: "20%", note: "감소" },
    { label: "공정 불량", value: "100ppm", note: "감소" },
  ],
};

// roles를 비워 두면 부서 이름만 보인다.
export type OrgUnit = { name: string; roles: string[] };

export const ORG = {
  ceo: "대표이사",
  direct: { name: "품질부", roles: ["품질인증", "품질관리", "품질기획"] } as OrgUnit,
  executive: "상무이사",
  units: [
    { name: "영업부", roles: ["영업", "출하"] },
    { name: "생산부", roles: ["생산 1과 (프레스)", "생산 2과 (웨이브)"] },
    { name: "금형부", roles: ["금형관리"] },
    { name: "관리부", roles: ["회계", "품질"] },
    { name: "연구전담부", roles: [] },
  ] as OrgUnit[],
};

// 연혁 슬라이드의 '주요사업분야'
export const INDUSTRIES = ["자동차 부품", "전기·전자 부품", "건축자재"];
