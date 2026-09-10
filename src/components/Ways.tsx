import Image from "next/image";
import { VideoLoop } from "./VideoLoop";
import { whatsappStore } from "@/data/site";

export function Ways() {
  return (
    <section id="levar" className="bg-creme py-24 text-noite md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
            Na loja, em casa ou na sua festa.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-noite/75">
            Quatro jeitos de levar a Gelado da Serra com você.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-6 md:grid-rows-2">
          <article className="relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-serra text-creme md:col-span-3 md:row-span-2">
            <VideoLoop
              src="/videos/vitrine.mp4"
              poster="/videos/vitrine-poster.webp"
              label="Vitrine do self-service com dezenas de sabores"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noite via-noite/30 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-7 md:p-9">
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Self-service na loja</h3>
              <p className="mt-3 max-w-sm text-creme/85">
                Mais de 50 sabores na vitrine, coberturas e acompanhamentos. Você serve, pesa e paga.
              </p>
            </div>
          </article>

          <article className="relative min-h-[16rem] overflow-hidden rounded-[2rem] bg-sol text-noite md:col-span-3">
            <div className="grid h-full md:grid-cols-2">
              <div className="flex flex-col justify-between p-7">
                <h3 className="font-display text-3xl font-bold tracking-tight">Marmitinha</h3>
                <p className="mt-3 text-noite/80">
                  Monte com os sabores que você mais gosta e leve pra casa, pro trabalho ou pra onde quiser.
                </p>
              </div>
              <div className="relative min-h-[12rem]">
                <VideoLoop
                  src="/videos/marmitinha.mp4"
                  poster="/videos/marmitinha-poster.webp"
                  label="Marmitinha com quatro bolas de sorvete"
                  className="absolute inset-0 h-full w-full object-cover object-[50%_80%]"
                />
              </div>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-[2rem] border-[3px] border-noite bg-creme p-7 shadow-offset md:col-span-2">
            <h3 className="font-display text-3xl font-bold tracking-tight">Potes de 1L e 2L</h3>
            <p className="mt-3 text-noite/80">
              Na loja, conforme o estoque da semana. Ligue antes pra garantir o seu sabor.
            </p>
          </article>

          <article className="flex flex-col justify-between rounded-[2rem] bg-fita p-7 text-creme md:col-span-1">
            <h3 className="font-display text-3xl font-bold leading-none tracking-tight">5L e 10L</h3>
            <p className="mt-3 text-creme/85">Caixas sob encomenda.</p>
            <a
              href={whatsappStore("Olá! Quero encomendar uma caixa de sorvete.")}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-full bg-creme px-4 py-2 text-center text-sm font-semibold text-fita transition-colors hover:bg-sol-claro"
            >
              Encomendar
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
