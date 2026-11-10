// Punto único de envío de notificaciones de formularios.
//
// Todavía no hay credenciales de un proveedor de email real para
// MAIESTATE: por ahora esto registra el envío en el servidor. Cuando el
// cliente provea credenciales (Resend, Nodemailer + SMTP, o un CRM),
// reemplazar el bloque de email es el único cambio necesario.
//
// Make (Sheets/CRM): si la variable de entorno MAKE_WEBHOOK_URL está
// configurada, cada envío se manda también como JSON a ese webhook, con la
// etiqueta de área ("Inmobiliaria" | "Contable" | "Jurídica") como campo
// `etiqueta`, para que el escenario de Make la guarde/filtre.
import type { Area } from "@/lib/data/services";

export interface MailPayload {
  subject: string;
  /** Etiqueta de área; se antepone al asunto como [Inmobiliaria], etc. */
  etiqueta?: Area;
  data: Record<string, string | number | undefined>;
}

export function buildSubject(subject: string, etiqueta?: Area) {
  return etiqueta ? `[${etiqueta}] ${subject}` : subject;
}

export async function sendNotification({ subject, etiqueta, data }: MailPayload) {
  const fullSubject = buildSubject(subject, etiqueta);
  console.log(`[MAIESTATE] Nuevo formulario: ${fullSubject}`, data);

  const webhook = process.env.MAKE_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          asunto: fullSubject,
          etiqueta: etiqueta ?? "",
          fecha: new Date().toISOString(),
          ...data,
        }),
      });
    } catch (error) {
      // No interrumpe el formulario: el lead igual queda en Sanity.
      console.error("[MAIESTATE] No se pudo enviar el formulario a Make:", error);
    }
  }

  return { ok: true as const };
}
