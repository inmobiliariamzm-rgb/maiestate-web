import Link from "next/link";
import type { Property } from "@/lib/data/properties";
import { formatPrice, operacionLabel, tipoLabel } from "@/lib/format";
import PropertyImage from "@/components/PropertyImage";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/propiedades/${property.slug}`}
      className="group flex flex-col overflow-hidden rounded-sm border border-navy/10 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative">
        <PropertyImage
          image={property.imagenes?.[0]}
          seed={property.id}
          alt={property.titulo}
          label={tipoLabel(property.tipo)}
          className="h-56 w-full"
        />
        <span className="absolute left-3 top-3 rounded bg-gold px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy-dark">
          {operacionLabel(property.operacion)}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs uppercase tracking-wide text-navy/50">
          {property.zona}
        </p>
        <h3 className="font-serif text-xl font-semibold text-navy transition-colors group-hover:text-gold">
          {property.titulo}
        </h3>
        <p className="text-lg font-semibold text-navy">
          {formatPrice(property.precio, property.moneda)}
        </p>
        {property.ambientes > 0 && (
          <p className="text-sm text-navy/60">
            {property.ambientes} amb. · {property.dormitorios} dorm. ·{" "}
            {property.superficieCubierta || property.superficieTotal} m²
          </p>
        )}
      </div>
    </Link>
  );
}
