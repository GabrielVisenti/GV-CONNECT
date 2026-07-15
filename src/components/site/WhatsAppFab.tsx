export const WHATSAPP_NUMBER = "5544988480543";
export const WHATSAPP_DEFAULT_MSG =
  "Olá! Vim pelo site da GV Connect e gostaria de mais informações.";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MSG,
)}`;

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Falar no WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400/30 blur-lg" aria-hidden />
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-elevated transition-transform duration-200 group-hover:scale-110">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-8 w-8 fill-current"
          aria-hidden
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.686.686 0 0 1-.315-.086c-.907-.454-1.657-.902-2.594-1.793-.293-.279-.774-.984-.774-1.376 0-.641.641-.947.907-1.443.266-.496.061-1.052-.174-1.376-.279-.407-.947-1.795-1.348-2.44-.229-.373-.606-.542-1.017-.542a2.42 2.42 0 0 0-1.017.233c-.699.319-1.686 1.297-1.686 3.199 0 1.803 1.32 3.547 1.501 3.789.185.245 2.539 4.03 6.226 5.502 3.061 1.216 3.685 1.024 4.351.973.665-.051 2.146-.877 2.448-1.732.301-.855.301-1.591.213-1.742-.089-.152-.324-.245-.679-.421-.355-.176-2.096-1.033-2.42-1.15-.323-.114-.559-.176-.795.176-.235.353-.919 1.156-1.108 1.35zM16 .396C7.443.396.398 7.44.398 16c0 2.72.719 5.377 2.087 7.71L.174 32l8.502-2.226a15.87 15.87 0 0 0 7.324 1.83h.005C24.557 31.604 31.6 24.56 31.6 16 31.6 7.44 24.557.396 16 .396zm0 28.9c-2.396 0-4.767-.646-6.847-1.87l-.492-.29-5.053 1.325 1.348-4.923-.32-.508A13.15 13.15 0 0 1 2.756 16c0-7.297 5.947-13.244 13.246-13.244S29.246 8.702 29.246 16 23.297 29.296 16 29.296z" />
        </svg>
      </span>
    </a>
  );
}
