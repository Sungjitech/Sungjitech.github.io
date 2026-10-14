import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "이메일무단수집거부",
  alternates: { canonical: "/email-policy/" },
  robots: { index: false },
};

export default function EmailPolicyPage() {
  return (
    <>
      <div className="sub-visual">
        <div className="container">
          <h1 className="sub-visual-title">이메일무단수집거부</h1>
        </div>
      </div>
      <div className="container page-head legal">
        <p>
          본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는
          것을 거부하며, 이를 위반할 경우 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」에 따라 처벌될 수 있음을
          알려 드립니다.
        </p>
        <p className="muted">{SITE.legalName}</p>
      </div>
      <div className="page-body" />
    </>
  );
}
