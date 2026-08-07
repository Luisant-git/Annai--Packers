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

        <div className="mt-16">
          <div className="-mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 items-start text-center">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = getIcon(step.icon)
                return (
                  <div
                    key={step.step}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="flex flex-col items-center gap-5"
                  >
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-accent-400 shadow-soft sm:h-24 sm:w-24">
                      <span className="absolute -right-1.5 -top-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-[11px] font-bold text-white ring-4 ring-brand-900">
                        {step.step}
                      </span>
                      <Icon size={32} strokeWidth={1.6} />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                    <p className="max-w-xs text-sm leading-relaxed text-brand-200">{step.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
