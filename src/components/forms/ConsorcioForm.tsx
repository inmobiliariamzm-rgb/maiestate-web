"use client";

import { useActionState } from "react";
import { submitConsorcioForm } from "@/lib/actions";
import { initialFormState } from "@/lib/formState";
import FormSubmitButton from "@/components/forms/FormSubmitButton";
import OrigenInput from "@/components/forms/OrigenInput";
import AreaTag from "@/components/AreaTag";

const inputClass =
  "w-full rounded-sm border border-navy/15 bg-white px-3 py-2.5 text-sm text-navy focus:border-gold focus:outline-none";
const labelClass = "mb-1 block text-xs font-semibold uppercase tracking-wide text-navy/60";

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;
  return <p className="mt-1 text-xs text-red-600">{errors[0]}</p>;
}

export default function ConsorcioForm({ origen }: { origen?: string }) {
  const [state, formAction] = useActionState(submitConsorcioForm, initialFormState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <OrigenInput value={origen} />

      <p className="text-xs text-navy/60">
        Área: <AreaTag area="Inmobiliaria" />
      </p>

      <div>
        <label className={labelClass} htmlFor="co-consorcio">
          Nombre del consorcio
        </label>
        <input id="co-consorcio" name="consorcio" required className={inputClass} />
        <FieldError errors={state.errors?.consorcio} />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="co-direccion">
            Dirección
          </label>
          <input id="co-direccion" name="direccion" required className={inputClass} />
          <FieldError errors={state.errors?.direccion} />
        </div>
        <div>
          <label className={labelClass} htmlFor="co-unidades">
            Cantidad de unidades
          </label>
          <input
            id="co-unidades"
            name="unidades"
            type="number"
            min={1}
            inputMode="numeric"
            required
            className={inputClass}
          />
          <FieldError errors={state.errors?.unidades} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="co-nombre">
            Nombre de contacto
          </label>
          <input id="co-nombre" name="nombre" required className={inputClass} />
          <FieldError errors={state.errors?.nombre} />
        </div>
        <div>
          <label className={labelClass} htmlFor="co-telefono">
            Teléfono
          </label>
          <input id="co-telefono" name="telefono" type="tel" required className={inputClass} />
          <FieldError errors={state.errors?.telefono} />
        </div>
      </div>

      <FormSubmitButton label="Pedir una propuesta" />

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
