const GRADIENTS = [
  "from-navy to-navy-light",
  "from-navy-dark to-navy",
  "from-navy-light to-gold",
  "from-navy to-gold-light",
];

function gradientFor(seed: string) {
  const sum = seed.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return GRADIENTS[sum % GRADIENTS.length];
}

export default function PropertyImagePlaceholder({
  seed,
  label,
  className = "",
}: {
  seed: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradientFor(
        seed
      )} ${className}`}
    >
      <svg
        viewBox="0 0 48 48"
        className="h-12 w-12 text-cream/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M6 22 24 8l18 14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 19v19h28V19" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 38v-9h8v9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label && (
        <span className="absolute bottom-2 right-2 rounded bg-navy-dark/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-cream/80">
          {label}
        </span>
      )}
    </div>
  );
}
