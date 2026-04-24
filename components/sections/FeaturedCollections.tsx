'use client'
import Link from 'next/link'
import Image from 'next/image'
import { COLLECTIONS } from '@/lib/constants'
import { FadeUp, StaggerParent, StaggerChild } from '@/components/animations/FadeUp'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import type { Collection } from '@/types'

const featured = COLLECTIONS.filter(c => c.featured)

const VARIANTS = ['light', 'mid', 'nude'] as const

export function FeaturedCollections() {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-xl">

        {/* Header */}
        <FadeUp className="text-center mb-20">
          <p className="label mb-4">Signature Edit</p>
          <h2 className="heading-xl mb-5">Featured Collection</h2>
          <p className="body-copy max-w-md mx-auto text-sm leading-loose">
            Each piece a study in restraint. Modern abayas that speak in silhouette, curated for women who know exactly who they are.
          </p>
        </FadeUp>

        {/* Editorial asymmetric grid */}
        <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {featured.map((item, i) => (
            <StaggerChild key={item.id} className={i === 1 ? 'md:mt-14' : ''}>
              <CollectionCard item={item} variant={VARIANTS[i]} />
            </StaggerChild>
          ))}
        </StaggerParent>

        <FadeUp className="text-center">
          <Link href="/collection" className="btn-gold">
            View All Pieces
            <span className="w-5 h-px bg-current" />
          </Link>
        </FadeUp>
      </div>
    </section>
  )
}

function CollectionCard({ item, variant }: { item: Collection; variant: 'light' | 'mid' | 'nude' }) {
  return (
    <article className="group">
      {/* Image */}
      <div className="relative aspect-[3/4] mb-6 img-zoom overflow-hidden">
        {/* Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="font-body text-[9px] tracking-ultra uppercase text-gold bg-ivory/90 backdrop-blur-sm px-3 py-1.5">
            {item.tag}
          </span>
        </div>

        {/* Real image loads here once collection-N.jpg files are added to public/images */}

        {/* Premium placeholder */}
        <PlaceholderImage className="absolute inset-0" variant={variant} label={item.category} />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/18 transition-all duration-700" />
        <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="font-body text-[9px] tracking-ultra uppercase text-ivory border border-ivory/40 px-4 py-2 backdrop-blur-sm">
            View Piece
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="px-1">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="font-display text-2xl font-light text-onyx group-hover:text-gold transition-colors duration-500">{item.name}</h3>
          <span className="font-body font-light text-sm text-gold">{item.price}</span>
        </div>
        <p className="label-onyx mb-2">{item.category}</p>
        <p className="body-copy text-sm leading-relaxed max-w-[280px]">{item.description}</p>
      </div>
    </article>
  )
}
