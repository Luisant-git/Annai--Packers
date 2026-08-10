import SectionHeading from '@/components/common/SectionHeading'
import { WHY_CHOOSE_US } from '@/utils/constants'
import { getIcon } from '@/utils/iconMap'
import chooseUsImg from '@/assets/chooseus-img4.jpg'

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <div data-aos="fade-right">
          <div className="relative">
            <img
              src={chooseUsImg}
              alt="Annai Packers & Movers professional staff"
              className="aspect-[4/5] w-full max-w-md rounded-3xl object-cover shadow-card"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-6 shadow-card sm:-right-8">
              <p className="font-display text-3xl font-bold text-accent-500">12+</p>
              <p className="text-sm text-brand-700/60">Years of trusted service</p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built on Trust, Delivered with Care"
            description="We combine trained manpower, modern equipment and transparent processes to make every move stress-free."
            align="left"
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = getIcon(item.icon)
              return (
                <div key={item.title} data-aos="fade-up" data-aos-delay={i * 80} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-900">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-brand-700/80">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
