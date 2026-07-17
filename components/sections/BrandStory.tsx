'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SlideIn } from '@/components/animations/FadeUp'

export function BrandStory() {
  return (
    <section className="section-pad bg-ivory overflow-hidden">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* ── Left: same overlapping card layout as Story page ── */}
          <SlideIn direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/products/celeste/01.jpg"
                  alt="Celesté — HOOR signature abaya"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/20 to-transparent" />
              </div>

              {/* Floating text card — exact same as Story page */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-6 -right-4 lg:-right-10 bg-ivory border border-gold/15 shadow-xl p-7 w-52">
                <p className="font-display text-3xl font-light italic text-gold mb-2">Luxury</p>
                <p className="font-body text-[10px] tracking-wide text-warm-mid leading-relaxed">
                  A luxury abaya house devoted to quality and grace.
                </p>
              </motion.div>
            </div>
          </SlideIn>

          {/* ── Right: Story text ── */}
          <SlideIn direction="right" delay={0.15}>
            <p className="label mb-5">Our Story</p>
            <h2 className="heading-xl mb-8">
              Crafted for Grace,<br />
              <em className="italic text-gold">Worn with Pride</em>
            </h2>

            <div className="space-y-5 mb-10">
              <p className="body-copy text-sm leading-loose">
                HOOR was founded on a singular conviction that modest fashion should never compromise on excellence. That a woman draped in an abaya can be the most powerfully elegant presence in any room.
              </p>
              <p className="body-copy text-sm leading-loose">
                From Mangalore, HOOR brings abayas that speak through silhouette alone — for the modern woman who wears her values and her style with equal confidence.
              </p>
            </div>

            {/* Same stat row as Story page */}
            <div className="flex gap-12 py-8 border-y border-onyx/8 mb-10">
              {[
                { n: '100%',     l: 'Premium Quality' },
                { n: 'Personal', l: 'Service'         },
                { n: 'Timeless', l: 'Approach'        },
              ].map(({ n, l }) => (
                <div key={l}>
                  <p className="font-display text-3xl font-light text-gold">{n}</p>
                  <p className="font-body text-[9px] tracking-ultra uppercase text-warm-light mt-1">{l}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-outline inline-flex">
              Read Our Story
              <span className="w-4 h-px bg-current" />
            </Link>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
