import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getIcon } from '@/utils/iconMap'

export default function ServiceCard({ service, index = 0 }) {
  const Icon = getIcon(service.icon)

  return (
    <Link
      to={`/services/${service.slug}`}
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
      className="group flex flex-col rounded-2xl border border-brand-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
        <Icon size={26} />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-brand-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-700/80">{service.shortDesc}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-600">
        Learn more
        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
