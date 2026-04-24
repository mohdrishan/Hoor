'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, BRAND } from '@/lib/constants'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const left  = NAV_LINKS.slice(0, 2)
  const right = NAV_LINKS.slice(2)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled ? 'py-3 bg-ivory/95 backdrop-blur-md border-b border-onyx/5' : 'py-5'
        }`}
      >
        <div className="container-xl flex items-center justify-between">
          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-10 w-1/3">
            {left.map(l => <NavLink key={l.href} {...l} active={pathname === l.href} />)}
          </nav>

          {/* Logo center */}
          <div className="flex justify-center lg:w-1/3">
            <Link href="/" aria-label="HOOR Home" className="group">
              <div className="relative w-14 h-14 lg:w-[60px] lg:h-[60px] transition-transform duration-700 group-hover:scale-105">
                <Image src="/images/logo.png" alt="HOOR" fill className="object-contain" priority />
              </div>
            </Link>
          </div>

          {/* Right nav */}
          <nav className="hidden lg:flex items-center justify-end gap-10 w-1/3">
            {right.map(l => <NavLink key={l.href} {...l} active={pathname === l.href} />)}
          </nav>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
            className="lg:hidden flex flex-col gap-[5px] p-2 z-50">
            <motion.span animate={open ? { rotate: 45, y: 6 }  : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-onyx origin-center" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-onyx" />
            <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-onyx origin-center" />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-ivory/98 backdrop-blur-sm flex flex-col items-center justify-center">
            {NAV_LINKS.map(({ href, label }, i) => (
              <motion.div key={href}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <Link href={href}
                  className={`block font-display text-5xl font-light py-2 transition-colors duration-300 ${
                    pathname === href ? 'text-gold' : 'text-onyx hover:text-gold'
                  }`}>
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="absolute bottom-10 label text-gold/60">
              {BRAND.instagramHandle}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href}
      className={`relative font-body text-[10px] tracking-ultra uppercase transition-colors duration-300 group ${
        active ? 'text-gold' : 'text-onyx/60 hover:text-onyx'
      }`}>
      {label}
      <span className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-500 ${
        active ? 'w-full' : 'w-0 group-hover:w-full'
      }`} />
    </Link>
  )
}
