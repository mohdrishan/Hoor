'use client'
import Image from 'next/image'
import { FadeUp } from '@/components/animations/FadeUp'
import { BRAND } from '@/lib/constants'

// All 6 real collection photos — replace any file to update, zero code changes needed
const COLLECTION_IMAGES = [
  { src: '/collections/collection-01.jpg', alt: 'HOOR abayas hanging on rack — pastel collection' },
  { src: '/collections/collection-02.jpg', alt: 'HOOR abaya cuff embroidery detail — daisy and gold beads' },
  { src: '/collections/collection-03.jpg', alt: 'HOOR abayas — soft pastel drape' },
  { src: '/collections/collection-04.jpg', alt: 'HOOR abaya sleeves with embroidered cuffs' },
  { src: '/collections/collection-05.jpg', alt: 'HOOR abaya cuff details — flowers and pearls' },
  { src: '/collections/collection-06.jpg', alt: 'Blush Reverie — gold embroidered cuff close-up' },
]

export function InstagramSection() {
  return (
    <section className="section-pad-sm bg-ivory-2">
      <div className="container-xl">
        <FadeUp className="text-center mb-14">
          <p className="label mb-3">Follow the Journey</p>
          <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
            className="font-display text-4xl md:text-5xl font-light text-onyx hover:text-gold transition-colors duration-500 inline-flex items-center gap-4 group">
            {BRAND.instagramHandle}
            <span className="w-0 h-px bg-gold group-hover:w-16 transition-all duration-700" />
          </a>
        </FadeUp>

        {/* 6-cell grid — real photos */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5 mb-12">
          {COLLECTION_IMAGES.map((img, i) => (
            <a key={i} href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-ivory-3 block">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/25 transition-all duration-500 flex items-center justify-center">
                <svg className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-400 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        <FadeUp className="text-center">
          <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow on Instagram
          </a>
        </FadeUp>
      </div>
    </section>
  )
}
