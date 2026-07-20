# BroadPivot Consulting LLC — Website

Modern Next.js 15 + TypeScript + Tailwind site for BroadPivot Consulting LLC.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Deploy to Vercel

### Option A — Import via the Vercel dashboard

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset auto-detects as **Next.js**. Click **Deploy**.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel              # follow prompts
vercel --prod       # production deploy
```

### Contact form email

The contact form sends to `info@broadpivotllc.com` through Resend. Before
deploying, create a Resend account, verify `broadpivotllc.com`, and add the
following environment variables in Vercel:

```bash
RESEND_API_KEY=re_replace_with_your_key
CONTACT_FROM_EMAIL="BroadPivot Website <website@broadpivotllc.com>"
```

See `.env.example` for the same local-development template. The API key must
remain in environment variables and must never be committed.

## Stack

- Next.js 15 (App Router, static export-friendly)
- React 19
- TypeScript
- Tailwind CSS 3
- All pages prerender statically

## Structure

```
.
├── src/
│   ├── app/                  # App Router pages
│   │   ├── page.tsx          # Home
│   │   ├── about/
│   │   ├── capabilities/
│   │   ├── government-contracting/
│   │   ├── contact/
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/           # Header, Footer, Hex icon
│   └── lib/site.ts           # Centralized site content (single source of truth)
├── public/images/            # Logo + assets (no external CDN dependencies)
├── tailwind.config.ts
├── postcss.config.js
├── next.config.mjs
├── vercel.json
└── tsconfig.json
```

## Editing content

All site copy (nav, capabilities, services, contact info) lives in `src/lib/site.ts`.
