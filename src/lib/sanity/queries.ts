import { client } from "@/lib/sanity/client";
import type {
  Operacion,
  Property,
  PropertyFilters,
  TipoPropiedad,
} from "@/lib/data/properties";

const PROPERTY_PROJECTION = `{
  "id": _id,
  "slug": slug.current,
  operacion,
  tipo,
  zona,
  titulo,
  direccion,
  precio,
  moneda,
  ambientes,
  dormitorios,
  banos,
  superficieCubierta,
  superficieTotal,
  descripcion,
  caracteristicas,
  destacada,
  "imagenes": imagenes[]{ alt, "asset": asset->{url} }
}`;

// Revalidación por tiempo: el contenido cargado en Sanity puede tardar
// hasta 60s en reflejarse en el sitio. Suficiente para este caso de uso,
// sin necesidad de configurar un webhook todavía.
const FETCH_OPTIONS = { next: { revalidate: 60, tags: ["property"] } };

export async function getProperties(
  filters: PropertyFilters = {}
): Promise<Property[]> {
  const conditions = ['_type == "property"'];
  const params: Record<string, string | number> = {};

  if (filters.operacion) {
    conditions.push("operacion == $operacion");
    params.operacion = filters.operacion;
  }
  if (filters.tipo) {
    conditions.push("tipo == $tipo");
    params.tipo = filters.tipo;
  }
  if (filters.zona) {
    conditions.push("zona == $zona");
    params.zona = filters.zona;
  }
  if (filters.ambientes) {
    conditions.push("ambientes >= $ambientes");
    params.ambientes = filters.ambientes;
  }
  if (filters.precioMax) {
    conditions.push("precio <= $precioMax");
    params.precioMax = filters.precioMax;
  }

  const query = `*[${conditions.join(" && ")}] | order(destacada desc, _createdAt desc) ${PROPERTY_PROJECTION}`;

  return client.fetch<Property[]>(query, params, FETCH_OPTIONS);
}

export async function getPropertyBySlug(
  slug: string
): Promise<Property | null> {
  const query = `*[_type == "property" && slug.current == $slug][0] ${PROPERTY_PROJECTION}`;
  return client.fetch<Property | null>(query, { slug }, FETCH_OPTIONS);
}

export async function getFeaturedProperties(
  limit = 6
): Promise<Property[]> {
  const query = `*[_type == "property" && destacada == true] | order(_createdAt desc) [0...$limit] ${PROPERTY_PROJECTION}`;
  return client.fetch<Property[]>(query, { limit }, FETCH_OPTIONS);
}

export async function getZonas(): Promise<string[]> {
  const query = `array::unique(*[_type == "property" && defined(zona)].zona)`;
  const zonas = await client.fetch<string[]>(query, {}, FETCH_OPTIONS);
  return zonas.sort((a, b) => a.localeCompare(b, "es"));
}

export async function getPropertySlugs(): Promise<string[]> {
  const query = `*[_type == "property" && defined(slug.current)].slug.current`;
  return client.fetch<string[]>(query, {}, FETCH_OPTIONS);
}

export interface Testimonial {
  nombre: string;
  relacion?: string;
  texto: string;
  foto?: { asset?: { url: string } | null } | null;
}

export async function getTestimonios(): Promise<Testimonial[]> {
  const query = `*[_type == "testimonial" && publicado == true] | order(_createdAt desc) {
    nombre,
    relacion,
    texto,
    "foto": foto{ "asset": asset->{url} }
  }`;
  return client.fetch<Testimonial[]>(
    query,
    {},
    { next: { revalidate: 60, tags: ["testimonial"] } }
  );
}

export type { Operacion, TipoPropiedad };
