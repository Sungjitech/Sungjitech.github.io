import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Img from "@/components/Img";
import { FaxIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { MAP, SITE, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "오시는 길",
  description: `(주)성지테크 오시는 길 — ${SITE.address}. 구리 TG에서 약 22~25km.`,
  alternates: { canonical: "/company/location/" },
};

export default function LocationPage() {
  return (
    <>
      <PageHeader section="company" current="/company/location/" title="오시는 길" />
      <div className="container page-body">
        <div className="block">
          <div className="location-map">
            <iframe
              src={MAP.embed}
              title="(주)성지테크 위치 지도"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="map-links">
            <a className="btn btn-line" href={MAP.naver} target="_blank" rel="noopener noreferrer">
              네이버 지도로 보기
            </a>
            <a className="btn btn-line" href={MAP.kakao} target="_blank" rel="noopener noreferrer">
              카카오맵으로 보기
            </a>
            <a className="btn btn-line" href={MAP.google} target="_blank" rel="noopener noreferrer">
              Google 지도로 보기
            </a>
          </div>
        </div>

        <section className="block">
          <h3 className="block-title">주소 및 연락처</h3>
          <dl className="contact-list is-flush">
            <div className="contact-row">
              <dt>
                <PinIcon width={17} height={17} /> 주소
              </dt>
              <dd>
                ({SITE.zip}) {SITE.address}
                <br />
                <span className="muted">지번: {SITE.lotAddress}</span>
              </dd>
            </div>
            <div className="contact-row">
              <dt>
                <PhoneIcon width={17} height={17} /> 전화
              </dt>
              <dd>
                <a href={telHref(SITE.tel)}>{SITE.telDisplay}</a>
              </dd>
            </div>
            <div className="contact-row">
              <dt>
                <FaxIcon width={17} height={17} /> 팩스
              </dt>
              <dd>{SITE.fax}</dd>
            </div>
            <div className="contact-row">
              <dt>
                <MailIcon width={17} height={17} /> 이메일
              </dt>
              <dd>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="block route">
          <div>
            <h3 className="block-title">자가용 이용 시</h3>
            <p className="block-desc is-flush">
              내비게이션에 <strong>{SITE.address}</strong>를 입력하십시오. 구리 TG에서 약 22~25km 거리입니다.
            </p>
            <ol className="route-steps">
              <li>
                <span>01</span>구리 TG에서 구리 IC를 지나 퇴계원 방면으로 진행합니다.
              </li>
              <li>
                <span>02</span>퇴계원에서 밤섬유원지를 지나 광릉내 방면으로 직진합니다.
              </li>
              <li>
                <span>03</span>광릉내를 지나 포천·일동 방면으로 약 800m 진행합니다.
              </li>
              <li>
                <span>04</span>첫 번째 신호에서 유턴한 뒤 우측 길로 30m 들어오면 도착합니다.
              </li>
            </ol>
          </div>
          <figure className="route-map">
            <Img src="/images/company/route-map.webp" alt="구리 TG에서 (주)성지테크까지 약도" />
            <figcaption>약도 — 화살표 방향으로 오시면 됩니다.</figcaption>
          </figure>
        </section>
      </div>
    </>
  );
}
