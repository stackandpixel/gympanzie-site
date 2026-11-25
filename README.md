# Gympanzie website

Static Next.js 16 + Tailwind 4 site. All content lives in `site.config.ts`.

## Preview
```
npm install
npm run dev
```

## Edit
- Text, FAQ, results, contact, SEO: `site.config.ts`
- Colours: CSS variables at the top of `app/globals.css`
- **Replace `contact.whatsapp` first** (digits with country code, e.g. `919876543210`). It is a placeholder.

## Deploy
```
npm run build
```
Upload the `out/` folder to Cloudflare Pages, Netlify, or Vercel (framework: Next.js static export).
Point `gympanzie.com` at it, then submit `https://gympanzie.com/sitemap.xml` in Google Search Console.

## How leads arrive
The form and chat open WhatsApp with the message pre-filled. The owner only receives it after the visitor taps Send.
Optional backup: set `NEXT_PUBLIC_FORM_ENDPOINT` (Web3Forms, Formspree or Apps Script) in `.env.local`.

## SEO / AEO / GEO included
Metadata + canonical + OG image, sitemap, robots (AI crawlers allowed), `llms.txt`, JSON-LD
(business, founder, website, FAQPage, calculator), answer-first FAQ, Ahmedabad/India geo signals.
