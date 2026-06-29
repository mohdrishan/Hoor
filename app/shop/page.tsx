import type { Metadata } from 'next'
import { ShopPageClient } from './ShopPageClient'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Shop the full HOOR collection — four premium modern abayas, each considered.',
}

export default function ShopPage() {
  return <ShopPageClient />
}
