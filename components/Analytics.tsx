import Script from "next/script";
import { SITE } from "@/lib/site";

// Google Analytics 4 방문자 통계. 페이지 이동도 GA4가 브라우저 주소 변경을 감지해 자동으로 기록한다.
export default function Analytics() {
  const id: string = SITE.gaMeasurementId;
  if (!id) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
