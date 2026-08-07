import { getIcon } from '@/utils/iconMap'

export default function ServiceCard({ service, index = 0 }) {
  const Icon = getIcon(service.icon)

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
      className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white shadow-soft transition-shadow duration-300 hover:shadow-card"
    >
      <div className="h-44 w-full shrink-0 overflow-hidden rounded-t-2xl">
        {service.coverImage ? (
          <img
            src={service.coverImage}
            alt={service.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100">
            <Icon size={40} className="text-brand-300" strokeWidth={1.5} />
          </div>
        )}
      </div>

      <span className="relative z-10 -mt-6 ml-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-500 text-white shadow-lg ring-4 ring-white">
        <Icon size={20} />
      </span>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-3">
        <h3 className="text-lg font-semibold text-brand-900">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-700/80">{service.shortDesc}</p>
      </div>
    </div>
  )
}
