import logo from "@/assets/gv-connect-logo-hero.png.asset.json";

export function Logo({ className = "h-16 lg:h-20" }: { className?: string }) {
  return (
    <a href="#top" className="flex items-center group" aria-label="GV Connect">
      <img
        src={logo.url}
        alt="GV Connect"
        loading="eager"
        decoding="async"
        className={`${className} w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_4px_20px_rgba(212,175,55,0.35)]`}
      />
    </a>
  );
}
