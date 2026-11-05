import type { ReactNode } from "react";
import { buildWhatsAppLink } from "@/lib/site";

// Cierre de página: título + bajada + botón de WhatsApp (y opcionalmente
// otro botón). Mismo estilo que el cierre de la Home.
export default function ClosingCta({
  title,
  description,
  whatsappMessage,
  whatsappLabel = "Escribinos por WhatsApp",
  children,
}: {
  title: string;
  description?: string;
  whatsappMessage: string;
  whatsappLabel?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-gold/10 py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
          {title}
        </h2>
        {description && <p className="max-w-xl text-navy/70">{description}</p>}
        <div className="flex flex-col gap-3 sm:flex-row">
          {children}
          <a
            href={buildWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-navy-light"
          >
            {whatsappLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
