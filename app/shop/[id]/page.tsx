import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProduct, getAllProducts } from '@/lib/products'
import { ProductPageClient } from './ProductPageClient'
import { BRAND } from '@/lib/constants'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return getAllProducts().map(p => ({ id: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = getProduct(id)
  if (!product) return { title: 'Not Found' }
  const url = `https://hoor.in/shop/${product.slug}`
  return {
    title: `${product.name} — ${product.category}`,
    description: product.longDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} | HOOR`,
      description: product.description,
      url,
      images: [{ url: product.images[0], width: 800, height: 1067, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | HOOR`,
      description: product.description,
      images: [product.images[0]],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const product = getProduct(id)
  if (!product) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.longDescription,
    image: product.images,
    sku: product.id,
    brand: { '@type': 'Brand', name: BRAND.name },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.price,
      availability: 'https://schema.org/InStock',
      url: `https://hoor.in/shop/${product.slug}`,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPageClient product={product} />
    </>
  )
}
