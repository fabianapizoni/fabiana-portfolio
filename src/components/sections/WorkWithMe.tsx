"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { openWhatsApp } from "@/lib/whatsapp";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { Carousel, CarouselItem } from "@/components/ui/Carousel";
import { ArrowRightIcon } from "@/components/ui/icons";

export function WorkWithMe() {
  const { t } = useLanguage();
  return (
    <Section id="trabalhar-comigo" tone="surface">
      <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} intro={t.work.intro} />
      <Carousel prevLabel={t.work.prev} nextLabel={t.work.next}>
        {t.work.services.map((s, i) => (
          <CarouselItem key={i} className="w-[80%] sm:w-[45%] lg:w-[31%]">
            <button
              type="button"
              onClick={() => openWhatsApp(s.message)}
              className="group flex h-full min-h-[18rem] w-full flex-col rounded-3xl bg-bg p-7 text-left transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-2xl leading-snug">{s.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{s.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                {t.work.cta}
                <ArrowRightIcon width={16} height={16} className="transition group-hover:translate-x-1" />
              </span>
            </button>
          </CarouselItem>
        ))}
      </Carousel>
    </Section>
  );
}
