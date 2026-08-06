import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ title, subtitle, breadcrumb = [] }) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-800/40 via-brand-950 to-brand-950" />
      <div className="container-page relative">
        <div data-aos="fade-up" className="flex flex-col items-center text-center">
          <nav className="mb-4 flex items-center gap-1.5 text-sm text-brand-300">
            <Link to="/" className="transition-colors hover:text-accent-400">
              Home
            </Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                <ChevronRight size={14} />
                {crumb.path ? (
                  <Link to={crumb.path} className="transition-colors hover:text-accent-400">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-accent-400">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-xl text-brand-100">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
