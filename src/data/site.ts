export const site = {
  name: "Gelado da Serra",
  instagram: "https://www.instagram.com/geladodaserra",
  instagramHandle: "@geladodaserra",
  instagramBarra: "https://www.instagram.com/geladodaserrabarra",
  phoneStore: "+55 24 3242-0906",
  phoneStoreDigits: "552432420906",
  phoneFactory: "+55 24 99211-8594",
  phoneFactoryDigits: "5524992118594",
  hours: "Todos os dias, das 11h às 19h",
  rating: "5,0",
  reviews: 140,
  stores: [
    {
      name: "Loja Coronel Veiga",
      city: "Petrópolis, RJ",
      address: "Rua Coronel Veiga, 1066 – Valparaíso",
      hours: "Todos os dias, 11h às 19h",
      maps: "https://www.google.com/maps/search/?api=1&query=Gelado+da+Serra+Rua+Coronel+Veiga+1066+Petr%C3%B3polis",
      note: "Self-service com mais de 50 sabores, potes e marmitinhas.",
    },
    {
      name: "Mercado Guanabara da Barra",
      city: "Barra da Tijuca, RJ",
      address: "Quiosque dentro do Mercado Guanabara da Barra",
      hours: "Horário do mercado",
      maps: "https://www.google.com/maps/search/?api=1&query=Mercado+Guanabara+Barra+da+Tijuca",
      note: "Nossa unidade mais nova, no Rio.",
    },
  ],
};

export const whatsappStore = (text = "Olá! Vim pelo site da Gelado da Serra.") =>
  `https://wa.me/${site.phoneStoreDigits}?text=${encodeURIComponent(text)}`;

export const whatsappFactory = (text = "Olá! Quero um orçamento do carrinho de sorvetes para um evento.") =>
  `https://wa.me/${site.phoneFactoryDigits}?text=${encodeURIComponent(text)}`;
