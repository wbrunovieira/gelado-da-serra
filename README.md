# Gelado da Serra

Site one-page da Gelado da Serra, sorveteria artesanal de Petrópolis (RJ).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (tokens em `src/app/globals.css`)
- GSAP + ScrollTrigger (hero, parallax, reveals), Lenis (smooth scroll), Motion (hover dos sabores)
- lucide-react para ícones

## Estrutura

- `src/app/page.tsx` monta as seções na ordem: Hero, Sabores, Sorvete faz bem, Para levar, Petrópolis, Eventos, Lojas, Instagram.
- `src/components/` um arquivo por seção.
- `src/data/site.ts` contatos, endereços e links do WhatsApp. `src/data/flavors.ts` sabores, cores e fotos.
- `public/images/` fotos do Instagram do cliente, otimizadas em WebP.
- `docs/references/` pesquisa de referências visuais. `docs/brand/` material bruto do cliente.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

Abra http://localhost:3000.

## Scripts

- `pnpm dev` servidor de desenvolvimento
- `pnpm build` build de produção
- `pnpm start` roda o build
- `pnpm lint` lint
