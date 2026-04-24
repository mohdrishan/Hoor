'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { COLLECTIONS, BRAND } from '@/lib/constants'
import { FadeUp, StaggerParent, StaggerChild } from '@/components/animations/FadeUp'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import type { Collection } from '@/types'

const CATEGORIES = ['All', ...Array.from(new Set(COLLECTIONS.map(c => c.category)))]
const VARIANTS: ('light' | 'mid' | 'nude' | 'dark')[] = ['light','mid','nude','light','mid','nude','light','mid','nude']

export function CollectionPageClient() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? COLLECTIONS
    : COLLECTIONS.filter(c => c.category === active)

  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">

      {/* Page header */}
      <div className="container-xl text-center mb-20">
        <motion.p initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.9, ease:[0.16,1,0.3,1] }} className="label mb-5">
          The Edit
        </motion.p>
        <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:1.2, delay:0.1, ease:[0.16,1,0.3,1] }}
          className="font-display font-light text-5xl md:text-7xl text-onyx mb-6 leading-tight">
          The Collection
        </motion.h1>
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.3 }}
          className="body-copy max-w-lg mx-auto text-sm leading-loose">
          Nine pieces. Each one a dialogue between restraint and beauty. Modern abayas for the woman who knows exactly who she is.
        </motion.p>
      </div>

      {/* Filter tabs */}
      <div className="container-xl mb-14">
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:0.4 }}
          className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`font-body text-[9px] tracking-ultra uppercase px-5 py-2.5 border transition-all duration-400 ${
                active === cat
                  ? 'border-gold bg-gold text-ivory'
                  : 'border-onyx/15 text-warm-mid hover:border-gold hover:text-gold'
              }`}>
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Grid */}
      <div className="container-xl">
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            transition={{ duration:0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {filtered.map((item, i) => (
              <FadeUp key={item.id} delay={i * 0.07}
                className={i % 3 === 1 ? 'lg:mt-14' : i % 3 === 2 ? 'lg:mt-7' : ''}>
                <CollectionCard item={item} variant={VARIANTS[i % VARIANTS.length]} />
              </FadeUp>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>


    </div>
  )
}

function CollectionCard({ item, variant }: { item: Collection; variant: 'light' | 'mid' | 'nude' | 'dark' }) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[3/4] mb-5 overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <span className="font-body text-[8px] tracking-ultra uppercase text-gold bg-ivory/90 backdrop-blur-sm px-3 py-1.5">
            {item.tag}
          </span>
        </div>

        {/* Real image loads here once collection-N.jpg files are added to public/images */}

        <PlaceholderImage className="absolute inset-0" variant={variant} label={item.category} />

        <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/16 transition-all duration-700" />
        <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="font-body text-[9px] tracking-ultra uppercase text-ivory border border-ivory/40 px-4 py-2 backdrop-blur-sm">
            View Piece
          </span>
        </div>
      </div>

      <div className="flex items-baseline justify-between mb-1.5">
        <h3 className="font-display text-2xl font-light text-onyx group-hover:text-gold transition-colors duration-500">
          {item.name}
        </h3>
        <span className="font-body font-light text-sm text-gold ml-3">{item.price}</span>
      </div>
      <p className="label-onyx mb-2">{item.category}</p>
      <p className="body-copy text-sm leading-relaxed">{item.description}</p>
    </article>
  )
}
