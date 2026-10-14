import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Img from "@/components/Img";
import { INDUSTRIES } from "@/lib/content/company";
import { SITE, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "회사개요",
  description: "(주)성지테크 회사개요 — 설립 1992년, 경기도 남양주시 진접읍 소재 와셔·프레스 부품 제조기업.",
  alternates: { canonical: "/company/overview/" },
};

const INDUSTRY_NOTES: Record<string, string> = {
  "자동차 부품": "국내 자동차 3사 납품, 현대자동차·기아 SQ 인증(2018)",
  "전기·전자 부품": "전기·전자제품 제조업체 납품",
  건축자재: "건축자재용 와셔 및 프레스 부품",
};

export default function OverviewPage() {
  const rows: [string, React.ReactNode][] = [
    ["회사명", `${SITE.legalName} (${SITE.brand})`],
    ["대표이사", SITE.ceo],
    ["설립일", "1992년 4월 1일 (성지금속)"],
    ["법인 전환", "2001년 8월 1일, (주)성지테크로 상호 변경"],
    ["사업자등록번호", SITE.bizNo],
    ["업종", "소성가공 — 금속 파스너(와셔류) 및 프레스 부품 제조"],
    [
      "주요 제품",
      <>
        평와셔(KS B 1326), 사각와셔, 스프링와셔, 웨이브 스프링와셔, 특수와셔, 코니칼와셔, 이링·백와셔, 톱니와셔,
        프레스 가공품 —{" "}
        <Link href="/products/" className="text-link">
          제품소개
        </Link>
      </>,
    ],
    ["주요 설비", "프레스 11대(45~200톤), 바렐 4대, 시험·측정 장비 19대"],
    [
      "본사·공장",
      <>
        ({SITE.zip}) {SITE.address}
        <br />
        <span className="muted">지번: {SITE.lotAddress}</span>
      </>,
    ],
    [
      "연락처",
      <>
        TEL <a href={telHref(SITE.tel)}>{SITE.telDisplay}</a> · FAX {SITE.fax} · E-mail{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </>,
    ],
  ];

  return (
    <>
      <PageHeader
        section="company"
        current="/company/overview/"
        title="회사개요"
        lead="1992년 성지금속으로 시작해 2001년 법인으로 전환했습니다. 2012년부터 남양주시 진접읍 신축 공장에서 와셔와 프레스 부품을 생산하고 있습니다."
      />
      <div className="container page-body">
        <figure className="overview-media block">
          <Img src="/images/company/building.webp" alt="(주)성지테크 사옥과 정문" />
        </figure>

        <section className="block">
          <h3 className="block-title">기업 정보</h3>
          <dl className="info-table">
            {rows.map(([label, value]) => (
              <div key={label} className="info-row">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="block">
          <h3 className="block-title">주요 사업 분야</h3>
          <ul className="industry-list">
            {INDUSTRIES.map((name, i) => (
              <li key={name} className="industry">
                <p className="industry-num">0{i + 1}</p>
                <h4 className="industry-name">{name}</h4>
                <p className="industry-text">{INDUSTRY_NOTES[name]}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
