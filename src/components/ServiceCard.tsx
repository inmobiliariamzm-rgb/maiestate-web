import Link from "next/link";
import type { ServiceCardData } from "@/lib/data/services";
import ServiceIcon from "@/components/ServiceIcon";
import AreaTag from "@/components/AreaTag";

export default function ServiceCard({ card }: { card: ServiceCardData }) {
  return (
    <Link
      href={card.href}
      className="group flex flex-col gap-3 rounded-sm border border-navy/10 bg-white p-6 transition-shadow hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold">
          <ServiceIcon icon={card.icono} />
        </span>
        <AreaTag area={card.area} className="pt-1" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-navy">
        {card.titulo}
      </h3>
      <p className="line-clamp-2 text-sm text-navy/70">{card.texto}</p>
      <span className="mt-auto pt-1 text-sm font-semibold text-gold transition-colors group-hover:text-navy">
        Conocer más →
      </span>
    </Link>
  );
}
