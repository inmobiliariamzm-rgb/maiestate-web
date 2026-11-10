import type { MetadataRoute } from "next";
import { getPropertySlugs } from "@/lib/sanity/queries";
import { DEDICATED_SERVICE_SLUGS } from "@/lib/data/services";
import { getServicioSlugs } from "@/lib/sanity/contenido";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/nosotros`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/propiedades`, changeFrequency: "daily", priority: 0.9 },
    { url: `${site.url}/servicios`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/contable`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/recursos`, changeFrequency: "weekly", priority: 0.4 },
    { url: `${site.url}/contacto`, changeFrequency: "yearly", priority: 0.5 },
  ];

  // /enlaces queda fuera del sitemap a propósito (noindex).
  const serviceSlugs = [...(await getServicioSlugs()), ...DEDICATED_SERVICE_SLUGS];
  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${site.url}/servicios/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const propertySlugs = await getPropertySlugs();
  const propertyRoutes: MetadataRoute.Sitemap = propertySlugs.map((slug) => ({
    url: `${site.url}/propiedades/${slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...propertyRoutes];
}
