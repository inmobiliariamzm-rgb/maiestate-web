import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceGrid from "@/components/ServiceGrid";
import { getSeccionesServicios, getServiceCards } from "@/lib/sanity/contenido";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Tasaciones, compraventa, alquileres, consorcios, fondos de comercio, inversiones, sucesiones y servicios contables en Maipú, Mendoza.",
};

export default async function ServiciosPage() {
  const [cards, secciones] = await Promise.all([
    getServiceCards(),
    getSeccionesServicios(),
  ]);
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading
        eyebrow={secciones.etiqueta}
        title={secciones.titulo}
        description={secciones.descripcion}
      />
      <div className="mt-10">
        <ServiceGrid cards={cards} areas={secciones.areas} />
      </div>
    </div>
  );
}
