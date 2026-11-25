import type { MetadataRoute } from "next";
import { site } from "@/site.config";

export const dynamic = "force-static";

// AI answer engines are explicitly welcome (AEO / GEO).
const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${site.seo.url}/sitemap.xml`,
    host: site.seo.url,
  };
}
