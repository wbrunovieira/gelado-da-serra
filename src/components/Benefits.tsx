"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Smile, Leaf, Zap, Brain, HeartHandshake } from "lucide-react";
import { MountainRange, Swoosh } from "./LogoParts";

const items = [
  { icon: Smile, title: "Melhora o humor", text: "Uma colherada gelada no meio do dia resolve muita coisa." },
  { icon: Leaf, title: "Ingredientes de verdade", text: "Fruta, leite e cacau. Sem gordura hidrogenada em nenhuma receita." },
  { icon: Zap, title: "Energia na medida", text: "Opções zero açúcar e sem lactose para quem quer sem culpa." },
  { icon: Brain, title: "Estimula a memória", text: "Milho lembra festa junina. Morango lembra a infância. Cada sabor guarda uma história." },
  { icon: HeartHandshake, title: "Junta as pessoas", text: "A loja virou ponto de encontro para colocar o papo em dia." },
];

export function Benefits() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".benefits-swoosh", {
        scaleX: 0,
        transformOrigin: "0% 50%",
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: ".benefits-title", start: "top 75%" },
      });
      gsap.to(".benefits-mountains", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.from(".benefit", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".benefits-list", start: "top 78%" },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-serra py-24 text-creme md:py-32">
      <MountainRange
        className="benefits-mountains pointer-events-none absolute -bottom-24 left-1/2 w-[170%] -translate-x-1/2 opacity-60 md:w-[120%]"
        style={{ ["--mtn-fill" as string]: "#0b1f3f", ["--snow-fill" as string]: "#1b4f93" }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <h2 className="benefits-title font-display text-[clamp(2.75rem,7vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.03em]">
              Sorvete faz bem.
            </h2>
            <Swoosh className="benefits-swoosh mt-3 h-4 w-56 md:w-72" style={{ ["--swoosh-fill" as string]: "#0a81ff" }} />
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-creme/75">
              Mais que sabor, momentos que cuidam. É assim que a gente pensa cada receita na fábrica.
            </p>
          </div>
        </div>

        <ul className="benefits-list md:col-span-7 md:pt-4">
          {items.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="benefit grid grid-cols-[3.25rem_1fr] gap-5 border-t border-creme/15 py-7 first:border-t-0 md:py-9"
            >
              <span className="grid h-13 w-13 place-items-center rounded-2xl bg-sol text-noite">
                <Icon className="h-6 w-6" strokeWidth={2.2} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{title}</h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-creme/75 md:text-lg">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
