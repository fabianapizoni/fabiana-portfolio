"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { brandLogos } from "@/lib/data/placeholders";

/** Só aparece quando houver pelo menos uma logo em `brandLogos`. */
export function Brands() {
  const { t } = useLanguage();
  if (brandLogos.length === 0) return null;

  // Repete a lista até ter itens suficientes para uma fila contínua, depois duplica para o loop.
  const minItems = 8;
  const base = Array.from({ length: Math.ceil(minItems / brandLogos.length) }, () => brandLogos).flat();
  const loop = [...base, ...base];

  return (
    <section className="overflow-hidden bg-bg py-16 md:py-20">
      <div className="mx-auto mb-10 max-w-6xl px-4 text-center sm:px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.brands.eyebrow}</p>
        <h2 className="font-display text-2xl md:text-4xl">{t.brands.title}</h2>
      </div>
      <div className="pause-on-hover">
        <ul className="flex w-max animate-marquee-slow gap-6 md:gap-8">
          {loop.map((brand, i) => (
            <li
              key={i}
              aria-hidden={i >= base.length}
              className="h-28 w-28 shrink-0 overflow-hidden rounded-full md:h-40 md:w-40"
              style={{ background: brand.background ?? "rgb(var(--surface))" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={brand.src} alt={brand.name} className="h-full w-full object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
