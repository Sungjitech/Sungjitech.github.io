import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Img from "@/components/Img";
import LightboxGroup, { LbButton } from "@/components/Lightbox";
import { ZoomIcon } from "@/components/Icons";
import { BARREL_CAPACITIES, PRESS_CAPACITIES } from "@/lib/content/production";

export const metadata: Metadata = {
  title: "제조설비",
  description: "200·110·80·45톤 프레스와 700·500kg 바렐 등 (주)성지테크의 주요 제조설비.",
  alternates: { canonical: "/production/equipment/" },
};

const PHOTOS = [
  { src: "/images/equipment/press-line.webp", alt: "프레스 라인", caption: "설비별 Fool-Proof 공정 표시" },
  { src: "/images/equipment/press-1.webp", alt: "프레스" },
  { src: "/images/equipment/press-2.webp", alt: "프레스" },
  { src: "/images/equipment/press-3.webp", alt: "프레스" },
  { src: "/images/equipment/barrel.webp", alt: "바렐 연마기" },
];

export default function EquipmentPage() {
  return (
    <>
      <PageHeader
        section="production"
        current="/production/equipment/"
        title="제조설비"
        lead="45톤부터 200톤까지 용량별 프레스로 타발·성형하고, 바렐 가공으로 표면과 이물을 정리합니다."
      />
      <div className="container page-body">
        <dl className="stat-row">
          <div className="stat">
            <dt className="stat-label">프레스 용량</dt>
            <dd className="stat-value tnum">
              45~200
              <small>톤</small>
            </dd>
          </div>
          <div className="stat">
            <dt className="stat-label">바렐 용량</dt>
            <dd className="stat-value tnum">
              500~700
              <small>kg</small>
            </dd>
          </div>
          <div className="stat">
            <dt className="stat-label">설비 자동화</dt>
            <dd className="stat-value tnum">
              100
              <small>%</small>
            </dd>
          </div>
        </dl>

        <div className="equipment-layout">
          <section>
            <h3 className="block-title">주요 제조설비 목록</h3>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th scope="col">설비명</th>
                    <th scope="col">용량</th>
                  </tr>
                </thead>
                <tbody>
                  {PRESS_CAPACITIES.map((spec, i) => (
                    <tr key={spec}>
                      {i === 0 && (
                        <th scope="rowgroup" rowSpan={PRESS_CAPACITIES.length}>
                          프레스
                        </th>
                      )}
                      <td>{spec}</td>
                    </tr>
                  ))}
                  {BARREL_CAPACITIES.map((spec, i) => (
                    <tr key={spec}>
                      {i === 0 && (
                        <th scope="rowgroup" rowSpan={BARREL_CAPACITIES.length}>
                          바렐
                        </th>
                      )}
                      <td>{spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="block-title">설비 사진</h3>
            <LightboxGroup items={PHOTOS}>
              <ul className="photo-grid">
                {PHOTOS.map((p, i) => (
                  <li key={p.src} className={i === 0 ? "photo is-wide" : "photo"}>
                    <LbButton index={i} label={p.alt}>
                      <span className="gallery-item-media">
                        <Img src={p.src} alt={p.alt} />
                        <span className="zoom-hint">
                          <ZoomIcon width={18} height={18} />
                        </span>
                      </span>
                    </LbButton>
                  </li>
                ))}
              </ul>
            </LightboxGroup>
          </section>
        </div>
      </div>
    </>
  );
}
