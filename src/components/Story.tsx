"use client";

import { useRef } from "react";
import { VideoLoop } from "./VideoLoop";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { site } from "@/data/site";
import { MountainRange, Sun } from "./LogoParts";

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
      gsap.fromTo(
        ".story-mtn-back",
        { yPercent: 30 },
        { yPercent: -5, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } },
      );
      gsap.fromTo(
        ".story-mtn-front",
        { yPercent: 55 },
        { yPercent: 0, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } },
      );
      gsap.fromTo(
        ".story-sun",
        { yPercent: 160, opacity: 0.4 },
        { yPercent: -10, opacity: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top 80%", end: "center center", scrub: true } },
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
    <section ref={root} className="relative isolate overflow-hidden bg-noite pb-56 pt-28 text-creme md:pb-80 md:pt-40">
      <div className="story-img absolute inset-0 -z-10 scale-125">
        <VideoLoop
          src="/videos/colher.mp4"
          poster="/videos/colher-poster.webp"
          label="Colher tirando sorvete de Romeu e Julieta da cuba"
          className="h-full w-full object-cover opacity-45"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-noite via-noite/60 to-noite" />

      <Sun
        className="story-sun pointer-events-none absolute right-[8%] top-[10%] -z-10 h-28 w-28 md:right-[14%] md:top-[8%] md:h-44 md:w-44"
        style={{ filter: "drop-shadow(0 0 40px rgba(254,221,14,0.5))" }}
      />
      <MountainRange
        className="story-mtn-back pointer-events-none absolute -bottom-4 left-[55%] -z-10 w-[180%] -translate-x-1/2 md:w-[130%]"
        style={{ ["--mtn-fill" as string]: "#10407a", ["--snow-fill" as string]: "#bfdbfe" }}
      />
      <MountainRange
        className="story-mtn-front pointer-events-none absolute -bottom-6 left-[40%] -z-10 w-[190%] -translate-x-1/2 md:w-[140%]"
        style={{ ["--mtn-fill" as string]: "#0380fe", ["--snow-fill" as string]: "#f4fcfd" }}
      />

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
