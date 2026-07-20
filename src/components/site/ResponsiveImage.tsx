import type { CSSProperties } from "react";

type Props = {
  base: string; // e.g. "/assets/cat-informatica"
  widths: number[]; // e.g. [480, 800, 1200]
  sizes: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  eager?: boolean;
  draggable?: boolean;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
  fallbackExt?: "webp" | "png" | "jpg";
};

/**
 * Responsive <picture> that emits AVIF + WebP srcset from a base path.
 * Files must be named `${base}-${w}.avif` and `${base}-${w}.webp`.
 */
export function ResponsiveImage({
  base,
  widths,
  sizes,
  alt,
  className,
  style,
  eager,
  draggable,
  onClick,
  fallbackExt = "webp",
}: Props) {
  const srcset = (ext: "avif" | "webp") =>
    widths.map((w) => `${base}-${w}.${ext} ${w}w`).join(", ");
  const largest = widths[widths.length - 1];
  const fallback = `${base}-${largest}.${fallbackExt}`;
  return (
    <picture>
      <source type="image/avif" srcSet={srcset("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcset("webp")} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        draggable={draggable}
        onClick={onClick}
        className={className}
        style={style}
      />
    </picture>
  );
}
