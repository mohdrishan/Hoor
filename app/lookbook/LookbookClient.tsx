'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { getAllProducts } from '@/lib/products'
import { BRAND } from '@/lib/constants'

const PRODUCTS = getAllProducts()

// Editorial looks — real collection photos mapped to story angles
// col-01 = rack wide shot, col-02 = close-up cuffs, col-03 = rack pastels,
// col-04 = cuff detail, col-05 = three cuffs, col-06 = Blush cuff (gold)
const EDITORIAL_LOOKS = [
  {
    // Hero row — wide rack shot sets the scene
    src: '/collections/collection-01.jpg',
    alt: 'HOOR collection on rack — pastel abayas',
    theme: 'The Collection',
    story: 'Four abayas. One vision.',
    pull: 'Soft pastels and quiet luxury. The HOOR collection was designed for women who carry grace as naturally as they breathe.',
    product: PRODUCTS[0],
    wide: true,
  },
  {
    // Row 2 left — second rack angle
    src: '/collections/collection-03.jpg',
    alt: 'HOOR pastel abayas on rack',
    theme: 'The Drape',
    story: 'Fabric that moves like water.',
    pull: 'Premium Korean Nida falls with a natural weight and fluidity that feels effortless from the first wear.',
    product: PRODUCTS[1],
    wide: false,
  },
  {
    // Row 2 right — cuff embroidery close-up
    src: '/collections/collection-02.jpg',
    alt: 'Embroidered cuff details — daisy and gold beads',
    theme: 'The Detail',
    story: 'Where craft becomes art.',
    pull: 'Each cuff is finished by hand — daisies, gold beads, delicate lacework. The kind of detail you notice only up close, and never forget.',
    product: PRODUCTS[2],
    wide: false,
  },
  {
    // Row 3 — three-column: hanging detail rack
    src: '/collections/collection-04.jpg',
    alt: 'HOOR abaya cuff embroidery — hanging rack',
    theme: 'The Craftsmanship',
    story: 'Precision in every thread.',
    pull: 'What separates a beautiful abaya from an extraordinary one is the care taken at every edge, every hem, every cuff.',
    product: PRODUCTS[0],
    wide: false,
  },
  {
    // Row 3 — cuff trio detail shot
    src: '/collections/collection-05.jpg',
    alt: 'Three embroidered cuffs — flowers, lace, pearls',
    theme: 'The Finish',
    story: 'Three cuffs. Three stories.',
    pull: 'Daisies in thread. Lace at the hem. Pearls that catch the light. Each piece tells a different story — all of them beautiful.',
    product: PRODUCTS[3],
    wide: false,
  },
  {
    // Row 3 — Blush Reverie gold cuff
    src: '/collections/collection-06.jpg',
    alt: 'Blush Reverie — gold bead embroidered cuff',
    theme: 'The Signature',
    story: 'This is Blush Reverie.',
    pull: 'Gold beadwork on blush. Our most coveted piece. The one that stops the room — quietly.',
    product: PRODUCTS[3],
    wide: false,
  },
  {
    // Row 4 left wide — rack overview again
    src: '/collections/collection-03.jpg',
    alt: 'Pastel abaya collection',
    theme: 'The Palette',
    story: 'Soft colours for graceful days.',
    pull: 'Ice blue, blush rose, butter cream, sage mint. Each colour chosen for how it feels to wear — not just how it looks.',
    product: PRODUCTS[1],
    wide: false,
  },
  {
    // Row 4 right — cuff angle
    src: '/collections/collection-04.jpg',
    alt: 'Abaya cuff embroidery detail',
    theme: 'In Motion',
    story: 'Worn. Not just admired.',
    pull: 'These abayas are not made for display cases. They are made for the woman who lives fully and looks exquisite doing it.',
    product: PRODUCTS[2],
    wide: false,
  },
  {
    // Closing hero — full rack shot
    src: '/collections/collection-01.jpg',
    alt: 'HOOR full collection on rack',
    theme: 'HOOR',
    story: 'Elegance in Modesty.',
    pull: 'From Mangalore, for women everywhere. Premium abayas that speak in silence and stay with you long after the occasion passes.',
    product: PRODUCTS[0],
    wide: true,
  },
]

type Look = typeof EDITORIAL_LOOKS[0]

