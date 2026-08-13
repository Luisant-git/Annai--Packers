import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import SeoHead from '@/components/seo/SeoHead'
import PageHero from '@/components/common/PageHero'
import ContactForm from '@/components/forms/ContactForm'
import QuoteForm from '@/components/forms/QuoteForm'
import { COMPANY } from '@/utils/constants'
import { getContactHref, isWaMe } from '@/utils/contactLinks'

const INFO_CARDS = [
  { icon: MapPin, label: 'Address', value: COMPANY.address },
  { icon: Phone, label: 'Phone', values: COMPANY.phones },
  { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: Clock, label: 'Working Hours', value: COMPANY.hours },
]

export default function Contact() {
  const [tab, setTab] = useState('enquiry')

  return (
    <>
      <SeoHead
        title="Contact Us"
        description="Get in touch with Annai Packers & Movers for enquiries or a free moving quote. We respond within 24 hours."
      />
      <PageHero
        title="Contact Us"
        subtitle="Have a question or ready to move? We're here to help."
        breadcrumb={[{ label: 'Contact Us' }]}
        compact
      />

      <section className="py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2" data-aos="fade-right">
            <div className="space-y-5">
              {INFO_CARDS.map((card) => (
                <div key={card.label} className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-white p-6 shadow-soft">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <card.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">{card.label}</p>
                    {card.values ? (
                      <div className="mt-1 flex flex-col gap-0.5">
                        {card.values.map((p) => {
                          const href = getContactHref(p.raw)
                          return (
                            <a
                              key={p.raw}
                              href={href}
                              className="text-sm font-medium text-brand-900 hover:text-accent-600"
                              {...(isWaMe(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            >
                              {p.display}
                            </a>
                          )
                        })}
                      </div>
                    ) : card.href ? (
                      <a href={card.href} className="mt-1 block text-sm font-medium text-brand-900 hover:text-accent-600">
                        {card.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-brand-900">{card.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-brand-100 shadow-soft">
              <iframe
                title="Annai Packers & Movers Location"
                src={COMPANY.mapEmbedUrl}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={COMPANY.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-t border-brand-100 bg-white py-3 text-sm font-medium text-brand-900 transition-colors hover:text-accent-600"
              >
                <ExternalLink size={15} /> Open in Google Maps
              </a>
            </div>
          </div>

          <div className="lg:col-span-3" data-aos="fade-left">
            <div className="rounded-2xl border border-brand-100 bg-white p-8 shadow-soft">
              <div className="mb-8 flex gap-2 rounded-full bg-brand-50 p-1.5">
                <button
                  onClick={() => setTab('enquiry')}
                  className={`flex-1 rounded-full py-3 text-sm font-semibold transition-colors ${
                    tab === 'enquiry' ? 'bg-brand-900 text-white' : 'text-brand-700'
                  }`}
                >
                  Send Enquiry
                </button>
                <button
                  onClick={() => setTab('quote')}
                  className={`flex-1 rounded-full py-3 text-sm font-semibold transition-colors ${
                    tab === 'quote' ? 'bg-brand-900 text-white' : 'text-brand-700'
                  }`}
                >
                  Request a Quote
                </button>
              </div>

              {tab === 'enquiry' ? <ContactForm /> : <QuoteForm />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
