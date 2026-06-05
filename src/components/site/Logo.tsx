import logo from "@/assets/gv-connect-logo.png.asset.json";

export function Logo({ className = "h-10 w-10", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3 group">
      <div className={`relative ${className} rounded-lg overflow-hidden ring-1 ring-gold/40 shadow-gold transition-transform group-hover:scale-105`}>
        <img src={logo.url} alt="GV Connect" className="h-full w-full object-cover" />
      </div>
      {showText && (
        <div className="leading-none">
          <div className="font-display text-lg tracking-wide text-gold-gradient">GV CONNECT</div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-platinum/60">Tecnologia Corporativa</div>
        </div>
      )}
    </a>
  );
}
