import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";
import PageHero, { heroPrimaryButton } from "@/components/page/PageHero";
import TwoColumns from "@/components/page/TwoColumns";
import ClosingCta from "@/components/page/ClosingCta";
import ContactForm from "@/components/forms/ContactForm";

const TITLE = "Sucesiones con inmuebles en Mendoza · MAIESTATE";
const DESCRIPTION = "Tasación, inventario e impuestos de la herencia en un solo lugar.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/servicios/sucesiones",
});

// Textos finales [completar — pendientes de redacción]: el brief solo fija
// la estructura. No publicar a producción con los placeholders.
export default function SucesionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sucesiones"
        area="Conjunto"
        title={<Placeholder>[completar título — pendiente de redacción]</Placeholder>}
        description={<Placeholder>[completar bajada — pendiente de redacción]</Placeholder>}
      >
        <a href="#consulta" className={heroPrimaryButton}>
          Consultá tu caso
        </a>
      </PageHero>

      <div className="mx-auto max-w-5xl px-6 pt-8">
        <Link href="/servicios" className="text-sm text-navy/60 hover:text-gold">
          ← Volver a servicios
        </Link>
      </div>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <SectionHeading eyebrow="Sucesiones" title="Qué incluye" align="center" />
        <div className="mt-10">
          <TwoColumns
            columns={[
              {
                titulo: "Área inmobiliaria",
                items: ["Tasación del bien", "Venta o alquiler del inmueble"],
                texto: <Placeholder>[completar — pendiente de redacción]</Placeholder>,
              },
              {
                titulo: "Departamento Contable",
                items: ["Inventario", "Liquidación", "Impuestos"],
                texto: <Placeholder>[completar — pendiente de redacción]</Placeholder>,
              },
            ]}
          />
        </div>
      </section>

      <section id="consulta" className="mx-auto max-w-2xl scroll-mt-24 px-6 py-12">
        <div className="rounded-sm border border-navy/10 bg-white p-6 shadow-lg sm:p-10">
          <ContactForm title="Consultá tu caso" motivo="sucesion" />
        </div>
      </section>

      <ClosingCta
        title="¿Tenés una sucesión con inmuebles?"
        description="Contanos tu caso por WhatsApp y te orientamos."
        whatsappMessage="Hola MAIESTATE, quiero consultar por una sucesión."
      />
    </>
  );
}
