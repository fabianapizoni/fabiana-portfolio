"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { aboutStats, photos } from "@/lib/data/placeholders";
import { Chip, Photo, RichText, Section, SectionHeading } from "@/components/ui/primitives";
import { QuoteIcon } from "@/components/ui/icons";

export function About() {
  const { t } = useLanguage();
  const stats = [
    { value: aboutStats.age, label: t.about.stats.age },
    { value: aboutStats.base, label: t.about.stats.base },
  ];

  return (
    <Section id="sobre" tone="surface">
      <div className="grid gap-12 md:grid-cols-[5fr_7fr] md:gap-16">
        <div className="aspect-[3/4] overflow-hidden rounded-[2rem] md:sticky md:top-28 md:self-start">
          <Photo src={photos.about} alt={t.about.photoPlaceholder} className="rounded-[2rem]" />
        </div>

        <div>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>
                <RichText text={p} />
              </p>
            ))}
          </div>

          <blockquote className="mt-10 flex gap-4 border-l-2 border-accent pl-6">
            <QuoteIcon className="mt-1 shrink-0 text-accent" />
            <p className="font-display text-2xl italic leading-snug">{t.about.quote}</p>
          </blockquote>

          <div className="mt-10 flex flex-wrap gap-2">
            {t.about.chips.map((c) => (
              <Chip key={c} className="border-sage bg-sage/25">
                {c}
              </Chip>
            ))}
          </div>

          <div className="mt-10 grid max-w-md grid-cols-2 gap-3 sm:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-bg p-5">
                <p className="font-display text-2xl">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
