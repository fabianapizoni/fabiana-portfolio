/**
 * Conteúdo bilíngue central do site.
 *
 * Todos os textos entre [colchetes] são PLACEHOLDERS: substitua pelo
 * conteúdo real da Fabiana. Use **asteriscos duplos** para negrito nos
 * campos que aceitam rich text (bio do "Sobre mim", por exemplo).
 *
 * O formato do objeto PT define o tipo `Translations`: a versão EN precisa
 * ter exatamente as mesmas chaves (o TypeScript acusa se faltar algo).
 */

export type Lang = "pt" | "en";

const pt = {
  meta: {
    title: "Fabiana Pizoni · UGC Creator & Influenciadora",
    description:
      "Fabiana Pizoni · UGC Creator e influenciadora. Conteúdos reais e leves sobre rotina, casa, beleza, família e viagens.",
  },

  banner: {
    text: "Agenda aberta para parcerias em dezembro",
    cta: "Solicitar proposta",
    close: "Fechar aviso",
  },

  nav: {
    about: "Sobre",
    portfolio: "Portfólio",
    feedbacks: "Feedbacks",
    contact: "Contato",
    cta: "Solicitar proposta",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
  },

  hero: {
    availability: "Disponível para novas parcerias",
    greeting: "Olá, eu sou",
    name: "Fabiana Pizoni",
    role: "UGC Creator & Influenciadora",
    tagline: "Conteúdos reais, leves e estratégicos, que mostram o seu produto no dia a dia e criam conexão com quem assiste.",
    stats: {
      brands: "marcas atendidas",
    },
    ctaPrimary: "Solicitar proposta",
    ctaSecondary: "Ver portfólio",
    photoPlaceholder: "[Foto de capa]",
  },

  marquee: {
    tags: [
      "Lifestyle",
      "Casa & organização",
      "Beleza & skincare",
      "Moda",
      "Família & maternidade",
      "Viagens",
      "Achadinhos",
    ],
  },

  statement: {
    line1: "Dica de amiga",
    line2: "para amiga.",
  },

  brands: {
    eyebrow: "Marcas atendidas",
    title: "[Marcas que já confiaram no meu trabalho]",
  },

  about: {
    eyebrow: "Sobre mim",
    title: "Oi, sou a Fabiana!",
    paragraphs: [
      "Tenho 41 anos e sou de Cacoal, Rondônia. Sou **cristã**, **casada**, **mãe**, **dona de casa** e **advogada**. Hoje também me dedico à **criação de conteúdo UGC**: transformo experiências reais com produtos e serviços em conteúdos autênticos e criativos, que criam conexão com quem assiste.",
      "Gosto de mostrar o produto de forma natural, **inserido no dia a dia**, do jeito que ele é usado de verdade. Me identifico principalmente com **lifestyle, casa e organização, beleza e skincare, moda, família, maternidade, viagens e achadinhos**.",
      "Tenho **facilidade diante das câmeras**, comunicação natural, criatividade e senso estético. E adoro contar histórias de um jeito simples e envolvente.",
    ],
    quote: "Meu objetivo é ajudar marcas a humanizar seus produtos, despertar desejo e se conectar com o consumidor por meio de conteúdos reais, leves e estratégicos.",
    chips: ["UGC Creator", "Influenciadora", "Mãe", "Advogada", "Cacoal, RO"],
    stats: {
      age: "anos",
      base: "Rondônia, Brasil",
    },
    photoPlaceholder: "[Foto Sobre mim]",
  },

  studio: {
    eyebrow: "Estúdio & qualidade técnica",
    title: "[Título sobre sua estrutura de produção]",
    items: [
      {
        title: "Equipamento",
        text: "[Descreva seu equipamento: câmera, luz, áudio e como isso garante qualidade.]",
      },
      {
        title: "Estratégia",
        text: "[Explique como você pensa roteiro, gancho e chamada para ação de cada conteúdo.]",
      },
    ],
    setupTitle: "Setup de gravação",
    badges: ["[Câmera]", "[Microfone]", "[Iluminação]", "[Acessório]", "[Estúdio]"],
    photoPlaceholder: "[Foto do estúdio]",
  },

  influencer: {
    eyebrow: "Como influenciadora",
    title: "Leveza na rotina, em casa e nas viagens",
    intro:
      "No meu perfil, compartilho dicas para a mulher viver a rotina com mais leveza: na condução da casa, no dia a dia com as crianças e na organização do lar. Também levo vocês comigo nas viagens em família, com dicas e momentos especiais. Mostro a vida real, com praticidade, carinho e achadinhos que facilitam a rotina. Tudo de amiga para amiga.",
    topicsTitle: "Sobre o que eu falo",
    topics: ["Rotina com as crianças", "Organização da casa", "Leveza no dia a dia", "Viagens", "Skincare & beleza", "Fé & família", "Achadinhos"],
  },

  ugc: {
    eyebrow: "Como UGC Creator",
    title: "Conteúdo feito para a sua marca usar",
    intro:
      "Vídeos e fotos para a sua marca usar nas redes, em anúncios e no site, mostrando o produto como uma cliente real mostraria.",
    formats: [
      { title: "Tutoriais", text: "Passo a passo de como usar o produto." },
      { title: "Storytelling", text: "Uma história real, com o produto na rotina." },
      { title: "Reviews", text: "Opinião sincera, de amiga para amiga." },
      { title: "Unboxing", text: "Da embalagem ao primeiro uso." },
      { title: "Antes e depois", text: "O resultado do produto na prática." },
      { title: "Depoimentos", text: "Falando direto para a câmera, ideal para anúncios." },
    ],
  },

  portfolio: {
    eyebrow: "Portfólio",
    title: "Veja como eu crio",
    intro:
      "Vídeos feitos com produtos que fazem parte da minha rotina, para você conhecer o meu estilo antes da parceria.",
    categoryLabel: "Categoria",
    nicheLabel: "Tema",
    categories: {
      all: "Todos",
      influencer: "Influenciadora",
      ugc: "UGC",
    },
    nicheAll: "Todos os temas",
    niches: {
      lifestyle: "Lifestyle",
      beauty: "Beleza",
      fashion: "Moda",
      travel: "Viagem",
      tutorial: "Tutorial",
      review: "Review",
      unboxing: "Unboxing",
      storytelling: "Storytelling",
    },
    sampleNotice: "Vídeos de exemplo. Os vídeos reais aparecem aqui assim que forem cadastrados.",
    sampleTitle: "Vídeo de exemplo",
    play: "Assistir vídeo",
    empty: "Nenhum vídeo neste filtro ainda.",
  },

  photos: {
    eyebrow: "Fotos UGC",
    title: "O produto na vida real",
    intro:
      "Fotos espontâneas, como de amiga para amiga, que mostram o seu produto no dia a dia e despertam vontade de ter.",
    placeholder: "[Foto UGC]",
    close: "Fechar foto",
    prev: "Foto anterior",
    next: "Próxima foto",
  },

  feedbacks: {
    eyebrow: "Feedbacks",
    title: "[O que as marcas dizem]",
    prev: "Anterior",
    next: "Próximo",
    testimonials: [
      { quote: "[Depoimento de uma marca parceira.]", author: "[Nome]", brand: "[Marca]" },
      { quote: "[Depoimento de uma marca parceira.]", author: "[Nome]", brand: "[Marca]" },
      { quote: "[Depoimento de uma marca parceira.]", author: "[Nome]", brand: "[Marca]" },
    ],
    printsTitle: "Prints de resultado",
    printPlaceholder: "[Print de resultado]",
  },

  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Tire suas dúvidas",
    items: [
      { q: "Onde a minha marca pode usar os conteúdos?", a: "Onde precisar: nas redes sociais, em anúncios pagos, no site, na loja virtual, em catálogos e em marketplaces." },
      { q: "Por quanto tempo posso usar?", a: "Nas redes sociais da marca, o uso não tem prazo para acabar. Em anúncios pagos, o período é combinado de acordo com a campanha, normalmente alguns meses." },
      { q: "É possível ter exclusividade?", a: "Sim. Se a sua marca quiser que eu não faça conteúdo para concorrentes do mesmo segmento, combinamos as condições e um valor à parte." },
      { q: "Qual é o prazo de entrega?", a: "Os vídeos são entregues em até 7 dias após a marca aprovar o roteiro." },
    ],
  },

  whyUgc: {
    eyebrow: "Por que investir em UGC",
    title: "Por que apostar em UGC agora",
    paragraph:
      "UGC (User Generated Content) é o conteúdo feito por pessoas de verdade: vídeos, fotos e avaliações que mostram o produto no dia a dia, em vez do anúncio tradicional. Por ser espontâneo e criativo, ele aproxima a marca do público e faz as pessoas confiarem mais e interagirem mais.",
    reasons: [
      "Conteúdo real, que passa credibilidade",
      "Pode vender bem mais do que a publicidade tradicional",
      "Ajuda a marca a aparecer melhor nas buscas",
      "Produção de conteúdo sem precisar montar uma equipe interna",
    ],
  },

  contact: {
    eyebrow: "Contato",
    title: "Vamos criar juntas?",
    text: "Me conte sobre a sua marca. Respondo pelo WhatsApp com uma proposta pensada para o seu produto.",
    button: "Solicitar proposta pelo WhatsApp",
    socialTitle: "Redes sociais",
    photoPlaceholder: "[Foto de contato]",
    message:
      "Olá, Fabiana! Vim pelo seu portfólio e gostaria de solicitar uma proposta.\n\nNome:\nMarca/Empresa:\nSite ou Instagram da marca:\nTipo de conteúdo (UGC / Publi):\nQuantidade de vídeos:\nPrazo:",
  },

  footer: {
    rights: "Todos os direitos reservados.",
    backToTop: "Voltar ao topo",
  },

  popup: {
    eyebrow: "Agenda aberta",
    title: "Vamos trabalhar juntas?",
    text: "Conteúdo real, leve e de amiga para amiga, para a sua marca chegar mais perto de quem compra.",
    button: "Solicitar proposta",
    close: "Fechar",
  },

  whatsappFloat: {
    label: "Falar no WhatsApp",
    message: "Olá, Fabiana! Vim pelo seu portfólio.",
  },
};

