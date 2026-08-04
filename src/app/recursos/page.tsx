import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Guías y noticias sobre el mercado inmobiliario de Mendoza, próximamente en MAIESTATE.",
};

export default function RecursosPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 text-center">
      <SectionHeading
        eyebrow="Próximamente"
        title="Recursos y noticias"
        description="Estamos preparando guías sobre el mercado inmobiliario de Mendoza, actualizaciones del índice ICL y novedades normativas. Muy pronto vas a encontrar contenido útil acá."
        align="center"
      />
    </div>
  );
}
