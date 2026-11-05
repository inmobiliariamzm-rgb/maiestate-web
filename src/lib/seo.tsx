import type { Metadata } from "next";
import { site } from "@/lib/site";

// Metadatos y Open Graph compartidos por los dos root layouts
// ((site) y (landing)). El lema vive en site.tagline.
export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "inmobiliaria Maipú",
    "tasaciones Mendoza",
    "contador Maipú",
    "estudio contable Mendoza",
    "administración de consorcios Mendoza",
    "administración de alquileres Maipú",
    "valuación de fondos de comercio Mendoza",
    "inversiones inmobiliarias Mendoza",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: `${site.name} · ${site.tagline}`,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.province,
  addressCountry: "AR",
};

// Datos estructurados: RealEstateAgent + AccountingService como
// `department`. El contador a cargo queda [completar].
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${site.url}/#organizacion`,
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  email: site.contact.email,
  telephone: `+${site.contact.whatsappNumber}`,
  address: postalAddress,
  areaServed: ["Maipú", "Luján de Cuyo", "Gran Mendoza"],
  sameAs: [site.social.instagram],
  employee: {
    "@type": "Person",
    name: site.responsableTecnico.nombre,
    jobTitle: `${site.responsableTecnico.titulo} (${site.responsableTecnico.matricula})`,
  },
  department: {
    "@type": "AccountingService",
    "@id": `${site.url}/contable#departamento-contable`,
    name: `${site.name} · Departamento Contable`,
    url: `${site.url}/contable`,
    email: site.contact.email,
    telephone: `+${site.contact.whatsappNumber}`,
    address: postalAddress,
    employee: {
      "@type": "Person",
      name: site.contador.nombre,
      jobTitle: `Contador a cargo (${site.contador.matricula})`,
    },
  },
};

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Metadatos de una página con title absoluto (ej. "Contador en Maipú,
 * Mendoza · MAIESTATE"). Repite los campos base de Open Graph porque
 * Next reemplaza (no fusiona) el objeto openGraph del layout.
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description?: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { ...baseMetadata.openGraph, title, description, url: path },
    twitter: { ...baseMetadata.twitter, title, description },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
