import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PropertySearchForm from "@/components/PropertySearchForm";
import PropertyCard from "@/components/PropertyCard";
import ServiceCard from "@/components/ServiceCard";
import { properties } from "@/lib/data/properties";
import { services } from "@/lib/data/services";
import { site, buildWhatsAppLink } from "@/lib/site";

const PILARES = [
  {
    titulo: "30+ años de trayectoria",
    texto: "Conocimiento profundo del mercado inmobiliario de Maipú y Gran Mendoza.",
  },
  {
    titulo: "Matrícula CCPIM",
    texto: `Tasaciones y operaciones respaldadas por ${site.responsableTecnico.nombre}, ${site.responsableTecnico.matricula}.`,
  },
  {
    titulo: "Cobertura regional",
    texto: "Operamos en Maipú, Luján de Cuyo, Guaymallén y el resto del Gran Mendoza.",
  },
  {
    titulo: "Atención personalizada",
    texto: "Un asesor dedicado te acompaña en cada etapa, sin intermediarios anónimos.",
  },
];

const destacadas = properties.filter((p) => p.destacada).slice(0, 6);

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-cream">
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-navy-dark/60"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0 200V90l120-40 100 30 140-70 160 50 130-35 150 45 120-30 140 40 140-25 100 20V200Z"
          />
        </svg>

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Inmobiliaria boutique · Maipú, Mendoza
          </p>
          <h1 className="max-w-2xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base text-cream/80">
            Tasaciones, compraventa, administración de alquileres y fondos de
            comercio en Maipú y el Gran Mendoza, con el respaldo de un
            Corredor Público Inmobiliario matriculado.
          </p>

          <div className="mt-10">
            <PropertySearchForm variant="hero" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PILARES.map((p) => (
            <div key={p.titulo} className="border-l-2 border-gold pl-4">
              <h3 className="font-serif text-lg font-semibold text-navy">
                {p.titulo}
              </h3>
              <p className="mt-2 text-sm text-navy/70">{p.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Cartera"
              title="Propiedades destacadas"
              description="Una selección de nuestras propiedades en venta y alquiler."
            />
            <Link
              href="/propiedades"
              className="text-sm font-semibold text-gold hover:text-navy"
            >
              Ver todas las propiedades →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destacadas.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Nuestros servicios"
          description="Un equipo especializado para cada etapa de tu operación inmobiliaria."
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-navy py-16 text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            eyebrow="Por qué MAIESTATE"
            title="Legado, trayectoria y compromiso"
            align="center"
          />
          <p className="mt-6 text-cream/80">
            En MAIESTATE entendemos que cada propiedad representa un
            patrimonio construido con esfuerzo. Por eso combinamos el rigor
            técnico de la matrícula CCPIM con un enfoque cercano y
            transparente, priorizando la sustentabilidad y el valor a largo
            plazo de cada operación por sobre el volumen de ventas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Testimonios" title="Lo que dicen nuestros clientes" align="center" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-sm border border-dashed border-navy/20 bg-white p-6 text-center text-sm text-navy/50"
            >
              Testimonio a completar con contenido real provisto por el
              cliente.
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gold/10 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            ¿Querés conocer el valor de tu propiedad?
          </h2>
          <p className="max-w-xl text-navy/70">
            Solicitá una tasación profesional o hablá directamente con un
            asesor de MAIESTATE.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/servicios/tasaciones"
              className="rounded-sm bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-navy-light"
            >
              Tasá tu propiedad
            </Link>
            <a
              href={buildWhatsAppLink("Hola MAIESTATE, quiero hablar con un asesor.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-navy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-navy hover:bg-navy hover:text-cream"
            >
              Hablá con un asesor
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
