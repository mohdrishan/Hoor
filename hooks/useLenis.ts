'use client'
import { useEffect } from 'react'

export function useLenis() {
  // Lenis disabled — causes jank when canvas + Framer Motion run simultaneously.
  // Native scroll is used. Re-enable only after removing canvas animation.
  useEffect(() => {}, [])
}
