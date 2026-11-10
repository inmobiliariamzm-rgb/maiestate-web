import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import PageHero, { heroPrimaryButton } from "@/components/page/PageHero";
import TwoColumns from "@/components/page/TwoColumns";
import ClosingCta from "@/components/page/ClosingCta";
import ConsorcioForm from "@/components/forms/ConsorcioForm";

const TITLE = "Administración de consorcios en Mendoza · MAIESTATE";
const DESCRIPTION =
  "Expensas claras, fondos ordenados y rendiciones transparentes para edificios, complejos y barrios.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/servicios/consorcios",
});

export default function ConsorciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Administración de consorcios"
        area="Inmobiliaria-Contable"
        title={
          <>
            Un consorcio en orden, con{" "}
            <span className="text-gold">cuentas que todos entienden</span>
          </>
        }
        description="Administramos edificios, complejos y barrios con el respaldo de un área inmobiliaria y un departamento contable propio."
      >
        <a href="#propuesta" className={heroPrimaryButton}>
          Pedir una propuesta para mi consorcio
        </a>
      </PageHero>

      <div className="mx-auto max-w-5xl px-6 pt-8">
        <Link href="/servicios" className="text-sm text-navy/60 hover:text-gold">
          ← Volver a servicios
        </Link>
      </div>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <SectionHeading eyebrow="Qué incluye" title="Dos equipos, un solo administrador" align="center" />
        <div className="mt-10">
          <TwoColumns
            columns={[
              {
                titulo: "Área inmobiliaria",
                items: [
                  "Mantenimiento y proveedores",
                  "Convocatoria y actas de asambleas",
                  "Atención a propietarios e inquilinos",
                  "Seguros y control de las partes comunes",
                ],
              },
              {
                titulo: "Departamento Contable",
                items: [
                  "Liquidación mensual de expensas",
                  "Fondos de reserva y cuentas del consorcio",
                  "Sueldos y cargas del personal",
                  "Rendición de cuentas y presentaciones impositivas",
                ],
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-navy py-16 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Por qué MAIESTATE
          </p>
          <p className="font-serif text-2xl leading-snug sm:text-3xl">
            Un mismo equipo conoce el <span className="text-gold">valor del edificio</span>{" "}
            y sus <span className="text-gold">números</span>.
          </p>
          <p className="mt-4 text-cream/80">
            Eso permite decisiones mejor fundadas sobre obras, fondos y mantenimiento.
          </p>
        </div>
      </section>

      <section id="propuesta" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-16">
        <div className="rounded-sm border border-navy/10 bg-white p-6 shadow-lg sm:p-10">
          <div className="mb-6 flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
              <ServiceIcon icon="consorcio" className="h-8 w-8" />
            </span>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                Pedí una propuesta para tu consorcio
              </h2>
              <p className="text-sm text-navy/60">
                Con estos datos preparamos una propuesta a medida.
              </p>
            </div>
          </div>
          <ConsorcioForm />
        </div>
      </section>

      <ClosingCta
        title="¿Preferís hablarlo directamente?"
        description="Contanos cómo es tu consorcio y te orientamos."
        whatsappMessage="Hola MAIESTATE, quiero una propuesta de administración para mi consorcio."
      />
    </>
  );
}
