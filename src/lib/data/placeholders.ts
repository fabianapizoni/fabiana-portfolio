/**
 * Dados estáticos do site (tudo que não é texto traduzível).
 *
 * TUDO AQUI É PLACEHOLDER. Para publicar com dados reais:
 *  - Fotos: coloque os arquivos em /public/images e informe o caminho
 *    (ex: "/images/hero.jpg"). `null` mostra uma caixa de placeholder.
 *  - Logos de marca: adicione itens em `brandLogos`. A seção "Marcas
 *    atendidas" só aparece quando houver pelo menos uma.
 *  - Fotos de bastidor: adicione itens em `gallery`. A seção "Fotos" só
 *    aparece quando houver pelo menos uma.
 *  - Vídeos: adicione itens em `videos` (ID de vídeos "não listados" do
 *    YouTube). Enquanto a lista estiver vazia, o site mostra `sampleVideos`.
 */

// ---------------------------------------------------------------------------
// Contato
// ---------------------------------------------------------------------------

export const contact = {
  /** Só números, com DDI + DDD. Ex: "5511999999999". */
  whatsapp: "5500000000000",
  email: "[email@exemplo.com]",
};

export type SocialNetwork = "instagram" | "tiktok" | "youtube" | "email";

export const socialLinks: { network: SocialNetwork; label: string; url: string }[] = [
  { network: "instagram", label: "[@seuinstagram]", url: "https://instagram.com/" },
  { network: "tiktok", label: "[@seutiktok]", url: "https://tiktok.com/" },
  { network: "youtube", label: "[YouTube]", url: "https://youtube.com/" },
  { network: "email", label: contact.email, url: `mailto:${contact.email}` },
];

// ---------------------------------------------------------------------------
// Fotos principais (null = mostra placeholder)
// ---------------------------------------------------------------------------

export const photos: Record<"hero" | "about" | "studio" | "contact", string | null> = {
  hero: null,
  about: null,
  studio: null,
  contact: null,
};

// ---------------------------------------------------------------------------
// Números (todos zerados até a Fabiana preencher)
// ---------------------------------------------------------------------------

export const heroStats = {
  brands: "0",
  followers: "0",
};

export const aboutStats = {
  age: "[00]",
  base: "[Cidade]",
  experience: "[0 anos]",
  followers: "0",
};

export type InfluencerMetrics = {
  platform: "Instagram" | "TikTok";
  handle: string;
  url: string;
  views: string;
  followers: string;
  gender: string;
  age: string;
  location: string;
};

export const influencerMetrics: InfluencerMetrics[] = [
  {
    platform: "Instagram",
    handle: "[@seuinstagram]",
    url: "https://instagram.com/",
    views: "0",
    followers: "0",
    gender: "[0% F · 0% M]",
    age: "[00–00]",
    location: "[Cidade, UF]",
  },
  {
    platform: "TikTok",
    handle: "[@seutiktok]",
    url: "https://tiktok.com/",
    views: "0",
    followers: "0",
    gender: "[0% F · 0% M]",
    age: "[00–00]",
    location: "[Cidade, UF]",
  },
];

// ---------------------------------------------------------------------------
// Marcas atendidas (vazio = seção escondida)
// ---------------------------------------------------------------------------

export type BrandLogo = { name: string; src: string; background?: string };

/** Ex: { name: "Marca X", src: "/images/brands/marca-x.png", background: "#f2e8df" } */
export const brandLogos: BrandLogo[] = [];

// ---------------------------------------------------------------------------
// Portfólio de vídeos
// ---------------------------------------------------------------------------

export type VideoCategory = "influencer" | "ugc";

export const nichesByCategory = {
  influencer: ["lifestyle", "beauty", "fashion", "travel"],
  ugc: ["tutorial", "review", "unboxing", "storytelling"],
} as const satisfies Record<VideoCategory, readonly string[]>;

export type VideoNiche = (typeof nichesByCategory)[VideoCategory][number];

export type Video = {
  id: string;
  /** ID do vídeo no YouTube (de preferência "não listado"). null = vídeo de exemplo. */
  youtubeId: string | null;
  category: VideoCategory;
  niche: VideoNiche;
  title: { pt: string; en: string };
};

/** Vídeos reais. Ex: { id: "v1", youtubeId: "AbCdEfGhIjK", category: "ugc", niche: "review", title: { pt: "...", en: "..." } } */
export const videos: Video[] = [];

/** Vídeos de exemplo genéricos, exibidos enquanto `videos` estiver vazio. */
export const sampleVideos: Video[] = (Object.keys(nichesByCategory) as VideoCategory[]).flatMap(
  (category) =>
    nichesByCategory[category].map((niche, i) => ({
      id: `sample-${category}-${i}`,
      youtubeId: null,
      category,
      niche,
      title: { pt: "[Título do vídeo]", en: "[Video title]" },
    })),
);

// ---------------------------------------------------------------------------
// Fotos de bastidor / entregas (vazio = seção escondida)
// ---------------------------------------------------------------------------

export type GalleryPhoto = { src: string; alt: string; size?: "tall" | "wide" | "normal" };

export const gallery: GalleryPhoto[] = [];

// ---------------------------------------------------------------------------
// Prints de resultado (vazio = mostra caixas de placeholder)
// ---------------------------------------------------------------------------

export const resultPrints: { src: string; alt: string }[] = [];

// ---------------------------------------------------------------------------
// Comportamento
// ---------------------------------------------------------------------------

export const settings = {
  /** Mostra o banner fechável no topo. */
  showTopBanner: true,
  /** Atraso (ms) para o popup de proposta aparecer. */
  popupDelayMs: 1500,
};
