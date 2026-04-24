'use client'
import Link from 'next/link'
import { FadeUp } from '@/components/animations/FadeUp'
import { BRAND } from '@/lib/constants'

export function NewsletterCTA() {
  return (
    <section className="section-pad bg-onyx relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center">
        <p className="font-display font-light text-[32vw] text-ivory/[0.016] leading-none">H</p>
      </div>
      <div className="absolute inset-x-10 inset-y-8 border border-gold/6 pointer-events-none hidden lg:block" />

      <div className="container-xl relative text-center max-w-2xl mx-auto">
        <FadeUp>
          <p className="label text-gold mb-5">Be the First to Know</p>
          <h2 className="heading-xl text-ivory mb-6">
            HOOR is<br />
            <em className="italic text-gold">Arriving Soon</em>
          </h2>
          <p className="body-copy text-ivory/40 text-sm leading-loose mb-10 max-w-sm mx-auto">
            Follow us on Instagram for first looks and launch updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="btn-gold-solid">
              <IgIcon /> Follow @hoor.ind
            </a>
            <Link href="/contact" className="inline-flex items-center gap-3 border border-ivory/15 text-ivory/60 font-body text-[10px] tracking-ultra uppercase px-9 py-[14px] hover:border-gold hover:text-gold transition-all duration-500">
              Send Enquiry
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.3} className="mt-20 flex items-center justify-center gap-5">
          <div className="w-16 h-px bg-gold/15" />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 0L8.2 4.8L13 7L8.2 9.2L7 14L5.8 9.2L1 7L5.8 4.8L7 0Z" fill="#B8965A" fillOpacity="0.4"/>
          </svg>
          <div className="w-16 h-px bg-gold/15" />
        </FadeUp>
      </div>
    </section>
  )
}

function IgIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
}
