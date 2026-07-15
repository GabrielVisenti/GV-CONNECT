import avif320 from "@/assets/logo-320.avif.asset.json";
import avif480 from "@/assets/logo-480.avif.asset.json";
import avif640 from "@/assets/logo-640.avif.asset.json";
import webp320 from "@/assets/logo-320.webp.asset.json";
import webp480 from "@/assets/logo-480.webp.asset.json";
import webp640 from "@/assets/logo-640.webp.asset.json";
import png640 from "@/assets/logo-640.png.asset.json";

type Props = {
  alt?: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
};

/**
 * Responsive, format-negotiated GV Connect logo.
 * Rendered size is small (max ~320px CSS); srcset covers 1x/2x DPR.
 */
export function LogoPicture({
  alt = "GV Connect",
  className,
  sizes = "(min-width: 1024px) 320px, (min-width: 640px) 288px, 224px",
  eager = false,
}: Props) {
  const avifSrcSet = `${avif320.url} 320w, ${avif480.url} 480w, ${avif640.url} 640w`;
  const webpSrcSet = `${webp320.url} 320w, ${webp480.url} 480w, ${webp640.url} 640w`;
  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={png640.url}
        alt={alt}
        width={640}
        height={640}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        className={className}
      />
    </picture>
  );
}

export const LOGO_PRELOAD = {
  avifSrcSet: `${avif320.url} 320w, ${avif480.url} 480w, ${avif640.url} 640w`,
  sizes: "(min-width: 1024px) 320px, (min-width: 640px) 288px, 224px",
};
