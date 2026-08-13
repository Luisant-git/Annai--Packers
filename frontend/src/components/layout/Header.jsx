import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, PhoneCall, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { COMPANY, NAV_LINKS } from '@/utils/constants'
import { getContactHref, isWaMe } from '@/utils/contactLinks'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/common/SocialIcons'
import Button from '@/components/common/Button'
import logo from '@/assets/logo.webp'

const TOP_BAR_SOCIALS = [
  { key: 'facebook', Icon: FacebookIcon },
  { key: 'instagram', Icon: InstagramIcon },
  { key: 'linkedin', Icon: LinkedinIcon },
]

function TopContactBar() {
  return (
    <div className="hidden bg-brand-950 lg:block">
      <div className="container-page flex h-10 items-center justify-between text-xs text-brand-200">
        <div className="flex items-center gap-6">
          <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 transition-colors hover:text-accent-400">
            <Mail size={13} className="text-accent-400" />
            {COMPANY.email}
          </a>
          <div className="flex items-center gap-2">
            <Phone size={13} className="shrink-0 text-accent-400" />
            <a href={`tel:${COMPANY.phoneRaw}`} className="transition-colors hover:text-accent-400">
              {COMPANY.phone}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {TOP_BAR_SOCIALS.map(({ key, Icon }) => (
            <a
              key={key}
              href={COMPANY.social[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={key}
              className="text-brand-200 transition-colors hover:text-accent-400"
            >
              <Icon width={13} height={13} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <>
      <TopContactBar />
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-soft backdrop-blur' : 'bg-white'
        }`}
      >
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Annai Packers & Movers" className="h-11 w-auto sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-accent-500 ${
                  isActive ? 'text-accent-500' : 'text-brand-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Button to="/contact" size="sm" icon={PhoneCall} iconPosition="left">
            Get Quote
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-brand-100 bg-white lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 text-sm font-medium ${
                      isActive ? 'bg-accent-50 text-accent-600' : 'text-brand-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-3 flex flex-col gap-3">
                <a
                  href={getContactHref(COMPANY.phoneRaw)}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-brand-900 py-3 text-sm font-semibold text-brand-900"
                  {...(isWaMe(getContactHref(COMPANY.phoneRaw)) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Phone size={16} /> {COMPANY.phone}
                </a>
                <Button to="/contact" className="w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  )
}
