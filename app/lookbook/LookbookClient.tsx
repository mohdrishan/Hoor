'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp } from '@/components/animations/FadeUp'
import { BRAND, COLLECTIONS } from '@/lib/constants'

const LOOKS = COLLECTIONS.map((c, i) => ({
  id: c.id,
  title: c.name,
  subtitle: c.category,
  image: `/images/lookbook-${i + 1}.jpg`,
  gradient: ['from-ivory-2 to-ivory-3','from-nude-light to-ivory-3','from-ivory-3 to-nude',
             'from-ivory-2 to-nude-light','from-nude to-ivory-2','from-ivory-3 to-ivory-2',
             'from-nude-light to-ivory-3','from-ivory-3 to-nude','from-ivory-2 to-nude'][i % 9],
}))

export function LookbookClient() {
  const [selected, setSelected] = useState<typeof LOOKS[0] | null>(null)

  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">

      {/* Header */}
      <div className="container-xl text-center mb-20">
        <motion.p initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.9 }} className="label mb-5">Campaign I</motion.p>
        <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:1.2, delay:0.1, ease:[0.16,1,0.3,1] }}
          className="font-display font-light text-5xl md:text-7xl text-onyx mb-6 leading-tight">
          Lookbook
        </motion.h1>
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.3 }}
          className="body-copy max-w-md mx-auto text-sm leading-loose">
          An introduction. Nine pieces. One vision. Click any image to explore.
        </motion.p>
      </div>

      {/* Masonry grid */}
      <div className="container-xl">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {LOOKS.map((look, i) => (
            <FadeUp key={look.id} delay={i * 0.06} className="break-inside-avoid">
              <button
                onClick={() => setSelected(look)}
                className="group relative w-full overflow-hidden block"
                style={{ aspectRatio: [3,4,3,4,3,4,3,4,3][i % 9] === 3 ? '3/4' : '4/5' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${look.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/4 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/28 transition-all duration-600 flex flex-col items-center justify-center">
                  <p className="font-display text-3xl font-light italic text-ivory opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                    {look.title}
                  </p>
                  <p className="font-body text-[9px] tracking-ultra uppercase text-ivory/70 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    {look.subtitle}
                  </p>
                </div>
              </button>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Instagram CTA */}
      <div className="container-lg mt-24 text-center">
        <FadeUp>
          <p className="body-copy text-sm mb-8 leading-loose max-w-sm mx-auto">
            Follow our journey for exclusive content, behind-the-scenes moments, and campaign previews.
          </p>
          <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Follow @hoor.ind
          </a>
        </FadeUp>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            transition={{ duration:0.4 }}
            className="fixed inset-0 z-50 bg-onyx/92 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}>
            <motion.div initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }}
              exit={{ scale:0.9, opacity:0 }} transition={{ duration:0.5, ease:[0.16,1,0.3,1] }}
              className="relative max-w-lg w-full aspect-[3/4]"
              onClick={e => e.stopPropagation()}>
              <div className={`absolute inset-0 bg-gradient-to-br ${selected.gradient}`} />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-onyx/50 to-transparent">
                <p className="font-display text-2xl font-light italic text-ivory mb-1">{selected.title}</p>
                <p className="label text-ivory/60">{selected.subtitle}</p>
              </div>
              <button onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 border border-ivory/20 flex items-center justify-center text-ivory/50 hover:text-ivory hover:border-ivory/50 transition-all duration-300 font-body text-sm">
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
