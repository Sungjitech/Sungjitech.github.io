export type Product = {
  slug: string;
  name: string;
  en: string;
  image: string;
  description: string;
  materials: string[];
  note?: string;
};

// 제품명·재질 출처: 회사소개서 '생산제품 현황'. 설명은 각 와셔의 일반적인 기능.
export const WASHERS: Product[] = [
  {
    slug: "plain",
    name: "평와셔",
    en: "Plain Washers",
    image: "/images/products/plain.webp",
    description: "볼트·너트 체결부의 하중을 넓게 분산하고 체결면을 보호하는 기본 와셔입니다.",
    materials: ["Steel", "Spring Steel", "Stainless", "Brass", "Bronze", "Aluminum"],
    note: "KS B 1326 인증",
  },
  {
    slug: "square",
    name: "사각와셔",
    en: "Square Washers",
    image: "/images/products/square.webp",
    description: "사각 형상의 와셔로, 넓은 지지면이나 회전 방지가 필요한 체결부에 쓰입니다.",
    materials: ["Steel", "Stainless", "Brass", "Bronze"],
  },
  {
    slug: "spring",
    name: "스프링와셔",
    en: "Spring Lock Washers",
    image: "/images/products/spring.webp",
    description: "한쪽을 절단한 링 형태로, 탄성 반발력으로 볼트·너트의 풀림을 막습니다.",
    materials: ["SWRH62B~72B", "Stainless", "Brass", "Bronze"],
  },
  {
    slug: "wave",
    name: "웨이브 스프링와셔",
    en: "Wave Spring Lock Washers",
    image: "/images/products/wave.webp",
    description: "원주 방향으로 물결 형상을 준 와셔로, 축 방향 탄성으로 유격을 흡수합니다.",
    materials: ["Spring Steel", "SWRH62B~72B", "Stainless"],
  },
  {
    slug: "special",
    name: "특수와셔",
    en: "Special Washers",
    image: "/images/products/special.webp",
    description: "톱니·돌기·이형 구멍 등 사용처에 맞춘 형상으로 성형하는 와셔입니다.",
    materials: ["Steel", "Spring Steel", "Brass", "Bronze"],
  },
  {
    slug: "conical",
    name: "코니칼와셔",
    en: "Conical Spring Washers",
    image: "/images/products/conical.webp",
    description: "접시 모양으로 성형한 와셔로, 작은 변위로 큰 하중을 받아 체결력을 유지합니다.",
    materials: ["Spring Steel", "SK-5", "S50C"],
  },
  {
    slug: "retaining",
    name: "이링 · 백와셔",
    en: "Retaining Rings / Circlips",
    image: "/images/products/retaining.webp",
    description: "축의 홈에 끼워 베어링·기어 같은 부품이 축 방향으로 빠지지 않도록 고정합니다.",
    materials: ["Spring Steel", "SK-5", "S50C"],
  },
  {
    slug: "toothed",
    name: "톱니와셔",
    en: "Toothed & Untoothed Lock Washers",
    image: "/images/products/toothed.webp",
    description: "톱니가 체결면을 물어 회전과 풀림을 막습니다. 내치·외치·유치·무치 와셔를 생산합니다.",
    materials: ["Steel", "Spring Steel", "Stainless", "Brass", "Bronze"],
  },
];

export const PRESS_PARTS = {
  slug: "press-parts",
  name: "프레스 가공품",
  en: "Products of Press",
  images: ["/images/products/press-1.webp", "/images/products/press-2.webp"],
  description: "와셔 외에도 금형으로 타발·성형하는 각종 프레스 부품을 생산합니다.",
  materials: ["Steel", "Spring Steel", "Stainless", "Brass", "Bronze"],
};
