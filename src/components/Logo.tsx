export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="2" y="2" width="44" height="44" rx="14" fill="#c0281a" />
      <circle cx="33" cy="15" r="4" fill="#f0a83a" />
      <path d="M6 36 L18 18 L25 28 L30 22 L42 36 Z" fill="#fff6e8" />
      <path d="M6 36 L18 18 L21 22.5 L14 36 Z" fill="#00285a" opacity="0.35" />
    </svg>
  );
}

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label="Gelado da Serra, início">
      <LogoMark />
      <span
        className={`font-display text-xl font-bold leading-none tracking-tight ${light ? "text-creme" : "text-noite"}`}
      >
        Gelado da Serra
      </span>
    </a>
  );
}
