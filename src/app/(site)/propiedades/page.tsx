import type { Metadata } from "next";
import PropertySearchForm from "@/components/PropertySearchForm";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";
import type { Operacion, TipoPropiedad } from "@/lib/data/properties";
import { getProperties, getZonas } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Propiedades en venta y alquiler",
  description:
    "Buscá departamentos, casas, lotes, locales comerciales y quintas en venta o alquiler en Maipú y el Gran Mendoza.",
};

export default async function PropiedadesPage({
  searchParams,
}: PageProps<"/propiedades">) {
  const params = await searchParams;

  const get = (key: string) => {
    const value = params[key];
    return Array.isArray(value) ? value[0] : value;
  };

  const operacion = get("operacion");
  const tipo = get("tipo");
  const zona = get("zona");
  const ambientes = get("ambientes");
  const precioMax = get("precioMax");

  const [results, zonas] = await Promise.all([
    getProperties({
      operacion: operacion ? (operacion as Operacion) : undefined,
      tipo: tipo ? (tipo as TipoPropiedad) : undefined,
      zona: zona || undefined,
      ambientes: ambientes ? Number(ambientes) : undefined,
      precioMax: precioMax ? Number(precioMax) : undefined,
    }),
    getZonas(),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading
        eyebrow="Cartera completa"
        title="Propiedades"
        description="Filtrá por operación, tipo, zona y ambientes para encontrar la propiedad ideal."
      />

      <div className="mt-8">
        <PropertySearchForm
          variant="page"
          defaults={{ operacion, tipo, zona, ambientes, precioMax }}
          zonas={zonas}
        />
      </div>

      <p className="mt-6 text-sm text-navy/60">
        {results.length}{" "}
        {results.length === 1 ? "propiedad encontrada" : "propiedades encontradas"}
      </p>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-sm border border-dashed border-navy/20 bg-white p-10 text-center text-navy/60">
          No encontramos propiedades con esos filtros. Probá ampliando la
          búsqueda o{" "}
          <a href="/contacto" className="text-gold underline">
            contactanos
          </a>{" "}
          y te ayudamos a encontrarla.
        </div>
      )}
    </div>
  );
}
