'use client'
import Link from 'next/link'
import Image from 'next/image'
import { COLLECTIONS } from '@/lib/constants'
import { FadeUp } from '@/components/animations/FadeUp'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

const arrivals = COLLECTIONS.slice(3, 7)

export function NewArrivals() {
  return (
    <section className="section-pad bg-onyx relative overflow-hidden">
      {/* Background glyph */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden">
        <p className="font-display font-light text-[22vw] text-ivory/[0.018] leading-none">HOOR</p>
      </div>

      <div className="container-xl relative">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="label text-gold mb-4">Just Arrived</p>
            <h2 className="heading-xl text-ivory leading-tight">New Arrivals</h2>
          </div>
          <Link href="/collection" className="btn-gold self-start md:self-auto shrink-0">
            View All
            <span className="w-4 h-px bg-current" />
          </Link>
        </FadeUp>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {arrivals.map((item, i) => (
            <FadeUp key={item.id} delay={i * 0.09}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[3/4] img-zoom overflow-hidden mb-4 bg-onyx-2">
                  {/* Real image loads here once collection-N.jpg files are added to public/images */}
                  <PlaceholderImage className="absolute inset-0" variant="dark" label={item.category} />
                  <div className="absolute inset-0 bg-ivory/0 group-hover:bg-ivory/6 transition-all duration-700" />

                  {/* Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="font-body text-[8px] tracking-ultra uppercase text-gold bg-onyx/80 backdrop-blur-sm px-2.5 py-1">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-lg font-light text-ivory group-hover:text-gold transition-colors duration-400">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <p className="font-body text-[9px] tracking-ultra uppercase text-ivory/40">{item.category}</p>
                  <p className="font-body font-light text-sm text-gold">{item.price}</p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