export type Translations = typeof pt;

const en: Translations = {
  meta: {
    title: "Fabiana Pizoni · UGC Creator & Influencer",
    description:
      "Fabiana Pizoni · UGC Creator and influencer. Real, light content about routine, home, beauty, family and travel.",
  },

  banner: {
    text: "Now booking partnerships for December",
    cta: "Request a proposal",
    close: "Close notice",
  },

  nav: {
    about: "About",
    portfolio: "Portfolio",
    feedbacks: "Feedback",
    contact: "Contact",
    cta: "Request a proposal",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },

  hero: {
    availability: "Available for new partnerships",
    greeting: "Hi, I'm",
    name: "Fabiana Pizoni",
    role: "UGC Creator & Influencer",
    tagline: "Real, light and strategic content that shows your product in everyday life and connects with viewers.",
    stats: {
      brands: "brands served",
    },
    ctaPrimary: "Request a proposal",
    ctaSecondary: "View portfolio",
    photoPlaceholder: "[Cover photo]",
  },

  marquee: {
    tags: [
      "Lifestyle",
      "Home & organization",
      "Beauty & skincare",
      "Fashion",
      "Family & motherhood",
      "Travel",
      "Great finds",
    ],
  },

  statement: {
    line1: "A tip from one friend",
    line2: "to another.",
  },

  brands: {
    eyebrow: "Brands",
    title: "[Brands that have trusted my work]",
  },

  about: {
    eyebrow: "About me",
    title: "Hi, I'm Fabiana!",
    paragraphs: [
      "I'm 41 and from Cacoal, Rondônia (Brazil). I'm a **Christian**, **married**, a **mother**, a **homemaker** and a **lawyer**. Today I'm also dedicated to **UGC content creation**: I turn real experiences with products and services into authentic, creative content that connects with viewers.",
      "I like to show products naturally, **as part of everyday life**, the way they're really used. I relate most to **lifestyle, home and organization, beauty and skincare, fashion, family, motherhood, travel and great finds**.",
      "I'm **comfortable on camera**, with natural communication, creativity and an eye for aesthetics. And I love telling stories in a simple, engaging way.",
    ],
    quote: "My goal is to help brands humanize their products, spark desire and connect with consumers through real, light and strategic content.",
    chips: ["UGC Creator", "Influencer", "Mother", "Lawyer", "Cacoal, RO"],
    stats: {
      age: "years old",
      base: "Rondônia, Brazil",
    },
    photoPlaceholder: "[About me photo]",
  },

  studio: {
    eyebrow: "Studio & technical quality",
    title: "[Title about your production setup]",
    items: [
      {
        title: "Equipment",
        text: "[Describe your gear: camera, lighting, audio and how it ensures quality.]",
      },
      {
        title: "Strategy",
        text: "[Explain how you plan the script, hook and call to action of each piece.]",
      },
    ],
    setupTitle: "Recording setup",
    badges: ["[Camera]", "[Microphone]", "[Lighting]", "[Accessory]", "[Studio]"],
    photoPlaceholder: "[Studio photo]",
  },

  influencer: {
    eyebrow: "As an influencer",
    title: "Lightness in everyday life, at home and on the road",
    intro:
      "On my profile, I share tips to help women live their routine with more lightness: running the home, everyday life with the kids and keeping the house organized. I also take you along on our family trips, with tips and special moments. I show real life, with practicality, warmth and great finds that make the routine easier. All from one friend to another.",
    topicsTitle: "What I talk about",
    topics: ["Routine with kids", "Home organization", "Lightness every day", "Travel", "Skincare & beauty", "Faith & family", "Great finds"],
  },

  ugc: {
    eyebrow: "As a UGC Creator",
    title: "Content made for your brand to use",
    intro:
      "Videos and photos for your brand to use on social media, in ads and on your website, showing the product the way a real customer would.",
    formats: [
      { title: "Tutorials", text: "Step by step on how to use the product." },
      { title: "Storytelling", text: "A real story, with the product in everyday life." },
      { title: "Reviews", text: "An honest opinion, from one friend to another." },
      { title: "Unboxing", text: "From the packaging to the first use." },
      { title: "Before & after", text: "The product's results in practice." },
      { title: "Testimonials", text: "Speaking straight to camera, ideal for ads." },
    ],
  },

  portfolio: {
    eyebrow: "Portfolio",
    title: "See how I create",
    intro: "Videos made with products that are part of my routine, so you can get to know my style before we partner.",
    categoryLabel: "Category",
    nicheLabel: "Theme",
    categories: {
      all: "All",
      influencer: "Influencer",
      ugc: "UGC",
    },
    nicheAll: "All themes",
    niches: {
      lifestyle: "Lifestyle",
      beauty: "Beauty",
      fashion: "Fashion",
      travel: "Travel",
      tutorial: "Tutorial",
      review: "Review",
      unboxing: "Unboxing",
      storytelling: "Storytelling",
    },
    sampleNotice: "Sample videos. Real videos will appear here once they're added.",
    sampleTitle: "Sample video",
    play: "Play video",
    empty: "No videos for this filter yet.",
  },

  photos: {
    eyebrow: "UGC photos",
    title: "The product in real life",
    intro: "Natural photos, like a tip from a friend, that show your product in everyday life and make people want it.",
    placeholder: "[UGC photo]",
    close: "Close photo",
    prev: "Previous photo",
    next: "Next photo",
  },

  feedbacks: {
    eyebrow: "Feedback",
    title: "[What brands say]",
    prev: "Previous",
    next: "Next",
    testimonials: [
      { quote: "[Testimonial from a partner brand.]", author: "[Name]", brand: "[Brand]" },
      { quote: "[Testimonial from a partner brand.]", author: "[Name]", brand: "[Brand]" },
      { quote: "[Testimonial from a partner brand.]", author: "[Name]", brand: "[Brand]" },
    ],
    printsTitle: "Result screenshots",
    printPlaceholder: "[Result screenshot]",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Got questions?",
    items: [
      { q: "Where can my brand use the content?", a: "Wherever you need: social media, paid ads, your website, online store, catalogs and marketplaces." },
      { q: "For how long can I use it?", a: "On the brand's social media, there's no time limit. For paid ads, the period is agreed per campaign, usually a few months." },
      { q: "Can I get exclusivity?", a: "Yes. If your brand wants me not to create content for competitors in the same segment, we agree on the terms and a separate fee." },
      { q: "What's the turnaround time?", a: "Videos are delivered within 7 days after the brand approves the script." },
    ],
  },

  whyUgc: {
    eyebrow: "Why invest in UGC",
    title: "Why bet on UGC now",
    paragraph:
      "UGC (User Generated Content) is content made by real people: videos, photos and reviews that show the product in everyday life, instead of a traditional ad. Because it feels natural and creative, it brings the brand closer to its audience and builds more trust and engagement.",
    reasons: [
      "Real content that builds credibility",
      "Can sell far more than traditional advertising",
      "Helps the brand show up better in search",
      "Content production without building an in-house team",
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Shall we create together?",
    text: "Tell me about your brand. I'll reply on WhatsApp with a proposal made for your product.",
    button: "Request a proposal on WhatsApp",
    socialTitle: "Social media",
    photoPlaceholder: "[Contact photo]",
    message:
      "Hi Fabiana! I found your portfolio and would like to request a proposal.\n\nName:\nBrand/Company:\nBrand website or Instagram:\nContent type (UGC / Sponsored):\nNumber of videos:\nDeadline:",
  },

  footer: {
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },

  popup: {
    eyebrow: "Now booking",
    title: "Shall we work together?",
    text: "Real, light content, from one friend to another, to bring your brand closer to the people who buy.",
    button: "Request a proposal",
    close: "Close",
  },

  whatsappFloat: {
    label: "Chat on WhatsApp",
    message: "Hi Fabiana! I found your portfolio.",
  },
};

export const translations: Record<Lang, Translations> = { pt, en };

export const DEFAULT_LANG: Lang = "pt";
export const LANG_STORAGE_KEY = "lang";
