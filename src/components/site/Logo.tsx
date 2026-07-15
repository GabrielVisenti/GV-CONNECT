import logo from "@/assets/gv-connect-logo-hero.png.asset.json";

export function Logo({ className = "h-20 lg:h-24" }: { className?: string }) {
  return (
    <a href="#top" className="flex items-center group" aria-label="GV Connect">
      <img
        src={logo.url}
        alt="GV Connect"
        loading="eager"
        decoding="async"
        className={`${className} w-auto object-contain transition-transform group-hover:scale-105`}
      />
    </a>
  );
}
