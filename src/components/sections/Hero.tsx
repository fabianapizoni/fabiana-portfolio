"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { heroStats, photos } from "@/lib/data/placeholders";
import { openWhatsApp } from "@/lib/whatsapp";
import { Button, Photo } from "@/components/ui/primitives";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="bg-bg">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {t.hero.availability}
          </span>
          <p className="mt-6 text-muted">{t.hero.greeting}</p>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">{t.hero.name}</h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{t.hero.role}</p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{t.hero.tagline}</p>

          <dl className="mt-8 flex gap-10">
            <div>
              <dt className="sr-only">{t.hero.stats.brands}</dt>
              <dd className="font-display text-4xl">{heroStats.brands}+</dd>
              <dd className="text-sm text-muted">{t.hero.stats.brands}</dd>
            </div>
            <div>
              <dt className="sr-only">{t.hero.stats.followers}</dt>
              <dd className="font-display text-4xl">{heroStats.followers}</dd>
              <dd className="text-sm text-muted">{t.hero.stats.followers}</dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button onClick={() => openWhatsApp(t.contact.message)}>{t.hero.ctaPrimary}</Button>
            <Button href="#portfolio" variant="secondary">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        <div className="order-1 aspect-[4/5] overflow-hidden rounded-[2rem] md:order-2">
          <Photo src={photos.hero} alt={t.hero.photoPlaceholder} className="rounded-[2rem]" />
        </div>
      </div>
    </section>
  );
}
