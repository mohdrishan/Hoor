'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'

export function Hero() {
  const ref  = useRef<HTMLElement>(null)
  const cvs  = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Only apply parallax on desktop to avoid mobile jank
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Canvas: throttled to 30fps, fewer particles, skip on mobile
  useEffect(() => {
    const canvas = cvs.current
    if (!canvas) return

    // Skip canvas on mobile/low-end saves ~60% CPU
    if (window.innerWidth < 768) return

    const ctx = canvas.getContext('2d')!
    let af: number
    let t = 0
    let lastFrame = 0
    const TARGET_FPS = 30
    const FRAME_MS   = 1000 / TARGET_FPS

    const resize = () => {
      // Draw at half resolution, scale up halves GPU fill rate
      const dpr = Math.min(window.devicePixelRatio, 1.5)
      canvas.width  = window.innerWidth  * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width  = window.innerWidth  + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(dpr, dpr)
    }
    resize()

    let rTimeout: ReturnType<typeof setTimeout>
    const onResize = () => { clearTimeout(rTimeout); rTimeout = setTimeout(resize, 200) }
    window.addEventListener('resize', onResize, { passive: true })

    // Fewer particles for performance
    const pts = Array.from({ length: 28 }, () => ({
      x: Math.random(), y: Math.random(),
      sx: (Math.random() - 0.5) * 0.00025,
      sy: (Math.random() - 0.5) * 0.00025,
      r:  Math.random() * 1.1 + 0.3,
      o:  Math.random() * 0.22 + 0.05,
    }))

    const draw = (now: number) => {
      af = requestAnimationFrame(draw)

      // Throttle to TARGET_FPS
      if (now - lastFrame < FRAME_MS) return
      lastFrame = now

      const W = window.innerWidth
      const H = window.innerHeight
      ctx.clearRect(0, 0, W, H)
      t += 0.004

      // Two ambient gradients (was 3 reduced fill calls)
      ;[
        [0.22 + Math.sin(t * 0.6) * 0.12, 0.38 + Math.cos(t * 0.45) * 0.08, 0.055],
        [0.74 + Math.cos(t * 0.5) * 0.12, 0.64 + Math.sin(t * 0.35) * 0.09, 0.038],
      ].forEach(([cx, cy, a]) => {
        const g = ctx.createRadialGradient(cx*W, cy*H, 0, W*0.5, H*0.5, W*0.7)
        g.addColorStop(0, `rgba(184,150,90,${a})`)
        g.addColorStop(1, 'rgba(248,244,238,0)')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, W, H)
      })

      // 3 silk lines (was 5)
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        // Larger step = fewer points computed per line (8px vs 5px)
        for (let x = 0; x <= W; x += 8) {
          const y = H * (0.25 + i * 0.18) +
            Math.sin(x * 0.002 + t * (0.8 + i * 0.2)) * 26 +
            Math.sin(x * 0.005 + t * 0.4) * 12
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        const a = 0.038 - i * 0.008
        const lg = ctx.createLinearGradient(0, 0, W, 0)
        lg.addColorStop(0,    'rgba(184,150,90,0)')
        lg.addColorStop(0.3,  `rgba(184,150,90,${a})`)
        lg.addColorStop(0.7,  `rgba(212,173,111,${a * 1.2})`)
        lg.addColorStop(1,    'rgba(184,150,90,0)')
        ctx.strokeStyle = lg
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Particles batch all as one path per opacity level (reduces state changes)
      pts.forEach(p => {
        p.x = ((p.x + p.sx) + 1) % 1
        p.y = ((p.y + p.sy) + 1) % 1
        const alpha = p.o * (0.5 + Math.sin(t * 1.6 + p.x * 6) * 0.5)
        ctx.beginPath()
        ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(184,150,90,${alpha.toFixed(2)})`
        ctx.fill()
      })
    }

    af = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(af)
      clearTimeout(rTimeout)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory">

      {/* Canvas desktop only, throttled to 30fps */}
      <canvas ref={cvs}
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
        style={{ opacity: 0.8 }}
        aria-hidden="true"
      />

      {/* Static fallback gradient for mobile */}
      <div className="absolute inset-0 md:hidden"
        style={{ background: 'radial-gradient(ellipse at 30% 40%, rgba(184,150,90,0.07) 0%, transparent 60%), radial-gradient(ellipse at 70% 65%, rgba(184,150,90,0.05) 0%, transparent 55%)' }} />

      {/* Architectural guide lines */}
      <div className="absolute inset-y-0 left-[7%]  w-px bg-gradient-to-b from-transparent via-gold/12 to-transparent hidden xl:block" />
      <div className="absolute inset-y-0 right-[7%] w-px bg-gradient-to-b from-transparent via-gold/12 to-transparent hidden xl:block" />

      {/* Hero image replace /images/hero.jpg to activate */}
      <HeroImage />

      {/* Content parallax only on desktop */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto will-change-transform"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="label mb-10 tracking-[0.35em]"
        >
          {BRAND.location} &nbsp;·&nbsp; Luxury Abaya House
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }} animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.25, ease }}
          className="flex justify-center mb-10"
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <Image src="/images/logo.png" alt="HOOR" fill className="object-contain" priority />
          </div>
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 110 }} animate={ready ? { y: 0 } : {}}
            transition={{ duration: 1.3, delay: 0.4, ease }}
            className="font-display font-light text-onyx leading-none tracking-tight"
            style={{ fontSize: 'clamp(4.5rem, 11vw, 9.5rem)' }}
          >
            Elegance
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-12">
          <motion.div
            initial={{ y: 80 }} animate={ready ? { y: 0 } : {}}
            transition={{ duration: 1.3, delay: 0.55, ease }}
            className="flex items-center justify-center gap-5"
          >
            <span className="hidden sm:block w-10 h-px bg-gold/50" />
            <span className="font-display font-light italic text-gold"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}>
              in Modesty
            </span>
            <span className="hidden sm:block w-10 h-px bg-gold/50" />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.82, ease }}
          className="font-body font-light text-sm md:text-base text-warm-mid tracking-wide max-w-sm mx-auto mb-14 leading-loose"
        >
          {BRAND.subTagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.0, ease }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/collection" className="btn-primary">
            Shop Collection
            <span className="w-4 h-px bg-current" />
          </Link>
          <Link href="/about" className="btn-outline">Explore Story</Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="label text-[8px] tracking-[0.35em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-ivory to-transparent pointer-events-none" />
    </section>
  )
}

function HeroImage() {
  // Renders nothing if the file doesn't exist yet no 404 noise in console.
  // Add /public/images/hero.jpg to activate.
  const [exists, setExists] = React.useState(true)
  if (!exists) return (
    <div className="absolute inset-0 bg-gradient-to-b from-ivory/55 via-ivory/25 to-ivory" />
  )
  return (
    <div className="absolute inset-0">
      <Image
        src="/images/hero.jpg"
        alt="HOOR Luxury Abaya"
        fill priority sizes="100vw"
        className="object-cover object-top opacity-[0.13]"
        onError={() => setExists(false)}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/55 via-ivory/25 to-ivory" />
      <div className="absolute inset-0 bg-gradient-to-r from-ivory/35 via-transparent to-ivory/35" />
    </div>
  )
}
