"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { photos, socialLinks, type SocialNetwork } from "@/lib/data/placeholders";
import { openWhatsApp } from "@/lib/whatsapp";
import { Button, Photo, Section, SectionHeading } from "@/components/ui/primitives";
import { InstagramIcon, MailIcon, TikTokIcon, WhatsAppIcon, YouTubeIcon } from "@/components/ui/icons";

export const socialIcons: Record<SocialNetwork, typeof InstagramIcon> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
  email: MailIcon,
};

export function Contact() {
  const { t } = useLanguage();
  return (
    <Section id="contato">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full">
          <Photo src={photos.contact} alt={t.contact.photoPlaceholder} className="rounded-full" />
        </div>

        <div>
          <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.text} />
          <Button onClick={() => openWhatsApp(t.contact.message)} className="w-full sm:w-auto">
            <WhatsAppIcon width={20} height={20} />
            {t.contact.button}
          </Button>

          <p className="mb-3 mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {t.contact.socialTitle}
          </p>
          <ul className="space-y-2">
            {socialLinks.map((s) => {
              const Icon = socialIcons[s.network];
              return (
                <li key={s.network}>
                  <a
                    href={s.url}
                    target={s.network === "email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full py-1 transition hover:text-accent"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-line">
                      <Icon />
                    </span>
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
