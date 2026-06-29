'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ShoppingBag, MessageCircle, X } from 'lucide-react'
import { type Product, getAllProducts } from '@/lib/products'
import { FadeUp } from '@/components/animations/FadeUp'
import { useCart } from '@/context/CartContext'
import { BRAND } from '@/lib/constants'

interface Props { product: Product }

export function ProductPageClient({ product }: Props) {
  const [activeImg, setActiveImg] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)
  const [showWaForm, setShowWaForm] = useState(false)
  const [waName, setWaName] = useState('')
  const [waPhone, setWaPhone] = useState('')
  const [waEmail, setWaEmail] = useState('')
  const [waErrors, setWaErrors] = useState<Record<string, string>>({})
  const { addItem, openDrawer } = useCart()

  const related = getAllProducts().filter(p => p.id !== product.id).slice(0, 3)

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setActiveImg(i => (i - 1 + product.images.length) % product.images.length)
      if (e.key === 'ArrowRight') setActiveImg(i => (i + 1) % product.images.length)
      if (e.key === 'Escape') setShowWaForm(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [product.images.length])

  const prev = useCallback(() =>
    setActiveImg(i => (i - 1 + product.images.length) % product.images.length), [product.images.length])
  const next = useCallback(() =>
    setActiveImg(i => (i + 1) % product.images.length), [product.images.length])

  // Swipe
  useEffect(() => {
    let startX = 0
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX }
    const onTouchEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX
      if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    }
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [next, prev])

  function buildCartItem() {
    return {
      productId: product.id,
      productName: product.name,
      productSlug: product.slug,
      price: product.price,
      priceDisplay: product.priceDisplay,
      quantity: 1,
      image: product.images[0],
    }
  }

  function handleAddToCart() {
    addItem(buildCartItem())
    setAddedToCart(true)
    setTimeout(() => { setAddedToCart(false); openDrawer() }, 700)
  }


  function validateWaForm() {
    const errs: Record<string, string> = {}
    if (!waName.trim()) errs.name = 'Please enter your name'
    if (!waPhone.trim() || !/^[6-9]\d{9}$/.test(waPhone.replace(/\s/g, '')))
      errs.phone = 'Please enter a valid 10-digit mobile number'
    if (waEmail.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(waEmail))
      errs.email = 'Please enter a valid email'
    setWaErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleWhatsAppOrder() {
    if (!validateWaForm()) return

    const message = [
      `🛍️ *Order Enquiry — HOOR*`,
      ``,
      `*Product:* ${product.name}`,
      `*Price:* ${product.priceDisplay}`,
      `*Category:* ${product.category}`,
      ``,
      `*Customer Details:*`,
      `• Name: ${waName.trim()}`,
      `• Phone: ${waPhone.trim()}`,
      waEmail.trim() ? `• Email: ${waEmail.trim()}` : null,
      ``,
      `I would like to place an order for the above product. Please assist.`,
    ].filter(Boolean).join('\n')

    window.open(`${BRAND.whatsapp}?text=${encodeURIComponent(message)}`, '_blank')
    setShowWaForm(false)
  }

  return (
    <div className="min-h-screen bg-ivory pt-28 pb-24">

      {/* Breadcrumb */}
      <div className="container-xl mb-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-body text-[9px] tracking-ultra uppercase text-warm-xlight">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-warm-mid">{product.name}</span>
        </nav>
      </div>

      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

          {/* ── Gallery ── */}
          <div>
            <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-ivory-3 group">
              <AnimatePresence mode="wait">
                <motion.div key={activeImg} className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}>
                  <Image
                    src={product.images[activeImg]}
                    alt={`${product.name} — image ${activeImg + 1}`}
                    fill className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={activeImg === 0}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                  />
                </motion.div>
              </AnimatePresence>

              {product.tag && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-body text-[8px] tracking-ultra uppercase text-gold bg-ivory/90 backdrop-blur-sm px-3 py-1.5">
                    {product.tag}
                  </span>
                </div>
              )}

              <button onClick={prev} aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-ivory/80 backdrop-blur-sm text-onyx opacity-0 group-hover:opacity-100 hover:bg-gold hover:text-ivory transition-all duration-300">
                <ChevronLeft size={16} />
              </button>
              <button onClick={next} aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-ivory/80 backdrop-blur-sm text-onyx opacity-0 group-hover:opacity-100 hover:bg-gold hover:text-ivory transition-all duration-300">
                <ChevronRight size={16} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {product.images.map((_, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} aria-label={`Image ${i+1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeImg === i ? 'bg-gold w-4' : 'w-1.5 bg-ivory/60 hover:bg-ivory'}`} />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-6 gap-2">
              {product.images.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)} aria-label={`View image ${i+1}`}
                  className={`relative aspect-square overflow-hidden bg-ivory-3 transition-all duration-300 ${activeImg === i ? 'ring-1 ring-gold' : 'opacity-50 hover:opacity-100'}`}>
                  <Image src={img} alt={`${product.name} ${i+1}`} fill className="object-cover" sizes="80px"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                </button>
              ))}
            </div>
          </div>

          {/* ── Product Info ── */}
          <div className="lg:pt-2">
            <FadeUp>
              <p className="label mb-3">{product.category}</p>
              <h1 className="font-display font-light text-5xl md:text-6xl text-onyx mb-2 leading-tight">
                {product.name}
              </h1>
              <p className="font-display italic text-xl text-warm-mid mb-5 font-light">{product.tagline}</p>
              <p className="font-display text-4xl text-gold font-light mb-8">{product.priceDisplay}</p>
              <p className="font-body font-light text-warm-mid text-sm leading-loose mb-10">{product.longDescription}</p>

              {/* CTA Buttons */}
              <div className="space-y-3 mb-10">
                <button onClick={handleAddToCart}
                  className={`w-full flex items-center justify-center gap-3 py-4 font-body text-[10px] tracking-ultra uppercase transition-all duration-500 ${
                    addedToCart ? 'bg-onyx text-ivory' : 'border border-onyx text-onyx hover:bg-onyx hover:text-ivory'
                  }`}>
                  <ShoppingBag size={14} />
                  {addedToCart ? 'Added to Bag ✓' : 'Add to Bag'}
                </button>

                {/* WhatsApp Order button */}
                <button onClick={() => setShowWaForm(true)}
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-body text-[10px] tracking-ultra uppercase py-4 hover:bg-[#1ebe5d] transition-colors duration-300">
                  <MessageCircle size={14} />
                  Order on WhatsApp
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-4 py-8 border-y border-onyx/8 mb-10">
                {[
                  { icon: '◈', label: 'Secure Payment', sub: 'Safe & encrypted' },
                  { icon: '✦', label: 'Premium Craftsmanship', sub: 'Beautifully tailored' },
                ].map(b => (
                  <div key={b.label} className="text-center">
                    <p className="text-gold mb-1">{b.icon}</p>
                    <p className="font-body text-[8px] tracking-ultra uppercase text-onyx">{b.label}</p>
                    <p className="font-body text-[8px] text-warm-xlight mt-0.5">{b.sub}</p>
                  </div>
                ))}
              </div>

              {/* Accordion */}
              <div className="space-y-0">
                <AccordionItem title="Product Details" lines={product.details} defaultOpen={true} />
                <AccordionItem title="Care Instructions" lines={product.careInstructions} />
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Related */}
        <div className="mt-28">
          <div className="gold-line mb-16" />
          <p className="label text-center mb-14">You may also love</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
            {related.map((item, i) => (
              <FadeUp key={item.id} delay={i * 0.1}>
                <Link href={`/shop/${item.slug}`} className="group block">
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-ivory-3">
                    <Image src={item.images[0]} alt={item.name} fill
                      className="object-cover transition-transform duration-[1000ms] group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, 33vw"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-display text-2xl font-light text-onyx group-hover:text-gold transition-colors duration-400">{item.name}</h4>
                    <span className="font-body text-sm text-gold ml-2">{item.priceDisplay}</span>
                  </div>
                  <p className="label-onyx mt-1">{item.category}</p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* ── WhatsApp Order Form Modal ── */}
      <AnimatePresence>
        {showWaForm && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-onyx/50 backdrop-blur-sm z-50"
              onClick={() => setShowWaForm(false)} />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.16,1,0.3,1] }}
              className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-md h-fit max-h-[90vh] overflow-y-auto bg-ivory z-[55] shadow-2xl">

              {/* Header */}
              <div className="flex items-center justify-between px-7 py-5 border-b border-onyx/8">
                <div>
                  <p className="font-body text-[9px] tracking-ultra uppercase text-gold mb-0.5">WhatsApp Order</p>
                  <h3 className="font-display text-xl font-light text-onyx">{product.name}</h3>
                </div>
                <button onClick={() => setShowWaForm(false)} aria-label="Close"
                  className="w-8 h-8 flex items-center justify-center text-warm-mid hover:text-onyx transition-colors">
                  <X size={16} />
                </button>
              </div>

              {/* Product summary */}
              <div className="px-7 py-4 bg-ivory-2 border-b border-onyx/8 flex items-center gap-4">
                <div className="relative w-14 h-16 flex-shrink-0 overflow-hidden bg-ivory-3">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="56px"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div>
                  <p className="font-display text-base font-light text-onyx">{product.name}</p>
                  <p className="font-body text-[9px] tracking-ultra uppercase text-warm-mid">{product.category}</p>
                  <p className="font-body text-sm text-gold mt-0.5">{product.priceDisplay}</p>
                </div>
              </div>

              {/* Form */}
              <div className="px-7 py-6 space-y-5">
                <p className="font-body text-[10px] text-warm-mid leading-relaxed">
                  Fill in your details and we'll open WhatsApp with everything pre-filled — ready to send to HOOR.
                </p>

                {/* Name */}
                <div>
                  <label className="block font-body text-[9px] tracking-ultra uppercase text-warm-mid mb-2">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text" value={waName} onChange={e => { setWaName(e.target.value); setWaErrors(p => ({...p, name: ''})) }}
                    placeholder="Your full name"
                    className={`w-full bg-transparent border-b pb-2 font-body text-sm text-onyx placeholder:text-warm-xlight focus:outline-none transition-colors ${waErrors.name ? 'border-red-400' : 'border-onyx/15 focus:border-gold'}`}
                  />
                  {waErrors.name && <p className="font-body text-[9px] text-red-500 mt-1">{waErrors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-body text-[9px] tracking-ultra uppercase text-warm-mid mb-2">
                    Mobile Number <span className="text-gold">*</span>
                  </label>
                  <input
                    type="tel" value={waPhone} onChange={e => { setWaPhone(e.target.value); setWaErrors(p => ({...p, phone: ''})) }}
                    placeholder="10-digit mobile number"
                    className={`w-full bg-transparent border-b pb-2 font-body text-sm text-onyx placeholder:text-warm-xlight focus:outline-none transition-colors ${waErrors.phone ? 'border-red-400' : 'border-onyx/15 focus:border-gold'}`}
                  />
                  {waErrors.phone && <p className="font-body text-[9px] text-red-500 mt-1">{waErrors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-body text-[9px] tracking-ultra uppercase text-warm-mid mb-2">
                    Email <span className="text-warm-xlight">(optional)</span>
                  </label>
                  <input
                    type="email" value={waEmail} onChange={e => { setWaEmail(e.target.value); setWaErrors(p => ({...p, email: ''})) }}
                    placeholder="your@email.com"
                    className={`w-full bg-transparent border-b pb-2 font-body text-sm text-onyx placeholder:text-warm-xlight focus:outline-none transition-colors ${waErrors.email ? 'border-red-400' : 'border-onyx/15 focus:border-gold'}`}
                  />
                  {waErrors.email && <p className="font-body text-[9px] text-red-500 mt-1">{waErrors.email}</p>}
                </div>

                {/* Preview of message */}
                {waName && waPhone && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                    className="bg-[#e9f9ee] border border-[#25D366]/20 rounded p-4 overflow-hidden">
                    <p className="font-body text-[8px] tracking-ultra uppercase text-[#25D366] mb-2">Message Preview</p>
                    <p className="font-body text-[11px] text-onyx/70 leading-relaxed whitespace-pre-line">
                      {`🛍️ Order Enquiry — HOOR\n\nProduct: ${product.name}\nPrice: ${product.priceDisplay}\n\nName: ${waName}\nPhone: ${waPhone}${waEmail ? `\nEmail: ${waEmail}` : ''}`}
                    </p>
                  </motion.div>
                )}

                {/* Submit */}
                <button onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-body text-[10px] tracking-ultra uppercase py-4 hover:bg-[#1ebe5d] transition-colors duration-300">
                  <MessageCircle size={14} />
                  Send Order on WhatsApp
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

function AccordionItem({ title, lines, defaultOpen = false }: { title: string; lines: string[]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-onyx/8">
      <button onClick={() => setOpen(!open)} aria-expanded={open}
        className="w-full flex items-center justify-between py-4 text-left group">
        <span className="font-body text-[9px] tracking-ultra uppercase text-onyx group-hover:text-gold transition-colors duration-300">{title}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}
          className="text-warm-mid text-lg leading-none">+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
            className="overflow-hidden">
            <div className="pb-5 space-y-2">
              {lines.map((line, i) => (
                <p key={i} className="font-body font-light text-warm-mid text-sm leading-relaxed">· {line}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
