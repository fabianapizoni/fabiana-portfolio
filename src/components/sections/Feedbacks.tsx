"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { resultPrints } from "@/lib/data/placeholders";
import { Photo, Section, SectionHeading } from "@/components/ui/primitives";
import { Carousel, CarouselItem } from "@/components/ui/Carousel";
import { QuoteIcon } from "@/components/ui/icons";

export function Feedbacks() {
  const { t } = useLanguage();
  // Sem prints cadastrados: mostra 3 caixas de placeholder.
  const prints: { src: string | null; alt: string }[] =
    resultPrints.length > 0 ? resultPrints : Array.from({ length: 3 }, () => ({ src: null, alt: t.feedbacks.printPlaceholder }));

  return (
    <Section id="feedbacks">
      <SectionHeading eyebrow={t.feedbacks.eyebrow} title={t.feedbacks.title} />
      <Carousel prevLabel={t.feedbacks.prev} nextLabel={t.feedbacks.next}>
        {t.feedbacks.testimonials.map((item, i) => (
          <CarouselItem key={`t-${i}`} className="w-[85%] sm:w-[48%] lg:w-[32%]">
            <figure className="flex h-full min-h-[16rem] flex-col rounded-3xl bg-surface p-7">
              <QuoteIcon className="text-accent" />
              <blockquote className="mt-4 flex-1 font-display text-xl leading-snug">{item.quote}</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{item.author}</span>
                <span className="text-muted"> · {item.brand}</span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
        {prints.map((p, i) => (
          <CarouselItem key={`p-${i}`} className="w-[60%] sm:w-[32%] lg:w-[22%]">
            <div className="aspect-[9/16] overflow-hidden rounded-3xl">
              <Photo src={p.src} alt={p.alt} className="rounded-3xl" />
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </Section>
  );
}
