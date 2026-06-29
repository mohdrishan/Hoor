import type { Metadata } from 'next'
import { LookbookClient } from './LookbookClient'

export const metadata: Metadata = {
  title: 'Lookbook',
  description: 'HOOR editorial fashion photography.',
}

export default function LookbookPage() {
  return <LookbookClient />
}
