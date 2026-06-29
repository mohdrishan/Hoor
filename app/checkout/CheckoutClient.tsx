'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Lock, Loader2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/cart'
import { BRAND } from '@/lib/constants'
import { FadeUp } from '@/components/animations/FadeUp'

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
}

interface FieldError {
  name?: string
  email?: string
  phone?: string
  address?: string
  city?: string
  state?: string
  pincode?: string
}

const INITIAL_FORM: FormData = {
  name: '', email: '', phone: '',
  address: '', city: '', state: '', pincode: '',
}

export function CheckoutClient() {
  const router = useRouter()
  const { items, total, clear } = useCart()
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<FieldError>({})
  const [loading, setLoading] = useState(false)
  const [globalError, setGlobalError] = useState('')
  const submitting = useRef(false)
  const shipping = 0
  const grandTotal = total + shipping

  // Redirect if cart empty
  useEffect(() => {
    if (items.length === 0) router.replace('/shop')
  }, [items, router])

  function validate(): boolean {
    const e: FieldError = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Valid 10-digit Indian mobile required'
    if (!form.address.trim()) e.address = 'Required'
    if (!form.city.trim()) e.city = 'Required'
    if (!form.state.trim()) e.state = 'Required'
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode)) e.pincode = '6-digit pincode required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function field(name: keyof FormData) {
    return {
      value: form[name],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [name]: e.target.value }))
        setErrors(prev => ({ ...prev, [name]: undefined }))
      },
      className: `w-full bg-transparent border-b pb-2 font-body text-sm text-onyx placeholder:text-warm-xlight focus:outline-none transition-colors ${
        errors[name] ? 'border-red-400 focus:border-red-400' : 'border-onyx/15 focus:border-gold'
      }`,
    }
  }

  async function handlePay() {
    if (submitting.current || !validate()) return
    submitting.current = true
    setLoading(true)
    setGlobalError('')

    try {
      const orderLines = items.map(item =>
        `• ${item.productName} × ${item.quantity} — ${formatPrice(item.price * item.quantity)}`
      )

      const orderText = [
        `🛍️ *New Order — HOOR*`,
        ``,
        `*ORDER DETAILS*`,
        ...orderLines,
        ``,
        `Subtotal: ${formatPrice(total)}`,
        `Shipping: ${shipping === 0 ? 'Free' : formatPrice(shipping)}`,
        `*Total: ${formatPrice(grandTotal)}*`,
        ``,
        `*CUSTOMER DETAILS*`,
        `• Name: ${form.name}`,
        `• Phone: ${form.phone}`,
        `• Email: ${form.email}`,
        ``,
        `*SHIPPING ADDRESS*`,
        `${form.address}`,
        `${form.city}, ${form.state} — ${form.pincode}`,
        ``,
        `Please confirm this order and share payment details. Thank you!`,
      ].join('\n')

      const whatsappUrl = `${BRAND.whatsapp}?text=${encodeURIComponent(orderText)}`
      window.open(whatsappUrl, '_blank')
      clear()
    } catch (err: unknown) {
      setGlobalError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
      submitting.current = false
    }
  }

  if (items.length === 0) return null

  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="container-xl max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="label mb-4">Checkout</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }}
            className="font-display font-light text-5xl md:text-6xl text-onyx mb-3">
            Complete Your Order
          </motion.h1>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Lock size={12} className="text-warm-xlight" />
            <span className="font-body text-[9px] tracking-ultra uppercase text-warm-xlight">
              Order directly via WhatsApp for a personalised checkout
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

          {/* ── Form ── */}
          <FadeUp className="lg:col-span-2 space-y-10">

            {/* Contact */}
            <section>
              <h2 className="font-body text-[9px] tracking-ultra uppercase text-onyx mb-6 pb-3 border-b border-onyx/8">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="Full Name" error={errors.name}>
                  <input type="text" placeholder="Fatima Al Rashid" autoComplete="name" {...field('name')} />
                </FormField>
                <FormField label="Email Address" error={errors.email}>
                  <input type="email" placeholder="you@example.com" autoComplete="email" {...field('email')} />
                </FormField>
                <FormField label="Mobile Number" error={errors.phone} hint="10-digit Indian number">
                  <input type="tel" placeholder="98765 43210" autoComplete="tel" {...field('phone')} />
                </FormField>
              </div>
            </section>

            {/* Shipping */}
            <section>
              <h2 className="font-body text-[9px] tracking-ultra uppercase text-onyx mb-6 pb-3 border-b border-onyx/8">
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="Street Address" error={errors.address} className="md:col-span-2">
                  <input type="text" placeholder="House no, street, area" autoComplete="street-address" {...field('address')} />
                </FormField>
                <FormField label="City" error={errors.city}>
                  <input type="text" placeholder="Mangalore" autoComplete="address-level2" {...field('city')} />
                </FormField>
                <FormField label="State" error={errors.state}>
                  <input type="text" placeholder="Karnataka" autoComplete="address-level1" {...field('state')} />
                </FormField>
                <FormField label="Pincode" error={errors.pincode}>
                  <input type="text" placeholder="575001" autoComplete="postal-code" maxLength={6} {...field('pincode')} />
                </FormField>
              </div>
            </section>

            {/* Error */}
            {globalError && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 px-5 py-4">
                <p className="font-body text-[10px] tracking-wide text-red-600">{globalError}</p>
              </motion.div>
            )}

            {/* Pay button */}
            <button onClick={handlePay} disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-gold text-ivory font-body text-[10px] tracking-ultra uppercase py-5 transition-all duration-500 hover:bg-gold-dark disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Processing…
                </>
              ) : (
                <>
                  <Lock size={14} />
                  Complete Order — {formatPrice(grandTotal)}
                </>
              )}
            </button>

            <p className="text-center body-copy text-[11px]">
              By placing your order you agree to our{' '}
              <Link href="/terms" className="text-gold hover:underline">Terms</Link> and{' '}
              <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link>.
            </p>
          </FadeUp>

          {/* ── Order Summary ── */}
          <FadeUp delay={0.15} className="lg:col-span-1">
            <div className="bg-ivory-2 p-8 sticky top-32">
              <h2 className="font-display text-2xl font-light text-onyx mb-6">Your Order</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-onyx/8">
                {items.map(item => (
                  <div key={item.productId} className="flex gap-3">
                    <div className="relative w-14 h-18 flex-shrink-0 bg-ivory-3 overflow-hidden">
                      <Image src={item.image} alt={item.productName} fill className="object-cover" sizes="56px"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-display text-base font-light text-onyx leading-tight">{item.productName}</p>
                      <p className="font-body text-[8px] tracking-ultra uppercase text-warm-mid mt-0.5">Qty: {item.quantity}</p>
                      <p className="font-body text-sm text-gold mt-1">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-onyx/8">
                <div className="flex justify-between">
                  <span className="font-body text-[9px] tracking-ultra uppercase text-warm-mid">Subtotal</span>
                  <span className="font-body text-sm text-onyx">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-[9px] tracking-ultra uppercase text-warm-mid">Shipping</span>
                  <span className={`font-body text-sm ${shipping === 0 ? 'text-green-700' : 'text-onyx'}`}>
                    {shipping === 0 ? 'Free' : formatPrice(shipping)}
                  </span>
                </div>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="font-body text-[9px] tracking-ultra uppercase text-onyx">Total</span>
                <span className="font-display text-3xl font-light text-onyx">{formatPrice(grandTotal)}</span>
              </div>

              <div className="mt-8 pt-6 border-t border-onyx/8 space-y-2">
                {['Order on WhatsApp', 'Direct support from our team', 'Order confirmation by message'].map(t => (
                  <div key={t} className="flex items-center gap-2">
                    <span className="text-gold text-xs">✓</span>
                    <span className="font-body text-[9px] text-warm-mid">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  )
}

function FormField({
  label, error, hint, children, className = '',
}: {
  label: string; error?: string; hint?: string; children: React.ReactNode; className?: string
}) {
  return (
    <div className={className}>
      <label className="block font-body text-[9px] tracking-ultra uppercase text-warm-mid mb-2">{label}</label>
      {children}
      {hint && !error && <p className="font-body text-[9px] text-warm-xlight mt-1">{hint}</p>}
      {error && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-body text-[9px] text-red-500 mt-1">{error}</motion.p>
      )}
    </div>
  )
}
