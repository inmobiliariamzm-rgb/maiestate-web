import Image from "next/image";
import type { PropertyImage as PropertyImageData } from "@/lib/data/properties";
import PropertyImagePlaceholder from "@/components/PropertyImagePlaceholder";

export default function PropertyImage({
  image,
  seed,
  alt,
  label,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
}: {
  image?: PropertyImageData | null;
  seed: string;
  alt: string;
  label?: string;
  className?: string;
  sizes?: string;
}) {
  const url = image?.asset?.url;

  if (!url) {
    return (
      <PropertyImagePlaceholder seed={seed} label={label} className={className} />
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={`${url}?w=1200&h=900&fit=crop&auto=format`}
        alt={image?.alt || alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
      {label && (
        <span className="absolute bottom-2 right-2 rounded bg-navy-dark/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-cream/80">
          {label}
        </span>
      )}
    </div>
  );
}
