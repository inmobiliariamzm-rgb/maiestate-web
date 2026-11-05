import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

// Categorías del filtro de artículos. "Impuestos" se suma en v2 con el
// Departamento Contable. Cuando se publiquen artículos, cada uno lleva una
// de estas categorías.
const CATEGORIAS = ["Mercado", "Alquileres", "Normativa", "Impuestos"] as const;

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Guías y noticias sobre el mercado inmobiliario de Mendoza e impuestos, próximamente en MAIESTATE.",
};

export default function RecursosPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 text-center">
      <SectionHeading
        eyebrow="Próximamente"
        title="Recursos y noticias"
        description="Estamos preparando guías sobre el mercado inmobiliario de Mendoza, actualizaciones de alquileres, novedades normativas e impuestos. Muy pronto vas a encontrar contenido útil acá."
        align="center"
      />
      <ul
        aria-label="Categorías"
        className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold tracking-wide"
      >
        {CATEGORIAS.map((c) => (
          <li key={c} className="text-gold">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
