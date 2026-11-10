"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { CheckIcon } from "@/components/ui/icons";

export function WhyUgc() {
  const { t } = useLanguage();
  return (
    <Section tone="ink">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeading eyebrow={t.whyUgc.eyebrow} title={t.whyUgc.title} />
          <p className="text-lg leading-relaxed opacity-75">{t.whyUgc.paragraph}</p>
        </div>
        <ul className="space-y-4 self-end">
          {t.whyUgc.reasons.map((r) => (
            <li key={r} className="flex items-start gap-4 rounded-2xl border border-bg/15 p-5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-bg text-ink">
                <CheckIcon width={16} height={16} />
              </span>
              <span className="pt-1 text-lg">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
