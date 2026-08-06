import { useParams, Link } from 'react-router-dom'
import { PhoneCall, CheckCircle2 } from 'lucide-react'
import SeoHead from '@/components/seo/SeoHead'
import PageHero from '@/components/common/PageHero'
import QuoteForm from '@/components/forms/QuoteForm'
import CtaBand from '@/components/home/CtaBand'
import NotFound from '@/pages/NotFound'
import { SERVICES, getServiceBySlug } from '@/data/services'
import { getIcon } from '@/utils/iconMap'
import { COMPANY } from '@/utils/constants'

export default function ServiceDetails() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <NotFound />

  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4)
  const Icon = getIcon(service.icon)

  return (
    <>
      <SeoHead title={service.title} description={service.shortDesc} image={service.coverImage} />
      <PageHero
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumb={[{ label: 'Services', path: '/services' }, { label: service.title }]}
      />

      <section className="py-24">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2" data-aos="fade-up">
            {service.coverImage && (
              <img
                src={service.coverImage}
                alt={service.title}
                className="mb-10 aspect-video w-full rounded-2xl object-cover shadow-card"
              />
            )}

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <Icon size={26} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-brand-900">Overview</h2>
            <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-brand-700/80">
              {service.description}
            </p>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft" data-aos="fade-left">
                <h3 className="text-lg font-semibold text-brand-900">Request a Quote</h3>
                <p className="mt-1 text-sm text-brand-700/80">
                  Get a free custom quote for {service.title.toLowerCase()}.
                </p>
                <div className="mt-5">
                  <QuoteForm compact defaultServiceType={service.title} />
                </div>
              </div>

              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center justify-center gap-2 rounded-2xl bg-brand-900 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
                data-aos="fade-left"
              >
                <PhoneCall size={16} /> Call {COMPANY.phone}
              </a>

              {relatedServices.length > 0 && (
                <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft" data-aos="fade-left">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-900">
                    Related Services
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {relatedServices.map((s) => (
                      <li key={s.id}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="flex items-center gap-2 text-sm text-brand-700 transition-colors hover:text-accent-600"
                        >
                          <CheckCircle2 size={15} className="text-accent-500" />
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
