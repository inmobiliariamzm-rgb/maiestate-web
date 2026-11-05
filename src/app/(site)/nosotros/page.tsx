import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import { site, contador } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conocé a MAIESTATE, inmobiliaria y Departamento Contable en Maipú, Mendoza: R. Alejandro Maidana, Corredor Público Inmobiliario (CCPIM Mat. 1378).",
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
          Corredor Público Inmobiliario responsable de MAIESTATE,
          matriculado ante el CCPIM (Colegio de Corredores Públicos
          Inmobiliarios de Mendoza). [Contenido a completar: trayectoria
          profesional, formación y especialización de R. Alejandro Maidana.]
        </p>
      </div>

      <div className="mt-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          MAIESTATE · Departamento Contable
        </p>
        <h2 className="font-serif text-2xl font-semibold text-navy">Departamento Contable</h2>
        <p className="mt-3 text-navy/80">
          Nuestro Departamento Contable atiende impuestos, contabilidad y
          sueldos, y trabaja junto al área inmobiliaria en alquileres,
          consorcios, fondos de comercio, sucesiones, inversiones y
          compraventas, con un solo referente para vos.
        </p>

        {contador ? (
          <div className="mt-6 flex flex-col gap-6 rounded-sm border border-navy/10 bg-white p-8 sm:flex-row sm:items-center">
            {/* Sin foto propia: fondo navy con ícono dorado. */}
            <span
              className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-navy text-gold"
              aria-hidden="true"
            >
              <ServiceIcon icon="contabilidad" className="h-12 w-12" />
            </span>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-navy">{contador.nombre}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gold">
                Contador a cargo · {contador.matricula}
              </p>
            </div>
          </div>
        ) : null}
        <Link
          href="/contable"
          className="mt-4 inline-block text-sm font-semibold text-gold hover:text-navy"
        >
          Conocé el Departamento Contable →
        </Link>
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
