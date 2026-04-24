import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Cursor } from '@/components/ui/Cursor'
import { SmoothScroll } from '@/components/animations/SmoothScroll'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'
import { BRAND } from '@/lib/constants'

export const viewport: Viewport = {
  themeColor: '#F8F4EE',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://hoor.in'),
  title: {
    default: `${BRAND.name} | ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  keywords: ['hoor abayas','premium abayas','luxury abayas India','modest fashion','designer abayas','Mangalore abayas'],
  authors: [{ name: 'HOOR' }],
  creator: 'HOOR',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://hoor.in',
    siteName: 'HOOR',
    title: `HOOR | ${BRAND.tagline}`,
    description: BRAND.description,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'HOOR Luxury Modern Abayas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `HOOR | ${BRAND.tagline}`,
    description: BRAND.description,
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Jost:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ClothingStore',
              name: 'HOOR',
              description: BRAND.description,
              url: 'https://hoor.in',
              logo: 'https://hoor.in/images/logo.png',
              address: { '@type': 'PostalAddress', addressLocality: 'Mangalore', addressCountry: 'IN' },
              sameAs: [BRAND.instagram],
            }),
          }}
        />
      </head>
      <body className="grain bg-ivory text-onyx">
        <SmoothScroll />
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
