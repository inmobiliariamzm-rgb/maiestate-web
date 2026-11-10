import ServiceCard from "@/components/ServiceCard";
import { AREAS, type Area, type ServiceCardData } from "@/lib/data/services";

const DESCRIPCION: Record<Area, string> = {
  Inmobiliaria: "Tasaciones, compraventa, captación e inversiones.",
  "Inmobiliaria-Contable":
    "Administración de alquileres y consorcios, y fondos de comercio, con el respaldo del Departamento Contable.",
  Contable: "Impuestos, contabilidad y sueldos con nuestro Departamento Contable.",
  Jurídica: "Estamos preparando esta sección.",
};

// Servicios agrupados en tres secciones: Inmobiliaria, Contable y Jurídica.
// Una sección sin servicios (Jurídica, por ahora) se muestra "en construcción".
export default function ServiceGrid({ cards }: { cards: ServiceCardData[] }) {
  return (
    <div className="space-y-14">
      {AREAS.map((area) => {
        const items = cards.filter((c) => c.area === area);
        return (
          <section key={area} aria-labelledby={`area-${area}`}>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-navy/10 pb-3">
              <h3
                id={`area-${area}`}
                className="font-serif text-2xl font-semibold text-navy"
              >
                {area}
              </h3>
              {items.length === 0 && (
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  En construcción
                </span>
              )}
              <p className="w-full text-sm text-navy/60">{DESCRIPCION[area]}</p>
            </div>

            {items.length > 0 ? (
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((card) => (
                  <ServiceCard key={card.href} card={card} />
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-sm border border-dashed border-navy/20 bg-white p-6 text-sm text-navy/70">
                Muy pronto vas a encontrar acá nuestros servicios jurídicos.
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
