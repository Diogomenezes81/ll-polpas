import { criarLinkWhatsApp } from "@/utils/whatsapp";

type WhatsAppButtonProps = {
  message?: string;
  label?: string;
  className?: string;
  floating?: boolean;
};

export function WhatsAppButton({ message = "Olá! Gostaria de conhecer os produtos da LL Polpas.", label = "Fale pelo WhatsApp", className = "", floating = false }: WhatsAppButtonProps) {
  return (
    <a href={criarLinkWhatsApp(message)} target="_blank" rel="noreferrer" aria-label={`${label} (abre em uma nova aba)`} className={floating ? "fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#168b4b] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#10743e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 motion-reduce:transform-none" : `button-primary ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 24 24" className={floating ? "h-7 w-7" : "h-5 w-5"} fill="currentColor"><path d="M12.04 2a9.84 9.84 0 0 0-8.45 14.88L2 22l5.25-1.55A9.96 9.96 0 1 0 12.04 2Zm0 17.96a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.92.94-3.03-.2-.31a8.2 8.2 0 1 1 6.85 3.75Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.22-.09-.39-.13-.55.12-.16.25-.63.8-.77.96-.14.17-.28.19-.53.07-.24-.13-1.03-.38-1.96-1.21a7.31 7.31 0 0 1-1.35-1.68c-.14-.25-.02-.38.1-.5.11-.11.25-.28.37-.42.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.55-1.34-.76-1.83-.2-.48-.41-.42-.55-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.19 3.7.58.26 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.29Z"/></svg>
      {!floating && <span>{label}</span>}
    </a>
  );
}
