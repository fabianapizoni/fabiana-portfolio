import { contact } from "./data/placeholders";

/** Monta o link do WhatsApp com uma mensagem pronta. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Abre o WhatsApp em nova aba com uma mensagem pronta. */
export function openWhatsApp(message: string) {
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}
