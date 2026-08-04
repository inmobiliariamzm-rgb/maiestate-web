"use client";

import { useActionState } from "react";
import { submitCaptacionForm } from "@/lib/actions";
import { initialFormState } from "@/lib/formState";
import FormSubmitButton from "@/components/forms/FormSubmitButton";

const inputClass =
  "w-full rounded-sm border border-navy/15 bg-white px-3 py-2.5 text-sm text-navy focus:border-gold focus:outline-none";
const labelClass = "mb-1 block text-xs font-semibold uppercase tracking-wide text-navy/60";

export default function CaptacionForm() {
  const [state, formAction] = useActionState(submitCaptacionForm, initialFormState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <label className={labelClass} htmlFor="c-nombre">
          Nombre y apellido
        </label>
        <input id="c-nombre" name="nombre" required className={inputClass} />
        {state.errors?.nombre && (
          <p className="mt-1 text-xs text-red-600">{state.errors.nombre[0]}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="c-telefono">
            Teléfono
          </label>
          <input id="c-telefono" name="telefono" required className={inputClass} />
          {state.errors?.telefono && (
            <p className="mt-1 text-xs text-red-600">{state.errors.telefono[0]}</p>
          )}
        </div>
        <div>
          <label className={labelClass} htmlFor="c-email">
            Email (opcional)
          </label>
          <input id="c-email" name="email" type="email" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="c-direccion">
          Dirección de la propiedad
        </label>
        <input id="c-direccion" name="direccion" required className={inputClass} />
        {state.errors?.direccion && (
          <p className="mt-1 text-xs text-red-600">{state.errors.direccion[0]}</p>
        )}
      </div>

      <div>
        <label className={labelClass} htmlFor="c-operacion">
          ¿Querés vender o alquilar?
        </label>
        <select id="c-operacion" name="operacion" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Seleccioná una opción
          </option>
          <option value="venta">Vender</option>
          <option value="alquiler">Alquilar</option>
        </select>
        {state.errors?.operacion && (
          <p className="mt-1 text-xs text-red-600">{state.errors.operacion[0]}</p>
        )}
      </div>

      <div>
        <label className={labelClass} htmlFor="c-comentarios">
          Comentarios (opcional)
        </label>
        <textarea id="c-comentarios" name="comentarios" rows={3} className={inputClass} />
      </div>

      <FormSubmitButton label="Quiero sumar mi propiedad" />

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
