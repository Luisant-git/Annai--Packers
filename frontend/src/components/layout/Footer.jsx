import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { COMPANY, FOOTER_LINKS, SERVICE_TYPES } from '@/utils/constants'
import { getContactHref, isWaMe } from '@/utils/contactLinks'
import logoDark from '@/assets/logo-dark.webp'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="container-page grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logoDark} alt="Annai Packers & Movers" className="h-11 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-brand-200">
            {COMPANY.tagline} Trusted packing and moving partner for households and businesses across the
            country, delivering safe and on-time relocations since {COMPANY.founded}.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-brand-200">
            {SERVICE_TYPES.slice(0, 6).map((s) => (
              <li key={s}>
                <Link to="/services" className="transition-colors hover:text-accent-400">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-brand-200">
            {FOOTER_LINKS.company.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition-colors hover:text-accent-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-200">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent-400" />
              <span>{COMPANY.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-accent-400" />
              <span className="flex flex-col gap-1">
                {COMPANY.phones.map((p) => {
                  const href = getContactHref(p.raw)
                  return (
                    <a
                      key={p.raw}
                      href={href}
                      className="hover:text-accent-400"
                      {...(isWaMe(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {p.display}
                    </a>
                  )
                })}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-accent-400" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-accent-400">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={16} className="shrink-0 text-accent-400" />
              <span>{COMPANY.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-brand-300 sm:flex-row">
          <p>
            &copy; {year} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-accent-400">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
