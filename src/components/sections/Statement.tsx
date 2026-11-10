"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Statement() {
  const { t } = useLanguage();
  return (
    <section className="bg-bg py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="font-display text-4xl leading-tight md:text-7xl">
          <span className="block">{t.statement.line1}</span>
          <span className="block italic text-muted">{t.statement.line2}</span>
        </p>
      </div>
    </section>
  );
}
