import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import bannerBg from '@/assets/hero-banner1.webp'

export default function PageHero({ title, subtitle, breadcrumb = [], compact = false }) {
  return (
    <section
      className={`relative overflow-hidden bg-brand-950 ${compact ? 'py-12 sm:py-14' : 'py-20 sm:py-24'}`}
    >
      {compact ? (
        <div className="absolute inset-0">
          <img src={bannerBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-brand-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-800/40 via-brand-950 to-brand-950" />
      )}
      <div className="container-page relative">
        <div data-aos="fade-up" className="flex flex-col items-center text-center">
          <nav
            className={`flex items-center text-brand-300 ${
              compact ? 'mb-2 gap-1 text-xs' : 'mb-4 gap-1.5 text-sm'
            }`}
          >
            <Link to="/" className="transition-colors hover:text-accent-400">
              Home
            </Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.label} className={`flex items-center ${compact ? 'gap-1' : 'gap-1.5'}`}>
                <ChevronRight size={compact ? 11 : 14} />
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
          <h1
            className={`text-3xl font-bold text-white sm:text-4xl lg:text-5xl ${
              compact ? '[text-shadow:0_2px_16px_rgb(0_0_0_/_45%)]' : ''
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`max-w-xl text-brand-100 ${
                compact ? 'mt-3 text-sm [text-shadow:0_1px_8px_rgb(0_0_0_/_40%)]' : 'mt-4'
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
