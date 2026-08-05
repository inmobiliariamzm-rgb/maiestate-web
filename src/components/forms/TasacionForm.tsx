"use client";

import { useActionState } from "react";
import { submitTasacionForm } from "@/lib/actions";
import { initialFormState } from "@/lib/formState";
import FormSubmitButton from "@/components/forms/FormSubmitButton";
import { TIPOS } from "@/lib/data/properties";

const inputClass =
  "w-full rounded-sm border border-navy/15 bg-white px-3 py-2.5 text-sm text-navy focus:border-gold focus:outline-none";
const labelClass = "mb-1 block text-xs font-semibold uppercase tracking-wide text-navy/60";

export default function TasacionForm({ origen }: { origen?: string }) {
  const [state, formAction] = useActionState(submitTasacionForm, initialFormState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {origen && <input type="hidden" name="origen" value={origen} />}

      <div>
        <label className={labelClass} htmlFor="t-nombre">
          Nombre y apellido
        </label>
        <input id="t-nombre" name="nombre" required className={inputClass} />
        {state.errors?.nombre && (
          <p className="mt-1 text-xs text-red-600">{state.errors.nombre[0]}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="t-telefono">
            Teléfono
          </label>
          <input id="t-telefono" name="telefono" required className={inputClass} />
          {state.errors?.telefono && (
            <p className="mt-1 text-xs text-red-600">{state.errors.telefono[0]}</p>
          )}
        </div>
        <div>
          <label className={labelClass} htmlFor="t-email">
            Email (opcional)
          </label>
          <input id="t-email" name="email" type="email" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="t-direccion">
          Dirección de la propiedad a tasar
        </label>
        <input id="t-direccion" name="direccion" required className={inputClass} />
        {state.errors?.direccion && (
          <p className="mt-1 text-xs text-red-600">{state.errors.direccion[0]}</p>
        )}
      </div>

      <div>
        <label className={labelClass} htmlFor="t-tipo">
          Tipo de propiedad
        </label>
        <select id="t-tipo" name="tipoPropiedad" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Seleccioná una opción
          </option>
          {TIPOS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {state.errors?.tipoPropiedad && (
          <p className="mt-1 text-xs text-red-600">{state.errors.tipoPropiedad[0]}</p>
        )}
      </div>

      <div>
        <label className={labelClass} htmlFor="t-comentarios">
          Comentarios (opcional)
        </label>
        <textarea id="t-comentarios" name="comentarios" rows={3} className={inputClass} />
      </div>

      <FormSubmitButton label="Solicitar tasación" />

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
