import type { Config } from "tailwindcss";

// Paleta: as cores vêm de variáveis CSS em src/app/globals.css.
// Para trocar a identidade visual, edite só as variáveis lá.
const withVar = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: withVar("bg"),
        surface: withVar("surface"),
        ink: withVar("ink"),
        muted: withVar("muted"),
        line: withVar("line"),
        accent: withVar("accent"),
        "accent-ink": withVar("accent-ink"),
        ochre: withVar("ochre"),
        gold: withVar("gold"),
        rust: withVar("rust"),
        sage: withVar("sage"),
        olive: withVar("olive"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "pop-in": {
          from: { opacity: "0", transform: "translateY(12px) scale(.97)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 45s linear infinite",
        "fade-in": "fade-in .25s ease-out",
        "pop-in": "pop-in .3s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
