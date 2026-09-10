import { MapPin, Clock, Phone } from "lucide-react";
import { site, whatsappStore } from "@/data/site";
import { MountainRange } from "./LogoParts";

export function Locations() {
  return (
    <section id="lojas" className="bg-creme py-24 text-noite md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] md:col-span-7">
            Onde a gente está.
          </h2>
          <p className="max-w-sm text-lg leading-relaxed text-noite/75 md:col-span-5">
            Duas lojas, uma na serra e outra no Rio. As duas abrem todos os dias.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {site.stores.map((s, i) => (
            <article
              key={s.name}
              className={`relative overflow-hidden rounded-[2rem] p-7 md:p-9 ${
                i === 0 ? "bg-serra text-creme" : "border-[3px] border-noite bg-creme shadow-offset"
              }`}
            >
              {i === 0 && (
                <MountainRange
                  className="pointer-events-none absolute -right-10 -top-2 w-64 opacity-70 md:w-80"
                  style={{ ["--mtn-fill" as string]: "#10407a", ["--snow-fill" as string]: "#dbeafe" }}
                />
              )}
              <p className={`relative text-sm font-semibold ${i === 0 ? "text-sol" : "text-fita"}`}>{s.city}</p>
              <h3 className="relative mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">{s.name}</h3>
              <p className={`mt-3 ${i === 0 ? "text-creme/80" : "text-noite/75"}`}>{s.note}</p>

              <ul className="mt-7 space-y-3 text-base">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{s.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{s.hours}</span>
                </li>
                {i === 0 && (
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                    <a href={`tel:${site.phoneStoreDigits}`} className="underline-offset-4 hover:underline">
                      (24) 3242-0906
                    </a>
                  </li>
                )}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={s.maps}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 ${
                    i === 0 ? "bg-sol text-noite" : "bg-noite text-creme"
                  }`}
                >
                  Abrir no Google Maps
                </a>
                {i === 0 ? (
                  <a
                    href={whatsappStore()}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border-2 border-creme/30 px-5 py-3 text-sm font-semibold text-creme transition-colors hover:bg-creme/10"
                  >
                    WhatsApp da loja
                  </a>
                ) : (
                  <a
                    href={site.instagramBarra}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border-2 border-noite px-5 py-3 text-sm font-semibold text-noite transition-colors hover:bg-noite/5"
                  >
                    @geladodaserrabarra
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
