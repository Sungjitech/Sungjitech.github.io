import Link from "next/link";
import { HomeIcon } from "./Icons";
import { sectionOf, type SectionKey } from "@/lib/navigation";

type Props = {
  section: SectionKey;
  current: string;
  title: string;
  lead?: string;
};

// 서브 페이지 상단: 섹션 비주얼 + 경로 + 섹션 내 탭 메뉴 + 페이지 제목
export default function PageHeader({ section, current, title, lead }: Props) {
  const s = sectionOf(section);
  const currentItem = s.items.find((i) => i.href === current);

  return (
    <>
      <div className="sub-visual">
        <div className="container">
          <p className="sub-visual-en" aria-hidden="true">
            {s.eyebrow}
          </p>
          <h1 className="sub-visual-title">{s.title}</h1>
          <nav aria-label="현재 위치" className="breadcrumb">
            <ol>
              <li>
                <Link href="/" aria-label="홈">
                  <HomeIcon width={15} height={15} />
                </Link>
              </li>
              <li>
                <Link href={s.href}>{s.title}</Link>
              </li>
              {currentItem && (
                <li aria-current="page">{currentItem.title}</li>
              )}
            </ol>
          </nav>
        </div>
      </div>

      {/* 같은 페이지 안의 앵커만 있는 섹션(제품소개)은 탭 줄이 필요 없다. */}
      {s.items.length > 1 && !s.items.every((i) => i.href.includes("#")) && (
        <nav className="lnb" aria-label={`${s.title} 메뉴`}>
          <div className="container">
            <ul>
              {s.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={item.href === current ? "is-active" : undefined}
                    aria-current={item.href === current ? "page" : undefined}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      <div className="container page-head">
        <h2 className="page-title">{title}</h2>
        {lead && <p className="page-lead">{lead}</p>}
      </div>
    </>
  );
}
