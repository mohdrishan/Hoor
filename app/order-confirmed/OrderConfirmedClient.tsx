'use client'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export function OrderConfirmedClient() {
  const params = useSearchParams()
  const orderId = params.get('orderId') ?? ''
  const name = params.get('name') ?? ''

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6 pt-20">
      <div className="max-w-lg w-full text-center">
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
          className="flex justify-center mb-8">
          <CheckCircle size={56} className="text-gold" strokeWidth={1} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16,1,0.3,1] }}>
          <p className="label mb-5">Order Confirmed</p>
          <h1 className="font-display font-light text-4xl md:text-5xl text-onyx mb-5 leading-tight">
            {name ? `Thank you, ${name.split(' ')[0]}.` : 'Thank you.'}
          </h1>
          <p className="body-copy text-sm leading-loose mb-3">
            Your order has been placed and is being prepared with care.
          </p>
          <p className="body-copy text-sm leading-loose mb-8">
            A confirmation has been sent to your email. We will be in touch shortly with shipping details.
          </p>

          {orderId && (
            <div className="inline-block border border-onyx/10 px-6 py-3 mb-10">
              <p className="font-body text-[9px] tracking-ultra uppercase text-warm-mid mb-1">Order Reference</p>
              <p className="font-body text-xs text-onyx">{orderId}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link href="/shop" className="btn-gold-solid">Continue Shopping</Link>
            <a href={`${BRAND.whatsapp}?text=${encodeURIComponent(`Hello HOOR! I've just placed an order (${orderId}). Looking forward to receiving it!`)}`}
              target="_blank" rel="noopener noreferrer" className="btn-outline">
              Message Us on WhatsApp
            </a>
          </div>

          <div className="gold-line" />
          <p className="body-copy text-xs mt-8">
            Questions? Email us at{' '}
            <a href={`mailto:${BRAND.email}`} className="text-gold hover:underline">{BRAND.email}</a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
