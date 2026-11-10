import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site, buildWhatsAppLink } from "@/lib/site";

// Página para el enlace de la bio de Instagram (fuera del menú, noindex).
// Los enlaces internos llevan UTM para medir clics en GA4. El padding
// inferior evita que el botón flotante de WhatsApp tape el último botón.
export const metadata: Metadata = pageMetadata({
  title: "MAIESTATE · Enlaces",
  path: "/enlaces",
  noindex: true,
});

const UTM = "utm_source=instagram&utm_medium=bio";

function withUtm(href: string) {
  const [path, hash] = href.split("#");
  return `${path}?${UTM}${hash ? `#${hash}` : ""}`;
}

const ENLACES = [
  { label: "Ver propiedades", href: withUtm("/propiedades") },
  { label: "Pedir una tasación", href: withUtm("/servicios/tasaciones") },
  { label: "Departamento Contable", href: withUtm("/contable") },
  {
    label: "Administración de alquileres y consorcios",
    href: withUtm("/servicios/alquileres"),
  },
];

const buttonClass =
  "flex min-h-14 w-full items-center justify-center rounded-sm px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide transition-colors";

export default function EnlacesPage() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center px-6 pt-12 pb-44">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-navy font-serif text-3xl font-semibold text-gold">
        M
      </span>
      <h1 className="mt-4 font-serif text-3xl font-semibold tracking-wide text-navy">
        {site.name}
      </h1>
      <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gold">{site.tagline}</p>
      <p className="mt-2 text-sm text-navy/60">Inmobiliaria · Departamento Contable · Maipú</p>

      <nav aria-label="Enlaces" className="mt-10 flex w-full flex-col gap-4">
        {ENLACES.map((e) => (
          <Link
            key={e.label}
            href={e.href}
            className={`${buttonClass} bg-navy text-cream hover:bg-navy-light`}
          >
            {e.label}
          </Link>
        ))}
        <a
          href={buildWhatsAppLink(
            "Hola MAIESTATE, los encontré en Instagram y quiero hacer una consulta."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} bg-[#25D366] text-white hover:opacity-90`}
        >
          Escribinos por WhatsApp
        </a>
      </nav>
    </section>
  );
}
