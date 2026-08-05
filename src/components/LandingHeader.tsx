import Link from "next/link";
import { site } from "@/lib/site";

// Header mínimo para landing pages de captación: solo el logo, sin menú
// de navegación — la idea es no darle al visitante forma de irse del
// funnel antes de completar el formulario.
export default function LandingHeader() {
  return (
    <header className="border-b border-navy/10 bg-cream/95 py-4">
      <div className="mx-auto flex max-w-4xl items-center justify-center px-6">
        <Link href="/" className="flex flex-col items-center leading-none">
          <span className="font-serif text-2xl font-semibold tracking-wide text-navy">
            {site.name}
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold">
            {site.tagline}
          </span>
        </Link>
      </div>
    </header>
  );
}
