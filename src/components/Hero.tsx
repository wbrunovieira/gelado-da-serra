"use client";

import { useRef } from "react";
import { VideoLoop } from "./VideoLoop";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Star } from "lucide-react";
import { Sparkle } from "./Sparkle";
import { MountainRange, Sun } from "./LogoParts";
import { site, whatsappStore } from "@/data/site";

const lines = ["Cremosidade", "que só a", "serra tem."];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".hero-line > span", { yPercent: 110, duration: 1.1, stagger: 0.09 }, 0.1)
        .from(".hero-sub, .hero-cta", { y: 24, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.6)
        .from(".hero-product", { y: 80, opacity: 0, rotate: 8, duration: 1.4 }, 0.35)
        .from(".hero-sticker", { scale: 0, opacity: 0, duration: 0.7, ease: "back.out(2)", stagger: 0.08 }, 0.9)
        .from(".hero-sparkle", { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(2)", stagger: 0.05 }, 1)
        .from(".hero-foot", { opacity: 0, y: 12, duration: 0.8 }, 1.2)
        .from(".hero-sun", { y: 120, opacity: 0, duration: 1.6, ease: "power3.out" }, 0.2)
        .from(".hero-mountains", { yPercent: 40, opacity: 0, duration: 1.4 }, 0.1);

      gsap.to(".hero-sun", {
        y: -60,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-mountains", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });

      gsap.to(".hero-product", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-copy", {
        yPercent: -10,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root },
  );

  return (
    <section
      id="inicio"
      ref={root}
      className="mesh grain relative isolate flex min-h-svh items-center overflow-hidden pt-24 pb-28 md:pt-28 md:pb-32"
    >
      <Sun
        className="hero-sun pointer-events-none absolute right-[4%] top-[9%] -z-10 h-28 w-28 md:right-[3%] md:top-[8%] md:h-48 md:w-48"
        style={{ filter: "drop-shadow(0 0 40px rgba(254,221,14,0.45)) drop-shadow(0 0 120px rgba(240,168,58,0.35))" }}
      />
      <MountainRange
        className="hero-mountains pointer-events-none absolute -bottom-1 left-1/2 -z-10 w-[150%] -translate-x-1/2 md:w-[110%]"
        style={{ ["--mtn-fill" as string]: "#10407a", ["--snow-fill" as string]: "#dbeafe" }}
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 md:grid-cols-12 md:px-8">
        <div className="hero-copy relative z-10 md:col-span-7">
          <h1 className="font-display text-[clamp(3.25rem,8vw,7.25rem)] font-extrabold leading-[0.92] tracking-[-0.03em] text-creme">
            {lines.map((l, i) => (
              <span key={l} className="hero-line block overflow-hidden pb-[0.06em]">
                <span className={`block ${i === 2 ? "text-gradient-sol" : ""}`}>{l}</span>
              </span>
            ))}
          </h1>

          <p className="hero-sub mt-7 max-w-md text-lg leading-relaxed text-creme/80 md:text-xl">
            Sorvete artesanal feito em Petrópolis, com mais de 50 sabores no self-service e opções
            zero açúcar e sem lactose.
          </p>

          <div className="hero-cta mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#sabores"
              className="rounded-full bg-sol px-7 py-4 font-semibold text-noite shadow-offset transition-transform duration-300 ease-out-expo hover:-translate-y-1 hover:bg-sol-claro"
            >
              Ver os sabores
            </a>
            <a
              href={whatsappStore()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-creme/30 px-7 py-4 font-semibold text-creme transition-colors hover:border-creme hover:bg-creme/10"
            >
              Encomendar pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="hero-product relative mx-auto aspect-[4/5] w-[min(80vw,26rem)] md:w-full">
            <div className="absolute inset-0 -z-10 rounded-[46%_54%_52%_48%/48%_44%_56%_52%] bg-gradient-to-br from-sol/60 via-fita/30 to-serra-claro blur-2xl" />
            <div className="floaty relative h-full w-full overflow-hidden rounded-[46%_54%_52%_48%/48%_44%_56%_52%] ring-1 ring-creme/15">
              <VideoLoop
                src="/videos/calda.mp4"
                poster="/videos/calda-poster.webp"
                label="Calda quente de chocolate escorrendo sobre um pote de sorvete da Gelado da Serra"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <span
              className="hero-sticker absolute -left-4 top-6 rotate-[-8deg] rounded-full bg-creme px-4 py-2 font-display text-sm font-bold text-noite shadow-offset-sol md:-left-10"
              style={{ ["--r" as string]: "-8deg" }}
            >
              50+ sabores
            </span>
            <span
              className="hero-sticker absolute -right-2 top-1/3 rotate-[7deg] rounded-full bg-fita px-4 py-2 font-display text-sm font-bold text-creme shadow-offset md:-right-8"
            >
              zero açúcar
            </span>
            <span className="hero-sticker absolute -bottom-3 left-8 rotate-[-4deg] rounded-full bg-sol px-4 py-2 font-display text-sm font-bold text-noite shadow-offset">
              feito em Petrópolis
            </span>

            <Sparkle className="hero-sparkle absolute bottom-16 -right-6 h-5 w-5 text-creme" />
            <Sparkle className="hero-sparkle absolute -left-8 bottom-1/3 h-4 w-4 text-sol" />
          </div>
        </div>
      </div>

      <div className="hero-foot absolute inset-x-0 bottom-12 z-10 md:bottom-14">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <a
            href="https://www.google.com/search?q=Gelado+da+Serra+Petr%C3%B3polis"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-creme/10 px-4 py-2 text-sm text-creme/90 backdrop-blur-sm"
          >
            <span className="flex text-sol" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span>
              <strong className="font-semibold">{site.rating}</strong> no Google, {site.reviews} avaliações
            </span>
          </a>
          <span className="hidden text-sm text-creme/60 md:block">Role para ver os sabores</span>
        </div>
      </div>
    </section>
  );
}
