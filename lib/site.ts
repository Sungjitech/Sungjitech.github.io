// 회사 기본 정보 — 연락처·주소가 바뀌면 이 파일만 고치면 된다.
// 출처: 회사소개서 '회사 개요', KS·SQ 인증서, 뿌리기업 확인서, CLEAN 사업장 인정서
export const SITE = {
  url: "https://www.sungjitech.co.kr",
  name: "(주)성지테크",
  legalName: "주식회사 성지테크",
  brand: "SUNG JI TECH",
  ceo: "홍성기",
  bizNo: "132-81-41326",
  founded: "1992-04-01",
  incorporated: "2001-08-01",
  zip: "12018",
  address: "경기도 남양주시 진접읍 금강로 1881",
  lotAddress: "진접읍 팔야리 572",
  tel: "031-571-7104",
  telDisplay: "031-571-7104~6",
  fax: "031-571-6584",
  email: "sjt@sungjitech.co.kr",
  description:
    "1992년 설립된 와셔·프레스 부품 제조기업. KS 인증 평와셔(KS B 1326), 스프링와셔, 웨이브 스프링와셔, 특수와셔, 코니칼와셔, 이링, 톱니와셔와 프레스 가공품을 생산합니다.",
  naverVerification: "f2ebf347ab02db7f4731cf1d3f8f66ee67fe7619",
} as const;

export const MAP = {
  embed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.4956149969553!2d127.21071803560933!3d37.751676786429144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ccc20a4cf3ae3%3A0xd3b9c0d96a4cebd9!2z6rK96riw64-EIOuCqOyWkeyjvOyLnCDsp4TsoJHsnY0g6riI6rCV66GcIDE4ODE!5e0!3m2!1sko!2skr!4v1735453166083!5m2!1sko!2skr",
  naver: `https://map.naver.com/p/search/${encodeURIComponent(SITE.address)}`,
  kakao: `https://map.kakao.com/link/search/${encodeURIComponent(SITE.address)}`,
  google: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`,
} as const;

export const telHref = (tel: string) => `tel:${tel.replace(/[^0-9]/g, "")}`;
