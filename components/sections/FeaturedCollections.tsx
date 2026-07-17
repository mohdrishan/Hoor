'use client'
import Link from 'next/link'
import Image from 'next/image'
import { getAllProducts, type Product } from '@/lib/products'
import { FadeUp } from '@/components/animations/FadeUp'

const featured = getAllProducts().filter(p => p.featured).slice(0, 2)
const blushReverie = getAllProducts().find(p => p.slug === 'blush-reverie')!

export function FeaturedCollections() {
  return (
    <section className="section-pad bg-onyx relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-start pl-8 pointer-events-none select-none overflow-hidden">
        <p className="font-display font-light text-[22vw] text-ivory/[0.018] leading-none">HOOR</p>
      </div>

      <div className="container-xl relative">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="label mb-4" style={{ color: '#B8965A' }}>Just Arrived</p>
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
              New Arrivals
            </h2>
          </div>
          <Link href="/shop" className="btn-gold self-start md:self-auto">
            Shop All <span className="w-5 h-px bg-current" />
          </Link>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* First two product cards */}
          {featured.map((product, i) => (
            <FadeUp key={product.id} delay={i * 0.1} className={i === 1 ? 'md:mt-14' : ''}>
              <FeaturedCard product={product} />
            </FadeUp>
          ))}

          {/* Third card — real editorial image of Blush Reverie cuff detail */}
          <FadeUp delay={0.2}>
            <Link href={`/shop/${blushReverie.slug}`} className="group block">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-onyx-2">
                <Image
                  src="/collections/collection-06.jpg"
                  alt="Blush Reverie — hand-embroidered cuff detail"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Editorial overlay label */}
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-body text-[8px] tracking-ultra uppercase text-gold bg-onyx/70 backdrop-blur-sm px-3 py-1.5">
                    {blushReverie.tag}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-display text-sm font-light italic text-ivory/70 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Hand-embroidered cuff detail
                  </p>
                </div>
              </div>
              <h3 className="font-display text-2xl font-light text-ivory group-hover:text-gold transition-colors duration-400 mb-1">
                {blushReverie.name}
              </h3>
              <p className="font-body text-sm text-gold">{blushReverie.priceDisplay}</p>
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-onyx-2">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.04]"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
        />
        {product.tag && (
          <div className="absolute top-4 left-4 z-10">
            <span className="font-body text-[8px] tracking-ultra uppercase text-gold bg-onyx/70 backdrop-blur-sm px-3 py-1.5">
              {product.tag}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-display text-2xl font-light text-ivory group-hover:text-gold transition-colors duration-400 mb-1">
        {product.name}
      </h3>
      <p className="font-body text-sm text-gold">{product.priceDisplay}</p>
    </Link>
  )
}
