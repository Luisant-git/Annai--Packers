import { SERVICES } from '@/data/services'
import SectionHeading from '@/components/common/SectionHeading'
import ServiceCard from '@/components/services/ServiceCard'
import Button from '@/components/common/Button'

export default function ServicesGrid() {
  return (
    <section className="bg-brand-50/50 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Offer"
          title="Comprehensive Moving & Logistics Services"
          description="From a single room to an entire office, our end-to-end solutions are tailored to move anything, anywhere, safely."
        />

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center" data-aos="fade-up">
          <Button to="/services" variant="ghost">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
