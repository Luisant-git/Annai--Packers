import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from '@/components/common/SocialIcons'
import { COMPANY, FOOTER_LINKS, SERVICE_TYPES } from '@/utils/constants'
import logoDark from '@/assets/logo-dark.webp'

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="container-page grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logoDark} alt="Annai Packers & Movers" className="h-11 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-brand-200">
            {COMPANY.tagline} Trusted packing and moving partner for households and businesses across the
            country, delivering safe and on-time relocations since {COMPANY.founded}.
          </p>
          <a
            href={COMPANY.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
          >
            <div className="flex items-center gap-0.5 text-accent-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="fill-current" />
              ))}
            </div>
            <div className="text-xs leading-tight">
              <p className="font-semibold text-white">{COMPANY.googleRating} / 5 on Google</p>
              <p className="text-brand-300">View us on Google &rarr;</p>
            </div>
          </a>

          <div className="mt-5 flex gap-3">
            {Object.entries(COMPANY.social).map(([key, url]) => {
              const Icon = SOCIAL_ICONS[key]
              if (!Icon) return null
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500"
                >
                  <Icon width={16} height={16} />
                </a>
              )
            })}
          </div>
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
            {FOOTER_LINKS.legal.map((link) => (
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
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-accent-400" />
              <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-accent-400">
                {COMPANY.phone}
              </a>
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
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-300 sm:flex-row">
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
