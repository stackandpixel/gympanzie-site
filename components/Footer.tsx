import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "@/components/BrandIcons";
import { site } from "@/site.config";
import { instagramUrl } from "@/lib/whatsapp";

export function Footer() {
  const social = [
    { href: instagramUrl, label: "Gympanzie on Instagram", Icon: Instagram },
    { href: site.social.youtube, label: "Gympanzie on YouTube", Icon: Youtube },
    { href: site.social.facebook, label: "Gympanzie on Facebook", Icon: Facebook },
    { href: site.social.linkedin, label: "Payas Bharadwaj on LinkedIn", Icon: Linkedin },
  ];
  return (
    <footer className="bg-ink pb-28 pt-14 text-white/80 on-dark lg:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-extrabold text-white">
            Gym<span className="text-banana">panzie</span>
          </p>
          <p className="mt-3 max-w-sm text-sm">
            Online fat-loss coaching for busy professionals, based in {site.contact.locality}, serving clients across India.
          </p>
          <ul className="mt-5 flex gap-3">
            {social.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-white/25 hover:border-banana hover:text-banana"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer">
          <p className="font-display text-lg font-bold text-white">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/#method" className="hover:text-banana">How it works</Link></li>
            <li><Link href="/#results" className="hover:text-banana">Client results</Link></li>
            <li><Link href="/calorie-calculator/" className="hover:text-banana">Calorie calculator</Link></li>
            <li><Link href="/#faq" className="hover:text-banana">FAQ</Link></li>
            <li><Link href="/privacy/" className="hover:text-banana">Privacy</Link></li>
          </ul>
        </nav>
        <address className="text-sm not-italic">
          <p className="font-display text-lg font-bold text-white">Visit</p>
          <p className="mt-3">{site.contact.address}</p>
          <a href={site.contact.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block underline hover:text-banana">
            Open in Google Maps
          </a>
        </address>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/15 px-5 pt-6 text-xs text-white/60">
        <p>
          © {new Date().getFullYear()} Gympanzie. Individual results vary. The calorie calculator gives estimates only,
          so please speak to your doctor before changing your diet or exercise.
        </p>
      </div>
    </footer>
  );
}
