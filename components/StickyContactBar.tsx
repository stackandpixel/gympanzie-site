import { MessageCircle } from "lucide-react";
import { Instagram } from "@/components/BrandIcons";
import { instagramDm, whatsappHref } from "@/lib/whatsapp";

export function StickyContactBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-white/10 bg-jungle p-3 lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={whatsappHref("Hi Gympanzie, please send me the free 12-week lean body video.")}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary flex-1"
      >
        <MessageCircle size={20} aria-hidden="true" /> Get free video
      </a>
      <a
        href={instagramDm}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Gympanzie on Instagram"
        className="btn btn-ghost !px-4 text-white"
      >
        <Instagram size={20} aria-hidden="true" />
      </a>
    </div>
  );
}
