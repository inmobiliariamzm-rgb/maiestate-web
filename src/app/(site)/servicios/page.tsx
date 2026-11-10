import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceGrid from "@/components/ServiceGrid";
import { serviceCards } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Tasaciones, compraventa, alquileres, consorcios, fondos de comercio, inversiones, sucesiones y servicios contables en Maipú, Mendoza.",
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading
        eyebrow="MAIESTATE"
        title="Todo tu patrimonio, en un solo lugar"
        description="Nuestros servicios, organizados por área: Inmobiliaria, Inmobiliaria-Contable, Contable y Jurídica."
      />
      <div className="mt-10">
        <ServiceGrid cards={serviceCards} />
      </div>
    </div>
  );
}
