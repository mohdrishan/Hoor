'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'
import { FadeUp } from '@/components/animations/FadeUp'

export function Testimonials() {
  const [active, setActive] = useState(0)
  const t = TESTIMONIALS[active]

  return (
    <section className="section-pad bg-ivory overflow-hidden">
      <div className="container-xl">
        <FadeUp className="text-center mb-20">
          <p className="label mb-4">Voices of Grace</p>
          <h2 className="heading-xl">What Our Women Say</h2>
        </FadeUp>

        <div className="max-w-3xl mx-auto">
          {/* Quote display */}
          <div className="relative min-h-[200px] flex items-center justify-center mb-14">
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#B8965A">
                      <path d="M7 0L8.2 4.8L13 7L8.2 9.2L7 14L5.8 9.2L1 7L5.8 4.8L7 0Z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-display text-xl md:text-2xl font-light italic text-onyx/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                  "{t.quote}"
                </p>

                {/* Attribution */}
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-px bg-gold/30" />
                  <div className="text-center">
                    <p className="font-display text-lg font-light text-onyx">{t.name}</p>
                    <p className="font-body text-[10px] tracking-ultra uppercase text-warm-light mt-0.5">{t.location}</p>
                  </div>
                  <div className="w-10 h-px bg-gold/30" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`transition-all duration-400 ${
                  i === active ? 'w-8 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-warm-xlight hover:bg-gold/50 rounded-full'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
