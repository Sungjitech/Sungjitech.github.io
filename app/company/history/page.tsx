import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { HISTORY } from "@/lib/content/history";

export const metadata: Metadata = {
  title: "연혁",
  description: "1992년 성지금속 설립부터 KS 인증, 법인 전환, 뿌리기업 선정, SQ 인증까지 (주)성지테크의 연혁.",
  alternates: { canonical: "/company/history/" },
};

export default function HistoryPage() {
  return (
    <>
      <PageHeader section="company" current="/company/history/" title="연혁" />
      <div className="container page-body">
        {HISTORY.map((era) => (
          <section key={era.title} className="history-era">
            <div className="history-era-head">
              <h3 className="history-era-title">{era.title}</h3>
              <p className="history-era-period tnum">{era.period}</p>
            </div>
            <div>
              {era.years.map((y) => (
                <div key={y.year} className="history-year">
                  <p className="history-year-num tnum">{y.year}</p>
                  <ul>
                    {y.items.map((item) => (
                      <li key={item.date + item.text} className="history-item">
                        <span className="history-date tnum">{item.date}</span>
                        <span>
                          {item.text}
                          {item.org && <span className="history-org">{item.org}</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
