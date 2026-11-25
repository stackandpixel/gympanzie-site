import { site } from "@/site.config";

export type Enquiry = {
  name: string;
  phone: string;
  interest?: string;
  message?: string;
};

export function buildWhatsAppUrl(message: string, number: string = site.contact.whatsapp) {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function formatEnquiry(e: Enquiry) {
  const lines = [
    "*New enquiry from the website*",
    `*Name:* ${e.name}`,
    `*Phone:* ${e.phone}`,
    e.interest ? `*Interested in:* ${e.interest}` : "",
    e.message ? `*Message:* ${e.message.slice(0, 500)}` : "",
    `Source: website | @${site.social.instagram}`,
  ];
  return lines.filter(Boolean).join("\n");
}

export const whatsappHref = (
  text = "Hi Gympanzie, I'd like to know more about the 12-Week Lean Body Program.",
) => buildWhatsAppUrl(text);

export const instagramUrl = `https://instagram.com/${site.social.instagram}`;
export const instagramDm = `https://ig.me/m/${site.social.instagram}`;
