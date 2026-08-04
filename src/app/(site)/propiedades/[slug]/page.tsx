import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPropertyBySlug, getPropertySlugs } from "@/lib/sanity/queries";
import { formatPrice, operacionLabel, tipoLabel } from "@/lib/format";
import PropertyImage from "@/components/PropertyImage";
import ContactForm from "@/components/forms/ContactForm";
import { site, buildWhatsAppLink } from "@/lib/site";

export async function generateStaticParams() {
  const slugs = await getPropertySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/propiedades/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) return {};

  return {
    title: property.titulo,
    description: property.descripcion,
  };
}

export default async function PropertyDetailPage({
  params,
}: PageProps<"/propiedades/[slug]">) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) notFound();

  const datosTecnicos: [string, string | number][] = [
    ["Operación", operacionLabel(property.operacion)],
    ["Tipo", tipoLabel(property.tipo)],
    ["Zona", property.zona],
    ["Ambientes", property.ambientes || "—"],
    ["Dormitorios", property.dormitorios || "—"],
    ["Baños", property.banos || "—"],
    ["Superficie cubierta", property.superficieCubierta ? `${property.superficieCubierta} m²` : "—"],
    ["Superficie total", `${property.superficieTotal} m²`],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.titulo,
    description: property.descripcion,
    url: `${site.url}/propiedades/${property.slug}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: property.direccion,
      addressLocality: property.zona,
      addressRegion: "Mendoza",
      addressCountry: "AR",
    },
    offers: {
      "@type": "Offer",
      price: property.precio,
      priceCurrency: property.moneda,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/propiedades" className="text-sm text-navy/60 hover:text-gold">
        ← Volver a propiedades
      </Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-navy/50">
            {property.zona} · {operacionLabel(property.operacion)}
          </p>
          <h1 className="mt-1 font-serif text-3xl font-semibold text-navy sm:text-4xl">
            {property.titulo}
          </h1>
          <p className="mt-1 text-sm text-navy/60">{property.direccion}</p>
        </div>
        <p className="font-serif text-3xl font-semibold text-navy">
          {formatPrice(property.precio, property.moneda)}
        </p>
      </div>

      <div className="mt-8 grid gap-2 sm:grid-cols-4 sm:grid-rows-2">
        {["a", "b", "c", "d", "e"].map((suffix, i) => (
          <PropertyImage
            key={suffix}
            image={property.imagenes?.[i]}
            seed={property.id + suffix}
            alt={property.titulo}
            label={i === 0 ? tipoLabel(property.tipo) : undefined}
            className={
              i === 0
                ? "h-72 sm:col-span-2 sm:row-span-2 sm:h-full"
                : "h-32 sm:h-full"
            }
          />
        ))}
      </div>
      {(!property.imagenes || property.imagenes.length === 0) && (
        <p className="mt-2 text-xs text-navy/40">
          Fotos de ejemplo — se reemplazarán por la galería real cuando se
          carguen en el panel de contenido (/studio).
        </p>
      )}

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-serif text-2xl font-semibold text-navy">Descripción</h2>
          <p className="mt-3 text-navy/80">{property.descripcion}</p>

          {property.caracteristicas.length > 0 && (
            <>
              <h3 className="mt-8 font-serif text-xl font-semibold text-navy">
                Características
              </h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-navy/70">
                {property.caracteristicas.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {c}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h3 className="mt-8 font-serif text-xl font-semibold text-navy">Datos técnicos</h3>
          <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            {datosTecnicos.map(([label, value]) => (
              <div key={label}>
                <dt className="text-navy/50">{label}</dt>
                <dd className="font-medium text-navy">{value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-8 font-serif text-xl font-semibold text-navy">Ubicación</h3>
          <div className="mt-3 overflow-hidden rounded-sm border border-navy/10">
            <iframe
              title={`Mapa de ${property.zona}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${property.direccion}, ${property.zona}, Mendoza, Argentina`
              )}&output=embed`}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <aside className="flex flex-col gap-6">
          <div className="rounded-sm border border-navy/10 bg-white p-6">
            <a
              href={buildWhatsAppLink(
                `Hola MAIESTATE, quiero consultar por la propiedad "${property.titulo}" (${site.url}/propiedades/${property.slug}).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#25D366] px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Consultar por WhatsApp
            </a>
          </div>

          <div className="rounded-sm border border-navy/10 bg-white p-6">
            <ContactForm propiedad={property.titulo} title="Consultar por esta propiedad" />
          </div>
        </aside>
      </div>
    </div>
  );
}
