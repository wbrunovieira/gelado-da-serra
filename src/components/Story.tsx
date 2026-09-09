"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { site } from "@/data/site";

const stats = [
  { value: site.rating, label: "no Google" },
  { value: `${site.reviews}`, label: "avaliações" },
  { value: "50+", label: "sabores" },
  { value: "2", label: "lojas" },
];

export function Story() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        ".story-img",
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
      gsap.from(".stat", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".stats", start: "top 85%" },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative isolate overflow-hidden bg-noite py-28 text-creme md:py-40">
      <div className="story-img absolute inset-0 -z-10 scale-125">
        <Image
          src="/images/fabrica.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-noite via-noite/60 to-noite" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
            Feito orgulhosamente em Petrópolis.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-creme/80 md:text-xl">
            Temos fábrica própria na serra, onde cada receita é feita em lotes pequenos. O frio da
            cidade combina com sorvete mais do que parece: brownie quentinho com calda e duas bolas é
            o nosso pedido de inverno.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-creme/80 md:text-xl">
            A primeira loja abriu na Rua Coronel Veiga. A segunda, no Mercado Guanabara da Barra.
            A cremosidade é a mesma nas duas.
          </p>
        </div>

        <dl className="stats mt-16 grid grid-cols-2 gap-6 border-t border-creme/15 pt-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="stat flex flex-col">
              <dt className="order-2 text-sm text-creme/60 md:text-base">{s.label}</dt>
              <dd className="font-display text-5xl font-extrabold tracking-tight text-sol md:text-6xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
