import dynamic from 'next/dynamic'
import { Hero }                from '@/components/sections/Hero'
import { Marquee }             from '@/components/sections/Marquee'
import { FeaturedCollections } from '@/components/sections/FeaturedCollections'
import { NewArrivals }         from '@/components/sections/NewArrivals'

// Lazy-load below-fold sections for faster initial render
const Essence          = dynamic(() => import('@/components/sections/Essence').then(m => ({ default: m.Essence })))
const AbayanTypes      = dynamic(() => import('@/components/sections/AbayanTypes').then(m => ({ default: m.AbayanTypes })))
const BrandStory       = dynamic(() => import('@/components/sections/BrandStory').then(m => ({ default: m.BrandStory })))
const WhyHoor          = dynamic(() => import('@/components/sections/WhyHoor').then(m => ({ default: m.WhyHoor })))
const Testimonials     = dynamic(() => import('@/components/sections/Testimonials').then(m => ({ default: m.Testimonials })))
const InstagramSection = dynamic(() => import('@/components/sections/InstagramSection').then(m => ({ default: m.InstagramSection })))

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedCollections />
      <NewArrivals />
      <Essence />
      <AbayanTypes />
      <BrandStory />
      <WhyHoor />
      <Testimonials />
      <InstagramSection />
    </>
  )
}
