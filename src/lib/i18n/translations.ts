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
      "[Descrição curta para Google e redes sociais: quem é a Fabiana e o que ela entrega para as marcas.]",
  },

  banner: {
    text: "[Agenda aberta para novas parcerias em {mês}]",
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
    availability: "[Disponível para novas parcerias]",
    greeting: "Olá, eu sou",
    name: "Fabiana Pizoni",
    role: "UGC Creator & Influenciadora",
    tagline:
      "[Sua tagline: em uma frase, o que você entrega para as marcas e por que funciona.]",
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
    line1: "[Frase de impacto: primeira linha]",
    line2: "[Frase de impacto: segunda linha]",
  },

  brands: {
    eyebrow: "Marcas atendidas",
    title: "[Marcas que já confiaram no meu trabalho]",
  },

  about: {
    eyebrow: "Sobre mim",
    title: "Oi, sou a Fabiana!",
    paragraphs: [
      "Tenho 41 anos e sou de Cacoal, Rondônia. Sou **cristã**, **mãe**, **dona de casa** e **advogada**. Hoje também me dedico à **criação de conteúdo UGC**: transformo experiências reais com produtos e serviços em conteúdos autênticos e criativos, que criam conexão com quem assiste.",
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
    title: "[Título sobre seu perfil como influenciadora]",
    intro: "[Resumo do seu perfil: sobre o que você fala e quem te acompanha.]",
    topicsTitle: "Sobre o que eu falo",
    topics: ["[Tópico 1]", "[Tópico 2]", "[Tópico 3]", "[Tópico 4]"],
  },

  ugc: {
    eyebrow: "Como UGC Creator",
    title: "[Título sobre seu trabalho como UGC Creator]",
    intro: "[Explique o que é UGC no seu trabalho e para quais marcas você produz.]",
    formats: [
      { title: "Tutoriais", text: "[Como você apresenta o produto passo a passo.]" },
      { title: "Storytelling", text: "[Como você cria uma história em torno do produto.]" },
      { title: "Reviews", text: "[Como você avalia o produto com honestidade.]" },
      { title: "Unboxing", text: "[Como você mostra a primeira impressão do produto.]" },
      { title: "Antes e depois", text: "[Como você mostra o resultado do produto.]" },
      { title: "Depoimentos", text: "[Como você grava depoimentos para anúncios.]" },
    ],
  },

  portfolio: {
    eyebrow: "Portfólio",
    title: "[Título da seção de portfólio]",
    intro: "[Breve introdução: que tipo de conteúdo a marca vai encontrar aqui.]",
    categoryLabel: "Categoria",
    nicheLabel: "Tema",
    categories: {
      all: "Todos",
      influencer: "Influenciadora",
      ugc: "UGC",
    },
    nicheAll: "Todos os temas",
    niches: {
      lifestyle: "[Lifestyle]",
      beauty: "[Beleza]",
      fashion: "[Moda]",
      travel: "[Viagem]",
      tutorial: "[Tutorial]",
      review: "[Review]",
      unboxing: "[Unboxing]",
      storytelling: "[Storytelling]",
    },
    sampleNotice: "Vídeos de exemplo. Os vídeos reais aparecem aqui assim que forem cadastrados.",
    sampleTitle: "Vídeo de exemplo",
    play: "Assistir vídeo",
    empty: "Nenhum vídeo neste filtro ainda.",
  },

  photos: {
    eyebrow: "Fotos UGC",
    title: "[Fotos usando os produtos]",
    intro: "[Breve texto sobre suas fotos de produto para marcas.]",
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
    title: "[Dúvidas comuns]",
    items: [
      { q: "[Qual é o prazo de entrega?]", a: "[Resposta.]" },
      { q: "[Os direitos de uso estão inclusos?]", a: "[Resposta.]" },
      { q: "[Quantas revisões estão inclusas?]", a: "[Resposta.]" },
      { q: "[Preciso enviar o produto?]", a: "[Resposta.]" },
      { q: "[Como funciona o pagamento?]", a: "[Resposta.]" },
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
    title: "[Vamos criar juntos?]",
    text: "[Convite para a marca entrar em contato. Explique o que ela recebe ao solicitar uma proposta.]",
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
    eyebrow: "[Agenda aberta]",
    title: "Vamos trabalhar juntas?",
    text: "[Texto curto convidando a marca a solicitar uma proposta.]",
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
      "[Short description for Google and social media: who Fabiana is and what she delivers to brands.]",
  },

  banner: {
    text: "[Now booking new partnerships for {month}]",
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
    availability: "[Available for new partnerships]",
    greeting: "Hi, I'm",
    name: "Fabiana Pizoni",
    role: "UGC Creator & Influencer",
    tagline: "[Your tagline: in one sentence, what you deliver to brands and why it works.]",
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
    line1: "[Impact statement: first line]",
    line2: "[Impact statement: second line]",
  },

  brands: {
    eyebrow: "Brands",
    title: "[Brands that have trusted my work]",
  },

  about: {
    eyebrow: "About me",
    title: "Hi, I'm Fabiana!",
    paragraphs: [
      "I'm 41 and from Cacoal, Rondônia (Brazil). I'm a **Christian**, a **mother**, a **homemaker** and a **lawyer**. Today I'm also dedicated to **UGC content creation**: I turn real experiences with products and services into authentic, creative content that connects with viewers.",
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
    title: "[Title about your influencer profile]",
    intro: "[Profile summary: what you talk about and who follows you.]",
    topicsTitle: "What I talk about",
    topics: ["[Topic 1]", "[Topic 2]", "[Topic 3]", "[Topic 4]"],
  },

  ugc: {
    eyebrow: "As a UGC Creator",
    title: "[Title about your UGC work]",
    intro: "[Explain what UGC means in your work and which brands you create for.]",
    formats: [
      { title: "Tutorials", text: "[How you present the product step by step.]" },
      { title: "Storytelling", text: "[How you build a story around the product.]" },
      { title: "Reviews", text: "[How you review the product honestly.]" },
      { title: "Unboxing", text: "[How you show your first impression of the product.]" },
      { title: "Before & after", text: "[How you show the product's results.]" },
      { title: "Testimonials", text: "[How you record testimonials for ads.]" },
    ],
  },

  portfolio: {
    eyebrow: "Portfolio",
    title: "[Portfolio section title]",
    intro: "[Short introduction: what kind of content brands will find here.]",
    categoryLabel: "Category",
    nicheLabel: "Theme",
    categories: {
      all: "All",
      influencer: "Influencer",
      ugc: "UGC",
    },
    nicheAll: "All themes",
    niches: {
      lifestyle: "[Lifestyle]",
      beauty: "[Beauty]",
      fashion: "[Fashion]",
      travel: "[Travel]",
      tutorial: "[Tutorial]",
      review: "[Review]",
      unboxing: "[Unboxing]",
      storytelling: "[Storytelling]",
    },
    sampleNotice: "Sample videos. Real videos will appear here once they're added.",
    sampleTitle: "Sample video",
    play: "Play video",
    empty: "No videos for this filter yet.",
  },

  photos: {
    eyebrow: "UGC photos",
    title: "[Photos using the products]",
    intro: "[Short text about your product photos for brands.]",
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
    title: "[Common questions]",
    items: [
      { q: "[What's the turnaround time?]", a: "[Answer.]" },
      { q: "[Are usage rights included?]", a: "[Answer.]" },
      { q: "[How many revisions are included?]", a: "[Answer.]" },
      { q: "[Do I need to ship the product?]", a: "[Answer.]" },
      { q: "[How does payment work?]", a: "[Answer.]" },
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
    title: "[Shall we create together?]",
    text: "[Invite brands to get in touch. Explain what they get when requesting a proposal.]",
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
    eyebrow: "[Now booking]",
    title: "Shall we work together?",
    text: "[Short text inviting the brand to request a proposal.]",
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
