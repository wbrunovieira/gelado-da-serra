import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/data/site";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  weight: "variable",
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Gelado da Serra | Sorvete artesanal em Petrópolis",
  description:
    "Sorvete artesanal premium feito em Petrópolis. Mais de 50 sabores no self-service, opções zero açúcar e sem lactose, potes para levar e carrinho para eventos.",
  openGraph: {
    title: "Gelado da Serra",
    description: "Cremosidade que só a serra tem. Sorvete artesanal em Petrópolis, RJ.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "IceCreamShop",
    name: "Gelado da Serra",
    telephone: site.phoneStore,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Coronel Veiga, 1066",
      addressLocality: "Petrópolis",
      addressRegion: "RJ",
      postalCode: "25655-171",
      addressCountry: "BR",
    },
    openingHours: "Mo-Su 11:00-19:00",
    sameAs: [site.instagram],
  };

  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
