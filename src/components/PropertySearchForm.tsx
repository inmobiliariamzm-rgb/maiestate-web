import { TIPOS, ZONAS } from "@/lib/data/properties";

export interface PropertySearchDefaults {
  operacion?: string;
  tipo?: string;
  zona?: string;
  ambientes?: string;
  precioMax?: string;
}

const selectClass =
  "w-full rounded-sm border border-navy/15 bg-white px-3 py-2.5 text-sm text-navy focus:border-gold focus:outline-none";
const labelClass = "mb-1 block text-xs font-semibold uppercase tracking-wide text-navy/60";

export default function PropertySearchForm({
  defaults = {},
  variant = "hero",
}: {
  defaults?: PropertySearchDefaults;
  variant?: "hero" | "page";
}) {
  return (
    <form
      method="get"
      action="/propiedades"
      className={
        variant === "hero"
          ? "grid gap-3 rounded-sm bg-white/95 p-5 shadow-xl sm:grid-cols-2 lg:grid-cols-5 lg:items-end"
          : "grid gap-4 rounded-sm border border-navy/10 bg-white p-5 sm:grid-cols-2 lg:grid-cols-5 lg:items-end"
      }
    >
      <div>
        <label className={labelClass} htmlFor="operacion">
          Operación
        </label>
        <select
          id="operacion"
          name="operacion"
          defaultValue={defaults.operacion ?? ""}
          className={selectClass}
        >
          <option value="">Venta o alquiler</option>
          <option value="venta">Venta</option>
          <option value="alquiler">Alquiler</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="tipo">
          Tipo
        </label>
        <select id="tipo" name="tipo" defaultValue={defaults.tipo ?? ""} className={selectClass}>
          <option value="">Todos los tipos</option>
          {TIPOS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="zona">
          Zona
        </label>
        <select id="zona" name="zona" defaultValue={defaults.zona ?? ""} className={selectClass}>
          <option value="">Todas las zonas</option>
          {ZONAS.map((z) => (
            <option key={z} value={z}>
              {z}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="ambientes">
          Ambientes (mín.)
        </label>
        <select
          id="ambientes"
          name="ambientes"
          defaultValue={defaults.ambientes ?? ""}
          className={selectClass}
        >
          <option value="">Indistinto</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      <button
        type="submit"
        className="rounded-sm bg-navy px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-navy-light"
      >
        Buscar
      </button>
    </form>
  );
}
