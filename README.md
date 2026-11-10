# Fabiana Pizoni · Portfólio UGC Creator & Influenciadora

Site estático de página única, em Next.js (App Router), TypeScript e Tailwind CSS. Não tem painel admin nem banco de dados.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera a pasta /out, que pode ir para qualquer hospedagem estática
```

## Onde editar o conteúdo

| O quê | Arquivo |
|---|---|
| Todos os textos PT/EN | `src/lib/i18n/translations.ts` |
| WhatsApp, redes, fotos, números, logos, vídeos, fotos UGC | `src/lib/data/placeholders.ts` |
| Paleta de cores (outono) | variáveis em `src/app/globals.css` |
| Fontes | `src/app/layout.tsx` |

- Os textos entre `[colchetes]` são placeholders. Use `**negrito**` na bio do "Sobre mim".
- As fotos ficam em `public/images/`. Depois, informe o caminho (ex: `"/images/hero.jpg"`) em `photos`.
- **Marcas** só aparece quando `brandLogos` tiver itens.
- **Fotos UGC**: coloque as imagens em `public/images/ugc/` e liste em `ugcPhotos`.
- **Vídeos:** cadastre em `videos` o ID do YouTube (vídeo "não listado"). Enquanto a lista estiver vazia, o site mostra os vídeos de exemplo.
- **WhatsApp:** em `contact.whatsapp`, coloque só números, com DDI e DDD (ex: `5511999999999`).
