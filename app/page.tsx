import Link from "next/link";
import Img from "@/components/Img";
import { ArrowRight, MailIcon, PhoneIcon, PinIcon, FaxIcon } from "@/components/Icons";
import { WASHERS, PRESS_PARTS } from "@/lib/content/products";
import { CERTIFICATES } from "@/lib/content/quality";
import { MILESTONES } from "@/lib/content/history";
import { MAP, SITE, telHref } from "@/lib/site";

const HOME_CERTS = ["ks", "sq", "iso9001", "iso45001"].map((slug) => CERTIFICATES.find((c) => c.slug === slug)!);

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Img src="/images/company/building.webp" alt="경기도 남양주시 진접읍 (주)성지테크 사옥" priority />
        </div>
        <div className="container hero-content">
          <p className="hero-eyebrow">SINCE 1992 · SUNG JI TECH</p>
          <h1 className="hero-title">
            와셔 한 길,
            <br />
            1992년부터
          </h1>
          <p className="hero-text">
            (주)성지테크는 평와셔·스프링와셔·특수와셔와 프레스 부품을 만드는 제조기업입니다. 국내 자동차 3사와
            전기·전자제품 제조업체에 부품을 납품하고 있습니다.
          </p>
          <div className="hero-actions">
            <Link href="/products/" className="btn btn-primary">
              생산 제품 보기 <ArrowRight width={18} height={18} />
            </Link>
            <Link href="/company/greeting/" className="btn btn-ghost">
              회사소개
            </Link>
          </div>
        </div>
      </section>

      <section className="facts" aria-label="회사 현황">
        <div className="container">
          <dl className="facts-list">
            <div className="facts-item">
              <dt className="sr-only">설립</dt>
              <dd className="facts-value tnum">1992</dd>
              <dd className="facts-label">성지금속 설립</dd>
            </div>
            <div className="facts-item">
              <dt className="sr-only">KS 인증</dt>
              <dd className="facts-value">KS B 1326</dd>
              <dd className="facts-label">1998년 평와셔 KS 인증</dd>
            </div>
            <div className="facts-item">
              <dt className="sr-only">생산설비</dt>
              <dd className="facts-value tnum">
                15<small>대</small>
              </dd>
              <dd className="facts-label">프레스 11 · 바렐 4</dd>
            </div>
            <div className="facts-item">
              <dt className="sr-only">시험·측정 장비</dt>
              <dd className="facts-value tnum">
                19<small>대</small>
              </dd>
              <dd className="facts-label">시험·측정 장비</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Products</p>
              <h2 className="section-title">생산 제품</h2>
              <p className="section-lead">
                평와셔부터 톱니와셔까지 와셔 8종과 각종 프레스 가공품을 생산합니다. 스틸·스프링강·스테인리스·황동·청동 등
                재질에 맞춰 제작합니다.
              </p>
            </div>
            <Link href="/products/" className="more-link">
              제품 전체 보기 <ArrowRight width={16} height={16} />
            </Link>
          </div>
          <ul className="product-grid">
            {WASHERS.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/#${p.slug}`} className="product-card">
                  <div className="product-card-media">
                    <Img src={p.image} alt={p.name} />
                  </div>
                  <div className="product-card-body">
                    <p>
                      <span className="product-card-name">{p.name}</span>
                      <span className="product-card-en">{p.en}</span>
                    </p>
                    <ArrowRight width={18} height={18} />
                  </div>
                </Link>
              </li>
            ))}
            <li>
              <Link href={`/products/#${PRESS_PARTS.slug}`} className="product-card">
                <div className="product-card-media">
                  <Img src={PRESS_PARTS.images[0]} alt={PRESS_PARTS.name} />
                </div>
                <div className="product-card-body">
                  <p>
                    <span className="product-card-name">{PRESS_PARTS.name}</span>
                    <span className="product-card-en">{PRESS_PARTS.en}</span>
                  </p>
                  <ArrowRight width={18} height={18} />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split">
          <figure className="split-media">
            <Img src="/images/equipment/press-line.webp" alt="오작업 방지 장치를 갖춘 프레스 라인" />
            <figcaption>프레스 생산 라인 — 설비별 Fool-Proof 적용</figcaption>
          </figure>
          <div>
            <p className="eyebrow">Production &amp; Quality</p>
            <h2 className="section-title">공정마다 확인하고 기록합니다</h2>
            <ol className="point-list">
              <li className="point-item">
                <span className="point-num">01</span>
                <h3 className="point-title">수입검사부터 출하검사까지</h3>
                <p className="point-text">
                  원자재 밀시트를 확인하고, 작업자 자주검사(2시간 주기)와 품질부 순회검사를 거쳐 출하검사성적서를
                  발행합니다.
                </p>
              </li>
              <li className="point-item">
                <span className="point-num">02</span>
                <h3 className="point-title">LOT 단위 전산 관리</h3>
                <p className="point-text">원자재는 선입선출 LOT로, 제품은 생산 LOT와 출하량을 전산으로 관리합니다.</p>
              </li>
              <li className="point-item">
                <span className="point-num">03</span>
                <h3 className="point-title">품질 전담 부서</h3>
                <p className="point-text">품질부가 품질인증·품질관리·품질기획을 맡습니다.</p>
              </li>
              <li className="point-item">
                <span className="point-num">04</span>
                <h3 className="point-title">자체 시험실</h3>
                <p className="point-text">비커스·로크웰 경도기와 비디오 측정기 등으로 경도와 치수를 사내에서 확인합니다.</p>
              </li>
            </ol>
            <div className="actions-row">
              <Link href="/production/process/" className="btn btn-line">
                생산공정 보기 <ArrowRight width={18} height={18} />
              </Link>
              <Link href="/quality/assurance/" className="btn btn-line">
                품질보증 체계
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cert-band">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Certification</p>
              <h2 className="section-title">인증 현황</h2>
              <p className="section-lead">
                평와셔 KS 인증(1998)과 품질경영·안전보건경영 시스템 인증, 현대자동차·기아 SQ 인증(2018)을
                취득했습니다.
              </p>
            </div>
            <Link href="/quality/certifications/" className="more-link">
              인증·수상 전체 보기 <ArrowRight width={16} height={16} />
            </Link>
          </div>
          <ul className="cert-band-grid">
            {HOME_CERTS.map((c) => (
              <li key={c.slug} className="cert-band-item">
                <Link href="/quality/certifications/">
                  <Img src={c.image} alt={`${c.title} 인증서`} />
                  <p>
                    {c.title}
                    <span>{c.issuer}</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">History</p>
              <h2 className="section-title">걸어온 길</h2>
            </div>
            <Link href="/company/history/" className="more-link">
              연혁 전체 보기 <ArrowRight width={16} height={16} />
            </Link>
          </div>
          <ol className="milestones">
            {MILESTONES.map((m) => (
              <li key={m.year} className="milestone">
                <p className="milestone-year tnum">{m.year}</p>
                <p className="milestone-text">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">거래 문의</h2>
            <p className="section-lead">제품 사양과 견적은 전화나 이메일로 문의해 주십시오.</p>
            <dl className="contact-list">
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
              <div className="contact-row">
                <dt>
                  <PinIcon width={17} height={17} /> 주소
                </dt>
                <dd>
                  ({SITE.zip}) {SITE.address}
                </dd>
              </div>
            </dl>
            <div className="map-links">
              <a className="btn btn-line" href={MAP.naver} target="_blank" rel="noopener noreferrer">
                네이버 지도
              </a>
              <a className="btn btn-line" href={MAP.kakao} target="_blank" rel="noopener noreferrer">
                카카오맵
              </a>
              <Link className="btn btn-line" href="/company/location/">
                오시는 길 안내
              </Link>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              src={MAP.embed}
              title="(주)성지테크 위치 지도"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
