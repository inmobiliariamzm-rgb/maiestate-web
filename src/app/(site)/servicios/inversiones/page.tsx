import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PageHero, { heroPrimaryButton, heroSecondaryButton } from "@/components/page/PageHero";
import ClosingCta from "@/components/page/ClosingCta";
import ContactForm from "@/components/forms/ContactForm";
import { buildWhatsAppLink } from "@/lib/site";

const TITLE = "Inversiones inmobiliarias en Mendoza · MAIESTATE";
const DESCRIPTION =
  "Oportunidades, rentabilidad e impuestos calculados antes de invertir. Asesoramiento inmobiliario y contable.";
const WHATSAPP_MSG = "Hola MAIESTATE, quiero agendar una reunión de asesoramiento para invertir.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/servicios/inversiones",
});

const PASOS = [
  {
    titulo: "Perfil",
    texto: "Cuánto querés invertir, en qué plazo y con qué objetivo (renta, valorización o resguardo).",
  },
  {
    titulo: "Oportunidades",
    texto: "Propiedades, lotes, desarrollos y fondos de comercio seleccionados por el área inmobiliaria.",
  },
  {
    titulo: "Números",
    texto: "Rentabilidad esperada, costos de la operación e impuestos, calculados por el Departamento Contable.",
  },
  {
    titulo: "Estructura",
    texto: "Cómo comprar (a tu nombre, en sociedad o mediante un fideicomiso) y cómo administrarlo después.",
  },
  {
    titulo: "Seguimiento",
    texto: "Administración del alquiler y reportes periódicos de tu inversión.",
  },
];

export default function InversionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Inversiones"
        area="Conjunto"
        title={
          <>
            Invertí en ladrillos con los{" "}
            <span className="text-gold">números a la vista</span>
          </>
        }
        description="Te ayudamos a elegir la oportunidad, a calcular su rentabilidad y a entender su costo impositivo antes de decidir."
      >
        <a
          href={buildWhatsAppLink(WHATSAPP_MSG)}
          target="_blank"
          rel="noopener noreferrer"
          className={heroPrimaryButton}
        >
          Agendar una reunión de asesoramiento
        </a>
        <a href="#consulta" className={heroSecondaryButton}>
          Prefiero el formulario
        </a>
      </PageHero>

      <div className="mx-auto max-w-5xl px-6 pt-8">
        <Link href="/servicios" className="text-sm text-navy/60 hover:text-gold">
          ← Volver a servicios
        </Link>
      </div>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <SectionHeading eyebrow="Cómo te acompañamos" title="Cinco pasos, de la idea a la renta" align="center" />
        <ol className="mt-10 space-y-6">
          {PASOS.map((paso, i) => (
            <li key={paso.titulo} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-gold">
                {i + 1}
              </span>
              <p className="pt-1.5 text-navy/80">
                <strong className="font-semibold text-navy">{paso.titulo}:</strong>{" "}
                {paso.texto}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading eyebrow="Para quién" title="¿A quién acompañamos?" align="center" />
          <p className="mt-6 text-navy/80">
            <span className="font-semibold text-gold">Inversores particulares</span>,{" "}
            <span className="font-semibold text-gold">familias</span> que quieren ordenar su
            patrimonio y <span className="font-semibold text-gold">desarrolladores</span> que
            buscan socios o terrenos en Maipú, Luján y el Gran Mendoza.
          </p>
        </div>
      </section>

      <section id="consulta" className="mx-auto max-w-2xl scroll-mt-24 px-6 py-16">
        <div className="rounded-sm border border-navy/10 bg-white p-6 shadow-lg sm:p-10">
          <ContactForm title="Agendá una reunión de asesoramiento" motivo="inversiones" />
        </div>
      </section>

      <ClosingCta
        title="¿Tenés un capital para invertir?"
        description="Armá tu plan con nosotros."
        whatsappMessage={WHATSAPP_MSG}
      />
    </>
  );
}
