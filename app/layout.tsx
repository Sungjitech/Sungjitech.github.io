import type { Metadata, Viewport } from "next";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | 와셔·프레스 부품 전문 제조`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE.name,
    title: `${SITE.name} | 와셔·프레스 부품 전문 제조`,
    description: SITE.description,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "(주)성지테크 사옥" }],
  },
  verification: {
    other: { "naver-site-verification": SITE.naverVerification },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0b1f36",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  alternateName: [SITE.name, SITE.brand],
  url: SITE.url,
  logo: `${SITE.url}/images/brand/logo.webp`,
  foundingDate: SITE.founded,
  telephone: "+82-31-571-7104",
  faxNumber: "+82-31-571-6584",
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    postalCode: SITE.zip,
    addressRegion: "경기도",
    addressLocality: "남양주시",
    streetAddress: "진접읍 금강로 1881",
    addressCountry: "KR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main">
          본문 바로가기
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
