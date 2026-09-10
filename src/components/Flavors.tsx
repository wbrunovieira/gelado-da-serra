"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { flavors } from "@/data/flavors";
import { Sun } from "./LogoParts";

const chips = ["Zero açúcar", "Sem lactose", "Açaí", "Picolés"];

export function Flavors() {
  const [active, setActive] = useState<number | null>(null);
  const tint = active === null ? "#fff6e8" : flavors[active].color;
  const ink = active === null ? "#0b1f3f" : flavors[active].ink;

  return (
    <section
      id="sabores"
      className="relative overflow-hidden py-24 transition-colors duration-700 ease-out md:py-32"
      style={{ backgroundColor: tint, color: ink }}
    >
      <Sun
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-40 md:-right-10 md:-top-24 md:h-[26rem] md:w-[26rem]"
        style={{ ["--sun-fill" as string]: "#f0a83a" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] md:col-span-8">
            Mais de 50 sabores no self-service. Você monta o pote do seu jeito.
          </h2>
          <div className="md:col-span-4">
            <p className="max-w-sm text-lg leading-relaxed opacity-80">
              Estes são alguns dos que mais saem. A vitrine muda com a semana, então sempre tem
              novidade pra provar.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {chips.map((c) => (
                <li
                  key={c}
                  className="rounded-full border-2 border-current px-3.5 py-1.5 text-sm font-semibold"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4 md:gap-5">
          {flavors.map((f, i) => (
            <motion.li
              key={f.name}
              onHoverStart={() => setActive(i)}
              onHoverEnd={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              whileHover={{ y: -8, rotate: i % 2 ? 1.2 : -1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] ${
                i === 0 || i === 5 ? "md:col-span-2 md:aspect-auto" : ""
              }`}
              style={{ backgroundColor: f.color, color: f.ink }}
            >
              <button
                type="button"
                className="absolute inset-0 flex h-full w-full flex-col justify-end p-5 text-left focus-visible:outline-offset-[-6px] md:p-6"
                aria-label={`${f.name}: ${f.note}`}
              >
                {f.image && (
                  <Image
                    src={f.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                )}
                <span
                  className="absolute inset-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-20 group-focus-visible:opacity-20"
                  style={{ backgroundColor: f.color, opacity: 0.7 }}
                />
                <span
                  className="absolute inset-x-0 bottom-0 h-3/5"
                  style={{ background: `linear-gradient(180deg, transparent, ${f.color} 85%)` }}
                />
                <span className="relative">
                  <span className="block font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                    {f.name}
                  </span>
                  <span className="mt-2 block max-w-[26ch] text-sm leading-snug opacity-0 transition-opacity duration-500 group-hover:opacity-90 group-focus-visible:opacity-90 md:text-base">
                    {f.note}
                  </span>
                </span>
              </button>
            </motion.li>
          ))}
        </ul>

        <p className="mt-10 text-base opacity-70">
          A lista completa muda toda semana e está na vitrine da loja.
        </p>
      </div>
    </section>
  );
}
