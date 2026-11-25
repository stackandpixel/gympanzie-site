import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/site.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyContactBar } from "@/components/StickyContactBar";
import { ChatWidget } from "@/components/ChatWidget";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const title = "Gympanzie | 12-Week Lean Body Program for Busy Professionals";

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  title: { default: title, template: "%s | Gympanzie" },
  description: site.business.description,
  keywords: [...site.seo.keywords],
  applicationName: site.business.name,
  authors: [{ name: site.business.founder, url: site.social.linkedin }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.seo.locale,
    url: site.seo.url,
    siteName: site.business.name,
    title,
    description: site.business.description,
  },
  twitter: { card: "summary_large_image", title, description: site.business.description },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e3b2c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-banana focus:px-5 focus:py-3 focus:font-bold"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyContactBar />
        <ChatWidget />
      </body>
    </html>
  );
}
