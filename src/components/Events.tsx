import Image from "next/image";
import { whatsappFactory } from "@/data/site";
import { RibbonBand, Sun } from "./LogoParts";

export function Events() {
  return (
    <section id="eventos" className="relative overflow-hidden bg-sol py-24 text-noite md:py-32">
      <Sun
        className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 md:-bottom-32 md:-right-20 md:h-[28rem] md:w-[28rem]"
        style={{ ["--sun-fill" as string]: "#ffd35a" }}
      />

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
          <span className="absolute -left-6 top-6 grid w-44 rotate-[-7deg] place-items-center md:-left-10 md:w-56">
            <RibbonBand className="col-start-1 row-start-1 w-full" />
            <span className="col-start-1 row-start-1 -translate-y-[6%] font-display text-sm font-bold text-creme md:text-base">
              sorvetes e picolés
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
