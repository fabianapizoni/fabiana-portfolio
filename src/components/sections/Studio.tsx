"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { photos } from "@/lib/data/placeholders";
import { Chip, Photo, Section, SectionHeading } from "@/components/ui/primitives";

export function Studio() {
  const { t } = useLanguage();
  return (
    <Section>
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeading eyebrow={t.studio.eyebrow} title={t.studio.title} />
          <div className="space-y-6">
            {t.studio.items.map((item, i) => (
              <div key={item.title} className="flex gap-5">
                <span className="font-display text-3xl text-accent">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-3 mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {t.studio.setupTitle}
          </p>
          <div className="flex flex-wrap gap-2">
            {t.studio.badges.map((b) => (
              <Chip key={b} className="bg-surface">
                {b}
              </Chip>
            ))}
          </div>
        </div>

        <div className="aspect-square overflow-hidden rounded-[2rem]">
          <Photo src={photos.studio} alt={t.studio.photoPlaceholder} className="rounded-[2rem]" />
        </div>
      </div>
    </Section>
  );
}
