import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Img from "@/components/Img";
import { ArrowRight } from "@/components/Icons";
import { MEETINGS, SHOPFLOOR, type Activity } from "@/lib/content/quality";

export const metadata: Metadata = {
  title: "품질보증",
  description: "수입검사·자주검사·순회검사·출하검사로 이어지는 검사 체계와 품질 회의체, 현장 품질 활동.",
  alternates: { canonical: "/quality/assurance/" },
};

const FLOW = [
  {
    label: "STEP 01",
    title: "수입검사",
    by: "원자재 입고 시",
    points: ["주문 사양(SPEC) 점검", "밀시트(M/SHEET) 확인·관리", "선입선출 LOT 등록"],
  },
  {
    label: "STEP 02",
    title: "자주검사",
    by: "작업자",
    points: ["작업도면 게시 후 작업", "2시간마다 1회 주기 검사"],
  },
  {
    label: "STEP 03",
    title: "순회검사",
    by: "품질부 검사원",
    points: ["공정 순회검사", "검사 샘플 보관 관리"],
  },
  {
    label: "STEP 04",
    title: "출하검사",
    by: "출하 전",
    points: ["고객 협정 항목 검사", "출하검사성적서 발행"],
  },
];

function ActivityGrid({ items }: { items: Activity[] }) {
  return (
    <ul className="activity-grid">
      {items.map((a) => (
        <li key={a.title} className="activity">
          <Img src={a.image} alt={a.title} />
          <div className="activity-meta">
            <h4 className="activity-title">{a.title}</h4>
            <span className="activity-cycle">{a.cycle}</span>
          </div>
          <p className="activity-text">{a.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default function AssurancePage() {
  return (
    <>
      <PageHeader
        section="quality"
        current="/quality/assurance/"
        title="품질보증"
        lead="원자재 입고부터 출하까지 네 단계로 검사합니다."
      />
      <div className="container page-body">
        <section className="block">
          <h3 className="block-title">검사 체계</h3>
          <ol className="inspection-flow">
            {FLOW.map((f) => (
              <li key={f.title} className="flow-step">
                <p className="flow-label">{f.label}</p>
                <h4 className="flow-title">{f.title}</h4>
                <p className="flow-by">{f.by}</p>
                <ul className="flow-points step-points">
                  {f.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <div className="actions-row">
            <Link href="/production/inspection/" className="more-link">
              시험·측정 장비 보기 <ArrowRight width={16} height={16} />
            </Link>
          </div>
        </section>

        <section className="block">
          <h3 className="block-title">품질 회의체</h3>
          <p className="block-desc">정기 회의와 교육으로 품질 문제를 공유하고 대책을 세웁니다.</p>
          <ActivityGrid items={MEETINGS} />
        </section>

        <section className="block">
          <h3 className="block-title">현장 품질 활동</h3>
          <p className="block-desc">현장의 설비·자재·정보를 눈으로 보이게 관리합니다.</p>
          <ActivityGrid items={SHOPFLOOR} />
        </section>
      </div>
    </>
  );
}
