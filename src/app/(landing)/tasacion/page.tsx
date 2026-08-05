import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import TasacionForm from "@/components/forms/TasacionForm";
import { site, buildWhatsAppLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tasación de tu propiedad",
  description:
    "Solicitá la tasación profesional de tu propiedad en Maipú y el Gran Mendoza, respaldada por la matrícula CCPIM.",
};

const CONFIANZA = [
  {
    titulo: "Matrícula CCPIM",
    texto: `Respaldado por ${site.responsableTecnico.nombre}, ${site.responsableTecnico.matricula}.`,
  },
  {
    titulo: "Método profesional",
    texto: "Siguiendo los estándares del Tribunal de Tasaciones de la Nación.",
  },
  {
    titulo: "Cobertura regional",
    texto: "Maipú, Luján de Cuyo, Guaymallén y el resto del Gran Mendoza.",
  },
  {
    titulo: "Sin compromiso",
    texto: "Completá el formulario y un asesor te contacta para coordinar la visita.",
  },
];

const PASOS = [
  "Completás el formulario con los datos básicos de tu propiedad.",
  "Coordinamos una visita para relevar el inmueble en persona.",
  "Recibís el informe de tasación con el valor y los fundamentos técnicos.",
];

const FAQS = [
  {
    pregunta: "¿La tasación tiene costo?",
    respuesta:
      "Depende del objetivo de la tasación (venta, sucesión, crédito hipotecario, etc.). Al completar el formulario, un asesor te va a confirmar el costo y el alcance antes de coordinar la visita.",
  },
  {
    pregunta: "¿Cuánto tarda el proceso?",
    respuesta:
      "Una vez coordinada la visita, el informe suele entregarse en pocos días hábiles, dependiendo de la complejidad de la propiedad.",
  },
  {
    pregunta: "¿Para qué sirve una tasación profesional?",
    respuesta:
      "Es útil para definir un precio de venta realista, sucesiones, divisiones de condominio, créditos hipotecarios o simplemente para conocer el valor actual de tu patrimonio.",
  },
  {
    pregunta: "¿Tengo que estar en Maipú?",
    respuesta:
      "No necesariamente — trabajamos en Maipú, Luján de Cuyo, Guaymallén y el resto del Gran Mendoza.",
  },
];

export default async function TasacionLandingPage({
  searchParams,
}: PageProps<"/tasacion">) {
  const params = await searchParams;
  const utmSource = params.utm_source;
  const origen = Array.isArray(utmSource) ? utmSource[0] : utmSource;

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

        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Tasaciones MAIESTATE
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Conocé el valor real de tu propiedad
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-cream/80">
            Un informe de tasación profesional, respaldado por la matrícula
            CCPIM, para tomar decisiones con información real sobre tu
            patrimonio.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#form"
              className="rounded-sm bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-wide text-navy-dark hover:bg-gold-light"
            >
              Solicitar mi tasación
            </a>
            <a
              href={buildWhatsAppLink("Hola MAIESTATE, quiero solicitar la tasación de mi propiedad.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-cream/40 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-cream/10"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CONFIANZA.map((c) => (
            <div key={c.titulo} className="border-l-2 border-gold pl-4">
              <h3 className="font-serif text-lg font-semibold text-navy">
                {c.titulo}
              </h3>
              <p className="mt-2 text-sm text-navy/70">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Tres pasos, sin complicaciones"
            align="center"
          />
          <ol className="mt-10 space-y-6">
            {PASOS.map((paso, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-gold">
                  {i + 1}
                </span>
                <p className="pt-1 text-navy/80">{paso}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="form" className="mx-auto max-w-3xl scroll-mt-6 px-6 py-16">
        <div className="rounded-sm border border-navy/10 bg-white p-6 shadow-lg sm:p-10">
          <div className="mb-6 flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
              <ServiceIcon icon="tasacion" className="h-8 w-8" />
            </span>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                Solicitá tu tasación
              </h2>
              <p className="text-sm text-navy/60">
                Un asesor te va a contactar para coordinar los próximos pasos.
              </p>
            </div>
          </div>
          <TasacionForm origen={origen} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <SectionHeading eyebrow="Dudas frecuentes" title="Preguntas frecuentes" align="center" />
        <div className="mt-10 space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.pregunta}
              className="group rounded-sm border border-navy/10 bg-white p-5"
            >
              <summary className="cursor-pointer list-none font-semibold text-navy marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {faq.pregunta}
                  <span className="text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-navy/70">{faq.respuesta}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-gold/10 py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy">
            ¿Listo para conocer el valor de tu propiedad?
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#form"
              className="rounded-sm bg-navy px-8 py-3 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-navy-light"
            >
              Completar formulario
            </a>
            <a
              href={buildWhatsAppLink("Hola MAIESTATE, quiero solicitar la tasación de mi propiedad.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-navy px-8 py-3 text-sm font-semibold uppercase tracking-wide text-navy hover:bg-navy hover:text-cream"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
