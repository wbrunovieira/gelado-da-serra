import Image from "next/image";
import { site } from "@/data/site";

const photos = [
  { src: "/images/brownie.webp", alt: "Brownie com sorvete e calda de chocolate" },
  { src: "/images/potes-chocolate.webp", alt: "Potes de sorvete de chocolate" },
  { src: "/images/acai.webp", alt: "Potes de açaí" },
  { src: "/images/loja-interna.webp", alt: "Interior da loja" },
  { src: "/images/torta-limao.webp", alt: "Sorvete de torta de limão" },
  { src: "/images/romeu-julieta.webp", alt: "Sorvete de Romeu e Julieta" },
  { src: "/images/flocos.webp", alt: "Sorvete de flocos na vitrine" },
  { src: "/images/potes-queijo.webp", alt: "Potes de sorvete de queijo" },
  { src: "/images/marmita-chocolate.webp", alt: "Marmita de sorvete de chocolate" },
];

export function InstagramGrid() {
  return (
    <section className="bg-noite py-24 text-creme md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
            Acompanhe a vitrine da semana.
          </h2>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-creme/10 px-5 py-3 font-semibold transition-colors hover:bg-creme/20"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            {site.instagramHandle}
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          {photos.map((p, i) => (
            <li
              key={p.src}
              className={`relative aspect-square overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <a href={site.instagram} target="_blank" rel="noreferrer" className="block h-full w-full">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 16vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out-expo hover:scale-105"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
