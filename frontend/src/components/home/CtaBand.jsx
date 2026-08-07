import { PhoneCall } from 'lucide-react'
import Button from '@/components/common/Button'
import { COMPANY } from '@/utils/constants'
import { getContactHref, isWaMe } from '@/utils/contactLinks'

export default function CtaBand() {
  return (
    <section className="bg-brand-900 py-16">
      <div
        className="container-page flex flex-col items-center justify-between gap-8 rounded-3xl bg-gradient-to-r from-brand-800 to-brand-700 px-8 py-12 text-center lg:flex-row lg:text-left"
        data-aos="fade-up"
      >
        <div>
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Ready to Plan Your Move?
          </h3>
          <p className="mt-2 max-w-lg text-brand-100">
            Get a free, no-obligation quote from our team today and experience a stress-free relocation.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button to="/contact" size="lg">
            Get Free Quote
          </Button>
          <Button
            href={getContactHref(COMPANY.phoneRaw)}
            variant="outline"
            size="lg"
            icon={PhoneCall}
            iconPosition="left"
            {...(isWaMe(getContactHref(COMPANY.phoneRaw)) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            Call Us Now
          </Button>
        </div>
      </div>
    </section>
  )
}
