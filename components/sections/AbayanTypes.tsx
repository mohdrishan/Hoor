'use client'
import { ABAYA_TYPES } from '@/lib/constants'
import { FadeUp, StaggerParent, StaggerChild } from '@/components/animations/FadeUp'

export function AbayanTypes() {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-xl">
        <FadeUp className="text-center mb-20">
          <p className="label mb-4">Our Categories</p>
          <h2 className="heading-xl mb-5">Types of Abayas</h2>
          <p className="body-copy max-w-md mx-auto text-sm leading-loose">
            From daily elegance to landmark occasions every woman, every moment, every silhouette.
          </p>
        </FadeUp>

        <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-onyx/6">
          {ABAYA_TYPES.map((type) => (
            <StaggerChild key={type.id}>
              <div className="group bg-ivory hover:bg-ivory-2 transition-colors duration-500 p-8 h-full cursor-default">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-gold text-xl">{type.icon}</span>
                  <h3 className="font-display text-lg font-light text-onyx group-hover:text-gold transition-colors duration-500">
                    {type.name}
                  </h3>
                </div>
                <div className="w-6 h-px bg-gold/25 mb-4 group-hover:w-12 transition-all duration-500" />
                <p className="body-copy text-sm leading-relaxed">{type.description}</p>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  )
}
