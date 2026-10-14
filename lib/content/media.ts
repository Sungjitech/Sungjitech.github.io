// 출처: 회사소개서 '인터뷰 기사', '우리회사 이모저모', '복리후생 시설', '사내 활동 현황'

export type PressItem = { outlet: string; date?: string; headline: string; kicker?: string; image: string };

export const PRESS: PressItem[] = [
  {
    outlet: "비지니스저널",
    headline: "“제게 가장 중요한 것은 ‘사람’입니다”",
    kicker: "홍성기 대표이사 인터뷰",
    image: "/images/press/business-journal.webp",
  },
  {
    outlet: "동아경제",
    date: "2006.11.22",
    headline: "한국 와셔산업 표준화에 불지피다",
    kicker: "[정밀산업] (주)성지테크 홍성기 사장",
    image: "/images/press/donga.webp",
  },
  {
    outlet: "주간저널",
    headline: "한국 와셔의 표준을 만들어 가는 기업",
    image: "/images/press/weekly-journal.webp",
  },
  {
    outlet: "동북아포럼",
    headline: "R&D투자는 미래위한 경쟁력 강화전략",
    image: "/images/press/ne-asia-forum.webp",
  },
];

export type Photo = { src: string; title: string; caption?: string };
export type PhotoGroup = { key: string; title: string; description?: string; photos: Photo[] };

const g = (name: string) => `/images/gallery/${name}.webp`;
const w = (name: string) => `/images/welfare/${name}.webp`;
const a = (name: string) => `/images/activity/${name}.webp`;

export const GALLERY: PhotoGroup[] = [
  {
    key: "site",
    title: "사업장",
    photos: [
      { src: g("main-gate"), title: "회사 입구", caption: "정문에서 본 전경" },
      { src: g("building-entrance"), title: "건물 입구", caption: "각 작업장으로 이어지는 입구" },
      { src: g("signboard"), title: "회사 입간판", caption: "각종 인증 현판" },
      { src: g("office-entrance"), title: "사무실 입구" },
      { src: g("exhibition-hall"), title: "회사 전시관", caption: "회사 사진 전시 복도" },
      { src: g("coil-storage"), title: "원자재 보관소", caption: "코일 원자재 보관" },
    ],
  },
  {
    key: "floor",
    title: "생산 현장",
    photos: [
      { src: g("press-floor"), title: "프레스 현장", caption: "프레스 생산 라인" },
      { src: g("wave-shop"), title: "WAVE 작업장", caption: "스프링와셔 펀칭 작업장" },
      { src: g("barrel-room"), title: "바렐실", caption: "바렐 연마" },
      { src: g("sorting-room"), title: "선별실", caption: "기계·수작업 선별" },
      { src: g("die-shop"), title: "금형실", caption: "금형 작업대와 가공 설비" },
      { src: g("scrap-conveyor"), title: "스크랩 배출소", caption: "컨베이어식 프레스 스크랩 배출" },
      { src: g("incoming-inspection"), title: "원자재 수입검사소" },
      { src: g("warehouse"), title: "제품 창고", caption: "제품별 적재 위치 전산 관리" },
    ],
  },
  {
    key: "office",
    title: "사무·연구 공간",
    photos: [
      { src: g("test-lab"), title: "시험검사실", caption: "시험·검사 업무" },
      { src: g("rnd-room"), title: "개발연구실", caption: "연구개발 업무" },
      { src: g("office"), title: "사무실" },
      { src: g("meeting-room"), title: "회의실", caption: "회의와 사내 교육" },
    ],
  },
  {
    key: "welfare",
    title: "복리후생 시설",
    photos: [
      { src: w("cafeteria"), title: "사내 식당", caption: "외국인 근로자 취사 식당" },
      { src: w("dormitory"), title: "사내 기숙사", caption: "직원 생활 기숙사 (3룸)" },
      { src: w("fitness"), title: "체력 관리장", caption: "골프·탁구·헬스 운동 공간" },
      { src: w("billiards"), title: "사내 당구장", caption: "직원 여가 공간" },
      { src: w("shower"), title: "샤워실", caption: "샤워·세탁 공간" },
      { src: w("lounge"), title: "직원 휴게실" },
    ],
  },
];

export const BENCHMARKING = {
  title: "생산혁신 우수현장 견학",
  host: "한국생산성본부 교육센터",
  text: "벤치마킹을 요청하는 기업과 개인을 위해 매년 2~4회 이상 현장을 공개하고 있습니다.",
  photos: [
    { src: a("benchmark-group"), title: "벤치마킹 기념 촬영" },
    { src: a("benchmark-briefing"), title: "회사 시스템 소개" },
    { src: a("benchmark-tour-1"), title: "현장 투어" },
    { src: a("benchmark-tour-2"), title: "현장 투어" },
  ] as Photo[],
};
