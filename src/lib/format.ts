import type { Property } from "@/lib/data/properties";

export function formatPrice(precio: number, moneda: Property["moneda"]) {
  const formatted = new Intl.NumberFormat("es-AR").format(precio);
  return moneda === "USD" ? `USD ${formatted}` : `$ ${formatted}`;
}

export function operacionLabel(operacion: Property["operacion"]) {
  return operacion === "venta" ? "Venta" : "Alquiler";
}

export function tipoLabel(tipo: Property["tipo"]) {
  const labels: Record<Property["tipo"], string> = {
    departamento: "Departamento",
    casa: "Casa",
    lote: "Lote",
    "local-comercial": "Local comercial",
    quinta: "Quinta",
  };
  return labels[tipo];
}
