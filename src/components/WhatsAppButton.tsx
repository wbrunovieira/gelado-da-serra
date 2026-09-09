import { MessageCircle } from "lucide-react";
import { whatsappStore } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappStore()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a loja no WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out-expo hover:-translate-y-1 hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
