import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Img from "@/components/Img";
import LightboxGroup, { LbButton } from "@/components/Lightbox";
import { ZoomIcon } from "@/components/Icons";
import { INSPECTION_PHOTOS, MEASURING_EQUIPMENT, TEST_EQUIPMENT, type Instrument } from "@/lib/content/production";

export const metadata: Metadata = {
  title: "검사설비",
  description: "비커스·로크웰 경도기, 비디오 측정기, 마이크로미터 등 시험·측정 장비 19대.",
  alternates: { canonical: "/production/inspection/" },
};

const sum = (rows: Instrument[]) => rows.reduce((n, r) => n + r.count, 0);

function InstrumentTable({ rows }: { rows: Instrument[] }) {
  return (
    <div className="table-wrap">
      <table className="data-table is-wide">
        <thead>
          <tr>
            <th scope="col">장비명</th>
            <th scope="col">규격</th>
            <th scope="col">용도</th>
            <th scope="col" className="num">
              대수
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <th scope="row">{r.name}</th>
              <td>{r.spec}</td>
              <td>{r.use}</td>
              <td className="num">{r.count}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan={3}>
              소계
            </th>
            <td className="num">{sum(rows)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default function InspectionPage() {
  const testTotal = sum(TEST_EQUIPMENT);
  const measureTotal = sum(MEASURING_EQUIPMENT);

  return (
    <>
      <PageHeader
        section="production"
        current="/production/inspection/"
        title="검사설비"
        lead="사내 시험실에서 경도·조직 시험과 치수·형상 측정을 직접 수행합니다."
      />
      <div className="container page-body">
        <dl className="stat-row">
          <div className="stat">
            <dt className="stat-label">신뢰성 시험장비</dt>
            <dd className="stat-value tnum">
              {testTotal}
              <small>대</small>
            </dd>
          </div>
          <div className="stat">
            <dt className="stat-label">측정장비</dt>
            <dd className="stat-value tnum">
              {measureTotal}
              <small>대</small>
            </dd>
          </div>
          <div className="stat">
            <dt className="stat-label">합계</dt>
            <dd className="stat-value tnum">
              {testTotal + measureTotal}
              <small>대</small>
            </dd>
          </div>
        </dl>

        <section className="block">
          <h3 className="block-title">신뢰성 시험장비</h3>
          <InstrumentTable rows={TEST_EQUIPMENT} />
        </section>

        <section className="block">
          <h3 className="block-title">측정장비</h3>
          <InstrumentTable rows={MEASURING_EQUIPMENT} />
        </section>

        <section className="block">
          <h3 className="block-title">장비 사진</h3>
          <LightboxGroup items={INSPECTION_PHOTOS}>
            <ul className="photo-grid is-6">
              {INSPECTION_PHOTOS.map((p, i) => (
                <li key={p.src} className="photo is-tall is-contain">
                  <LbButton index={i} label={p.alt}>
                    <span className="gallery-item-media">
                      <Img src={p.src} alt={p.alt} />
                      <span className="zoom-hint">
                        <ZoomIcon width={18} height={18} />
                      </span>
                    </span>
                    <span className="photo-caption">{p.alt}</span>
                  </LbButton>
                </li>
              ))}
            </ul>
          </LightboxGroup>
        </section>
      </div>
    </>
  );
}
