# Nacho Campos — Portfolio

Personal portfolio for **Nacho Campos Martí**, Backend Engineer. Built with React, TypeScript, Tailwind CSS, and deployed on Netlify.

## Features

- Modern responsive portfolio with dark/light mode
- Bilingual UI (English / Spanish)
- Developer utilities page (`/tools`)
- AI chatbot powered by OpenRouter (answers questions about Nacho using portfolio data as knowledge base)

## Tech Stack

- React 19 + Vite 6 + TypeScript
- Tailwind CSS v4
- React Router v7
- Netlify Functions (OpenRouter proxy)

## Getting Started

```bash
npm install
npm run dev          # Frontend only (Vite)
netlify dev          # Full stack with chatbot (requires Netlify CLI)
```

Create a `.env` file from `.env.example` and add your `OPENROUTER_API_KEY` for local chatbot testing with `netlify dev`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Generate knowledge base + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run generate:knowledge` | Regenerate chatbot knowledge from `src/data/` |

## Deploy to Netlify

1. Connect the GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variable: `OPENROUTER_API_KEY`
5. Optional: `OPENROUTER_MODEL` (default: `google/gemini-2.0-flash-001`)

## Project Structure

```
src/
├── data/          # Content source of truth (also feeds chatbot)
├── components/    # UI components
├── pages/         # Route pages
├── tools/         # Developer utility tools
├── i18n/          # Translations
└── generated/     # Auto-generated chatbot knowledge

netlify/functions/ # Serverless API (chat proxy)
```

## Content Updates

Edit files in `src/data/` to update portfolio content. Run `npm run build` to regenerate the chatbot knowledge base automatically.
