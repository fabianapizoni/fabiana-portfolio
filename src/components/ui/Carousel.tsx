"use client";

import { useRef, type ReactNode } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

/** Carrossel horizontal com scroll-snap (arrasta no celular, setas no desktop). */
export function Carousel({
  children,
  prevLabel,
  nextLabel,
}: {
  children: ReactNode;
  prevLabel: string;
  nextLabel: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6"
      >
        {children}
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label={prevLabel}
          className="grid h-11 w-11 place-items-center rounded-full border border-line transition hover:bg-ink/5"
        >
          <ArrowLeftIcon />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label={nextLabel}
          className="grid h-11 w-11 place-items-center rounded-full border border-line transition hover:bg-ink/5"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

export function CarouselItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`shrink-0 snap-start ${className}`}>{children}</div>;
}
