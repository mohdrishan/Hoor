'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getAllProducts, type Product } from '@/lib/products'
import { FadeUp, StaggerParent, StaggerChild } from '@/components/animations/FadeUp'

const ALL_PRODUCTS = getAllProducts()
const CATEGORIES = ['All', ...Array.from(new Set(ALL_PRODUCTS.map(c => c.category)))]

export function CollectionPageClient() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="container-xl text-center mb-16">
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }} className="label mb-5">
          The Collection
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16,1,0.3,1] }}
          className="font-display font-light text-6xl md:text-8xl text-onyx mb-6 leading-none">
          All Pieces
        </motion.h1>
      </div>

      {/* Category filter */}
      <div className="container-xl mb-14">
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map(cat => (
            <motion.button key={cat} onClick={() => setActiveCategory(cat)} layout
              className={`font-body text-[9px] tracking-ultra uppercase px-5 py-2.5 border transition-all duration-400 ${
                activeCategory === cat
                  ? 'border-gold bg-gold text-ivory'
                  : 'border-onyx/15 text-warm-mid hover:border-gold hover:text-gold'
              }`}>
              {cat}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container-xl">
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}>
            <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
              {filtered.map((product, i) => (
                <StaggerChild key={product.id} className={i % 2 === 1 ? 'sm:mt-12' : ''}>
                  <CollectionCard product={product} />
                </StaggerChild>
              ))}
            </StaggerParent>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function CollectionCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <article>
        <div className="relative aspect-[3/4] mb-5 overflow-hidden bg-ivory-3">
          {product.tag && (
            <div className="absolute top-4 left-4 z-10">
              <span className="font-body text-[8px] tracking-ultra uppercase text-gold bg-ivory/90 backdrop-blur-sm px-3 py-1.5">
                {product.tag}
              </span>
            </div>
          )}
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
          <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/10 transition-all duration-700" />
          <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span className="font-body text-[9px] tracking-ultra uppercase text-ivory border border-ivory/40 px-4 py-2 backdrop-blur-sm">
              View & Buy
            </span>
          </div>
        </div>
        <div className="flex items-baseline justify-between mb-1">
          <h3 className="font-display text-2xl font-light text-onyx group-hover:text-gold transition-colors duration-500">
            {product.name}
          </h3>
          <span className="font-body text-sm text-gold ml-2">{product.priceDisplay}</span>
        </div>
        <p className="label-onyx mb-2">{product.category}</p>
        <p className="body-copy text-sm leading-relaxed">{product.description}</p>
      </article>
    </Link>
  )
}
