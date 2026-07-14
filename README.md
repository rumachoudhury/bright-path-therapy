# Bright Path Speech Therapy — Next.js + Tailwind CSS

The speech-therapy landing page rebuilt with Next.js 14 (App Router) and
Tailwind CSS. Single deployable app — no separate backend required.

```
app/
├── layout.js         Root layout, loads Fraunces + Inter via next/font
├── page.js            Home page, composes all sections
├── globals.css        Tailwind layers + shared component classes
└── api/contact/route.js   POST endpoint for the contact form
components/            One file per section (Nav, Hero, Signs, About,
                        Services, Area, Contact, Footer) + Reveal (scroll
                        animation wrapper) and Waveform (signature motif)
lib/services.js        Static services data, used by the Services section
```

## Setup

```bash
npm install
npm run dev              # http://localhost:3000
```

## What's dynamic vs. static

- **Contact form** (`components/Contact.jsx`) — POSTs to `/api/contact`
  (`app/api/contact/route.js`). The route validates the payload and logs
  it out of the box, so the form works immediately. Swap the body of that
  route for a database write, an email send (Resend, Postmark…), or a CRM
  call depending on where you want inquiries to land.
- **Services grid** — pulled from `lib/services.js` and passed into
  `<Services />` as props from the server-rendered `app/page.js`. Point
  that file at a database or CMS call instead if services should be
  editable without a redeploy — `page.js` is a server component, so
  `await`ing a fetch there works with no extra plumbing.
- Everything else (hero, signs, about, service area) is static content —
  edit the relevant file in `components/` directly.

## Styling

- Design tokens (colors, radii, shadows) live in `tailwind.config.js`.
- Fonts: Fraunces (display) + Inter (body), loaded via `next/font/google`
  in `app/layout.js` — self-hosted automatically at build time, no
  external requests at runtime.
- The animated waveform bars (`components/Waveform.jsx`) are the one
  signature visual motif, reused as a section divider and inside the hero.

## Production build

```bash
npm run build
npm start
```

Deploy anywhere that runs Node — Vercel (zero-config for Next.js),
Netlify, Render, or your own Node server.

## Customizing

- **Business info** (name, phone, email, towns, insurance list) — edit
  the relevant component in `components/`.
- **Services** — edit `lib/services.js`.
- **Colors/type** — `tailwind.config.js` → `theme.extend`.
