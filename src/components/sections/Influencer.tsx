"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Chip, Section, SectionHeading } from "@/components/ui/primitives";

export function Influencer() {
  const { t } = useLanguage();

  return (
    <Section tone="surface">
      <SectionHeading eyebrow={t.influencer.eyebrow} title={t.influencer.title} intro={t.influencer.intro} />

      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">{t.influencer.topicsTitle}</p>
      <div className="flex flex-wrap gap-2">
        {t.influencer.topics.map((topic) => (
          <Chip key={topic} className="border-sage bg-sage/25">
            {topic}
          </Chip>
        ))}
      </div>
    </Section>
  );
}
