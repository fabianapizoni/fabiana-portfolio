"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { settings } from "@/lib/data/placeholders";
import { openWhatsApp } from "@/lib/whatsapp";
import { CloseIcon, WhatsAppIcon } from "@/components/ui/icons";

const SESSION_KEY = "proposal-popup-seen";

/** Aparece ~1,5s após carregar; depois de fechado, não volta na mesma sessão. */
export function ProposalPopup() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* ignora */
    }
    if (seen) return;
    const timer = setTimeout(() => setOpen(true), settings.popupDelayMs);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignora */
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid animate-fade-in place-items-center bg-ink/50 p-4" onClick={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="proposal-popup-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md animate-pop-in rounded-3xl bg-bg p-8 text-center shadow-2xl"
      >
        <button
          type="button"
          onClick={close}
          aria-label={t.popup.close}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full hover:bg-ink/5"
        >
          <CloseIcon />
        </button>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.popup.eyebrow}</p>
        <h2 id="proposal-popup-title" className="mt-3 font-display text-3xl">
          {t.popup.title}
        </h2>
        <p className="mt-3 leading-relaxed text-muted">{t.popup.text}</p>
        <button
          type="button"
          onClick={() => {
            openWhatsApp(t.contact.message);
            close();
          }}
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition hover:opacity-90"
        >
          <WhatsAppIcon width={20} height={20} />
          {t.popup.button}
        </button>
      </div>
    </div>
  );
}
