"use client";

import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import { AREAS, type Area, type ServiceCardData } from "@/lib/data/services";

type Filtro = "Todos" | Area;
const FILTROS: Filtro[] = ["Todos", ...AREAS];

export default function ServiceGrid({ cards }: { cards: ServiceCardData[] }) {
  const [filtro, setFiltro] = useState<Filtro>("Todos");
  const visibles =
    filtro === "Todos" ? cards : cards.filter((c) => c.area === filtro);

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrar servicios por área"
        className="flex flex-wrap justify-center gap-x-6 gap-y-2"
      >
        {FILTROS.map((f) => {
          const activo = f === filtro;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={activo}
              onClick={() => setFiltro(f)}
              className={`border-b-2 pb-1 text-sm font-semibold tracking-wide transition-colors ${
                activo
                  ? "border-gold text-gold"
                  : "border-transparent text-navy/60 hover:text-navy"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((card) => (
          <ServiceCard key={card.href} card={card} />
        ))}
      </div>
    </div>
  );
}
