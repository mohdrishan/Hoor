'use client'
import { WHY_HOOR } from '@/lib/constants'
import { FadeUp, StaggerParent, StaggerChild } from '@/components/animations/FadeUp'

export function WhyHoor() {
  return (
    <section className="section-pad bg-ivory-2">
      <div className="container-xl">
        <FadeUp className="text-center mb-20">
          <p className="label mb-4">Why HOOR</p>
          <h2 className="heading-xl mb-5">The HOOR Difference</h2>
          <p className="body-copy max-w-md mx-auto text-sm leading-loose">
            What separates a beautiful abaya from an extraordinary one. Here is what we stand for.
          </p>
        </FadeUp>

        <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-onyx/6">
          {WHY_HOOR.map(({ title, body, icon }) => (
            <StaggerChild key={title}>
              <div className="group bg-ivory-2 hover:bg-ivory transition-colors duration-500 p-10 h-full">
                <div className="text-gold text-2xl mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">{icon}</div>
                <div className="w-8 h-px bg-gold mb-5 group-hover:w-14 transition-all duration-500" />
                <h3 className="font-display text-xl font-light text-onyx mb-4 group-hover:text-gold transition-colors duration-500">{title}</h3>
                <p className="body-copy text-sm leading-loose">{body}</p>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  )
}
