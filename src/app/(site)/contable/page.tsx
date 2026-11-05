import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import PageHero, { heroPrimaryButton } from "@/components/page/PageHero";
import TwoColumns from "@/components/page/TwoColumns";
import FaqList from "@/components/page/FaqList";
import ClosingCta from "@/components/page/ClosingCta";
import { contador, buildWhatsAppLink, WHATSAPP_CONTABLE_MESSAGE } from "@/lib/site";
import type { IconName } from "@/lib/data/services";

export const metadata: Metadata = pageMetadata({
  title: "Contador en Maipú, Mendoza · MAIESTATE",
  description:
    "Monotributo, impuestos, sueldos y balances, con el respaldo de una inmobiliaria. Consultá al Departamento Contable de MAIESTATE.",
  path: "/contable",
});

const SERVICIOS: { id?: string; titulo: string; icono: IconName }[] = [
  { id: "impuestos", titulo: "Monotributo, ganancias e ingresos brutos", icono: "impuestos" },
  { id: "contabilidad", titulo: "Contabilidad y balances para pymes y comercios", icono: "contabilidad" },
  { titulo: "Liquidación de sueldos", icono: "contabilidad" },
  { titulo: "Impuestos sobre alquileres y compraventas", icono: "compraventa" },
  { titulo: "Análisis contable de fondos de comercio", icono: "fondo-comercio" },
  { titulo: "Liquidación contable de consorcios", icono: "consorcio" },
  { titulo: "Inventario y aspectos impositivos de sucesiones", icono: "sucesion" },
];

const FAQS = [
  {
    pregunta: "¿Tengo que ser cliente de la inmobiliaria para usar el departamento contable?",
    respuesta:
      "No. El departamento atiende también casos que no tienen nada que ver con inmuebles.",
  },
  {
    pregunta: "¿Quién firma los trámites contables?",
    respuesta: contador
      ? `El contador a cargo del departamento, con su matrícula profesional: ${contador.nombre} — ${contador.matricula}.`
      : "El contador a cargo del departamento, con su matrícula profesional.",
  },
  {
    pregunta: "¿Qué pasa con mis datos?",
    respuesta:
      "Tu información fiscal solo se comparte con el área inmobiliaria si vos lo autorizás por escrito.",
  },
];

export default function ContablePage() {
  return (
    <>
      <PageHero
        eyebrow="MAIESTATE · Departamento Contable"
        title={
          <>
            Tu patrimonio también necesita sus{" "}
            <span className="text-gold">números en orden</span>
          </>
        }
        description="El Departamento Contable de MAIESTATE atiende tus impuestos, tu contabilidad y el lado fiscal de cada operación inmobiliaria."
      >
        <a
          href={buildWhatsAppLink(WHATSAPP_CONTABLE_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className={heroPrimaryButton}
        >
          Hablar con el contador
        </a>
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading eyebrow="Cómo trabajamos" title="Dos maneras de atenderte" align="center" />
        <div className="mt-10">
          <TwoColumns
            columns={[
              {
                titulo: "Solo contable",
                texto:
                  "Si necesitás monotributo, impuestos, sueldos o balances, el departamento te atiende directamente.",
              },
              {
                titulo: "Junto al área inmobiliaria",
                texto:
                  "Si tu caso incluye un inmueble —un alquiler, una venta, una sucesión, un consorcio o un negocio— trabajamos en equipo, con un solo referente para vos.",
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Servicios" title="Qué hace el Departamento Contable" align="center" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICIOS.map((s) => (
              <li
                key={s.titulo}
                id={s.id}
                className="flex scroll-mt-28 items-center gap-4 rounded-sm border border-navy/10 bg-cream p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                  <ServiceIcon icon={s.icono} className="h-6 w-6" />
                </span>
                <span className="font-medium text-navy">{s.titulo}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <SectionHeading eyebrow="Dudas frecuentes" title="Preguntas frecuentes" align="center" />
        <div className="mt-10">
          <FaqList faqs={FAQS} />
        </div>
      </section>

      <ClosingCta
        title="¿Tenés una consulta contable?"
        description="Escribinos y te respondemos a la brevedad."
        whatsappMessage={WHATSAPP_CONTABLE_MESSAGE}
      />
    </>
  );
}
