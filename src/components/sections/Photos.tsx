"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ugcPhotoPlaceholderCount, ugcPhotos } from "@/lib/data/placeholders";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "@/components/ui/icons";

/**
 * Fotos UGC (usando os produtos): grade de miniaturas pequenas e quadradas.
 * Clique amplia a foto. Sem fotos cadastradas, mostra quadradinhos de placeholder.
 */
export function Photos() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);
  const hasPhotos = ugcPhotos.length > 0;

  const thumbGrid = "grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-9";

  return (
    <Section id="fotos-ugc" tone="surface">
      <SectionHeading eyebrow={t.photos.eyebrow} title={t.photos.title} intro={t.photos.intro} />

      {hasPhotos ? (
        <ul className={thumbGrid}>
          {ugcPhotos.map((p, i) => (
            <li key={p.src}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={p.alt}
                className="group block aspect-square w-full overflow-hidden rounded-xl bg-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-[50%_30%] transition duration-300 group-hover:scale-110"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={thumbGrid} aria-label={t.photos.placeholder}>
          {Array.from({ length: ugcPhotoPlaceholderCount }, (_, i) => (
            <li
              key={i}
              className="flex aspect-square items-center justify-center rounded-xl border-2 border-dashed border-line bg-bg p-1 text-center text-[10px] leading-tight text-muted sm:text-xs"
            >
              {t.photos.placeholder}
            </li>
          ))}
        </ul>
      )}

      {open !== null && hasPhotos && (
        <Lightbox index={open} onChange={setOpen} onClose={() => setOpen(null)} labels={t.photos} />
      )}
    </Section>
  );
}

function Lightbox({
  index,
  onChange,
  onClose,
  labels,
}: {
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
  labels: { close: string; prev: string; next: string };
}) {
  const total = ugcPhotos.length;
  const photo = ugcPhotos[index];
  const go = (dir: 1 | -1) => onChange((index + dir + total) % total);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % total);
      if (e.key === "ArrowLeft") onChange((index - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total, onChange, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      onClick={onClose}
      className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-ink/85 p-4"
    >
      <figure onClick={(e) => e.stopPropagation()} className="relative max-h-full max-w-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo.src} alt={photo.alt} className="max-h-[80vh] w-auto rounded-2xl object-contain" />
        {photo.brand && <figcaption className="mt-3 text-center text-sm text-bg">{photo.brand}</figcaption>}
      </figure>

      <button
        type="button"
        onClick={onClose}
        aria-label={labels.close}
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-bg/15 text-bg hover:bg-bg/25"
      >
        <CloseIcon />
      </button>
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label={labels.prev}
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-bg/15 text-bg hover:bg-bg/25"
          >
            <ArrowLeftIcon />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label={labels.next}
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-bg/15 text-bg hover:bg-bg/25"
          >
            <ArrowRightIcon />
          </button>
        </>
      )}
    </div>
  );
}
