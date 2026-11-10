"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { PlusIcon } from "@/components/ui/icons";

export function Faq() {
  const { t } = useLanguage();
  return (
    <Section tone="surface">
      <div className="grid gap-10 md:grid-cols-[4fr_8fr]">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <div className="divide-y divide-line border-y border-line">
          {t.faq.items.map((item, i) => (
            <details key={i} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                {item.q}
                <PlusIcon className="shrink-0 transition group-open:rotate-45" />
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
