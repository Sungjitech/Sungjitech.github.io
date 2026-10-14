export type NavItem = { title: string; href: string };
export type NavSection = {
  key: SectionKey;
  title: string;
  eyebrow: string;
  href: string;
  items: NavItem[];
};
export type SectionKey = "company" | "products" | "production" | "quality" | "media";

export const NAV: NavSection[] = [
  {
    key: "company",
    title: "회사소개",
    eyebrow: "Company",
    href: "/company/greeting/",
    items: [
      { title: "인사말", href: "/company/greeting/" },
      { title: "회사개요", href: "/company/overview/" },
      { title: "경영이념", href: "/company/vision/" },
      { title: "연혁", href: "/company/history/" },
      { title: "조직도", href: "/company/organization/" },
      { title: "오시는 길", href: "/company/location/" },
    ],
  },
  {
    key: "products",
    title: "제품소개",
    eyebrow: "Products",
    href: "/products/",
    items: [
      { title: "와셔류", href: "/products/#washers" },
      { title: "프레스 가공품", href: "/products/#press-parts" },
    ],
  },
  {
    key: "production",
    title: "생산설비",
    eyebrow: "Production",
    href: "/production/process/",
    items: [
      { title: "생산공정", href: "/production/process/" },
      { title: "제조설비", href: "/production/equipment/" },
      { title: "검사설비", href: "/production/inspection/" },
    ],
  },
  {
    key: "quality",
    title: "품질경영",
    eyebrow: "Quality",
    href: "/quality/assurance/",
    items: [
      { title: "품질보증", href: "/quality/assurance/" },
      { title: "인증·수상", href: "/quality/certifications/" },
    ],
  },
  {
    key: "media",
    title: "홍보센터",
    eyebrow: "Media",
    href: "/media/press/",
    items: [
      { title: "언론보도", href: "/media/press/" },
      { title: "회사 둘러보기", href: "/media/gallery/" },
    ],
  },
];

export const sectionOf = (key: SectionKey) => NAV.find((s) => s.key === key)!;
