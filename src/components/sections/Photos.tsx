"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { gallery } from "@/lib/data/placeholders";
import { Section, SectionHeading } from "@/components/ui/primitives";

/** Mosaico de fotos de bastidor/entregas. Só aparece se `gallery` tiver fotos. */
export function Photos() {
  const { t } = useLanguage();
  if (gallery.length === 0) return null;

  const span = { tall: "row-span-2", wide: "col-span-2", normal: "" } as const;

  return (
    <Section tone="surface">
      <SectionHeading eyebrow={t.photos.eyebrow} title={t.photos.title} />
      <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
        {gallery.map((p, i) => (
          <div key={i} className={`overflow-hidden rounded-2xl ${span[p.size ?? "normal"]}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
          </div>
        ))}
      </div>
    </Section>
  );
}
