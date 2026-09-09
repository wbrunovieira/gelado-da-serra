import Image from "next/image";
import { whatsappFactory } from "@/data/site";
import { Sparkle } from "./Sparkle";

export function Events() {
  return (
    <section id="eventos" className="relative overflow-hidden bg-sol py-24 text-noite md:py-32">
      <Sparkle className="absolute left-[8%] top-12 h-8 w-8 text-creme" />
      <Sparkle className="absolute right-[12%] bottom-16 h-6 w-6 text-fita" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <h2 className="font-display text-[clamp(2.5rem,6.5vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
            Leve o carrinho de sorvete pra sua festa.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-noite/80 md:text-xl">
            Aniversário, casamento, evento da empresa. O carrinho vai com sorvetes e picolés, e a
            gente cuida de servir. Você só escolhe os sabores.
          </p>
          <a
            href={whatsappFactory()}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-block rounded-full bg-noite px-7 py-4 font-semibold text-creme shadow-offset-sol transition-transform duration-300 ease-out-expo hover:-translate-y-1"
          >
            Pedir orçamento no WhatsApp
          </a>
          <p className="mt-4 text-sm text-noite/70">Atendimento da fábrica: (24) 99211-8594</p>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border-[3px] border-noite shadow-offset">
            <Image
              src="/images/sundae.webp"
              alt="Sundae colorido com coberturas e confeitos"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <span className="absolute -left-4 top-8 rotate-[-6deg] rounded-full bg-fita px-4 py-2 font-display text-sm font-bold text-creme shadow-offset">
            sorvetes e picolés
          </span>
        </div>
      </div>
    </section>
  );
}
