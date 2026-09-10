"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Logo } from "./Logo";
import { whatsappStore } from "@/data/site";

const links = [
  { id: "inicio", label: "Início" },
  { id: "sabores", label: "Sabores" },
  { id: "levar", label: "Para levar" },
  { id: "eventos", label: "Eventos" },
  { id: "lojas", label: "Lojas" },
];

/** Marca no menu a seção em que o leitor está. */
function useActiveSection() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      const line = window.scrollY + window.innerHeight * 0.35;
      let current = links[0].id;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= line) current = l.id;
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = links[links.length - 1].id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return active;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-500 ${
        scrolled ? "bg-noite/80 shadow-[0_1px_0_0_rgba(255,246,232,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Seções">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive ? "font-semibold text-noite" : "font-medium text-creme/80 hover:text-creme"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-creme"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                {l.label}
              </a>
            );
          })}
          <a
            href={whatsappStore()}
            target="_blank"
            rel="noreferrer"
            className="ml-3 rounded-full bg-sol px-5 py-2.5 text-sm font-semibold text-noite transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-sol-claro"
          >
            Chamar no WhatsApp
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <span
            className={`rounded-full bg-creme/10 px-3 py-1.5 text-sm font-semibold text-creme transition-opacity duration-300 ${
              scrolled && !open ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden="true"
          >
            {links.find((l) => l.id === active)?.label}
          </span>

          <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="grid h-11 w-11 place-items-center rounded-full bg-creme/10 md:hidden"
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-creme transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-creme transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-creme transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out-expo md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <nav className="min-h-0 bg-noite/95 backdrop-blur-md" aria-label="Seções">
          <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 font-display text-2xl font-semibold transition-colors ${
                      isActive ? "bg-creme text-noite" : "text-creme"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full transition-colors ${isActive ? "bg-fita" : "bg-creme/25"}`}
                    />
                    {l.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href={whatsappStore()}
                target="_blank"
                rel="noreferrer"
                className="block rounded-full bg-sol px-5 py-3 text-center font-semibold text-noite"
              >
                Chamar no WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
