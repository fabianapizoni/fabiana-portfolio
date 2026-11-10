"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";

export function WhatsAppFloat() {
  const { t } = useLanguage();
  return (
    <a
      href={whatsappUrl(t.whatsappFloat.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappFloat.label}
      title={t.whatsappFloat.label}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <WhatsAppIcon width={28} height={28} />
    </a>
  );
}
