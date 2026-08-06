import SeoHead from '@/components/seo/SeoHead'
import PageHero from '@/components/common/PageHero'
import TestimonialCard from '@/components/testimonials/TestimonialCard'
import CtaBand from '@/components/home/CtaBand'
import { TESTIMONIALS } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <>
      <SeoHead
        title="Testimonials"
        description="Read what customers say about their moving experience with Annai Packers & Movers."
      />
      <PageHero
        title="Customer Testimonials"
        subtitle="Real stories from families and businesses we've helped relocate."
        breadcrumb={[{ label: 'Testimonials' }]}
      />

      <section className="py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
