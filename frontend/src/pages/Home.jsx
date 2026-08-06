import SeoHead from '@/components/seo/SeoHead'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import ServicesGrid from '@/components/home/ServicesGrid'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ProcessSteps from '@/components/home/ProcessSteps'
import TrustMarquee from '@/components/home/TrustMarquee'
import GalleryPreview from '@/components/home/GalleryPreview'
import CtaBand from '@/components/home/CtaBand'

export default function Home() {
  return (
    <>
      <SeoHead
        title="Home"
        description="Annai Packers & Movers offers professional household shifting, office relocation, vehicle transportation, warehousing and international moving services."
      />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSteps />
      <TrustMarquee />
      <GalleryPreview />
      <CtaBand />
    </>
  )
}
