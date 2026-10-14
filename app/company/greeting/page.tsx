import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Img from "@/components/Img";
import { GREETING } from "@/lib/content/company";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "인사말",
  description: "(주)성지테크 대표이사 인사말. 1992년 설립 이래 와셔와 프레스 부품을 전문으로 제조해 왔습니다.",
  alternates: { canonical: "/company/greeting/" },
};

export default function GreetingPage() {
  return (
    <>
      <PageHeader section="company" current="/company/greeting/" title="인사말" />
      <div className="container page-body">
        <div className="greeting">
          <figure className="greeting-photo">
            <Img src="/images/company/ceo.webp" alt={`(주)성지테크 대표이사 ${SITE.ceo}`} />
            <figcaption>
              <strong>{SITE.ceo}</strong>
              (주)성지테크 대표이사
            </figcaption>
          </figure>
          <div>
            <p className="greeting-quote">
              최고 품질의 제품을 <em>적정한 가격</em>에,
              <br />
              <em>필요한 때</em>에 공급하겠습니다.
            </p>
            <div className="greeting-text">
              <p>안녕하십니까.</p>
              {GREETING.map((paragraph) => (
                <p key={paragraph.slice(0, 16)}>{paragraph}</p>
              ))}
            </div>
            <p className="greeting-sign">
              (주)성지테크 대표이사 <strong>{SITE.ceo}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
