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
  influencer: ["home", "tablesetting", "routine", "beauty", "skincare", "travel", "fashion"],
  ugc: ["tutorial", "review", "unboxing", "storytelling", "skincare", "haircare"],
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
    id: "v15",
    youtubeId: "v5kbNerkQ4w",
    category: "ugc",
    niche: "haircare",
    title: { pt: "Elizavecca · óleo capilar CER-100", en: "Elizavecca · CER-100 hair oil" },
    thumb: "/images/videos/elizavecca-oleo.jpg",
  },
  {
    id: "v14",
    youtubeId: "x6_MfWo5qos",
    category: "ugc",
    niche: "skincare",
    title: { pt: "SKIN1004 · espuma de limpeza Centella", en: "SKIN1004 · Centella cleansing foam" },
    thumb: "/images/videos/centella-espuma.jpg",
  },
  {
    id: "v13",
    youtubeId: "IGRpJ0ZrD2k",
    category: "ugc",
    niche: "skincare",
    title: { pt: "Medicube · sérum de ácido hialurônico", en: "Medicube · hyaluronic acid serum" },
    thumb: "/images/videos/medicube-serum.jpg",
  },
  {
    id: "v12",
    youtubeId: "jcG__lYq1ZM",
    category: "ugc",
    niche: "haircare",
    title: { pt: "Fino · máscara capilar japonesa", en: "Fino · Japanese hair mask" },
    thumb: "/images/videos/fino-mascara.jpg",
  },
  {
    id: "v11",
    youtubeId: "E-Mwx4SlYho",
    category: "ugc",
    niche: "skincare",
    title: { pt: "SKIN1004 · óleo de limpeza Centella", en: "SKIN1004 · Centella cleansing oil" },
    thumb: "/images/videos/centella-oleo.jpg",
  },
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
  {
    id: "v3",
    youtubeId: "cboCDqPOP88",
    category: "ugc",
    niche: "review",
    title: { pt: "Zevya · drink funcional com colágeno", en: "Zevya · functional collagen drink" },
    thumb: "/images/videos/zevya.jpg",
  },
  {
    id: "v4",
    youtubeId: "PrkydctlQcg",
    category: "ugc",
    niche: "review",
    title: { pt: "Joico · condicionador K‑PAK", en: "Joico · K‑PAK conditioner" },
    thumb: "/images/videos/joico.jpg",
  },
  {
    id: "v5",
    youtubeId: "wn2HIVKre4s",
    category: "ugc",
    niche: "review",
    title: { pt: "Umbrella · protetor solar com cor", en: "Umbrella · tinted sunscreen" },
    thumb: "/images/videos/umbrella.jpg",
  },
  {
    id: "v6",
    youtubeId: "hTxAw7Xl3Rs",
    category: "ugc",
    niche: "skincare",
    title: { pt: "Medicube · espuma de limpeza coreana", en: "Medicube · Korean cleansing foam" },
    thumb: "/images/videos/medicube.jpg",
  },
  {
    id: "v7",
    youtubeId: "-W71DOBD8yc",
    category: "ugc",
    niche: "review",
    title: { pt: "Shiseido · protetor solar em bastão", en: "Shiseido · sunscreen stick" },
    thumb: "/images/videos/shiseido.jpg",
  },
  {
    id: "v8",
    youtubeId: "yvdlZZzr6K4",
    category: "ugc",
    niche: "review",
    title: { pt: "Finisherfresh · perfume para roupas", en: "Finisherfresh · fabric scent" },
    thumb: "/images/videos/finisherfresh.jpg",
  },
  {
    id: "v9",
    youtubeId: "HYLmmfpaaA0",
    category: "influencer",
    niche: "tablesetting",
    title: { pt: "Mesa posta: não é sobre luxo, é sobre cuidado", en: "Table setting: it's not about luxury, it's about care" },
    thumb: "/images/videos/mesa-posta.jpg",
  },
  {
    id: "v10",
    youtubeId: "YC93klzxwUQ",
    category: "ugc",
    niche: "tutorial",
    title: { pt: "Adeus frizz: fios alinhados em segundos", en: "Goodbye frizz: smooth hair in seconds" },
    thumb: "/images/videos/frizz.jpg",
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
  { src: "/images/ugc/skin1004-centella-oleo.jpg", alt: "Óleo de limpeza SKIN1004 Madagascar Centella", brand: "SKIN1004" },
  { src: "/images/ugc/fino-mascara.jpg", alt: "Máscara capilar Fino Premium Touch", brand: "Fino" },
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
