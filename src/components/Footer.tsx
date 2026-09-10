import { Logo } from "./Logo";
import { site, whatsappStore } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-creme/10 bg-noite py-12 text-creme">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <Logo animate={false} tilt={false} className="h-16" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-creme/60">
            Sorvete artesanal premium, feito em Petrópolis desde a primeira colherada.
          </p>
        </div>

        <div className="grid gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="font-semibold">Loja</p>
            <p className="mt-2 text-creme/70">Rua Coronel Veiga, 1066<br />Petrópolis, RJ</p>
            <p className="mt-2 text-creme/70">{site.hours}</p>
          </div>
          <div>
            <p className="font-semibold">Contato</p>
            <a href={whatsappStore()} target="_blank" rel="noreferrer" className="mt-2 block text-creme/70 hover:text-creme">
              (24) 3242-0906, loja
            </a>
            <a href={`https://wa.me/${site.phoneFactoryDigits}`} target="_blank" rel="noreferrer" className="mt-1 block text-creme/70 hover:text-creme">
              (24) 99211-8594, eventos
            </a>
          </div>
          <div>
            <p className="font-semibold">Redes</p>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="mt-2 block text-creme/70 hover:text-creme">
              @geladodaserra
            </a>
            <a href={site.instagramBarra} target="_blank" rel="noreferrer" className="mt-1 block text-creme/70 hover:text-creme">
              @geladodaserrabarra
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-5 text-xs text-creme/40 md:px-8">
        © {new Date().getFullYear()} Gelado da Serra. Todos os direitos reservados.
      </p>
    </footer>
  );
}
