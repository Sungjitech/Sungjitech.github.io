import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Img from "@/components/Img";
import { PROCESS_LINES } from "@/lib/content/production";

export const metadata: Metadata = {
  title: "생산공정",
  description: "프레스 공정 16단계, 스프링와셔 공정, 웨이브 스프링와셔 공정 — 원자재 입고부터 출하까지.",
  alternates: { canonical: "/production/process/" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        section="production"
        current="/production/process/"
        title="생산공정"
        lead="제품군에 따라 세 가지 라인으로 생산합니다. 원자재 입고부터 출하까지 단계마다 검사하고 전산으로 기록합니다."
      />
      <nav className="anchor-nav" aria-label="공정 바로가기">
        <div className="container">
          <ul>
            {PROCESS_LINES.map((line) => (
              <li key={line.key}>
                <a href={`#${line.key}`}>{line.short}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="container page-body">
        {PROCESS_LINES.map((line) => (
          <section key={line.key} id={line.key} className="process-line">
            <div className="line-head">
              <div>
                <h3 className="line-title">{line.title}</h3>
                <p className="line-summary">{line.summary}</p>
              </div>
              <p className="line-count">{line.steps.length}단계</p>
            </div>
            <ol className="step-grid">
              {line.steps.map((step, i) => (
                <li key={step.title + i} className="step">
                  <div className="step-media">
                    <Img src={step.image} alt={step.title} />
                    <span className="step-num tnum">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h4 className="step-title">{step.title}</h4>
                  <ul className="step-points">
                    {step.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </>
  );
}
