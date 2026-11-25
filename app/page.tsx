import { homeJsonLd } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Method } from "@/components/sections/Method";
import { Results } from "@/components/sections/Results";
import { Coach } from "@/components/sections/Coach";
import { Faq } from "@/components/sections/Faq";
import { Insights } from "@/components/sections/Insights";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Hero />
      <Marquee />
      <Method />
      <Results />
      <Coach />
      <Faq />
      <Insights />
      <Contact />
    </>
  );
}
