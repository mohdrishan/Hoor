'use client'
import { motion } from 'framer-motion'

const items = [
  'Subtle Luxury','✦','Graceful Silhouettes','✦','Timeless Modest Fashion',
  '✦','Elegance in Modesty','✦','Premium Abayas','✦','Crafted for Grace',
  '✦','Luxury Abaya House','✦','Mangalore, India','✦',
]

export function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="relative bg-onyx py-[14px] overflow-hidden">
      <div className="absolute inset-x-0 top-0    h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
        className="flex whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className={`mx-5 font-body text-[9px] tracking-ultra uppercase inline-block ${
            item === '✦' ? 'text-gold' : 'text-ivory/40'
          }`}>{item}</span>
        ))}
      </motion.div>
    </div>
  )
}
