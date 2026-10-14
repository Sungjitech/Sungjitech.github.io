// 예전(Jekyll) 사이트 주소와 섹션 대표 주소 → 새 페이지.
// 검색엔진에 남아 있는 옛 주소로 들어와도 맞는 페이지로 보낸다.
export const REDIRECTS: Record<string, string> = {
  // 섹션 대표 주소
  company: "/company/greeting/",
  production: "/production/process/",
  quality: "/quality/assurance/",
  media: "/media/press/",

  // 예전 사이트
  services: "/company/greeting/",
  "services/overview": "/company/overview/",
  "services/management": "/company/vision/",
  "services/history": "/company/history/",
  "services/salutation": "/company/greeting/",
  "services/organization": "/company/organization/",
  "services/location": "/company/location/",
  team: "/products/",
  "team/product": "/products/",
  "team/certification": "/quality/certifications/",
  about: "/production/process/",
  "about/process": "/production/process/",
  "about/manufacturing": "/production/equipment/",
  "about/inspection": "/production/inspection/",
  "about/quality": "/quality/assurance/",
  contact: "/company/location/",
  "contact/interview": "/media/press/",
  "contact/in_house": "/media/gallery/",
  "contact/inside": "/media/gallery/",
  announcements: "/",
  "announcements/announcements": "/",
};
