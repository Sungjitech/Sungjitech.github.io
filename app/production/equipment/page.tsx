import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Img from "@/components/Img";
import LightboxGroup, { LbButton } from "@/components/Lightbox";
import { ZoomIcon } from "@/components/Icons";
import { BARREL_MACHINES, PRESS_MACHINES } from "@/lib/content/production";

export const metadata: Metadata = {
  title: "제조설비",
  description: "프레스 11대(200·110·80·45톤)와 바렐 4대(700·500kg) 등 (주)성지테크의 주요 제조설비.",
  alternates: { canonical: "/production/equipment/" },
};

const PHOTOS = [
  { src: "/images/equipment/press-line.webp", alt: "프레스 라인", caption: "설비별 Fool-Proof 공정 표시" },
  { src: "/images/equipment/press-1.webp", alt: "프레스" },
  { src: "/images/equipment/press-2.webp", alt: "프레스" },
  { src: "/images/equipment/press-3.webp", alt: "프레스" },
  { src: "/images/equipment/barrel.webp", alt: "바렐 연마기" },
];

const sum = (rows: { count: number }[]) => rows.reduce((n, r) => n + r.count, 0);

export default function EquipmentPage() {
  const pressTotal = sum(PRESS_MACHINES);
  const barrelTotal = sum(BARREL_MACHINES);

  return (
    <>
      <PageHeader
        section="production"
        current="/production/equipment/"
        title="제조설비"
        lead="45톤부터 200톤까지 프레스 11대로 타발·성형하고, 바렐 4대로 표면과 이물을 정리합니다."
      />
      <div className="container page-body">
        <dl className="stat-row">
          <div className="stat">
            <dt className="stat-label">프레스</dt>
            <dd className="stat-value tnum">
              {pressTotal}
              <small>대</small>
            </dd>
          </div>
          <div className="stat">
            <dt className="stat-label">바렐</dt>
            <dd className="stat-value tnum">
              {barrelTotal}
              <small>대</small>
            </dd>
          </div>
          <div className="stat">
            <dt className="stat-label">합계</dt>
            <dd className="stat-value tnum">
              {pressTotal + barrelTotal}
              <small>대</small>
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
                    <th scope="col" className="num">
                      대수
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PRESS_MACHINES.map((m, i) => (
                    <tr key={m.spec}>
                      {i === 0 && (
                        <th scope="rowgroup" rowSpan={PRESS_MACHINES.length}>
                          프레스
                        </th>
                      )}
                      <td>{m.spec}</td>
                      <td className="num">{m.count}</td>
                    </tr>
                  ))}
                  {BARREL_MACHINES.map((m, i) => (
                    <tr key={m.spec}>
                      {i === 0 && (
                        <th scope="rowgroup" rowSpan={BARREL_MACHINES.length}>
                          바렐
                        </th>
                      )}
                      <td>{m.spec}</td>
                      <td className="num">{m.count}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row" colSpan={2}>
                      합계
                    </th>
                    <td className="num">{pressTotal + barrelTotal}</td>
                  </tr>
                </tfoot>
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
