"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { socialLinks } from "@/lib/data/placeholders";
import { socialIcons } from "./Contact";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 text-sm text-muted sm:px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg text-ink">Fabiana Pizoni</p>
          <p>
            © {year} Fabiana Pizoni. {t.footer.rights}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map((s) => {
            const Icon = socialIcons[s.network];
            return (
              <a
                key={s.network}
                href={s.url}
                target={s.network === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line transition hover:text-ink"
              >
                <Icon width={18} height={18} />
              </a>
            );
          })}
        </div>
        <a href="#top" className="underline-offset-4 hover:text-ink hover:underline">
          {t.footer.backToTop} ↑
        </a>
      </div>
    </footer>
  );
}
