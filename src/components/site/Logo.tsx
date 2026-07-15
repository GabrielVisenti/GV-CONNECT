import avif320 from "@/assets/logo-320.avif.asset.json";
import avif480 from "@/assets/logo-480.avif.asset.json";
import webp320 from "@/assets/logo-320.webp.asset.json";
import webp480 from "@/assets/logo-480.webp.asset.json";
import png640 from "@/assets/logo-640.png.asset.json";

export function Logo({ className = "h-20 lg:h-24" }: { className?: string }) {
  return (
    <a href="#top" className="flex items-center group" aria-label="GV Connect">
      <picture>
        <source
          type="image/avif"
          srcSet={`${avif320.url} 1x, ${avif480.url} 2x`}
        />
        <source
          type="image/webp"
          srcSet={`${webp320.url} 1x, ${webp480.url} 2x`}
        />
        <img
          src={png640.url}
          alt="GV Connect"
          width={320}
          height={320}
          loading="eager"
          decoding="async"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          className={`${className} w-auto object-contain transition-transform group-hover:scale-105`}
        />
      </picture>
    </a>
  );
}
