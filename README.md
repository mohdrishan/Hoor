# HOOR

Luxury modest fashion website. Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis.

## Running locally

```
npm install
npm run dev
```

Open http://localhost:3000

## Building for production

```
npm run build
npm start
```

## Deploying to Vercel

Connect the repository to Vercel at vercel.com. It auto-detects Next.js and deploys with zero configuration. Or use the CLI:

```
npx vercel --prod
```

## Images — add these to public/images/

Your logo is already in place. Add the following files and the site will display them automatically. Elegant gradient placeholders are shown until you replace them.

hero.jpg is the full-screen cinematic background on the home page. Use a wide landscape or a portrait crop of your best abaya shot. Recommended 1920 x 1080px or taller.

about-hero.jpg appears on both the home page story section and the About page. A close detail or graceful three-quarter portrait works beautifully here. Recommended 1200 x 1600px.

collection-1.jpg through collection-9.jpg are the individual product images. Portrait orientation, consistent style. Recommended 900 x 1200px each.

lookbook-1.jpg through lookbook-9.jpg are the editorial campaign images for the Lookbook page. These can vary in crop. Recommended 1000 x 1300px each.

og-image.jpg is used as the social share preview when someone shares your link. Recommended exactly 1200 x 630px.

## Updating brand details

Open lib/constants.ts and update the BRAND object. Change the WhatsApp number, Instagram handle, email, and location there. All pages pull from this single source of truth.

## What is new in this version

Complete TypeScript rewrite. Lenis smooth scrolling installed. Custom GSAP-ready architecture. Proper tsconfig with path aliases. Viewport metadata separated from page metadata (required for Next.js 15). PlaceholderImage component replaces all broken image references with premium gradient fallbacks. FilteredCollection page with animated category tabs. Lookbook lightbox. Testimonials with animated carousel. Newsletter signup section. Full 12-category abaya types grid. 404 page. Schema.org JSON-LD markup in layout. Zero console errors. Zero broken imports.
