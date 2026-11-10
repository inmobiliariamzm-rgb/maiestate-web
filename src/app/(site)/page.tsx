import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import PropertySearchForm from "@/components/PropertySearchForm";
import PropertyCard from "@/components/PropertyCard";
import ServiceGrid from "@/components/ServiceGrid";
import { getFeaturedProperties, getZonas, getTestimonios } from "@/lib/sanity/queries";
import {
  getPaginaInicio,
  getSeccionesServicios,
  getServiceCards,
} from "@/lib/sanity/contenido";
import { buildWhatsAppLink } from "@/lib/site";

export default async function HomePage() {
  const [destacadas, zonas, testimonios, inicio, cards, secciones] =
    await Promise.all([
      getFeaturedProperties(),
      getZonas(),
      getTestimonios(),
      getPaginaInicio(),
      getServiceCards(),
      getSeccionesServicios(),
    ]);

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
            {inicio.heroEtiqueta}
          </p>
          <h1 className="max-w-2xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            {inicio.heroTitulo}
          </h1>
          <p className="mt-5 max-w-xl text-base text-cream/80">
            {inicio.heroTexto}
          </p>

          <div className="mt-10">
            <PropertySearchForm variant="hero" zonas={zonas} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {inicio.pilares.map((p) => (
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

          {destacadas.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {destacadas.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-sm text-navy/50">
              Todavía no hay propiedades destacadas cargadas.
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow={inicio.serviciosEtiqueta}
          title={inicio.serviciosTitulo}
          align="center"
        />
        <div className="mt-8">
          <ServiceGrid cards={cards} areas={secciones.areas} />
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {inicio.contableEtiqueta}
            </p>
            <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
              {inicio.contableTitulo}{" "}
              <span className="text-gold">{inicio.contableTituloDestacado}</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
            <div className="border-l-2 border-gold pl-4">
              <h3 className="font-serif text-xl font-semibold text-navy">{inicio.contableSoloTitulo}</h3>
              <p className="mt-1 text-sm text-navy/70">
                {inicio.contableSoloTexto}
              </p>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <h3 className="font-serif text-xl font-semibold text-navy">
                {inicio.contableJuntoTitulo}
              </h3>
              <p className="mt-1 text-sm text-navy/70">
                {inicio.contableJuntoTexto}
              </p>
            </div>
            <Link
              href="/contable"
              className="w-fit rounded-sm bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-navy-light sm:col-span-2"
            >
              {inicio.contableBoton}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            eyebrow={inicio.porQueEtiqueta}
            title={inicio.porQueTitulo}
            align="center"
          />
          <p className="mt-6 text-cream/80">
            {inicio.porQueTexto}
          </p>
        </div>
      </section>

      {/* Solo testimonios reales: si no hay cargados, la sección no se muestra. */}
      {testimonios.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Testimonios" title="Lo que dicen nuestros clientes" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {testimonios.map((t, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 rounded-sm border border-navy/10 bg-white p-6 text-center"
              >
                {t.foto?.asset?.url ? (
                  <Image
                    src={`${t.foto.asset.url}?w=96&h=96&fit=crop&auto=format`}
                    alt={t.nombre}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-lg font-semibold text-gold">
                    {t.nombre.charAt(0)}
                  </span>
                )}
                <p className="text-sm text-navy/70">“{t.texto}”</p>
                <p className="text-sm font-semibold text-navy">{t.nombre}</p>
                {t.relacion && <p className="text-xs text-navy/50">{t.relacion}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-gold/10 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            {inicio.cierreTitulo}
          </h2>
          <p className="max-w-xl text-navy/70">
            {inicio.cierreTexto}
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
