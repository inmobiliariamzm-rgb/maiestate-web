import type { ReactNode } from "react";
import type { Area } from "@/lib/data/services";

// Portada navy con degradé y silueta de montaña, igual que Home y la
// landing de tasaciones. Sin fotos de banco: solo fondo navy.
export default function PageHero({
  eyebrow,
  title,
  description,
  area,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  area?: Area;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-dark text-cream">
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-navy-dark/60"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 200V90l120-40 100 30 140-70 160 50 130-35 150 45 120-30 140 40 140-25 100 20V200Z"
        />
      </svg>

      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {eyebrow}
          {area && <span className="text-cream/60"> · Área {area}</span>}
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-cream/80">
          {description}
        </p>
        {children && (
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export const heroPrimaryButton =
  "rounded-sm bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-wide text-navy-dark hover:bg-gold-light";
export const heroSecondaryButton =
  "rounded-sm border border-cream/40 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-cream/10";
