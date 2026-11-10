"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { settings } from "@/lib/data/placeholders";
import { CloseIcon } from "@/components/ui/icons";

export function TopBanner() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(settings.showTopBanner);
  if (!open) return null;

  return (
    <div className="relative bg-ink px-12 py-2.5 text-center text-xs text-bg sm:text-sm">
      <span>{t.banner.text}</span>{" "}
      <a href="#contato" className="font-semibold underline underline-offset-4">
        {t.banner.cta}
      </a>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label={t.banner.close}
        className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full hover:bg-bg/10"
      >
        <CloseIcon width={16} height={16} />
      </button>
    </div>
  );
}
