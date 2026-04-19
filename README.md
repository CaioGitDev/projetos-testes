# ARQ - Arquitetura Boilerplate

Boilerplate para website institucional de um escritório de arquitetura.

## Stack

- **Astro** 5.x - Framework principal
- **React** 19 + **TypeScript** - Componentes interativos
- **TailwindCSS** 3.x - Estilização
- **Biome** - Lint + Format

## Estrutura

```
src/
├── components/
│   ├── react/           # Carousel, Gallery, Form, MobileMenu
│   └── astro/          # Header, Footer, ProjectCard
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── pt/             # Português
│   │   ├── projetos/
│   │   ├── sobre/
│   │   └── contato/
│   └── en/             # English
│       ├── projetos/
│       ├── sobre/
│       └── contato/
├── i18n/
│   ├── index.ts
│   └── locales/
├── lib/
│   └── cms.ts          # Mock data (Contentful/Sanity ready)
└── styles/
    └── global.css
```

## Componentes Interativos (React)

| Componente | Funcionalidade |
|------------|----------------|
| `ProjectCarousel` | Slideshow com navegação |
| `ProjectGallery` | Grid + lightbox + filtros |
| `ContactForm` | Validação + envio |
| `MobileMenu` | Menu hamburger animado |

## Scripts

```bash
npm install          # Instalar dependências
npm run dev         # Desenvolvimento
npm run build       # Build produção
npm run preview     # Preview produção
npm run lint        # Verificar código
npm run format      # Formatar código
```

## CMS Integration

O mock data está preparado para integração com Contentful ou Sanity. Para conectar:

1. **Contentful**: Instalar `@contentful/rich-text-react-renderer` e configurar em `src/lib/cms.ts`
2. **Sanity**: Instalar `@sanity/client` e criar schemas em `src/lib/sanity/`

## Deploy

Recomendado para **dominios.pt** (ou Vercel/Netlify):

```bash
npm run build
```

Build output em `dist/`.
