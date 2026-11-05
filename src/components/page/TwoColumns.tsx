import type { ReactNode } from "react";

export interface Column {
  titulo: string;
  items?: string[];
  texto?: ReactNode;
}

// Dos columnas: típicamente "Área inmobiliaria" / "Departamento Contable".
export default function TwoColumns({ columns }: { columns: [Column, Column] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {columns.map((col) => (
        <div
          key={col.titulo}
          className="rounded-sm border border-navy/10 bg-white p-6 sm:p-8"
        >
          <h3 className="font-serif text-2xl font-semibold text-navy">
            {col.titulo}
          </h3>
          {col.texto && <p className="mt-3 text-navy/75">{col.texto}</p>}
          {col.items && (
            <ul className="mt-4 space-y-3">
              {col.items.map((item) => (
                <li key={item} className="flex gap-3 text-navy/80">
                  <span aria-hidden="true" className="text-gold">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
