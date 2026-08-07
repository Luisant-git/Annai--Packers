import SeoHead from '@/components/seo/SeoHead'
import PageHero from '@/components/common/PageHero'
import ServiceCard from '@/components/services/ServiceCard'
import CtaBand from '@/components/home/CtaBand'
import { SERVICES } from '@/data/services'

export default function Services() {
  return (
    <>
      <SeoHead
        title="Services"
        description="Explore Annai Packers & Movers' full range of services: household shifting, office relocation, vehicle transport, warehousing and more."
      />
      <PageHero
        title="Our Services"
        subtitle="Complete moving and logistics solutions tailored to your needs."
        breadcrumb={[{ label: 'Services' }]}
        compact
      />

      <section className="py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
