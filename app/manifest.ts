import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gympanzie",
    short_name: "Gympanzie",
    description: "12-Week Lean Body Program for busy professionals",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f6f1",
    theme_color: "#0e3b2c",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
