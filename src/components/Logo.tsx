"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LogoSvg } from "./LogoSvg";

export function Logo({
  animate = true,
  tilt = true,
  className = "h-14 md:h-[4.25rem]",
}: {
  animate?: boolean;
  tilt?: boolean;
  className?: string;
}) {
  const root = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      if (!animate) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("#gds-mtn", { y: 90, opacity: 0, duration: 1.1 }, 0)
        .from("#gds-snow", { y: 90, opacity: 0, duration: 1.1 }, 0.05)
        .from("#gds-sun", { y: 60, opacity: 0, scale: 0.5, duration: 1.2, transformOrigin: "50% 50%" }, 0.3)
        .from("#gds-outline, #gds-ribbon, #gds-accent", { scaleX: 0, duration: 0.9, transformOrigin: "50% 50%" }, 0.45)
        .from("#gds-swoosh", { scaleX: 0, opacity: 0, duration: 0.8, transformOrigin: "0% 50%" }, 0.7)
        // os paths do texto vivem num espaço espelhado (scale 0.1,-0.1): y negativo desce 1/10 do valor
        .from("#gds-text path", { y: -200, opacity: 0, duration: 0.5, stagger: 0.05, ease: "back.out(1.8)" }, 0.85);
    },
    { scope: root },
  );

  return (
    <a
      ref={root}
      href="#inicio"
      className={`block ${className} ${tilt ? "-rotate-[7deg]" : ""}`}
      aria-label="Gelado da Serra, início"
    >
      <LogoSvg className="h-full w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]" />
    </a>
  );
}
