"use client";

import { useFormStatus } from "react-dom";

export default function FormSubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-sm bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-navy-light disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Enviando..." : label}
    </button>
  );
}
