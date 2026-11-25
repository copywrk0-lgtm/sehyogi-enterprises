import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.siteUrl) return [];
  const routes = ["/", "/solutions", "/projects", "/calculator", "/about", "/contact"];
  return routes.map((path) => ({ url: `${site.siteUrl}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7 }));
}
