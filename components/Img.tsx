import type { ImgHTMLAttributes } from "react";
import imageSizes from "@/lib/image-sizes.json";

const sizes: Record<string, number[]> = imageSizes;

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  src: string;
  alt: string;
  priority?: boolean;
};

// 정적 사이트라 next/image 최적화는 쓰지 않는다. 대신 크기를 미리 기록해 두고
// width/height를 채워 레이아웃 밀림을 막는다.
export default function Img({ src, alt, priority, ...rest }: Props) {
  const size = sizes[src];
  return (
    <img
      src={src}
      alt={alt}
      width={size?.[0]}
      height={size?.[1]}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      {...rest}
    />
  );
}
