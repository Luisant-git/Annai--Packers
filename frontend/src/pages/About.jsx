import { Target, Eye, HeartHandshake } from 'lucide-react'
import SeoHead from '@/components/seo/SeoHead'
import PageHero from '@/components/common/PageHero'
import SectionHeading from '@/components/common/SectionHeading'
import TrustBar from '@/components/home/TrustBar'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import CtaBand from '@/components/home/CtaBand'
import { COMPANY } from '@/utils/constants'
import storyImg from '@/assets/hero-banner2.webp'

const VALUES = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To deliver safe, transparent and affordable relocation services that give every customer complete peace of mind.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: "To be India's most trusted packing and moving brand, recognised for reliability and customer-first service.",
  },
  {
    icon: HeartHandshake,
    title: 'Our Values',
    desc: 'Integrity, care and accountability guide every move — from the first enquiry to final delivery.',
  },
]

export default function About() {
  return (
    <>
      <SeoHead
        title="About Us"
        description="Learn about Annai Packers & Movers — our story, mission and the trained team behind thousands of safe relocations."
      />
      <PageHero
        title="About Annai Packers & Movers"
        subtitle="Fifteen years of building trust, one move at a time."
        breadcrumb={[{ label: 'About Us' }]}
        compact
      />

      <section className="py-24">
        <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div data-aos="fade-right">
            <img
              src={storyImg}
              alt="Annai Packers & Movers team at work"
              className="w-full rounded-3xl object-cover shadow-card"
            />
          </div>
          <div data-aos="fade-left">
            <SectionHeading
              eyebrow="Our Story"
              title="A Relocation Partner You Can Rely On"
              align="left"
            />
            <p className="mt-6 text-base leading-relaxed text-brand-700/80">
              Founded in {COMPANY.founded}, {COMPANY.name} began with a simple goal: make moving less
              stressful. What started as a small local packing service has grown into a full-scale
              logistics company serving households and businesses across the country.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-700/80">
              Today, our trained crews, modern fleet and dedicated support team handle everything from
              single-room shifts to large-scale office relocations and international moves &mdash; always
              with the same commitment to safety and transparency that we started with.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-50/50 py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Mission, Vision & Values"
            description="The principles that shape how we work with every customer, every single day."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="rounded-2xl border border-brand-100 bg-white p-8 text-center shadow-soft"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                  <v.icon size={26} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-700/80">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />
      <WhyChooseUs />
      <CtaBand />
    </>
  )
}
