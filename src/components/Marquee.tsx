const items = [
  "Mais de 50 sabores",
  "Zero açúcar",
  "Sem lactose",
  "Açaí",
  "Sem gordura hidrogenada",
  "Feito em Petrópolis",
  "Potes de 1L e 2L",
  "Carrinho para eventos",
];

export function Marquee({ reverse = false, tone = "sol" }: { reverse?: boolean; tone?: "sol" | "fita" }) {
  const bg = tone === "sol" ? "bg-sol text-noite" : "bg-fita text-creme";
  const list = [...items, ...items];
  return (
    <div className={`relative z-20 -my-4 -rotate-2 overflow-hidden py-3 ${bg}`} aria-hidden="true">
      <div className={`marquee-track flex w-max gap-10 whitespace-nowrap px-5 ${reverse ? "reverse" : ""}`}>
        {list.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg font-bold">
            {t}
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-current opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}
