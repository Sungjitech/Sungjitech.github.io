"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, CloseIcon } from "./Icons";

export type LightboxItem = { src: string; alt: string; caption?: string };

// 썸네일 버튼. 서버 컴포넌트에서 그대로 쓸 수 있다.
export function LbButton({ index, label, children }: { index: number; label: string; children: ReactNode }) {
  return (
    <button type="button" className="lb-trigger" data-lb={index} aria-label={`${label} 크게 보기`}>
      {children}
    </button>
  );
}

// children 안의 <LbButton index={n}>을 누르면 items[n]을 크게 보여 준다.
// 키보드: ←/→ 이동, Esc 닫기.
export default function LightboxGroup({
  items,
  children,
  className,
}: {
  items: LightboxItem[];
  children: ReactNode;
  className?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const trigger = (e.target as HTMLElement).closest<HTMLElement>("[data-lb]");
    if (!trigger || !e.currentTarget.contains(trigger)) return;
    setIndex(Number(trigger.dataset.lb));
    dialogRef.current?.showModal();
  };
  const close = useCallback(() => dialogRef.current?.close(), []);
  const move = useCallback(
    (step: number) => setIndex((i) => (i === null ? i : (i + step + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setIndex(null);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    dialog.addEventListener("close", onClose);
    dialog.addEventListener("keydown", onKey);
    return () => {
      dialog.removeEventListener("close", onClose);
      dialog.removeEventListener("keydown", onKey);
    };
  }, [move]);

  const current = index === null ? null : items[index];

  return (
    <div className={className} onClick={onClick}>
      {children}
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={current?.alt ?? "이미지 보기"}
        onClick={(e) => {
          e.stopPropagation();
          if (e.target === e.currentTarget) close();
        }}
      >
        {current && (
          <figure className="lightbox-figure">
            <img src={current.src} alt={current.alt} />
            <figcaption>
              <strong>{current.alt}</strong>
              {current.caption && <span>{current.caption}</span>}
              {items.length > 1 && (
                <span className="lightbox-count">
                  {index! + 1} / {items.length}
                </span>
              )}
            </figcaption>
          </figure>
        )}
        <button type="button" className="lightbox-close" onClick={close} aria-label="닫기">
          <CloseIcon width={26} height={26} />
        </button>
        {items.length > 1 && (
          <>
            <button type="button" className="lightbox-nav is-prev" onClick={() => move(-1)} aria-label="이전 이미지">
              <ChevronLeft width={30} height={30} />
            </button>
            <button type="button" className="lightbox-nav is-next" onClick={() => move(1)} aria-label="다음 이미지">
              <ChevronRight width={30} height={30} />
            </button>
          </>
        )}
      </dialog>
    </div>
  );
}
