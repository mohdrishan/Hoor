'use client'
import Link from 'next/link'
import Image from 'next/image'
import { getAllProducts } from '@/lib/products'
import { FadeUp } from '@/components/animations/FadeUp'

const arrivals = getAllProducts().slice(0, 0)

export function NewArrivals() {
  if (arrivals.length === 0) return null

  return (
    <section className="section-pad bg-onyx relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden">
        <p className="font-display font-light text-[22vw] text-ivory/[0.018] leading-none">HOOR</p>
      </div>

      <div className="container-xl relative">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
          {arrivals.map((product, i) => (
            <FadeUp key={product.id} delay={i * 0.07} className={i % 2 === 1 ? 'mt-10' : ''}>
              <Link href={`/shop/${product.slug}`} className="group block">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-onyx-2">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                    sizes="(max-width: 640px) 50vw, 25vw"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
                <h4 className="font-display text-xl font-light text-ivory group-hover:text-gold transition-colors duration-400">
                  {product.name}
                </h4>
                <p className="font-body text-sm text-gold mt-1">{product.priceDisplay}</p>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
