import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Img from "@/components/Img";
import { MailIcon, PhoneIcon } from "@/components/Icons";
import { PRESS_PARTS, WASHERS } from "@/lib/content/products";
import { SITE, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "제품소개",
  description:
    "평와셔(KS B 1326), 사각와셔, 스프링와셔, 웨이브 스프링와셔, 특수와셔, 코니칼와셔, 이링·백와셔, 톱니와셔와 프레스 가공품.",
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        section="products"
        current="/products/"
        title="생산 제품"
        lead="와셔 8종과 각종 프레스 가공품을 생산합니다. 표기된 재질 외에도 사양에 따라 협의할 수 있습니다."
      />
      <div className="container page-body">
        <section id="washers" className="block">
          <h3 className="block-title">
            와셔류 <small>Washers</small>
          </h3>
          <ul className="catalog">
            {WASHERS.map((p) => (
              <li key={p.slug} id={p.slug} className="catalog-item">
                <div className="catalog-media">
                  <Img src={p.image} alt={`${p.name} 제품 사진`} />
                </div>
                <div className="catalog-body">
                  <p className="catalog-en">{p.en}</p>
                  <h4 className="catalog-name">
                    {p.name}
                    {p.note && <span className="catalog-note">{p.note}</span>}
                  </h4>
                  <p className="catalog-desc">{p.description}</p>
                  <dl className="catalog-materials">
                    <dt>재질</dt>
                    <dd className="tag-list">
                      {p.materials.map((m) => (
                        <span key={m} className="tag">
                          {m}
                        </span>
                      ))}
                    </dd>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id={PRESS_PARTS.slug} className="block press-parts">
          <div className="press-parts-media">
            {PRESS_PARTS.images.map((src, i) => (
              <Img key={src} src={src} alt={`프레스 가공품 사진 ${i + 1}`} />
            ))}
          </div>
          <div>
            <p className="catalog-en">{PRESS_PARTS.en}</p>
            <h3 className="catalog-name">{PRESS_PARTS.name}</h3>
            <p className="catalog-desc">{PRESS_PARTS.description}</p>
            <dl className="catalog-materials">
              <dt>재질</dt>
              <dd className="tag-list">
                {PRESS_PARTS.materials.map((m) => (
                  <span key={m} className="tag">
                    {m}
                  </span>
                ))}
              </dd>
            </dl>
          </div>
        </section>

        <section className="block inquiry">
          <div>
            <h3 className="inquiry-title">제품 및 견적 문의</h3>
            <p className="inquiry-text">도면이나 사양을 보내 주시면 검토 후 연락드리겠습니다.</p>
          </div>
          <div className="inquiry-actions">
            <a className="btn btn-primary" href={telHref(SITE.tel)}>
              <PhoneIcon width={18} height={18} /> {SITE.telDisplay}
            </a>
            <a className="btn btn-ghost" href={`mailto:${SITE.email}`}>
              <MailIcon width={18} height={18} /> {SITE.email}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
