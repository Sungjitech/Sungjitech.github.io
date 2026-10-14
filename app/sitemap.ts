import type { MetadataRoute } from "next";
import { NAV } from "@/lib/navigation";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set(["/"]);
  for (const section of NAV) for (const item of section.items) paths.add(item.href.split("#")[0]);
  return [...paths].map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "yearly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
