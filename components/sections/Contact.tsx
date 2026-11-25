import { MapPin } from "lucide-react";
import { Instagram } from "@/components/BrandIcons";
import { site } from "@/site.config";
import { instagramDm, instagramUrl } from "@/lib/whatsapp";
import { EnquiryForm } from "@/components/EnquiryForm";

export function Contact() {
  return (
    <section id="contact" className="bg-jungle py-20 text-white on-dark sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Ready for your <span className="text-banana">12 weeks?</span>
          </h2>
          <p className="mt-5 text-lg text-white/85">
            Tell us your name and number and we&apos;ll continue on WhatsApp: the free video, program details and the next
            step, with no pressure.
          </p>
          <address className="mt-8 flex gap-3 not-italic">
            <MapPin className="mt-1 shrink-0 text-banana" aria-hidden="true" />
            <span>{site.contact.address}</span>
          </address>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-3 hover:text-banana"
          >
            <Instagram className="text-banana" aria-hidden="true" /> Follow @{site.social.instagram}
          </a>
          <a
            href={instagramDm}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-5 inline-flex min-h-11 items-center underline hover:text-banana"
          >
            Message on Instagram
          </a>
          <iframe
            title="Gympanzie location on Google Maps"
            src={site.contact.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-8 h-64 w-full rounded-3xl border-0"
          />
        </div>
        <div className="self-start rounded-3xl bg-paper p-6 text-ink sm:p-8">
          <h3 className="mb-5 text-2xl font-bold">Start on WhatsApp</h3>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
