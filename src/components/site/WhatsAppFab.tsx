export const WHATSAPP_NUMBER = "5544988480543";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Olá! Vim pelo site da GV Connect e gostaria de mais informações."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400/40 blur-xl animate-glow" />
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-elevated transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current"
          aria-hidden
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39-.043 0-.092-.018-.137-.045-.5-.272-1.103-.526-2.04-1.353-.738-.654-1.222-1.466-1.387-1.674a.408.408 0 0 1-.087-.252c0-.323.499-.518.499-.91 0-.099-.039-.196-.087-.282-.117-.207-.633-1.488-.866-1.992-.182-.4-.337-.43-.572-.43-.069 0-.139-.005-.211-.005-.247 0-.4.045-.595.235-.591.581-.972 1.302-.972 2.346 0 1.166.515 2.301 1.182 3.221.95 1.301 2.044 2.51 3.464 3.336 1.243.722 2.541 1.156 4.022 1.156.665 0 1.183-.103 1.685-.345.51-.249.948-.769 1.045-1.305.058-.319.034-.591.022-.749-.012-.181-.131-.279-.323-.366-.235-.108-1.41-.696-1.63-.777-.215-.082-.36-.122-.499-.122zM16.001 0C7.165 0 .001 7.164.001 16c0 2.834.747 5.488 2.05 7.788L0 32l8.376-2.014A15.93 15.93 0 0 0 16.001 32C24.837 32 32 24.836 32 16S24.837 0 16.001 0zm0 28.793c-2.397 0-4.65-.654-6.578-1.795l-4.595 1.115 1.224-4.473A12.796 12.796 0 0 1 3.21 16c0-7.058 5.737-12.795 12.79-12.795 7.054 0 12.791 5.737 12.791 12.795 0 7.053-5.737 12.793-12.79 12.793z" />
        </svg>
      </span>
    </a>
  );
}
