# Referências de design — Gelado da Serra

Pesquisa feita em 2026-09-09 (Awwwards, Colorlib, DesignYourWay, MuffinGroup, Dribbble, Behance, Pinterest).
Screenshots nesta pasta. Nada foi construído ainda — aguardando material da marca.

## Sites reais (mais relevantes)

| # | Site | Por que importa | Screenshot |
|---|------|-----------------|------------|
| 1 | [NOPE Ice Cream](https://www.nope.ee/en/ice-cream) — Awwwards Honorable Mention | Fundo escuro (navy #1B0F3B) + rosa, amarelo e azul saturados. Ilustrações vetoriais grandes, tipografia display condensada, "sparkles", stickers rotacionados, botões pill. Hero animado, polaroids interativos, transições por seção. Webflow. | `01-nope-ice-cream.jpeg` |
| 2 | [Mr. Pops](https://mrpops.ua/en/) — Awwwards | Foto full-bleed com tipografia display gigante sobreposta (serif estilizada), CTA circular com borda "desenhada", seta de scroll. Muito editorial. | `02-mrpops.jpeg` |
| 3 | [Mister Dips](https://www.misterdips.com/) | Cores chapadas vibrantes (magenta + amarelo), mascote ilustrado em line-art, fotos de produto com sombra dura. Logo bubble/rounded. | `04-mister-dips.jpeg` |
| 4 | [Van Leeuwen](https://vanleeuwenicecream.com/) | Pastel (rosa, creme, caramelo), bordas pretas grossas, botões com sombra offset (estilo neo-brutal suave). Grid com divisórias. | `05-van-leeuwen.jpeg` |
| 5 | [Salt & Straw](https://saltandstraw.com/) | Vermelho + creme, tipografia serif de personalidade, padrão listrado como textura. Foco em storytelling e e-commerce. | `09-salt-and-straw.jpeg` |
| 6 | [Pretty Cool](https://prettycoolicecream.com/) | Parallax por seção, fundo vinho, fotos coloridas. | `03-pretty-cool.jpeg` (com popup) |

Outros citados nas listas: Oat & Mill (masonry), Jeni's (foto in-house), Subzero (dark + cartoon), Woodlands (dark elegante + parallax), Dasher & Crank (cone derretendo de fundo), Mövenpick (masonry + vídeo), Coolhaus (preto + neon), Talenti (sans geométrica premium).

## Dribbble / Behance / Pinterest

- Dribbble: [ice cream landing page](https://dribbble.com/search/ice-cream-landing-page), [gradient ice cream](https://dribbble.com/tags/gradient-ice-cream), [gelato](https://dribbble.com/tags/gelato) — `06-dribbble-ice-cream-landing.jpeg`
- Behance: [ice cream landing page (web design)](https://www.behance.net/search/projects/ice%20cream%20landing%20page?field=web%20design) — `07-behance-ice-cream-landing.jpeg`. Destaques: "IceBox – Taste (It)" (Iryna Horiacha, tipografia display preta em fundo rosa claro, stickers flor/estrela), "Ice Cream Therapy" (fitas/marquees diagonais), landing roxa monocromática com cone 3D.
- Pinterest: [ice cream website design inspiration](https://www.pinterest.com/ideas/ice-cream-website-design-inspiration/932203438889/) — `08-pinterest-ice-cream-web.jpeg`

## Padrões visuais recorrentes (o que se repete nos melhores)

1. **Tipografia display enorme** no hero (condensada, bubble ou serif com personalidade), muitas vezes sobrepondo a foto/ilustração.
2. **Paleta de 3 a 4 cores saturadas** sobre fundo escuro OU pastel sobre creme. Os dois caminhos funcionam; o escuro parece mais "moderno/premium", o pastel mais "artesanal".
3. **Elementos flutuantes**: stickers rotacionados, sparkles, estrelas, gotas, marquees diagonais.
4. **Produto como herói**: foto de cone/pote com sombra dura, recorte, ou render 3D.
5. **Gradientes** aparecem em fundos de seção, em blobs desfocados atrás do produto e em texto (gradient text). Pouco usados nos sites reais, muito usados nos shots de Dribbble/Behance — oportunidade para diferenciar.
6. **Motion**: hero com entrada em stagger, scroll-triggered reveals, parallax de camadas, hover com tilt/scale, marquee infinito, cursor customizado.
7. **CTAs pill** com sombra offset ou borda "desenhada à mão".

## Direção sugerida para o Gelado da Serra (a validar com o material da marca)

- **Conceito**: "artesanal da serra" = frescor, altitude, natureza + gelato moderno. Misturar o clima premium/escuro do NOPE com os toques orgânicos do Van Leeuwen.
- **Gradientes**: mesh gradients suaves (sabores como paleta: pistache, morango, maracujá, chocolate) + blobs animados atrás do produto.
- **Ícones**: Phosphor ou Lucide (line, arredondados) + ícones custom de sabores.
- **Animações**: GSAP + ScrollTrigger (reveals, pin de seções, parallax), Lenis (smooth scroll), Framer Motion para micro-interações em componentes React, opcional Three.js/R3F para um cone/gelato 3D no hero.
- **Seções da one-page**: Hero → Sabores (carrossel/grid com cor por sabor) → Como é feito (storytelling com scroll) → Ingredientes da serra → Onde encontrar (mapa/loja) → Depoimentos/Instagram → Contato/Pedido.

## Stack técnica candidata

- Next.js 16 + Tailwind 4 (já instalado)
- `gsap` + `@gsap/react`, `lenis`, `motion` (Framer Motion)
- `@react-three/fiber` + `drei` (opcional, hero 3D)
- `@phosphor-icons/react` ou `lucide-react`
