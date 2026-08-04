import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-serif text-xl font-semibold">{site.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
            {site.tagline}
          </p>
          <p className="mt-4 text-sm text-cream/70">{site.address.full}</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
            Navegación
          </p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link href="/propiedades">Propiedades</Link></li>
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/recursos">Recursos</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
            Servicios
          </p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link href="/servicios/tasaciones">Tasaciones</Link></li>
            <li><Link href="/servicios/compraventa">Compraventa</Link></li>
            <li><Link href="/servicios/administracion">Administración</Link></li>
            <li><Link href="/servicios/captacion">Captación</Link></li>
            <li><Link href="/servicios/fondos-de-comercio">Fondos de Comercio</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
            Contacto
          </p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>{site.contact.phoneDisplay}</li>
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li className="pt-2 text-xs text-cream/60">
              {site.responsableTecnico.nombre} — {site.responsableTecnico.matricula}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
