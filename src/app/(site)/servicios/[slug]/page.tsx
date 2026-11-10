import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/data/services";
import { getServicioDetalle } from "@/lib/sanity/contenido";
import ServiceIcon from "@/components/ServiceIcon";
import AreaTag from "@/components/AreaTag";
import TasacionForm from "@/components/forms/TasacionForm";
import CaptacionForm from "@/components/forms/CaptacionForm";
import ContactForm from "@/components/forms/ContactForm";
import { buildWhatsAppLink } from "@/lib/site";

// Los servicios nuevos creados en el panel se generan al primer pedido.
export const dynamicParams = true;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServicioDetalle(slug);
  if (!service) return {};
  return {
    title: service.titulo,
    description: service.resumen,
    alternates: { canonical: `/servicios/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/servicios/[slug]">) {
  const { slug } = await params;
  const service = await getServicioDetalle(slug);
  if (!service) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Link href="/servicios" className="text-sm text-navy/60 hover:text-gold">
        ← Volver a servicios
      </Link>

      <div className="mt-4 flex items-center gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-gold">
          <ServiceIcon icon={service.icono} className="h-9 w-9" />
        </span>
        <div>
          <AreaTag area={service.area} />
          <h1 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            {service.titulo}
          </h1>
          <p className="mt-1 max-w-2xl text-navy/70">{service.resumen}</p>
        </div>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {service.contenido.length > 0 && (
            <h2 className="font-serif text-2xl font-semibold text-navy">Cómo trabajamos</h2>
          )}
          <ul className="mt-4 space-y-4">
            {service.contenido.map((texto, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-semibold text-navy">
                  {i + 1}
                </span>
                <p className="text-navy/80">{texto}</p>
              </li>
            ))}
          </ul>

          {service.bloqueContable && (
            <div className="mt-10 border-l-2 border-gold pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Departamento Contable
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-navy">
                {service.bloqueContable.titulo}
              </h2>
              <p className="mt-2 text-navy/80">{service.bloqueContable.texto}</p>
              <Link
                href="/contable"
                className="mt-3 inline-block text-sm font-semibold text-gold hover:text-navy"
              >
                Conocé el Departamento Contable →
              </Link>
            </div>
          )}

          <div className="mt-10 rounded-sm border border-navy/10 bg-white p-6">
            <a
              href={buildWhatsAppLink(
                `Hola MAIESTATE, quiero consultar sobre el servicio de ${service.titulo}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        <aside className="rounded-sm border border-navy/10 bg-white p-6">
          {service.slug === "tasaciones" && (
            <>
              <h3 className="mb-4 font-serif text-xl font-semibold text-navy">
                {service.cta}
              </h3>
              <TasacionForm />
            </>
          )}
          {service.slug === "captacion" && (
            <>
              <h3 className="mb-4 font-serif text-xl font-semibold text-navy">
                {service.cta}
              </h3>
              <CaptacionForm />
            </>
          )}
          {service.slug !== "tasaciones" && service.slug !== "captacion" && (
            <ContactForm title={service.cta} motivo={service.motivo} />
          )}
        </aside>
      </div>
    </div>
  );
}
