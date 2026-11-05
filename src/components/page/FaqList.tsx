import type { ReactNode } from "react";

export default function FaqList({
  faqs,
}: {
  faqs: { pregunta: string; respuesta: ReactNode }[];
}) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
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
  );
}
