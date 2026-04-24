'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeUp, SlideIn } from '@/components/animations/FadeUp'
import { BRAND } from '@/lib/constants'

export function BrandStory() {
  return (
    <section className="section-pad bg-ivory overflow-hidden">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          <SlideIn direction="left">
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden bg-ivory-2 img-zoom">
                <SafeImage src="/images/about-hero.jpg" alt="HOOR Story" />
                <div className="absolute inset-0 bg-gradient-to-br from-ivory-2 via-nude-light/40 to-ivory-3 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-px h-20 bg-gold/20 mx-auto mb-6" />
                    <p className="font-display text-3xl font-light italic text-gold/40">Signature Collection</p>
                    <div className="w-px h-20 bg-gold/20 mx-auto mt-6" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/12 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-6 -right-4 lg:-right-8 bg-ivory border border-gold/15 shadow-xl p-7 w-52"
              >
                <p className="font-display text-3xl font-light italic text-gold mb-2">Luxury</p>
                <p className="font-body text-[10px] tracking-wide text-warm-mid leading-relaxed">
                  A luxury abaya house devoted to quality and grace.
                </p>
              </motion.div>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.12}>
            <p className="label mb-5">Signature Collection</p>
            <h2 className="heading-xl mb-8">
              Crafted for Grace,<br />
              <em className="italic text-gold">Worn with Pride</em>
            </h2>

            <div className="space-y-5 mb-10">
              <p className="body-copy text-sm leading-loose">
                HOOR was founded on a singular conviction that modest fashion should never compromise on excellence. That a woman draped in an abaya can be the most powerfully elegant presence in any room.
              </p>
              <p className="body-copy text-sm leading-loose">
                From Mangalore, HOOR brings abayas that speak through silhouette alone for the modern woman who wears her values and her style with equal confidence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {[
                { icon: '◈', t: 'Premium Quality'   },
                { icon: '✦', t: 'Quality Finish'    },
                { icon: '◇', t: 'Modern Style'      },
                { icon: '○', t: 'Timeless Taste'    },
              ].map(({ icon, t }) => (
                <div key={t} className="border border-gold/15 px-5 py-4 group hover:border-gold/40 transition-colors duration-400">
                  <span className="text-gold text-sm block mb-2">{icon}</span>
                  <p className="font-body text-[10px] tracking-wide uppercase text-warm-mid">{t}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-outline">
              Read Our Story
              <span className="w-4 h-px bg-current" />
            </Link>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}

function SafeImage({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true)
  if (!ok) return null
  return <Image src={src} alt={alt} fill sizes="50vw" className="object-cover" onError={() => setOk(false)} />
}
