"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LogoSvg } from "./LogoSvg";

export function Logo({ animate = true, className = "h-14 md:h-[4.25rem]" }: { animate?: boolean; className?: string }) {
  const root = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      if (!animate) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("#gds-mtn-back", { y: 60, opacity: 0, duration: 1.1, transformOrigin: "50% 100%" }, 0)
        .from("#gds-mtn-front", { y: 70, opacity: 0, duration: 1.1, transformOrigin: "50% 100%" }, 0.12)
        .from("#gds-sun", { y: 40, opacity: 0, scale: 0.6, duration: 1.2, transformOrigin: "50% 50%" }, 0.3)
        .from("#gds-ribbon", { scaleX: 0, duration: 0.9, transformOrigin: "50% 50%" }, 0.45)
        .from("#gds-swoosh", { scaleX: 0, opacity: 0, duration: 0.8, transformOrigin: "0% 50%" }, 0.7)
        .from(
          "#gds-text path",
          { y: 14, opacity: 0, duration: 0.5, stagger: 0.035, ease: "back.out(1.8)" },
          0.85,
        );
    },
    { scope: root },
  );

  return (
    <a ref={root} href="#inicio" className={`block ${className}`} aria-label="Gelado da Serra, início">
      <LogoSvg viewBox="48 62 396 222" className="h-full w-auto" />
    </a>
  );
}
