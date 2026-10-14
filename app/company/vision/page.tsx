import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { MOTTO, POLICY, QUALITY_GOALS } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "경영이념",
  description: "(주)성지테크 사훈(신뢰제일·자력위주·인화단결), 경영방침(고객만족·품질안정·주인의식)과 품질목표.",
  alternates: { canonical: "/company/vision/" },
};

export default function VisionPage() {
  return (
    <>
      <PageHeader section="company" current="/company/vision/" title="경영이념" />
      <div className="container page-body">
        <section className="vision-row">
          <h3 className="vision-label">
            사훈
            <small>MOTTO</small>
          </h3>
          <ul className="motto-list">
            {MOTTO.map((m) => (
              <li key={m.hanja} className="motto">
                <p className="motto-hanja" lang="zh-Hant">
                  {m.hanja}
                </p>
                <p className="motto-reading">{m.reading}</p>
                <p className="motto-meaning">{m.meaning}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="vision-row">
          <h3 className="vision-label">
            경영방침
            <small>POLICY</small>
          </h3>
          <ul className="policy-list">
            {POLICY.map((p, i) => (
              <li key={p} className="policy">
                <span>0{i + 1}</span>
                {p}
              </li>
            ))}
          </ul>
        </section>

        <section className="vision-row">
          <h3 className="vision-label">
            품질목표
            <small>{QUALITY_GOALS.year} QUALITY GOALS</small>
          </h3>
          <ul className="goal-list">
            {QUALITY_GOALS.items.map((g) => (
              <li key={g.label} className="goal">
                <p className="goal-label">{g.label}</p>
                <p className="goal-value tnum">
                  {g.value}
                  <small>{g.note}</small>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
