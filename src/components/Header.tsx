"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { whatsappStore } from "@/data/site";

const links = [
  { href: "#sabores", label: "Sabores" },
  { href: "#levar", label: "Para levar" },
  { href: "#eventos", label: "Eventos" },
  { href: "#lojas", label: "Lojas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-500 ${
        scrolled ? "bg-noite/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,246,232,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Seções">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-creme/80 transition-colors hover:bg-creme/10 hover:text-creme"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappStore()}
            target="_blank"
            rel="noreferrer"
            className="ml-3 rounded-full bg-sol px-5 py-2.5 text-sm font-semibold text-noite transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-sol-claro"
          >
            Chamar no WhatsApp
          </a>
        </nav>

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

      <div
        id="menu-mobile"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out-expo md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <nav className="min-h-0 bg-noite/95 backdrop-blur-md" aria-label="Seções">
          <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-display text-2xl font-semibold text-creme"
                >
                  {l.label}
                </a>
              </li>
            ))}
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
