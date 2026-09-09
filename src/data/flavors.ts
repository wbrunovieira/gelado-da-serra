export type Flavor = {
  name: string;
  note: string;
  color: string;
  ink: string;
  image?: string;
  tag?: string;
};

export const flavors: Flavor[] = [
  { name: "Chocolate crocante", note: "Cacau intenso com pedaços que estalam.", color: "#5a3221", ink: "#fff6e8", image: "/images/pote-mao.webp" },
  { name: "Morango", note: "O clássico. Fruta de verdade, leve e refrescante.", color: "#e8607a", ink: "#2b0a14", image: "/images/pote-morango.webp" },
  { name: "Milho", note: "Gosto de festa junina e de infância.", color: "#f5c542", ink: "#3b2a00", image: "/images/milho-arte.webp" },
  { name: "Torta de limão", note: "Ácido na medida, com base de biscoito.", color: "#d6e88a", ink: "#1f2a00", image: "/images/torta-limao.webp" },
  { name: "Romeu e Julieta", note: "Goiabada com queijo, o casal mais famoso da serra.", color: "#c93b4e", ink: "#fff6e8", image: "/images/romeu-julieta.webp" },
  { name: "Queijo", note: "Para quem gosta de sabor de mesa de fazenda.", color: "#f6e2b8", ink: "#3b2418", image: "/images/potes-queijo.webp" },
  { name: "Flocos", note: "Baunilha cremosa com lascas de chocolate.", color: "#efe7dc", ink: "#1b1b1b", image: "/images/flocos.webp" },
  { name: "Açaí", note: "Da vitrine direto pro pote, com a cremosidade da casa.", color: "#5b2a6e", ink: "#fff6e8", image: "/images/acai.webp" },
  { name: "Brigadeiro", note: "Chocolate com leite condensado, como tem que ser.", color: "#3b2418", ink: "#fff6e8", image: "/images/potes-chocolate.webp" },
  { name: "Magno belga", note: "Chocolate belga, denso e escuro.", color: "#2a1a12", ink: "#ffd27a", image: "/images/potes-chocolate.webp" },
];
