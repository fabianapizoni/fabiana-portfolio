/**
 * Dados estáticos do site (tudo que não é texto traduzível).
 *
 * TUDO AQUI É PLACEHOLDER. Para publicar com dados reais:
 *  - Fotos: coloque os arquivos em /public/images e informe o caminho
 *    (ex: "/images/hero.jpg"). `null` mostra uma caixa de placeholder.
 *  - Logos de marca: adicione itens em `brandLogos`. A seção "Marcas
 *    atendidas" só aparece quando houver pelo menos uma.
 *  - Fotos UGC (usando produtos): adicione itens em `ugcPhotos`.
 *  - Vídeos: adicione itens em `videos` (ID de vídeos "não listados" do
 *    YouTube). Enquanto a lista estiver vazia, o site mostra `sampleVideos`.
 */

// ---------------------------------------------------------------------------
// Contato
// ---------------------------------------------------------------------------

export const contact = {
  /** Só números, com DDI + DDD. Ex: "5511999999999". */
  whatsapp: "5569993684266",
  email: "fabianacpizoni@gmail.com",
};

export type SocialNetwork = "instagram" | "tiktok" | "youtube" | "email";

export const socialLinks: { network: SocialNetwork; label: string; url: string }[] = [
  { network: "instagram", label: "@fabianapizonii", url: "https://instagram.com/fabianapizonii" },
  { network: "tiktok", label: "@fabianapizonii", url: "https://www.tiktok.com/@fabianapizonii" },
  { network: "email", label: contact.email, url: `mailto:${contact.email}` },
];

// ---------------------------------------------------------------------------
// Fotos principais (null = mostra placeholder)
// ---------------------------------------------------------------------------

export const photos: Record<"hero" | "about" | "studio" | "contact", string | null> = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  studio: null,
  contact: "/images/contact.jpg",
};

// ---------------------------------------------------------------------------
// Números (todos zerados até a Fabiana preencher)
// ---------------------------------------------------------------------------

export const heroStats = {
  brands: "0",
};

export const aboutStats = {
  age: "41",
  base: "Cacoal, RO",
};

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
  /** Capa opcional (ex: "/images/videos/x.jpg"). Sem ela, usa a capa do YouTube. */
  thumb?: string;
};

/** Vídeos reais. Ex: { id: "v1", youtubeId: "AbCdEfGhIjK", category: "ugc", niche: "review", title: { pt: "...", en: "..." } } */
export const videos: Video[] = [
  {
    id: "v1",
    youtubeId: "AVLHlgQKuic",
    category: "ugc",
    niche: "review",
    title: { pt: "Downy · perfume para roupas", en: "Downy · laundry scent booster" },
    thumb: "/images/videos/downy.jpg",
  },
  {
    id: "v2",
    youtubeId: "LmRrs9zmzmw",
    category: "ugc",
    niche: "review",
    title: { pt: "e.l.f. · Halo Glow Liquid Filter", en: "e.l.f. · Halo Glow Liquid Filter" },
    thumb: "/images/videos/elf-halo-glow.jpg",
  },
];

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
// Fotos UGC (usando os produtos). Aparecem como miniaturas abaixo do portfólio.
// Coloque os arquivos em /public/images/ugc/ e liste aqui.
// Enquanto estiver vazio, mostra quadradinhos de placeholder.
// ---------------------------------------------------------------------------

export type UgcPhoto = { src: string; alt: string; brand?: string };

/** Ex: { src: "/images/ugc/serum-marca-x.jpg", alt: "Sérum da Marca X", brand: "Marca X" } */
export const ugcPhotos: UgcPhoto[] = [
  { src: "/images/ugc/shiseido-protetor-stick.jpg", alt: "Protetor solar em bastão Shiseido", brand: "Shiseido" },
  { src: "/images/ugc/medicube-cleanser.jpg", alt: "Espuma de limpeza Medicube PDRN", brand: "Medicube" },
  { src: "/images/ugc/downy-calm.jpg", alt: "Perfume para roupas Downy Calm", brand: "Downy" },
  { src: "/images/ugc/joico-k-pak.jpg", alt: "Condicionador Joico K-PAK", brand: "Joico" },
  { src: "/images/ugc/zevya-daily-bloom.jpg", alt: "Drink funcional Zevya Daily Bloom", brand: "Zevya" },
  { src: "/images/ugc/umbrella-protetor-solar.jpg", alt: "Protetor solar Umbrella FPS 50", brand: "Umbrella" },
  { src: "/images/ugc/finisherfresh-floral-2.jpg", alt: "Facilitador de passar roupas Finisherfresh Floral", brand: "Finisherfresh" },
  { src: "/images/ugc/elf-halo-glow.jpg", alt: "Iluminador e.l.f. Halo Glow Liquid Filter", brand: "e.l.f." },
  { src: "/images/ugc/elf-blush.jpg", alt: "Blush e.l.f.", brand: "e.l.f." },
];

/** Quantos quadradinhos de placeholder mostrar enquanto não houver fotos. */
export const ugcPhotoPlaceholderCount = 9;

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
  /** Mostra a seção de feedbacks (depoimentos de marcas). Ligue quando tiver depoimentos. */
  showFeedbacks: false,
  /** Mostra o número de marcas atendidas abaixo da capa. */
  showBrandsCount: false,
  /** Mostra a seção Estúdio & qualidade técnica. */
  showStudio: false,
  /** Atraso (ms) para o popup de proposta aparecer. */
  popupDelayMs: 1500,
};
