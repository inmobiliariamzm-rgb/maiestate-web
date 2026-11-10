"use server";

import {
  contactSchema,
  tasacionSchema,
  captacionSchema,
  consorcioSchema,
} from "@/lib/validation";
import { areaForMotivo, labelForMotivo } from "@/lib/data/services";
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
    motivo: formData.get("motivo"),
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

  // La etiqueta se deriva en el servidor a partir de la opción elegida
  // (no se confía en un valor enviado por el navegador).
  const area = areaForMotivo(parsed.data.motivo);
  const motivo = labelForMotivo(parsed.data.motivo);

  await sendNotification({
    subject: `${motivo} — ${parsed.data.nombre}`,
    etiqueta: area,
    data: { ...parsed.data, motivo, area },
  });

  await saveLead({
    tipo: "contacto",
    area,
    motivo,
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
    etiqueta: "Inmobiliaria",
    data: { ...parsed.data, area: "Inmobiliaria" },
  });

  await saveLead({
    tipo: "tasacion",
    area: "Inmobiliaria",
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
    etiqueta: "Inmobiliaria",
    data: { ...parsed.data, area: "Inmobiliaria" },
  });

  await saveLead({
    tipo: "captacion",
    area: "Inmobiliaria",
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

export async function submitConsorcioForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = consorcioSchema.safeParse({
    consorcio: formData.get("consorcio"),
    direccion: formData.get("direccion"),
    unidades: formData.get("unidades"),
    nombre: formData.get("nombre"),
    telefono: formData.get("telefono"),
    origen: formData.get("origen") ?? "",
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Revisá los datos del formulario.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  // Área preseleccionada: los consorcios van a Inmobiliaria-Contable.
  const area = "Inmobiliaria-Contable" as const;

  await sendNotification({
    subject: `Propuesta de consorcio — ${parsed.data.consorcio}`,
    etiqueta: area,
    data: { ...parsed.data, motivo: "Consorcios", area },
  });

  await saveLead({
    tipo: "consorcio",
    area,
    motivo: "Consorcios",
    nombre: parsed.data.nombre,
    telefono: parsed.data.telefono,
    direccion: parsed.data.direccion,
    mensaje: `Consorcio: ${parsed.data.consorcio} · ${parsed.data.unidades} unidades`,
    origen: parsed.data.origen,
  });

  return {
    success: true,
    message: "¡Gracias! Recibimos los datos del consorcio y te vamos a enviar una propuesta a la brevedad.",
  };
}
