import { motion } from 'framer-motion'
import SectionHeading from '@/components/common/SectionHeading'
import { PROCESS_STEPS } from '@/utils/constants'
import { getIcon } from '@/utils/iconMap'

export default function ProcessSteps() {
  return (
    <section className="bg-brand-900 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Move You, Step by Step"
          description="A streamlined process designed to remove the guesswork and stress from your relocation."
          light
        />

        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden h-20 lg:block">
            <div className="absolute left-0 right-0 top-1/2 mx-[calc(12.5%-12px)] h-px -translate-y-1/2 bg-white/10" />
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="absolute left-0 right-0 top-1/2 mx-[calc(12.5%-12px)] h-px -translate-y-1/2 origin-left bg-gradient-to-r from-accent-400 to-accent-200"
            />
          </div>

          {PROCESS_STEPS.map((step, i) => {
            const Icon = getIcon(step.icon)
            return (
              <div
                key={step.step}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="relative">
                  <span className="absolute -right-1.5 -top-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-[11px] font-bold text-white ring-4 ring-brand-900">
                    {step.step}
                  </span>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-accent-400">
                    <Icon size={30} strokeWidth={1.6} />
                  </div>
                </div>
                <h4 className="mt-5 text-lg font-semibold text-white">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-brand-200">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
