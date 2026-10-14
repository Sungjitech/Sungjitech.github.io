import type { NextConfig } from "next";

// GitHub Pages는 정적 파일만 호스팅하므로 빌드 시 모든 페이지를 HTML로 내보낸다(out/).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
