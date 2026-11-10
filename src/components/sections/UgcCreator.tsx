"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Section, SectionHeading } from "@/components/ui/primitives";

export function UgcCreator() {
  const { t } = useLanguage();
  return (
    <Section>
      <SectionHeading eyebrow={t.ugc.eyebrow} title={t.ugc.title} intro={t.ugc.intro} />
      <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {t.ugc.formats.map((f, i) => (
          <article key={f.title} className="bg-bg p-7">
            <span className="text-sm font-semibold text-ochre">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 font-display text-2xl">{f.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{f.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
