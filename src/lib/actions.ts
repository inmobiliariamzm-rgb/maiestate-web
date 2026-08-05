"use server";

import { contactSchema, tasacionSchema, captacionSchema } from "@/lib/validation";
import { sendNotification } from "@/lib/mailer";
import { saveLead } from "@/lib/leads";
import type { FormState } from "@/lib/formState";

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = contactSchema.safeParse({
    nombre: formData.get("nombre"),
    telefono: formData.get("telefono"),
    email: formData.get("email"),
    mensaje: formData.get("mensaje"),
    propiedad: formData.get("propiedad") ?? "",
    origen: formData.get("origen") ?? "",
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Revisá los datos del formulario.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  await sendNotification({
    subject: `Consulta de contacto — ${parsed.data.nombre}`,
    data: parsed.data as unknown as Record<string, string>,
  });

  await saveLead({
    tipo: "contacto",
    nombre: parsed.data.nombre,
    telefono: parsed.data.telefono,
    email: parsed.data.email,
    mensaje: parsed.data.propiedad
      ? `[Propiedad: ${parsed.data.propiedad}] ${parsed.data.mensaje}`
      : parsed.data.mensaje,
    origen: parsed.data.origen,
  });

  return {
    success: true,
    message: "¡Gracias! Recibimos tu consulta y te vamos a contactar a la brevedad.",
  };
}

export async function submitTasacionForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = tasacionSchema.safeParse({
    nombre: formData.get("nombre"),
    telefono: formData.get("telefono"),
    email: formData.get("email"),
    direccion: formData.get("direccion"),
    tipoPropiedad: formData.get("tipoPropiedad"),
    comentarios: formData.get("comentarios"),
    origen: formData.get("origen") ?? "",
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Revisá los datos del formulario.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  await sendNotification({
    subject: `Solicitud de tasación — ${parsed.data.direccion}`,
    data: parsed.data as unknown as Record<string, string>,
  });

  await saveLead({
    tipo: "tasacion",
    nombre: parsed.data.nombre,
    telefono: parsed.data.telefono,
    email: parsed.data.email,
    direccion: parsed.data.direccion,
    tipoPropiedad: parsed.data.tipoPropiedad,
    mensaje: parsed.data.comentarios,
    origen: parsed.data.origen,
  });

  return {
    success: true,
    message: "¡Gracias! Recibimos tu solicitud de tasación y te contactaremos para coordinar la visita.",
  };
}

export async function submitCaptacionForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = captacionSchema.safeParse({
    nombre: formData.get("nombre"),
    telefono: formData.get("telefono"),
    email: formData.get("email"),
    direccion: formData.get("direccion"),
    operacion: formData.get("operacion"),
    comentarios: formData.get("comentarios"),
    origen: formData.get("origen") ?? "",
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Revisá los datos del formulario.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  await sendNotification({
    subject: `Nueva captación — ${parsed.data.direccion}`,
    data: parsed.data as unknown as Record<string, string>,
  });

  await saveLead({
    tipo: "captacion",
    nombre: parsed.data.nombre,
    telefono: parsed.data.telefono,
    email: parsed.data.email,
    direccion: parsed.data.direccion,
    operacion: parsed.data.operacion,
    mensaje: parsed.data.comentarios,
    origen: parsed.data.origen,
  });

  return {
    success: true,
    message: "¡Gracias! Recibimos los datos de tu propiedad, un asesor se va a contactar para coordinar la visita.",
  };
}
