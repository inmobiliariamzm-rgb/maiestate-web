import { site } from "@/lib/site";

// Footer mínimo para landing pages de captación: sin enlaces a otras
// secciones del sitio, solo datos de contacto y respaldo profesional.
export default function LandingFooter() {
  return (
    <footer className="border-t border-navy/10 bg-navy py-8 text-center text-cream/70">
      <p className="font-serif text-lg font-semibold text-cream">{site.name}</p>
      <p className="mt-1 text-sm">{site.address.full}</p>
      <p className="mt-1 text-sm">
        {site.contact.phoneDisplay} · {site.contact.email}
      </p>
      <p className="mt-3 text-xs text-cream/50">
        {site.responsableTecnico.nombre} — {site.responsableTecnico.matricula}
      </p>
      <p className="mt-4 text-xs text-cream/40">
        © {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
