import Link from "next/link";
import type { Service } from "@/lib/data/services";
import ServiceIcon from "@/components/ServiceIcon";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group flex flex-col gap-4 rounded-sm border border-navy/10 bg-white p-6 transition-shadow hover:shadow-lg"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold">
        <ServiceIcon icon={service.icono} />
      </span>
      <h3 className="font-serif text-xl font-semibold text-navy">
        {service.titulo}
      </h3>
      <p className="text-sm text-navy/70">{service.resumen}</p>
      <span className="mt-auto text-sm font-semibold text-gold transition-colors group-hover:text-navy">
        Conocer más →
      </span>
    </Link>
  );
}
