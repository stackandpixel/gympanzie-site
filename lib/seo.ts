import { site } from "@/site.config";

const url = site.seo.url;
const c = site.contact;
const sameAs = [
  `https://www.instagram.com/${site.social.instagram}/`,
  site.social.facebook,
  site.social.youtube,
  site.social.linkedin,
];

const founderLd = {
  "@type": "Person",
  "@id": `${url}/#founder`,
  name: site.business.founder,
  jobTitle: "Fitness Trainer and Nutrition Coach",
  sameAs: [site.social.linkedin],
  worksFor: { "@id": `${url}/#business` },
  knowsAbout: [
    "Fat loss",
    "Belly fat",
    "Nutrition coaching",
    "Strength and conditioning",
    "Corrective exercise",
    "Indian diet planning",
  ],
};

const businessLd = {
  "@type": site.business.type,
  "@id": `${url}/#business`,
  name: site.business.name,
  url,
  description: site.business.description,
  image: `${url}/opengraph-image/`,
  logo: `${url}/icon.svg`,
  founder: { "@id": `${url}/#founder` },
  address: {
    "@type": "PostalAddress",
    streetAddress: "J-1004, Orchid Sky, Club O7 Road, Shela",
    addressLocality: "Ahmedabad",
    addressRegion: c.region,
    postalCode: c.postalCode,
    addressCountry: c.country,
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City", name: "Ahmedabad" },
  ],
  knowsAbout: ["Fat loss", "Indian meal plans", "Home workouts", "Sleep and fat loss"],
  sameAs,
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: site.business.program,
      description:
        "A 12-week coaching program that helps busy professionals lose fat without strict diets or useless workouts.",
      provider: { "@id": `${url}/#business` },
      areaServed: "IN",
    },
  },
};

const faqLd = {
  "@type": "FAQPage",
  "@id": `${url}/#faq`,
  mainEntity: site.faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const websiteLd = {
  "@type": "WebSite",
  "@id": `${url}/#website`,
  url,
  name: site.business.name,
  inLanguage: "en-IN",
  publisher: { "@id": `${url}/#business` },
};

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [businessLd, founderLd, websiteLd, faqLd],
};

export const calculatorLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calorie and BMR calculator",
  url: `${url}/calorie-calculator/`,
  applicationCategory: "HealthApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
};
