# Kavya Labs — Landing Page

**Finlatics ANDP Simulator · Project-4 "Virtual Startup: Kavya Labs" · Week 1**

Week 1 brief: Landing page with **Hero**, **Features**, and **Footer** for Kavya Labs, a fictional Bengaluru-based AI startup building an AI analytics platform.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js v4](https://next-auth.js.org/) with Google OAuth
- Deployed on [Vercel](https://vercel.com/)

## Sections

- **Navbar** — sticky, with logo and CTA
- **Hero** — headline, subheadline, dual CTAs, key stats
- **Features** — 6 feature cards (real-time dashboards, AI insights, anomaly detection, forecasting, integrations, security)
- **CTA banner** — free-trial call to action
- **Footer** — link columns, social icons, copyright

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `GOOGLE_CLIENT_ID` | From Google Cloud Console → Credentials → OAuth Client ID |
| `GOOGLE_CLIENT_SECRET` | Same as above |
| `NEXTAUTH_SECRET` | Any random string (`openssl rand -base64 32`) |
| `NEXTAUTH_URL` | `http://localhost:3000` locally, your Vercel URL in production |

Google OAuth redirect URI: `/api/auth/callback/google`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Roadmap (per weekly briefs)

- **Week 1** ✅ Landing page (hero, features, footer)
- **Week 2** ✅ User authentication (NextAuth + Google OAuth, protected `/dashboard`)
- **Week 3** — Admin dashboard (user management + analytics)
