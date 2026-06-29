import type { Metadata } from 'next'
import { CheckoutClient } from './CheckoutClient'

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Complete your HOOR order securely.',
  robots: { index: false, follow: false },
}

export default function CheckoutPage() {
  return <CheckoutClient />
}
