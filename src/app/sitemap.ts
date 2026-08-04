import type { MetadataRoute } from "next";
import { properties } from "@/lib/data/properties";
import { services } from "@/lib/data/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/nosotros`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/propiedades`, changeFrequency: "daily", priority: 0.9 },
    { url: `${site.url}/servicios`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/recursos`, changeFrequency: "weekly", priority: 0.4 },
    { url: `${site.url}/contacto`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/servicios/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const propertyRoutes: MetadataRoute.Sitemap = properties.map((p) => ({
    url: `${site.url}/propiedades/${p.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...propertyRoutes];
}
