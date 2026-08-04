import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Tasaciones, compraventa, administración de alquileres, captación de propiedades y fondos de comercio en Maipú, Mendoza.",
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading
        eyebrow="MAIESTATE"
        title="Nuestros servicios"
        description="Acompañamos cada etapa de tu operación inmobiliaria con un equipo especializado."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}
