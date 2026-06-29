import { Suspense } from 'react'
import type { Metadata } from 'next'
import { OrderConfirmedClient } from './OrderConfirmedClient'

export const metadata: Metadata = {
  title: 'Order Confirmed',
  description: 'Your HOOR order has been placed successfully.',
  robots: { index: false, follow: false },
}

export default function OrderConfirmedPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-ivory" />}>
      <OrderConfirmedClient />
    </Suspense>
  )
}
