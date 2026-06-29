'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { getAllProducts, type Product } from '@/lib/products'
import { FadeUp } from '@/components/animations/FadeUp'
import { useCart } from '@/context/CartContext'

const PRODUCTS = getAllProducts()

export function ShopPageClient() {
  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">

      {/* Header */}
      <div className="container-xl text-center mb-16">
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }} className="label mb-5">
          The Collection
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16,1,0.3,1] }}
          className="font-display font-light text-6xl md:text-8xl text-onyx mb-6 leading-none">
          Shop
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="body-copy max-w-md mx-auto text-sm leading-loose">
          Four abayas. Each considered. Each yours.
        </motion.p>
      </div>

      {/* Product grid — 4 cols, tighter sizing */}
      <div className="container-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
          {PRODUCTS.map((product, i) => (
            <FadeUp key={product.id} delay={i * 0.08}
              className={i % 2 === 1 ? 'lg:mt-10' : ''}>
              <ShopCard product={product} />
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Promise strip */}
      <div className="container-xl mt-24">
        <div className="gold-line mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
          {[
            { icon: '◈', title: 'Premium Korean Nida', sub: 'Exclusive fabric sourced for quality' },
            { icon: '✦', title: 'Premium Craftsmanship', sub: 'Every stitch tailored with precision' },
            { icon: '◇', title: 'Free Shipping', sub: 'Free shipping on all orders' },
          ].map(item => (
            <div key={item.title}>
              <p className="text-gold text-xl mb-2">{item.icon}</p>
              <p className="font-body text-[9px] tracking-ultra uppercase text-onyx mb-1">{item.title}</p>
              <p className="font-body text-[9px] text-warm-xlight">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ShopCard({ product }: { product: Product }) {
  const { addItem, openDrawer } = useCart()
  const [added, setAdded] = useState(false)

  function handleQuickAdd(e: React.MouseEvent) {
    e.preventDefault()
    addItem({
      productId: product.id,
      productName: product.name,
      productSlug: product.slug,
      price: product.price,
      priceDisplay: product.priceDisplay,
      quantity: 1,
      image: product.images[0],
    })
    setAdded(true)
    setTimeout(() => { setAdded(false); openDrawer() }, 600)
  }

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <article>
        {/* Image — aspect-[3/4] on mobile, tighter on desktop */}
        <div className="relative aspect-[3/4] mb-3 overflow-hidden bg-ivory-3">
          {product.tag && (
            <div className="absolute top-3 left-3 z-10">
              <span className="font-body text-[7px] tracking-ultra uppercase text-gold bg-ivory/90 backdrop-blur-sm px-2.5 py-1">
                {product.tag}
              </span>
            </div>
          )}
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 50vw, 25vw"
            loading="eager"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
          <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/10 transition-all duration-700" />
          <button
            onClick={handleQuickAdd}
            className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 bg-ivory/95 backdrop-blur-sm py-2.5
                       font-body text-[8px] tracking-ultra uppercase text-onyx
                       opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                       transition-all duration-500"
            aria-label={`Quick add ${product.name}`}
          >
            <ShoppingBag size={11} />
            {added ? 'Added ✓' : 'Quick Add'}
          </button>
        </div>

        {/* Info */}
        <div className="flex items-baseline justify-between mt-1">
          <h3 className="font-display text-lg font-light text-onyx group-hover:text-gold transition-colors duration-500 leading-tight">
            {product.name}
          </h3>
          <span className="font-body text-xs text-gold ml-2 flex-shrink-0">{product.priceDisplay}</span>
        </div>
      </article>
    </Link>
  )
}
