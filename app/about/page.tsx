'use client'
import { useRef } from 'react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FadeUp, SlideIn, StaggerParent, StaggerChild } from '@/components/animations/FadeUp'
import { WHY_HOOR } from '@/lib/constants'

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen bg-ivory">

      {/* Page hero */}
      <div className="pt-36 pb-24 bg-ivory-2 text-center relative overflow-hidden">
        <motion.p initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.9 }} className="label mb-5">Our Story</motion.p>
        <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:1.2, delay:0.1, ease:[0.16,1,0.3,1] }}
          className="font-display font-light text-5xl md:text-8xl text-onyx leading-tight mb-8">
          Crafted for Grace,<br />
          <em className="italic text-gold">Worn with Pride</em>
        </motion.h1>
        <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }}
          transition={{ duration:1.2, delay:0.4 }}
          className="flex items-center justify-center gap-5 mb-10">
          <div className="w-16 h-px bg-gold/30" />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0L7 4L11 6L7 8L6 12L5 8L1 6L5 4L6 0Z" fill="#B8965A" fillOpacity="0.7"/>
          </svg>
          <div className="w-16 h-px bg-gold/30" />
        </motion.div>
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }}
          className="body-copy max-w-xl mx-auto leading-loose">
          A luxury abaya house devoted to the graceful woman where modesty meets modern sophistication and every silhouette tells a story.
        </motion.p>
      </div>

      {/* Main story */}
      <section ref={heroRef} className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <SlideIn direction="left">
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-ivory-2">
                  <div className="absolute inset-0">
                    <SafeImage src="/images/about-hero.jpg" alt="HOOR Story" />
                    <div className="absolute inset-0 bg-gradient-to-br from-ivory-2 via-nude-light/40 to-ivory-3 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-px h-20 bg-gold/20 mx-auto mb-6" />
                        <p className="font-display text-3xl font-light italic text-gold/40">Signature Collection</p>
                        <div className="w-px h-20 bg-gold/20 mx-auto mt-6" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/10 to-transparent" />
                </div>
                {/* Float card */}
                <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                  transition={{ duration:1, delay:0.4, ease:[0.16,1,0.3,1] }}
                  className="absolute -bottom-6 -right-4 lg:-right-10 bg-ivory border border-gold/15 shadow-xl p-7 w-52">
                  <p className="font-display text-3xl font-light italic text-gold mb-2">Luxury</p>
                  <p className="font-body text-[10px] tracking-wide text-warm-mid leading-relaxed">
                    A luxury abaya house devoted to quality and grace.
                  </p>
                </motion.div>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.15} className="space-y-7">
              <div>
                <p className="label mb-5">The Philosophy</p>
                <h2 className="heading-xl mb-7">
                  Modesty as an<br /><em className="italic text-gold">aesthetic choice</em>
                </h2>
                <p className="body-copy text-sm leading-loose mb-5">
                  The abaya is not a limitation it is a statement. Every HOOR piece is selected and finished with exquisite attention to silhouette, movement, and the overall experience of wearing it.
                </p>
                <p className="body-copy text-sm leading-loose">
                  From Mangalore, HOOR looks forward to the modern woman who wears her values and her style with equal confidence and refuses to choose between them.
                </p>
              </div>
              <div className="flex gap-12 py-8 border-y border-onyx/8">
                {[{ n:'100%', l:'Premium Quality' },{ n:'Personal', l:'Service' },{ n:'Timeless', l:'Approach' }].map(({ n, l }) => (
                  <div key={l}>
                    <p className="font-display text-3xl font-light text-gold">{n}</p>
                    <p className="font-body text-[9px] tracking-ultra uppercase text-warm-light mt-1">{l}</p>
                  </div>
                ))}
              </div>
              <Link href="/collection" className="btn-outline inline-flex">
                Explore Collection
                <span className="w-4 h-px bg-current" />
              </Link>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad bg-ivory-2">
        <div className="container-xl">
          <FadeUp className="text-center mb-16">
            <p className="label mb-4">What We Stand For</p>
            <h2 className="heading-xl">Our Pillars</h2>
          </FadeUp>
          <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-onyx/6">
            {WHY_HOOR.map(({ title, body, icon }) => (
              <StaggerChild key={title}>
                <div className="group bg-ivory-2 hover:bg-ivory transition-colors duration-500 p-10 h-full">
                  <span className="text-gold text-xl block mb-5">{icon}</span>
                  <div className="w-7 h-px bg-gold mb-5 group-hover:w-14 transition-all duration-500" />
                  <h3 className="font-display text-xl font-light text-onyx mb-4 group-hover:text-gold transition-colors duration-500">{title}</h3>
                  <p className="body-copy text-sm leading-loose">{body}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* Closing quote */}
      <section className="section-pad-sm">
        <div className="container-lg text-center">
          <FadeUp>
            <div className="w-px h-14 bg-gold/25 mx-auto mb-12" />
            <p className="font-display text-2xl md:text-4xl font-light italic text-onyx/70 leading-relaxed mb-3">
              "For the woman who carries her grace quietly —
            </p>
            <p className="font-display text-2xl md:text-4xl font-light italic text-gold">HOOR is made for you."</p>
            <div className="w-px h-14 bg-gold/25 mx-auto mt-12" />
          </FadeUp>
        </div>
      </section>
    </div>
  )
}

function SafeImage({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true)
  if (!ok) return null
  return <Image src={src} alt={alt} fill sizes="50vw" className="object-cover" onError={() => setOk(false)} />
}
