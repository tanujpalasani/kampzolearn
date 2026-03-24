# Kampzo Learn

Kampzo Learn is a Next.js 16 App Router project for showcasing courses, blogs, and key platform pages with SEO metadata, sitemap, and robots support.

## Tech Stack

- Next.js 16.2.1 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create your environment file:

```bash
cp .env.example .env.local
```

3. Start development server:

```bash
npm run dev
```

## Environment Variables

Use these variables in `.env.local` (and in Vercel Project Settings):

- `NEXT_PUBLIC_BASE_URL`: Public site URL, for canonical, robots, and sitemap. Example: `https://kampzolearn.com`
- `NEXT_PUBLIC_GA_ID`: Google Analytics measurement ID. Example: `G-XXXXXXXXXX`

## Quality Checks (Before Push/Deploy)

Run these commands and ensure both pass:

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Push project to GitHub.
2. Import the GitHub repository into Vercel.
3. In Vercel, set environment variables:
	- `NEXT_PUBLIC_BASE_URL`
	- `NEXT_PUBLIC_GA_ID` (optional, only if GA is used)
4. Trigger deployment.

Build command: `npm run build`

Output: managed by Next.js (no custom output directory required).

## Production Notes

- The app includes generated `sitemap.xml` and `robots.txt`.
- All linked pages include valid routes, including Privacy Policy (`/privacy`).
- Use the same `NEXT_PUBLIC_BASE_URL` value across environments to keep canonical URLs correct.
