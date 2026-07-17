import type { Metadata } from 'next'
import Image from 'next/image'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for shopping with HOOR.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="container-xl max-w-3xl">
        <div className="text-center mb-16">
          <p className="label mb-4">Legal</p>
          <h1 className="font-display font-light text-5xl md:text-6xl text-onyx">Terms &amp; Conditions</h1>
        </div>
        <div className="prose-hoor space-y-10">
          {SECTIONS.map(s => (
            <section key={s.title}>
              <h2 className="font-display text-2xl font-light text-onyx mb-4">{s.title}</h2>
              <p className="body-copy text-sm leading-loose">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="relative w-24 h-24 rounded-full bg-onyx/5 border border-onyx/10 p-4 flex items-center justify-center">
            <Image src="/images/logo.png" alt="HOOR logo" fill sizes="60px" className="object-contain" />
          </div>
          <p className="font-display text-xl font-light text-onyx">HOOR</p>
          <p className="font-body text-sm text-warm-mid text-center max-w-xl">
            Luxury modest fashion, shipped to any location within India. Reach out to us directly for a personalised order experience.
          </p>
        </div>

        <div className="mt-14 pt-8 border-t border-onyx/8">
          <p className="body-copy text-sm">
            Questions? Email us at{' '}
            <a href={`mailto:${BRAND.email}`} className="text-gold hover:underline">{BRAND.email}</a>
          </p>
        </div>
      </div>
    </div>
  )
}

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing and placing an order with HOOR, you confirm that you are in agreement with and bound by these terms. These terms apply to all visitors and customers of our website.',
  },
  {
    title: '2. Products',
    body: 'All products listed on our website are subject to availability. We reserve the right to discontinue any product at any time. Product images are for illustrative purposes; actual colours may vary slightly due to screen calibration.',
  },
  {
    title: '3. Pricing',
    body: 'All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes. Prices are subject to change without notice. Shipping charges are calculated at checkout.',
  },
  {
    title: '4. Orders & Payment',
    body: 'Orders are confirmed once you reach out to us on WhatsApp and complete the purchase with our team. We do not process payments directly on the website.',
  },
  {
    title: '5. Shipping',
    body: 'We ship to any location within India. Standard delivery takes 5–8 business days. Shipping is free on all orders. Tracking information will be shared via email once your order is dispatched.',
  },
  {
    title: '6. Exchanges & Queries',
    body: 'For any concerns about your order, please contact us via WhatsApp or email within 7 days of delivery. Each query is handled personally by our team. We are committed to ensuring you are happy with your purchase.',
  },
  {
    title: '7. Privacy',
    body: 'Your personal information is collected solely for the purpose of processing your order and improving your experience. We do not sell or share your data with third parties. Please read our full Privacy Policy for details.',
  },
  {
    title: '8. Governing Law',
    body: 'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mangalore, Karnataka.',
  },
]
