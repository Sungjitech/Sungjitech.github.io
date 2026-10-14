import type { Metadata } from "next";
import Link from "next/link";
import { REDIRECTS } from "@/lib/redirects";

// 정적 호스팅이라 서버 리다이렉트를 쓸 수 없어, 옛 주소마다 즉시 이동하는 페이지를 만든다.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(REDIRECTS).map((path) => ({ legacy: path.split("/") }));
}

type Props = { params: Promise<{ legacy: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { legacy } = await params;
  const to = REDIRECTS[legacy.join("/")];
  return {
    title: "페이지 이동",
    alternates: { canonical: to },
    robots: { index: false, follow: true },
  };
}

export default async function LegacyRedirect({ params }: Props) {
  const { legacy } = await params;
  const to = REDIRECTS[legacy.join("/")];
  return (
    <div className="notfound">
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(to)})` }} />
      <div className="container">
        <p className="notfound-code">MOVED</p>
        <h1 className="notfound-title">페이지 주소가 바뀌었습니다.</h1>
        <p>잠시 후 새 페이지로 이동합니다.</p>
        <Link href={to} className="btn btn-primary">
          새 페이지로 이동
        </Link>
      </div>
    </div>
  );
}
