export type HistoryItem = { date: string; text: string; org?: string };
export type HistoryYear = { year: string; items: HistoryItem[] };
export type HistoryEra = { title: string; period: string; years: HistoryYear[] };

// 출처: 회사소개서 '회사 연혁' 슬라이드 + 인증서·표창장 원본에 적힌 일자. 최신순.
export const HISTORY: HistoryEra[] = [
  {
    title: "성장기",
    period: "2014 – 현재",
    years: [
      { year: "2026", items: [{ date: "01.22", text: "SQ 인증 갱신 (현대자동차·기아, 주관 (주)진합)" }] },
      { year: "2025", items: [{ date: "11.28", text: "품질경영시스템 ISO 9001 인증 갱신", org: "한국생산성본부인증원" }] },
      {
        year: "2024",
        items: [
          { date: "12.13", text: "안전보건경영시스템 ISO 45001 인증 갱신", org: "한국생산성본부인증원" },
          { date: "06.19", text: "평와셔 KS 인증 정기심사 합격 (KS B 1326)", org: "한국표준협회" },
        ],
      },
      { year: "2021", items: [{ date: "11.03", text: "뿌리기업 확인서 발급", org: "국가뿌리산업진흥센터" }] },
      {
        year: "2018",
        items: [
          { date: "09.30", text: "무재해 4배 달성 인증", org: "한국산업안전보건공단" },
          { date: "03.20", text: "SQ 인증 취득 (현대자동차·기아, 주관 (주)진합)" },
        ],
      },
      { year: "2017", items: [{ date: "06.02", text: "무재해 3배 달성 인증", org: "한국산업안전보건공단" }] },
      {
        year: "2016",
        items: [
          { date: "09.29", text: "국가생산성대상 표창", org: "산업통상자원부" },
          { date: "08.26", text: "뿌리기업 선정", org: "국가뿌리산업진흥센터" },
          { date: "06.27", text: "한국산업안전보건공단 경기북부지사장 표창" },
          { date: "05.31", text: "100대 명품기업 인증", org: "남양주시" },
          { date: "05.04", text: "CLEAN 사업장 재인정", org: "고용노동부" },
        ],
      },
      {
        year: "2014",
        items: [
          { date: "10.24", text: "위험성평가 인정", org: "한국산업안전보건공단" },
          { date: "09.18", text: "국민 베스트 기업 선정", org: "국민은행" },
          { date: "06.09", text: "철의 날 표창", org: "산업통상자원부" },
        ],
      },
    ],
  },
  {
    title: "도약기",
    period: "2000 – 2013",
    years: [
      { year: "2013", items: [{ date: "06.25", text: "안전보건경영시스템 인증", org: "한국생산성본부" }] },
      {
        year: "2012",
        items: [
          { date: "12.03", text: "남양주시 우수중소기업 모범 표창", org: "남양주시" },
          { date: "11.10", text: "신축 공장 이전 (남양주시 진접읍 팔야리, 현 소재지)" },
        ],
      },
      { year: "2011", items: [{ date: "08.24", text: "연구개발전담부서 인정" }] },
      { year: "2006", items: [{ date: "12.28", text: "중소기업특별위원회 표창" }] },
      { year: "2005", items: [{ date: "03.16", text: "경기도지사 표창", org: "경기도" }] },
      { year: "2004", items: [{ date: "02.25", text: "CLEAN 사업장 최초 인정" }] },
      { year: "2001", items: [{ date: "08.01", text: "법인 전환, (주)성지테크로 상호 변경" }] },
      {
        year: "2000",
        items: [
          { date: "12.23", text: "QS 9000 품질시스템 인증" },
          { date: "12.13", text: "경기중소기업대상 수상", org: "경기도" },
          { date: "06.15", text: "경기도 유망중소기업 선정", org: "경기도" },
        ],
      },
    ],
  },
  {
    title: "창업기",
    period: "1992 – 1999",
    years: [
      { year: "1998", items: [{ date: "02.09", text: "평와셔 KS 인증 획득 (KS B 1326)", org: "한국표준협회" }] },
      { year: "1997", items: [{ date: "11.22", text: "ISO 9001 품질시스템 인증", org: "한국생산성본부" }] },
      { year: "1995", items: [{ date: "08.01", text: "공장 이전 (남양주시 진접읍 연평리)" }] },
      { year: "1992", items: [{ date: "04.01", text: "성지금속 설립 (남양주시 도농동)" }] },
    ],
  },
];

// 메인 페이지에 보여 줄 주요 이정표
export const MILESTONES = [
  { year: "1992", text: "성지금속 설립" },
  { year: "1998", text: "평와셔 KS 인증 획득" },
  { year: "2001", text: "법인 전환, (주)성지테크" },
  { year: "2012", text: "진접 신축 공장 이전" },
  { year: "2016", text: "뿌리기업 선정 · 국가생산성대상" },
  { year: "2018", text: "현대자동차·기아 SQ 인증" },
];
