'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/cart'
import { BRAND } from '@/lib/constants'
import { FadeUp } from '@/components/animations/FadeUp'

export function CartPageClient() {
  const { items, total, removeItem, updateQty, clear } = useCart()
  const shipping = 0

  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="container-xl max-w-5xl">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="label mb-4">Your Selection</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }}
            className="font-display font-light text-5xl md:text-6xl text-onyx">Your Bag</motion.h1>
        </div>

        {items.length === 0 ? (
          <FadeUp className="text-center py-24">
            <ShoppingBag size={48} className="text-warm-xlight mx-auto mb-6" />
            <h2 className="font-display text-3xl font-light text-onyx mb-3">Your bag is empty</h2>
            <p className="body-copy text-sm mb-10">Every wardrobe deserves a HOOR piece.</p>
            <Link href="/shop" className="btn-gold-solid">Explore the Collection</Link>
          </FadeUp>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatePresence>
                {items.map(item => (
                  <motion.div key={item.productId} layout
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20, height: 0 }} transition={{ duration: 0.4 }}
                    className="flex gap-5 py-6 border-b border-onyx/8 items-start">
                    <div className="relative w-20 h-26 flex-shrink-0 bg-ivory-3 overflow-hidden">
                      <Image src={item.image} alt={item.productName} fill className="object-cover" sizes="80px"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <Link href={`/shop/${item.productSlug}`}
                          className="font-display text-xl font-light text-onyx hover:text-gold transition-colors leading-tight">
                          {item.productName}
                        </Link>
                        <button onClick={() => removeItem(item.productId)} aria-label="Remove"
                          className="ml-3 text-warm-xlight hover:text-onyx transition-colors flex-shrink-0">
                          <X size={14} />
                        </button>
                      </div>
                      <p className="font-body text-sm text-gold mt-1 mb-3">{item.priceDisplay}</p>
                      <div className="flex items-center gap-3">
                        <button onClick={() => updateQty(item.productId, item.quantity - 1)}
                          aria-label="Decrease" className="w-7 h-7 flex items-center justify-center border border-onyx/15 hover:border-gold hover:text-gold transition-colors">
                          <Minus size={10} />
                        </button>
                        <span className="font-body text-sm w-5 text-center">{item.quantity}</span>
                        <button onClick={() => updateQty(item.productId, item.quantity + 1)}
                          aria-label="Increase" className="w-7 h-7 flex items-center justify-center border border-onyx/15 hover:border-gold hover:text-gold transition-colors">
                          <Plus size={10} />
                        </button>
                        <span className="font-body text-sm text-warm-mid ml-2">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div className="mt-6 flex items-center justify-between">
                <Link href="/shop" className="font-body text-[9px] tracking-ultra uppercase text-warm-mid hover:text-gold transition-colors">← Continue Shopping</Link>
                <button onClick={clear} className="font-body text-[9px] tracking-ultra uppercase text-warm-xlight hover:text-onyx transition-colors">Clear Bag</button>
              </div>
            </div>

            <FadeUp delay={0.15}>
              <div className="bg-ivory-2 p-8 sticky top-32">
                <h2 className="font-display text-2xl font-light text-onyx mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6 pb-6 border-b border-onyx/8">
                  {items.map(item => (
                    <div key={item.productId} className="flex items-baseline justify-between">
                      <span className="font-body text-xs text-warm-mid truncate pr-3">{item.productName} ×{item.quantity}</span>
                      <span className="font-body text-sm text-onyx flex-shrink-0">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-body text-[9px] tracking-ultra uppercase text-warm-mid">Subtotal</span>
                  <span className="font-display text-xl font-light text-onyx">{formatPrice(total)}</span>
                </div>
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-body text-[9px] tracking-ultra uppercase text-warm-mid">Shipping</span>
                  <span className={`font-body text-sm ${shipping === 0 ? 'text-green-700' : 'text-onyx'}`}>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                </div>
                <div className="flex items-baseline justify-between mb-8 pt-6 border-t border-onyx/8">
                  <span className="font-body text-[9px] tracking-ultra uppercase text-onyx">Total</span>
                  <span className="font-display text-3xl font-light text-onyx">{formatPrice(total + shipping)}</span>
                </div>
                <a
                  href={`${BRAND.whatsapp}?text=${encodeURIComponent('Hello HOOR, I would like to place my order. Please assist.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-solid w-full justify-center mb-3"
                >
                  Order on WhatsApp
                </a>
                <p className="text-center font-body text-[9px] text-warm-xlight mt-4">Order via WhatsApp for personalised service</p>
              </div>
            </FadeUp>
          </div>
        )}
      </div>
    </div>
  )
}
