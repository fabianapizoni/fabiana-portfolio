"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  nichesByCategory,
  sampleVideos,
  videos,
  type Video,
  type VideoCategory,
  type VideoNiche,
} from "@/lib/data/placeholders";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { PlayIcon } from "@/components/ui/icons";

type CategoryFilter = "all" | VideoCategory;

export function Portfolio() {
  const { t, lang } = useLanguage();
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [niche, setNiche] = useState<VideoNiche | "all">("all");

  const usingSamples = videos.length === 0;
  const list = usingSamples ? sampleVideos : videos;

  const visible = useMemo(
    () =>
      list.filter(
        (v) => (category === "all" || v.category === category) && (niche === "all" || v.niche === niche),
      ),
    [list, category, niche],
  );

  const selectCategory = (c: CategoryFilter) => {
    setCategory(c);
    setNiche("all");
  };

  const categories: CategoryFilter[] = ["all", "influencer", "ugc"];

  return (
    <Section id="portfolio">
      <SectionHeading eyebrow={t.portfolio.eyebrow} title={t.portfolio.title} intro={t.portfolio.intro} />

      {/* Filtro nível 1: categoria */}
      <div role="group" aria-label={t.portfolio.categoryLabel} className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <FilterButton key={c} active={category === c} onClick={() => selectCategory(c)}>
            {t.portfolio.categories[c]}
          </FilterButton>
        ))}
      </div>

      {/* Filtro nível 2: temas da categoria escolhida */}
      {category !== "all" && (
        <div role="group" aria-label={t.portfolio.nicheLabel} className="mt-3 flex animate-fade-in flex-wrap gap-2">
          <FilterButton small active={niche === "all"} onClick={() => setNiche("all")}>
            {t.portfolio.nicheAll}
          </FilterButton>
          {nichesByCategory[category].map((n) => (
            <FilterButton key={n} small active={niche === n} onClick={() => setNiche(n)}>
              {t.portfolio.niches[n]}
            </FilterButton>
          ))}
        </div>
      )}

      {usingSamples && <p className="mt-6 text-sm text-muted">{t.portfolio.sampleNotice}</p>}

      {visible.length === 0 ? (
        <p className="mt-10 text-muted">{t.portfolio.empty}</p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((v) => (
            <VideoCard
              key={v.id}
              video={v}
              title={v.youtubeId ? v.title[lang] : t.portfolio.sampleTitle}
              tag={t.portfolio.niches[v.niche]}
              playLabel={t.portfolio.play}
            />
          ))}
        </div>
      )}
    </Section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
  small,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border transition ${small ? "px-3.5 py-1.5 text-xs" : "px-5 py-2.5 text-sm font-semibold"} ${
        active ? "border-ink bg-ink text-bg" : "border-line text-muted hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

/**
 * Card de vídeo vertical. Mostra só a thumbnail; o player do YouTube
 * (iframe) só é carregado depois do clique.
 */
function VideoCard({ video, title, tag, playLabel }: { video: Video; title: string; tag: string; playLabel: string }) {
  const [playing, setPlaying] = useState(false);
  const { youtubeId } = video;

  return (
    <figure>
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-surface">
        {playing && youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => youtubeId && setPlaying(true)}
            disabled={!youtubeId}
            aria-label={`${playLabel}: ${title}`}
            className="group absolute inset-0 h-full w-full disabled:cursor-default"
          >
            {youtubeId ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            ) : (
              <span className="absolute inset-0 bg-gradient-to-b from-line/60 to-surface" />
            )}
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-bg/90 text-ink shadow-md transition group-hover:scale-110">
                <PlayIcon />
              </span>
            </span>
            <span className="absolute left-3 top-3 rounded-full bg-bg/90 px-2.5 py-1 text-[11px] font-medium">
              {tag}
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-2 text-sm text-muted">{title}</figcaption>
    </figure>
  );
}
