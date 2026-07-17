import type { Metadata } from 'next'
import { CartPageClient } from './CartPageClient'

export const metadata: Metadata = {
  title: 'Your Bag',
  description: 'Review your selected pieces before checkout.',
}

export default function CartPage() {
  return <CartPageClient />
}
