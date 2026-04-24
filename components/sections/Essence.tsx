'use client'
import { FadeUp, SlideIn } from '@/components/animations/FadeUp'

export function Essence() {
  return (
    <section className="section-pad bg-ivory-2 relative overflow-hidden">

      {/* Static decorative letter no scroll transform */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <p className="font-display font-light text-[28vw] text-onyx/[0.022] leading-none">H</p>
      </div>

      <div className="container-xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          <SlideIn direction="left">
            <p className="label mb-5">The Essence of Abaya</p>
            <h2 className="heading-xl mb-8 text-onyx">
              A symbol of grace,<br />
              <em className="italic text-gold">confidence, sophistication</em>
            </h2>
            <div className="space-y-5 mb-12">
              <p className="body-copy text-sm leading-loose">
                The abaya is a symbol of grace, confidence, and timeless sophistication. Rooted in modesty and elevated through style, it reflects elegance in its purest form.
              </p>
              <p className="body-copy text-sm leading-loose">
                Every silhouette is created for women who appreciate comfort, refinement, and understated luxury women who understand that true elegance requires no announcement.
              </p>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-px bg-gold/30" />
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 0L8.2 4.8L13 7L8.2 9.2L7 14L5.8 9.2L1 7L5.8 4.8L7 0Z" fill="#B8965A" fillOpacity="0.6"/>
              </svg>
              <div className="w-16 h-px bg-gold/30" />
            </div>

            <p className="label mb-4 text-gold/70">Timeless Modesty, Modern Expression</p>
            <p className="body-copy text-sm leading-loose">
              The abaya continues to evolve through generations honoring tradition while embracing contemporary style. With flowing cuts, premium fabrics, and elegant details, each piece delivers beauty, versatility, and confidence.
            </p>
          </SlideIn>

          <SlideIn direction="right" delay={0.12}>
            <div className="grid grid-cols-2 gap-px bg-onyx/8">
              {[
                { n: '9+',   l: 'Signature Pieces' },
                { n: '12',   l: 'Abaya Categories' },
                { n: '100%', l: 'Premium Fabrics'  },
                { n: '∞',    l: 'Timeless Style'   },
              ].map(({ n, l }) => (
                <div key={l} className="bg-ivory-2 p-10 text-center group hover:bg-ivory transition-colors duration-500">
                  <p className="font-display text-5xl font-light text-gold mb-3">{n}</p>
                  <p className="label-onyx">{l}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border border-gold/15 p-8 relative">
              <div className="absolute -top-3 left-8">
                <span className="bg-ivory-2 px-3 label text-gold/60">Crafted for Grace</span>
              </div>
              <p className="font-display text-xl font-light italic text-onyx/70 leading-relaxed">
                "Modesty is not a limitation. It is the language of the deeply confident."
              </p>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
