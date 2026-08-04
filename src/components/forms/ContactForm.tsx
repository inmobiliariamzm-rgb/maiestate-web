"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/lib/actions";
import { initialFormState } from "@/lib/formState";
import FormSubmitButton from "@/components/forms/FormSubmitButton";

const inputClass =
  "w-full rounded-sm border border-navy/15 bg-white px-3 py-2.5 text-sm text-navy focus:border-gold focus:outline-none";
const labelClass = "mb-1 block text-xs font-semibold uppercase tracking-wide text-navy/60";

export default function ContactForm({
  propiedad,
  title = "Escribinos",
}: {
  propiedad?: string;
  title?: string;
}) {
  const [state, formAction] = useActionState(submitContactForm, initialFormState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <h3 className="font-serif text-xl font-semibold text-navy">{title}</h3>

      {propiedad && <input type="hidden" name="propiedad" value={propiedad} />}

      <div>
        <label className={labelClass} htmlFor="nombre">
          Nombre y apellido
        </label>
        <input id="nombre" name="nombre" required className={inputClass} />
        {state.errors?.nombre && (
          <p className="mt-1 text-xs text-red-600">{state.errors.nombre[0]}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="telefono">
            Teléfono
          </label>
          <input id="telefono" name="telefono" required className={inputClass} />
          {state.errors?.telefono && (
            <p className="mt-1 text-xs text-red-600">{state.errors.telefono[0]}</p>
          )}
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email (opcional)
          </label>
          <input id="email" name="email" type="email" className={inputClass} />
          {state.errors?.email && (
            <p className="mt-1 text-xs text-red-600">{state.errors.email[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="mensaje">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          defaultValue={propiedad ? `Hola, quisiera consultar sobre la propiedad "${propiedad}".` : ""}
          className={inputClass}
        />
        {state.errors?.mensaje && (
          <p className="mt-1 text-xs text-red-600">{state.errors.mensaje[0]}</p>
        )}
      </div>

      <FormSubmitButton label="Enviar mensaje" />

      {state.message && (
        <p
          aria-live="polite"
          className={`text-sm ${state.success ? "text-green-700" : "text-red-600"}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
