"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import Logo from "./Logo";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";
import { NAV } from "@/lib/navigation";
import { SITE, telHref } from "@/lib/site";

// 드롭다운 높이는 항목이 가장 많은 메뉴에 맞춘다(globals.css의 --gnb-rows).
const DROP_ROWS = Math.max(...NAV.map((section) => section.items.length));

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 페이지를 옮기면 모바일 메뉴를 닫는다.
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const solid = !isHome || scrolled;

  return (
    <header className={`site-header${solid ? " is-solid" : ""}`}>
      <div className="container header-inner">
        <Logo />

        <nav className="gnb" aria-label="주 메뉴" style={{ "--gnb-rows": DROP_ROWS } as CSSProperties}>
          <ul className="gnb-list">
            {NAV.map((section) => {
              const active = pathname.startsWith(`/${section.key}/`);
              return (
                <li key={section.key} className="gnb-item">
                  <Link href={section.href} className={`gnb-link${active ? " is-active" : ""}`}>
                    {section.title}
                  </Link>
                  <ul className="gnb-sub">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
          <div className="gnb-panel" aria-hidden="true" />
        </nav>

        <a className="header-tel" href={telHref(SITE.tel)}>
          <PhoneIcon width={16} height={16} />
          <span>{SITE.telDisplay}</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <CloseIcon width={24} height={24} /> : <MenuIcon width={24} height={24} />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? " is-open" : ""}`} hidden={!menuOpen}>
        <nav aria-label="모바일 메뉴">
          {NAV.map((section) => (
            <div key={section.key} className="mobile-section">
              <p className="mobile-section-title">
                <span>{section.title}</span>
                <span className="mobile-section-en">{section.eyebrow}</span>
              </p>
              <ul>
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="mobile-contact">
          <a href={telHref(SITE.tel)}>
            <PhoneIcon width={18} height={18} /> {SITE.telDisplay}
          </a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>
      </div>
    </header>
  );
}
