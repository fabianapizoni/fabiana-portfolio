"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { influencerMetrics } from "@/lib/data/placeholders";
import { Chip, Section, SectionHeading } from "@/components/ui/primitives";
import { InstagramIcon, TikTokIcon } from "@/components/ui/icons";

export function Influencer() {
  const { t } = useLanguage();
  const m = t.influencer.metrics;

  return (
    <Section tone="surface">
      <SectionHeading eyebrow={t.influencer.eyebrow} title={t.influencer.title} intro={t.influencer.intro} />

      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">{t.influencer.topicsTitle}</p>
      <div className="mb-14 flex flex-wrap gap-2">
        {t.influencer.topics.map((topic) => (
          <Chip key={topic} className="bg-bg">
            {topic}
          </Chip>
        ))}
      </div>

      <div className="mb-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl">{t.influencer.metricsTitle}</h3>
        <span className="text-xs text-muted">{t.influencer.updatedAt}</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {influencerMetrics.map((p) => {
          const Icon = p.platform === "Instagram" ? InstagramIcon : TikTokIcon;
          return (
            <article key={p.platform} className="rounded-3xl bg-bg p-6 md:p-8">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-bg">
                  <Icon />
                </span>
                <span>
                  <span className="block font-semibold">{p.platform}</span>
                  <span className="block text-sm text-muted">{p.handle}</span>
                </span>
              </a>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Metric label={m.views} value={p.views} big />
                <Metric label={m.followers} value={p.followers} big />
                <Metric label={m.gender} value={p.gender} />
                <Metric label={m.age} value={p.age} />
                <Metric label={m.location} value={p.location} className="col-span-2" />
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function Metric({ label, value, big, className = "" }: { label: string; value: string; big?: boolean; className?: string }) {
  return (
    <div className={`rounded-2xl border border-line p-4 ${className}`}>
      <p className={big ? "font-display text-3xl" : "text-lg font-semibold"}>{value}</p>
      <p className="mt-1 text-xs text-muted">{label}</p>
    </div>
  );
}
