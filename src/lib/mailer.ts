// Punto único de envío de notificaciones de formularios.
//
// Todavía no hay credenciales de un proveedor de email/CRM real para
// MAIESTATE. Por ahora, esto solo registra el envío en el servidor. Cuando
// el cliente provea credenciales (Resend, Nodemailer + SMTP, o un CRM),
// reemplazar el cuerpo de esta función es el único cambio necesario — los
// formularios y server actions que la llaman no necesitan modificarse.
export interface MailPayload {
  subject: string;
  data: Record<string, string>;
}

export async function sendNotification({ subject, data }: MailPayload) {
  console.log(`[MAIESTATE] Nuevo formulario: ${subject}`, data);
  return { ok: true as const };
}
