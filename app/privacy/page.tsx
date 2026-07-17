import type { Metadata } from 'next'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How HOOR collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="container-xl max-w-3xl">
        <div className="text-center mb-16">
          <p className="label mb-4">Legal</p>
          <h1 className="font-display font-light text-5xl md:text-6xl text-onyx">Privacy Policy</h1>
          <p className="body-copy text-sm mt-4">Last updated: June 2025</p>
        </div>
        <div className="space-y-10">
          {SECTIONS.map(s => (
            <section key={s.title}>
              <h2 className="font-display text-2xl font-light text-onyx mb-4">{s.title}</h2>
              <p className="body-copy text-sm leading-loose">{s.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-onyx/8">
          <p className="body-copy text-sm">
            For privacy-related questions, contact us at{' '}
            <a href={`mailto:${BRAND.email}`} className="text-gold hover:underline">{BRAND.email}</a>
          </p>
        </div>
      </div>
    </div>
  )
}

const SECTIONS = [
  {
    title: '1. Information We Collect',
    body: 'When you place an order, we collect your name, email address, phone number, and shipping address. We may also collect browsing data (pages visited, time spent) to improve our website experience.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'Your information is used to process and fulfil your orders, send order confirmations and shipping updates, respond to customer service enquiries, and improve our products and website experience.',
  },
  {
    title: '3. Payment Security',
    body: 'Orders are placed through WhatsApp with our team. HOOR does not collect payment details directly on the website. All sensitive payment information is handled securely by the selected payment partner when you confirm your order.',
  },
  {
    title: '4. Data Sharing',
    body: 'We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers (such as our shipping partner) solely to fulfil your order.',
  },
  {
    title: '5. Data Retention',
    body: 'We retain your personal information for as long as necessary to provide you with our services and comply with legal obligations. You may request deletion of your data at any time by contacting us.',
  },
  {
    title: '6. Cookies',
    body: 'Our website uses cookies to remember your cart and preferences across sessions. You can disable cookies in your browser settings, though this may affect site functionality.',
  },
  {
    title: '7. Your Rights',
    body: 'You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us via email.',
  },
  {
    title: '8. Changes to This Policy',
    body: 'We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date. Continued use of our website constitutes acceptance of the updated policy.',
  },
]
