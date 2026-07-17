'use client'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { BRAND } from '@/lib/constants'
import { formatPrice } from '@/lib/cart'

export function CartDrawer() {
  const { items, count, total, drawerOpen, closeDrawer, removeItem, updateQty } = useCart()

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <AnimatePresence>
      {drawerOpen && (
        <>
          <motion.div key="bd" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-onyx/30 backdrop-blur-sm z-[60]" onClick={closeDrawer} />

          <motion.aside key="drawer"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-ivory z-[70] flex flex-col shadow-2xl">

            {/* Header */}
            <div className="flex items-center justify-between px-7 py-6 border-b border-onyx/8">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} className="text-gold" />
                <span className="font-body text-[10px] tracking-ultra uppercase text-onyx">
                  Your Bag {count > 0 && `(${count})`}
                </span>
              </div>
              <button onClick={closeDrawer} aria-label="Close cart"
                className="w-8 h-8 flex items-center justify-center text-warm-mid hover:text-onyx transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-7 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <ShoppingBag size={40} className="text-warm-xlight mb-5" />
                  <p className="font-display text-2xl font-light text-onyx mb-2">Your bag is empty</p>
                  <p className="body-copy text-sm mb-8">Discover something beautiful</p>
                  <button onClick={closeDrawer} className="btn-gold">Explore Collection</button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map(item => (
                    <motion.div key={item.productId} layout
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4">
                      <div className="relative w-20 h-24 flex-shrink-0 bg-ivory-3 overflow-hidden">
                        {item.image
                          ? <Image src={item.image} alt={item.productName} fill className="object-cover" sizes="80px"
                              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                          : <div className="absolute inset-0 bg-gradient-to-br from-ivory-2 to-nude-light" />
                        }
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="font-display text-lg font-light text-onyx leading-tight">{item.productName}</h4>
                          <button onClick={() => removeItem(item.productId)} aria-label="Remove item"
                            className="text-warm-xlight hover:text-onyx transition-colors ml-2 flex-shrink-0">
                            <X size={14} />
                          </button>
                        </div>
                        <p className="font-body text-sm text-gold mb-3">{item.priceDisplay}</p>
                        <div className="flex items-center gap-3">
                          <button onClick={() => updateQty(item.productId, item.quantity - 1)}
                            aria-label="Decrease" className="w-6 h-6 flex items-center justify-center border border-onyx/15 hover:border-gold hover:text-gold transition-colors">
                            <Minus size={10} />
                          </button>
                          <span className="font-body text-sm w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQty(item.productId, item.quantity + 1)}
                            aria-label="Increase" className="w-6 h-6 flex items-center justify-center border border-onyx/15 hover:border-gold hover:text-gold transition-colors">
                            <Plus size={10} />
                          </button>
                          <span className="font-body text-sm text-warm-mid ml-2">{formatPrice(item.price * item.quantity)}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-7 py-6 border-t border-onyx/8">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-body text-[9px] tracking-ultra uppercase text-warm-mid">Subtotal</span>
                  <span className="font-display text-2xl font-light text-onyx">{formatPrice(total)}</span>
                </div>
                <div className="space-y-3">
                  <a
                    href={`${BRAND.whatsapp}?text=${encodeURIComponent('Hello HOOR, I want to place an order for the items in my bag. Please assist.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeDrawer}
                    className="btn-gold-solid w-full justify-center"
                  >
                    Order on WhatsApp
                  </a>
                  <Link href="/cart" onClick={closeDrawer} className="btn-outline w-full justify-center">
                    View Bag
                  </Link>
                </div>
                <p className="text-center font-body text-[9px] tracking-ultra uppercase text-warm-xlight mt-4">
                  Free shipping on all orders
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
