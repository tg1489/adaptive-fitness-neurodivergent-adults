# Adaptive Fitness for Neurodivergent Adults

SolidJS + Vite + TypeScript boilerplate.

## Stack

- [SolidJS](https://solidjs.com) `^1.9.3` — reactive UI
- [Vite](https://vitejs.dev) `^6.3.5` — build tool with HMR
- [vite-plugin-solid](https://github.com/solidjs/vite-plugin-solid) `^2.11.6`
- TypeScript `^5.7.2`

## Getting Started

```bash
# install deps
npm install

# start dev server at http://localhost:3000
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

## Project Structure

```
.
├── index.html              # Vite entry HTML
├── vite.config.ts          # Vite + Solid plugin config
├── tsconfig.json           # TypeScript (jsx: preserve, jsxImportSource: solid-js)
├── tsconfig.node.json      # TS config for vite.config.ts
├── public/
│   └── vite.svg
└── src/
    ├── index.tsx           # App mount (render -> #root)
    ├── index.css           # Global styles / CSS variables
    ├── App.tsx             # Root component (demo counter)
    ├── App.module.css      # Scoped styles for App
    └── env.d.ts            # Vite client types
```

## Paths

`~/*` alias maps to `src/*` (see `tsconfig.json:18`).

## Learn More

- SolidJS Docs: https://docs.solidjs.com
- Vite Guide: https://vitejs.dev/guide/
