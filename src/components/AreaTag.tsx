import type { Area } from "@/lib/data/services";

// Etiqueta de área: texto pequeño en dorado, sin caja ni fondo de color
// (regla de diseño: los destacados solo usan color dorado).
export default function AreaTag({
  area,
  className = "",
}: {
  area: Area;
  className?: string;
}) {
  return (
    <span
      className={`text-[11px] font-semibold uppercase tracking-[0.2em] text-gold ${className}`}
    >
      {area}
    </span>
  );
}
