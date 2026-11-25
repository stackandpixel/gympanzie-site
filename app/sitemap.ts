import type { MetadataRoute } from "next";
import { site } from "@/site.config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.seo.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.seo.url}/calorie-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.seo.url}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
