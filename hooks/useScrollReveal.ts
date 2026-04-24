'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useScrollReveal(margin = '-60px') {
  const ref = useRef<HTMLDivElement>(null)
  // once:true means the observer disconnects after first trigger — zero ongoing cost
  const inView = useInView(ref, { once: true, margin: margin as `${number}px` })
  return { ref, inView }
}
