import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conocé la historia de MAIESTATE, inmobiliaria boutique en Maipú, Mendoza, y a Raúl Alejandro Maidana, Corredor Público Inmobiliario matriculado.",
};

const VALORES = [
  {
    titulo: "Legado",
    texto: "Entendemos cada propiedad como un patrimonio construido con esfuerzo, no solo como una transacción.",
  },
  {
    titulo: "Transparencia",
    texto: "Información clara y honesta en cada etapa, sin letra chica ni sorpresas de último momento.",
  },
  {
    titulo: "Cercanía",
    texto: "Atención personalizada: un asesor dedicado te acompaña de principio a fin.",
  },
  {
    titulo: "Rigor técnico",
    texto: "Tasaciones y operaciones respaldadas por matrícula profesional y normativa vigente.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <SectionHeading
        eyebrow="Nuestra historia"
        title="Sobre MAIESTATE"
        description={site.tagline}
      />

      <div className="mt-8 space-y-4 text-navy/80">
        <p>
          MAIESTATE nació en Maipú, Mendoza, con la convicción de que cada
          propiedad representa mucho más que un valor de mercado: representa
          el legado de una familia o el esfuerzo de toda una vida de trabajo.
          [Contenido a completar por el cliente: historia real de fundación
          de la inmobiliaria, hitos y trayectoria.]
        </p>
        <p>
          Desde tasaciones hasta la administración integral de alquileres,
          acompañamos a propietarios, compradores e inquilinos con un
          enfoque profesional, cercano y transparente.
        </p>
      </div>

      <div className="mt-12 rounded-sm border border-navy/10 bg-white p-8">
        <h2 className="font-serif text-2xl font-semibold text-navy">
          {site.responsableTecnico.nombre}
        </h2>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gold">
          {site.responsableTecnico.matricula}
        </p>
        <p className="mt-4 text-navy/70">
          Corredor Público Inmobiliario responsable técnico de MAIESTATE,
          matriculado ante el CCPIM (Colegio de Corredores Públicos
          Inmobiliarios de Mendoza). [Contenido a completar: trayectoria
          profesional, formación y especialización de Raúl Maidana.]
        </p>
      </div>

      <div className="mt-12">
        <h2 className="font-serif text-2xl font-semibold text-navy">Nuestros valores</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {VALORES.map((v) => (
            <div key={v.titulo} className="border-l-2 border-gold pl-4">
              <h3 className="font-semibold text-navy">{v.titulo}</h3>
              <p className="mt-1 text-sm text-navy/70">{v.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
