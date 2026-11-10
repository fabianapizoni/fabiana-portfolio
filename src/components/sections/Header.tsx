"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Lang } from "@/lib/i18n/translations";
import { openWhatsApp } from "@/lib/whatsapp";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#sobre", label: t.nav.about },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#feedbacks", label: t.nav.feedbacks },
    { href: "#contato", label: t.nav.contact },
  ];

  return (
    <header className="border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-display text-lg tracking-tight md:text-xl">
          Fabiana Pizoni
        </a>

        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} setLang={setLang} label={t.nav.language} />
          <button
            type="button"
            onClick={() => openWhatsApp(t.contact.message)}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition hover:opacity-90 sm:inline-flex"
          >
            {t.nav.cta}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-ink/5 lg:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-bg px-4 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-line py-3 text-base"
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => openWhatsApp(t.contact.message)}
            className="mt-5 w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink"
          >
            {t.nav.cta}
          </button>
        </nav>
      )}
    </header>
  );
}

function LangSwitch({ lang, setLang, label }: { lang: Lang; setLang: (l: Lang) => void; label: string }) {
  return (
    <div role="group" aria-label={label} className="flex rounded-full border border-line p-0.5 text-xs font-semibold">
      {(["pt", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1.5 uppercase transition ${
            lang === l ? "bg-ink text-bg" : "text-muted hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
