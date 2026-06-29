'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeUp, SlideIn } from '@/components/animations/FadeUp'
import { getAllProducts } from '@/lib/products'

const blushReverie = getAllProducts().find(p => p.slug === 'blush-reverie')!

export function SignatureCollection() {
  return (
    <section className="bg-ivory overflow-hidden">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* ── Left: Image ── */}
          <SlideIn direction="left" className="relative">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[680px] overflow-hidden">
              <Image
                src="/collections/collection-06.jpg"
                alt="Blush Reverie — hand-embroidered gold bead cuff"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle dark vignette at edges */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ivory/20" />
              {/* Floating tag */}
              <div className="absolute top-8 left-8">
                <span className="font-body text-[8px] tracking-ultra uppercase text-gold bg-ivory/90 backdrop-blur-sm px-4 py-2">
                  Signature Collection
                </span>
              </div>
            </div>
          </SlideIn>

          {/* ── Right: Story ── */}
          <SlideIn direction="right"
            className="flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-24 bg-ivory">
            <FadeUp>
              <p className="label mb-5">One of a kind</p>
              <h2 className="font-display font-light text-5xl md:text-6xl text-onyx leading-tight mb-6">
                Blush<br />
                <em className="italic text-gold">Reverie</em>
              </h2>

              {/* Gold rule */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-gold/40" />
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 0L6 3.5L9.5 5L6 6.5L5 10L4 6.5L0.5 5L4 3.5L5 0Z" fill="#B8965A" fillOpacity="0.5"/>
                </svg>
                <div className="w-10 h-px bg-gold/40" />
              </div>

              <p className="font-body font-light text-warm-mid text-sm leading-loose mb-5">
                Our most coveted piece. Hand-embroidered gold bead cuffs, French lace trim, and the softest blush you have ever worn.
              </p>
              <p className="font-body font-light text-warm-mid text-sm leading-loose mb-10">
                Blush Reverie is reserved for the evening you will not forget — and the woman who makes it unforgettable.
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-10">
                {[
                  'Hand-embroidered gold bead cuffs',
                  'Premium Korean Nida in blush',
                  'French lace trim at sleeve',
                  'Beautifully tailored with precision',
                ].map(line => (
                  <div key={line} className="flex items-center gap-3">
                    <span className="text-gold text-xs">✦</span>
                    <span className="font-body text-[11px] text-warm-mid tracking-wide">{line}</span>
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center gap-6">
                <p className="font-display text-3xl font-light text-gold">{blushReverie.priceDisplay}</p>
                <Link href={`/shop/${blushReverie.slug}`}
                  className="btn-gold-solid">
                  Shop Now
                </Link>
              </div>

              {/* Subtle quote */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1 }}
                className="font-display italic text-sm text-onyx/25 mt-12 leading-relaxed">
                &ldquo;The evening you will not forget deserves the piece you will always remember.&rdquo;
              </motion.p>
            </FadeUp>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
