import React from 'react'

const ITEMS = [
  'Subtle Luxury','✦','Graceful Silhouettes','✦','Timeless Modest Fashion',
  '✦','Elegance in Modesty','✦','Premium Abayas','✦','Crafted for Grace',
  '✦','Luxury Abaya House','✦','Mangalore, India','✦',
]

// Pure CSS animation — no JS, no framer-motion, no re-renders
export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="relative bg-onyx py-[14px] overflow-hidden">
      <div className="absolute inset-x-0 top-0    h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 32s linear infinite', willChange: 'transform' }}>
        {doubled.map((item, i) => (
          <span key={i} className={`mx-5 font-body text-[9px] tracking-ultra uppercase inline-block ${
            item === '✦' ? 'text-gold' : 'text-ivory/40'
          }`}>{item}</span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
