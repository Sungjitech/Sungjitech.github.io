import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`logo ${className}`} aria-label="(주)성지테크 홈">
      <img src="/images/brand/emblem.webp" alt="" width={40} height={40} className="logo-emblem" />
      <span className="logo-type">
        <span className="logo-ko">성지테크</span>
        <span className="logo-en">SUNG JI TECH</span>
      </span>
    </Link>
  );
}
