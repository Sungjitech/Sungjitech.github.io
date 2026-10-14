import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Img from "@/components/Img";
import LightboxGroup, { LbButton } from "@/components/Lightbox";
import { ZoomIcon } from "@/components/Icons";
import { PRESS } from "@/lib/content/media";

export const metadata: Metadata = {
  title: "언론보도",
  description: "동아경제, 주간저널, 동북아포럼, 비지니스저널에 소개된 (주)성지테크.",
  alternates: { canonical: "/media/press/" },
};

const items = PRESS.map((p) => ({ src: p.image, alt: `${p.outlet} — ${p.headline}`, caption: p.date }));

export default function PressPage() {
  return (
    <>
      <PageHeader section="media" current="/media/press/" title="언론보도" />
      <div className="container page-body">
        <LightboxGroup items={items}>
          <ul className="press-list">
            {PRESS.map((p, i) => (
              <li key={p.image} className="press-item">
                <LbButton index={i} label={`${p.outlet} 기사`}>
                  <span className="press-thumb">
                    <Img src={p.image} alt={`${p.outlet} 기사 지면`} />
                    <span className="zoom-hint">
                      <ZoomIcon width={18} height={18} />
                    </span>
                  </span>
                </LbButton>
                <div>
                  <p className="press-outlet">
                    {p.outlet}
                    {p.date && <time dateTime={p.date.replaceAll(".", "-")}>{p.date}</time>}
                  </p>
                  <h3 className="press-headline">{p.headline}</h3>
                  {p.kicker && <p className="press-kicker">{p.kicker}</p>}
                </div>
              </li>
            ))}
          </ul>
        </LightboxGroup>
      </div>
    </>
  );
}
