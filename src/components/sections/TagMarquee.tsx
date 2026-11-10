"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function TagMarquee() {
  const { t } = useLanguage();
  // Lista duplicada: a animação anda -50% e recomeça sem "pulo".
  const tags = [...t.marquee.tags, ...t.marquee.tags];

  return (
    <div className="overflow-hidden bg-ochre py-4 text-bg" aria-hidden>
      <div className="flex w-max animate-marquee">
        {tags.map((tag, i) => (
          <span key={i} className="flex items-center whitespace-nowrap px-6 font-display text-xl md:text-2xl">
            {tag}
            <span className="ml-12 text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
