import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Img from "@/components/Img";
import LightboxGroup, { LbButton } from "@/components/Lightbox";
import { ZoomIcon } from "@/components/Icons";
import { AWARDS, CERTIFICATES } from "@/lib/content/quality";

export const metadata: Metadata = {
  title: "인증·수상",
  description:
    "KS 제품인증(평와셔 KS B 1326), 현대자동차·기아 SQ 인증, ISO 9001, ISO 45001 등 인증 현황과 대외 수상.",
  alternates: { canonical: "/quality/certifications/" },
};

const certItems = CERTIFICATES.map((c) => ({ src: c.image, alt: c.title, caption: `${c.scope} · ${c.issuer}` }));
const awardItems = AWARDS.map((a) => ({ src: a.image, alt: a.title, caption: `${a.date} · ${a.org}` }));

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        section="quality"
        current="/quality/certifications/"
        title="인증·수상"
        lead="이미지를 누르면 인증서 원본을 크게 볼 수 있습니다."
      />
      <div className="container page-body">
        <section className="block">
          <h3 className="block-title">인증 현황</h3>
          <LightboxGroup items={certItems}>
            <ul className="cert-grid">
              {CERTIFICATES.map((c, i) => (
                <li key={c.slug}>
                  <LbButton index={i} label={c.title}>
                    <span className="cert-thumb">
                      <Img src={c.image} alt={`${c.title} 인증서`} />
                      <span className="zoom-hint">
                        <ZoomIcon width={18} height={18} />
                      </span>
                    </span>
                  </LbButton>
                  <div className="cert-info">
                    <h4 className="cert-title">{c.title}</h4>
                    <p className="cert-scope">{c.scope}</p>
                    <dl className="cert-meta">
                      <dt>발급</dt>
                      <dd>{c.issuer}</dd>
                      <dt>번호</dt>
                      <dd>{c.number}</dd>
                      <dt>기준</dt>
                      <dd>{c.since}</dd>
                    </dl>
                  </div>
                </li>
              ))}
            </ul>
          </LightboxGroup>
        </section>

        <section className="block">
          <h3 className="block-title">대외 수상</h3>
          <LightboxGroup items={awardItems}>
            <ul className="award-grid">
              {AWARDS.map((a, i) => (
                <li key={a.image}>
                  <LbButton index={i} label={a.title}>
                    <span className="award-thumb">
                      <Img src={a.image} alt={`${a.title} 표창장`} />
                      <span className="zoom-hint">
                        <ZoomIcon width={18} height={18} />
                      </span>
                    </span>
                  </LbButton>
                  <p className="award-date tnum">{a.date}</p>
                  <h4 className="award-title">{a.title}</h4>
                  <p className="award-org">{a.org}</p>
                </li>
              ))}
            </ul>
          </LightboxGroup>
        </section>
      </div>
    </>
  );
}
