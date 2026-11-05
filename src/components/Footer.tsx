import Link from "next/link";
import { site } from "@/lib/site";
import { SUCESIONES_ACTIVA } from "@/lib/data/services";

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
            <li><Link href="/contable">Departamento Contable</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/recursos">Recursos</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
            Servicios
          </p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link href="/servicios/tasaciones">Tasaciones</Link></li>
            <li><Link href="/servicios/compraventa">Compraventa</Link></li>
            <li><Link href="/servicios/alquileres">Alquileres</Link></li>
            <li><Link href="/servicios/consorcios">Consorcios</Link></li>
            <li><Link href="/servicios/fondos-de-comercio">Fondos de comercio</Link></li>
            <li><Link href="/servicios/inversiones">Inversiones</Link></li>
            {SUCESIONES_ACTIVA && (
              <li><Link href="/servicios/sucesiones">Sucesiones</Link></li>
            )}
            <li><Link href="/servicios/captacion">Captación</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
            Contacto
          </p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>
              <a
                href={`https://wa.me/${site.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
                Instagram {site.social.instagramHandle}
              </a>
            </li>
            <li className="pt-2 text-xs text-cream/60">
              {site.responsableTecnico.nombre} — {site.responsableTecnico.titulo},{" "}
              {site.responsableTecnico.matricula}
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
