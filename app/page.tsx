import { Hero }                from '@/components/sections/Hero'
import { Marquee }             from '@/components/sections/Marquee'
import { FeaturedCollections } from '@/components/sections/FeaturedCollections'
import { NewArrivals }         from '@/components/sections/NewArrivals'
import { Essence }             from '@/components/sections/Essence'
import { AbayanTypes }         from '@/components/sections/AbayanTypes'
import { BrandStory }          from '@/components/sections/BrandStory'
import { WhyHoor }             from '@/components/sections/WhyHoor'
import { Testimonials }        from '@/components/sections/Testimonials'
import { InstagramSection }    from '@/components/sections/InstagramSection'
import { NewsletterCTA }       from '@/components/sections/NewsletterCTA'

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
      <NewsletterCTA />
    </>
  )
}
