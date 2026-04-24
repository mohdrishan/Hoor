import type { Metadata } from 'next'
import { CollectionPageClient } from './CollectionPageClient'

export const metadata: Metadata = {
  title: 'Collection',
  description: 'Browse the full HOOR collection of premium modern abayas.',
}

export default function CollectionPage() {
  return <CollectionPageClient />
}
