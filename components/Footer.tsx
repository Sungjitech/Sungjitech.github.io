import Link from "next/link";
import { NAV } from "@/lib/navigation";
import { SITE, telHref } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link href="/" className="footer-logo" aria-label="(주)성지테크 홈">
            <img src="/images/brand/emblem.webp" alt="" width={36} height={36} />
            <span>
              <strong>(주)성지테크</strong>
              <small>SUNG JI TECH</small>
            </span>
          </Link>
          <nav className="footer-nav" aria-label="하단 메뉴">
            {NAV.map((s) => (
              <Link key={s.key} href={s.href}>
                {s.title}
              </Link>
            ))}
            <Link href="/email-policy/">이메일무단수집거부</Link>
          </nav>
        </div>

        <address className="footer-info">
          <p>
            <span>주식회사 성지테크</span>
            <span>대표이사 {SITE.ceo}</span>
            <span>사업자등록번호 {SITE.bizNo}</span>
          </p>
          <p>
            <span>
              ({SITE.zip}) {SITE.address}
            </span>
          </p>
          <p>
            <span>
              TEL <a href={telHref(SITE.tel)}>{SITE.telDisplay}</a>
            </span>
            <span>FAX {SITE.fax}</span>
            <span>
              E-mail <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </span>
          </p>
        </address>

        <p className="footer-copy">© {year} SUNG JI TECH. All rights reserved.</p>
      </div>
    </footer>
  );
}