export function LookbookClient() {
  const [selected, setSelected] = useState<Look | null>(null)

  return (
    <div className="min-h-screen bg-onyx">

      {/* ── Hero header ── */}
      <div className="pt-36 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
          <p className="font-display font-light text-[30vw] text-ivory/[0.015] leading-none">L</p>
        </div>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }} className="label mb-5" style={{ color: '#B8965A' }}>
          Editorial
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16,1,0.3,1] }}
          className="font-display font-light text-ivory leading-none mb-6"
          style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}>
          Lookbook
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex items-center justify-center gap-5 mb-8">
          <div className="w-16 h-px bg-gold/30" />
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 0L6 3.5L9.5 5L6 6.5L5 10L4 6.5L0.5 5L4 3.5L5 0Z" fill="#B8965A" fillOpacity="0.6"/>
          </svg>
          <div className="w-16 h-px bg-gold/30" />
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="font-body font-light text-ivory/40 text-sm max-w-sm mx-auto leading-loose">
          Four abayas. Nine perspectives. One vision of grace.
        </motion.p>
      </div>

      {/* ── Opening quote ── */}
      <FadeUp className="container-lg text-center py-16 border-t border-ivory/5">
        <p className="font-display text-2xl md:text-4xl font-light italic text-ivory/70 leading-relaxed">
          &ldquo;The abaya is not worn. It is carried — with the quiet authority of a woman
          who has already decided who she is.&rdquo;
        </p>
        <p className="font-body text-[9px] tracking-ultra uppercase text-gold/50 mt-6">— HOOR</p>
      </FadeUp>

      {/* ── Editorial grid ── */}
      <div className="container-xl py-16 space-y-3">

        {/* Row 1 — full-width hero */}
        <FadeUp>
          <LookCard look={EDITORIAL_LOOKS[0]} onClick={() => setSelected(EDITORIAL_LOOKS[0])}
            className="w-full aspect-[16/9] md:aspect-[21/9]" textPosition="bottom-left" large />
        </FadeUp>

        {/* Row 2 — two equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <FadeUp delay={0.05}>
            <LookCard look={EDITORIAL_LOOKS[1]} onClick={() => setSelected(EDITORIAL_LOOKS[1])}
              className="w-full aspect-[3/4]" textPosition="bottom-left" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <LookCard look={EDITORIAL_LOOKS[2]} onClick={() => setSelected(EDITORIAL_LOOKS[2])}
              className="w-full aspect-[3/4]" textPosition="bottom-right" />
          </FadeUp>
        </div>

        {/* Row 3 — three equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[EDITORIAL_LOOKS[3], EDITORIAL_LOOKS[4], EDITORIAL_LOOKS[5]].map((look, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <LookCard look={look} onClick={() => setSelected(look)}
                className={`w-full ${i === 1 ? 'aspect-[3/5]' : 'aspect-[3/4]'}`}
                textPosition={i === 2 ? 'bottom-right' : 'bottom-left'} />
            </FadeUp>
          ))}
        </div>

        {/* Row 4 — asymmetric: 2/3 + 1/3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <FadeUp className="md:col-span-2">
            <LookCard look={EDITORIAL_LOOKS[6]} onClick={() => setSelected(EDITORIAL_LOOKS[6])}
              className="w-full aspect-[4/3]" textPosition="bottom-left" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <LookCard look={EDITORIAL_LOOKS[7]} onClick={() => setSelected(EDITORIAL_LOOKS[7])}
              className="w-full aspect-[3/4]" textPosition="bottom-left" />
          </FadeUp>
        </div>

        {/* Row 5 — closing hero */}
        <FadeUp>
          <LookCard look={EDITORIAL_LOOKS[8]} onClick={() => setSelected(EDITORIAL_LOOKS[8])}
            className="w-full aspect-[16/9] md:aspect-[21/9]" textPosition="bottom-right" large />
        </FadeUp>
      </div>

      {/* ── Brand statement ── */}
      <div className="border-t border-ivory/5 py-24">
        <div className="container-xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="label mb-5" style={{ color: '#B8965A' }}>The HOOR Philosophy</p>
            <h2 className="font-display font-light text-3xl md:text-5xl text-ivory leading-tight mb-6">
              Modesty is not a constraint.<br />
              <em className="italic text-gold">It is a declaration.</em>
            </h2>
            <p className="font-body font-light text-ivory/40 text-sm leading-loose mb-8">
              Every piece in the HOOR collection begins with the same question: how does a woman feel when she wears this? Confident, composed, and completely herself.
            </p>
            <Link href="/shop" className="btn-gold">
              Shop the Collection <span className="w-5 h-px bg-current" />
            </Link>
          </FadeUp>
          <FadeUp delay={0.12}>
            <div className="grid grid-cols-2 gap-px bg-ivory/5">
              {[
                { n: '4',    l: 'Curated Abayas',       d: 'Each one considered' },
                { n: '1',    l: 'Signature Collection',  d: 'Blush Reverie' },
                { n: '100%', l: 'Premium Korean Nida',   d: 'Exclusive fabric' },
                { n: '∞',    l: 'Timeless Style',        d: 'Never out of season' },
              ].map(({ n, l, d }) => (
                <div key={l} className="bg-onyx p-8 text-center hover:bg-onyx/60 transition-colors duration-500">
                  <p className="font-display text-4xl font-light text-gold mb-1">{n}</p>
                  <p className="font-body text-[9px] tracking-ultra uppercase text-ivory/50 mb-1">{l}</p>
                  <p className="font-body text-[9px] text-ivory/25">{d}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── Instagram CTA ── */}
      <div className="border-t border-ivory/5 py-20 text-center">
        <FadeUp>
          <p className="label mb-4" style={{ color: '#B8965A' }}>Follow the Journey</p>
          <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
            className="font-display font-light text-ivory hover:text-gold transition-colors duration-500 inline-block mb-8"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
            {BRAND.instagramHandle}
          </a>
          <br />
          <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Follow on Instagram
          </a>
        </FadeUp>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-onyx/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }} transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
              className="relative w-full max-w-2xl" onClick={e => e.stopPropagation()}>

              <div className="relative aspect-[3/4] overflow-hidden bg-onyx-2">
                <Image src={selected.src} alt={selected.alt} fill className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="label mb-2" style={{ color: '#B8965A' }}>{selected.theme}</p>
                  <p className="font-display text-2xl md:text-3xl font-light italic text-ivory mb-3 leading-tight">
                    {selected.story}
                  </p>
                  <p className="font-body font-light text-ivory/60 text-sm leading-loose mb-6">
                    {selected.pull}
                  </p>
                  <Link href={`/shop/${selected.product.slug}`} onClick={() => setSelected(null)}
                    className="inline-flex items-center gap-3 border border-gold/50 text-gold font-body text-[9px] tracking-ultra uppercase px-6 py-3 hover:bg-gold hover:text-ivory transition-all duration-400">
                    Shop {selected.product.name} — {selected.product.priceDisplay}
                  </Link>
                </div>
              </div>

              <button onClick={() => setSelected(null)} aria-label="Close"
                className="absolute -top-4 -right-4 w-10 h-10 bg-onyx border border-ivory/10 flex items-center justify-center text-ivory/50 hover:text-ivory hover:border-ivory/30 transition-all duration-300">
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function LookCard({ look, onClick, className, textPosition, large = false }: {
  look: Look; onClick: () => void; className: string
  textPosition: 'bottom-left' | 'bottom-right'; large?: boolean
}) {
  const isRight = textPosition === 'bottom-right'
  return (
    <button onClick={onClick} className={`group relative overflow-hidden block cursor-pointer ${className}`}>
      <Image src={look.src} alt={look.alt} fill
        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, 66vw" />
      <div className={`absolute inset-0 bg-gradient-to-t ${large ? 'from-onyx/75 via-onyx/10 to-transparent' : 'from-onyx/65 via-transparent to-transparent'} group-hover:from-onyx/88 transition-all duration-700`} />

      {/* Theme tag */}
      <div className={`absolute top-5 ${isRight ? 'right-5' : 'left-5'}`}>
        <span className="font-body text-[8px] tracking-ultra uppercase text-gold/90 bg-onyx/50 backdrop-blur-sm px-3 py-1.5">
          {look.theme}
        </span>
      </div>

      {/* Story text */}
      <div className={`absolute inset-x-0 bottom-0 p-6 md:p-8 ${isRight ? 'text-right' : 'text-left'}`}>
        <p className={`font-display ${large ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'} font-light italic text-ivory mb-2 leading-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-500`}>
          {look.story}
        </p>
        <p className="font-body text-[9px] tracking-ultra uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
          {look.product.name} — {look.product.priceDisplay}
        </p>
      </div>
    </button>
  )
}
