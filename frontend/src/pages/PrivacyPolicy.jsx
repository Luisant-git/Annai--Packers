import SeoHead from '@/components/seo/SeoHead'
import PageHero from '@/components/common/PageHero'
import { COMPANY } from '@/utils/constants'

export default function PrivacyPolicy() {
  return (
    <>
      <SeoHead title="Privacy Policy" description="Read the privacy policy of Annai Packers & Movers." />
      <PageHero title="Privacy Policy" breadcrumb={[{ label: 'Privacy Policy' }]} />

      <section className="py-24">
        <div className="container-page mx-auto max-w-3xl space-y-8 text-brand-700/80" data-aos="fade-up">
          <p className="text-sm text-brand-500">Last updated: January 2026</p>

          <div>
            <h2 className="text-xl font-bold text-brand-900">1. Information We Collect</h2>
            <p className="mt-3 leading-relaxed">
              When you submit an enquiry or request a quote through our website, we collect information
              such as your name, email address, phone number, pickup and destination addresses, and any
              additional details you provide about your move.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-900">2. How We Use Your Information</h2>
            <p className="mt-3 leading-relaxed">
              We use the information you provide solely to respond to your enquiry, prepare accurate
              moving quotes, coordinate your relocation, and send relevant service updates. We do not
              sell or rent your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-900">3. Data Security</h2>
            <p className="mt-3 leading-relaxed">
              We implement reasonable technical and organisational measures to protect your personal
              data against unauthorised access, alteration, disclosure or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-900">4. Cookies</h2>
            <p className="mt-3 leading-relaxed">
              Our website may use cookies to improve browsing experience and analyse site traffic. You
              can disable cookies through your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-900">5. Third-Party Services</h2>
            <p className="mt-3 leading-relaxed">
              We may use trusted third-party services (such as email delivery providers) to process
              enquiries and quote requests. These providers are bound by confidentiality obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-900">6. Your Rights</h2>
            <p className="mt-3 leading-relaxed">
              You may request access to, correction of, or deletion of your personal data at any time by
              contacting us at{' '}
              <a href={`mailto:${COMPANY.email}`} className="font-medium text-accent-600 hover:underline">
                {COMPANY.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-900">7. Changes to This Policy</h2>
            <p className="mt-3 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with a revised "last updated" date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-900">8. Contact Us</h2>
            <p className="mt-3 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at {COMPANY.address}{' '}
              or call {COMPANY.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
