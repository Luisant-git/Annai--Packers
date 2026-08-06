import SeoHead from '@/components/seo/SeoHead'
import PageHero from '@/components/common/PageHero'
import { COMPANY } from '@/utils/constants'

export default function TermsOfService() {
  return (
    <>
      <SeoHead title="Terms of Service" description="Read the terms of service for using Annai Packers & Movers." />
      <PageHero title="Terms of Service" breadcrumb={[{ label: 'Terms of Service' }]} />

      <section className="py-24">
        <div className="container-page mx-auto max-w-3xl space-y-8 text-brand-700/80" data-aos="fade-up">
          <p className="text-sm text-brand-500">Last updated: January 2026</p>

          <div>
            <h2 className="text-xl font-bold text-brand-900">1. Acceptance of Terms</h2>
            <p className="mt-3 leading-relaxed">
              By accessing this website or engaging {COMPANY.name} for packing, moving, or logistics
              services, you agree to be bound by these Terms of Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-900">2. Quotes & Estimates</h2>
            <p className="mt-3 leading-relaxed">
              Quotes provided through our website or by our team are estimates based on the information
              you supply. Final pricing is confirmed after a survey of the actual items and distance
              involved.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-900">3. Booking & Cancellation</h2>
            <p className="mt-3 leading-relaxed">
              Bookings are confirmed upon written or verbal agreement of the scope, date and price.
              Cancellations should be communicated as early as possible; cancellation charges may apply
              closer to the scheduled move date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-900">4. Customer Responsibilities</h2>
            <p className="mt-3 leading-relaxed">
              Customers are responsible for providing accurate inventory details, ensuring valuables and
              prohibited items are disclosed in advance, and being present or represented during pickup
              and delivery.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-900">5. Liability & Insurance</h2>
            <p className="mt-3 leading-relaxed">
              While all shipments are handled with utmost care and covered under our insurance policy,
              liability for loss or damage is limited to the terms specified in the service agreement
              signed at the time of booking.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-900">6. Prohibited Items</h2>
            <p className="mt-3 leading-relaxed">
              We do not transport hazardous, illegal, perishable or flammable items. A full list of
              restricted items will be shared during the survey process.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-900">7. Governing Law</h2>
            <p className="mt-3 leading-relaxed">
              These terms are governed by the laws of India. Any disputes shall be subject to the
              exclusive jurisdiction of the courts where {COMPANY.name} is registered.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-900">8. Contact Us</h2>
            <p className="mt-3 leading-relaxed">
              For questions about these Terms of Service, reach out to us at{' '}
              <a href={`mailto:${COMPANY.email}`} className="font-medium text-accent-600 hover:underline">
                {COMPANY.email}
              </a>{' '}
              or {COMPANY.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
