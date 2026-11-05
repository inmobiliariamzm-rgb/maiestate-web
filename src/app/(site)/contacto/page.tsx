import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import { site, buildWhatsAppLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactate con MAIESTATE en Maipú, Mendoza: dirección, teléfono, WhatsApp y formulario de contacto.",
};

const WHATSAPP_CONTACTO_MESSAGE = "Hola MAIESTATE, quisiera hacer una consulta.";

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading
        eyebrow="Estamos para ayudarte"
        title="Contacto"
        description="Contanos en qué te podemos ayudar —inmobiliaria, Departamento Contable o ambos— y te responde quien corresponde."
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="rounded-sm border border-navy/10 bg-white p-6">
            <ContactForm />
          </div>

          <a
            href={buildWhatsAppLink(WHATSAPP_CONTACTO_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#25D366] px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Escribinos por WhatsApp
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-sm border border-navy/10 bg-white p-6">
            <h3 className="font-serif text-xl font-semibold text-navy">Oficina</h3>
            <p className="mt-2 text-navy/70">{site.address.full}</p>
            <a
              href={`https://wa.me/${site.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-navy/70 hover:text-gold"
            >
              WhatsApp {site.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-1 block text-navy/70 hover:text-gold"
            >
              {site.contact.email}
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-navy/70 hover:text-gold"
            >
              Instagram {site.social.instagramHandle}
            </a>
            <p className="mt-4 text-xs text-navy/50">
              {site.responsableTecnico.nombre} — {site.responsableTecnico.titulo},{" "}
              {site.responsableTecnico.matricula}
            </p>
          </div>

          <div className="overflow-hidden rounded-sm border border-navy/10">
            <iframe
              title="Mapa MAIESTATE"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                site.address.full
              )}&output=embed`}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
