import type { NextConfig } from "next";

// Site 100% estático: `npm run build` gera a pasta /out, pronta para
// qualquer hospedagem estática (Vercel, Netlify, GitHub Pages...).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
