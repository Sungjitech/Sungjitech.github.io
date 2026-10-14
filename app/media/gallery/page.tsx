import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Img from "@/components/Img";
import LightboxGroup, { LbButton } from "@/components/Lightbox";
import { ZoomIcon } from "@/components/Icons";
import { BENCHMARKING, GALLERY } from "@/lib/content/media";

export const metadata: Metadata = {
  title: "회사 둘러보기",
  description: "(주)성지테크 사업장, 생산 현장, 시험·연구 공간, 복리후생 시설과 벤치마킹 견학.",
  alternates: { canonical: "/media/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        section="media"
        current="/media/gallery/"
        title="회사 둘러보기"
        lead="경기도 남양주시 진접읍 본사·공장의 모습입니다."
      />
      <div className="container page-body">
        {GALLERY.map((group) => {
          const items = group.photos.map((p) => ({ src: p.src, alt: p.title, caption: p.caption }));
          return (
            <section key={group.key} className="gallery-group">
              <h3 className="block-title">{group.title}</h3>
              <LightboxGroup items={items}>
                <ul className={group.photos.length % 4 === 0 ? "gallery-grid is-4" : "gallery-grid"}>
                  {group.photos.map((p, i) => (
                    <li key={p.src} className="gallery-item">
                      <LbButton index={i} label={p.title}>
                        <span className="gallery-item-media">
                          <Img src={p.src} alt={p.title} />
                          <span className="zoom-hint">
                            <ZoomIcon width={18} height={18} />
                          </span>
                        </span>
                        <span className="photo-caption">
                          {p.title}
                          {p.caption && <small>{p.caption}</small>}
                        </span>
                      </LbButton>
                    </li>
                  ))}
                </ul>
              </LightboxGroup>
            </section>
          );
        })}

        <section className="gallery-group">
          <h3 className="block-title">벤치마킹 견학</h3>
          <LightboxGroup items={BENCHMARKING.photos.map((p) => ({ src: p.src, alt: p.title }))}>
            <div className="benchmark">
              <LbButton index={0} label={BENCHMARKING.photos[0].title}>
                <span className="gallery-item-media benchmark-main">
                  <Img src={BENCHMARKING.photos[0].src} alt={BENCHMARKING.photos[0].title} />
                  <span className="zoom-hint">
                    <ZoomIcon width={18} height={18} />
                  </span>
                </span>
              </LbButton>
              <div>
                <p className="benchmark-host">{BENCHMARKING.host}</p>
                <h4 className="benchmark-title">{BENCHMARKING.title}</h4>
                <p className="benchmark-text">{BENCHMARKING.text}</p>
                <ul className="benchmark-sub">
                  {BENCHMARKING.photos.slice(1).map((p, i) => (
                    <li key={p.src}>
                      <LbButton index={i + 1} label={p.title}>
                        <span className="gallery-item-media">
                          <Img src={p.src} alt={p.title} />
                        </span>
                      </LbButton>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </LightboxGroup>
        </section>
      </div>
    </>
  );
}
