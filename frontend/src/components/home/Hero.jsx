import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Clock, Users, Star, PhoneCall } from 'lucide-react'
import Button from '@/components/common/Button'
import heroBanner1 from '@/assets/hero-banner1.webp'
import heroBanner2 from '@/assets/hero-banner2.webp'
import heroBanner3 from '@/assets/hero-banner3.webp'
import { COMPANY } from '@/utils/constants'

const SLIDES = [heroBanner1, heroBanner2, heroBanner3]
const SLIDE_DURATION = 5000

const TRUST_INDICATORS = [
  { icon: ShieldCheck, label: 'Insured & Secure Packing' },
  { icon: Clock, label: 'On-Time Delivery' },
  { icon: Users, label: 'Expert Trained Team' },
  { icon: Star, label: '4.8★ Customer Rated' },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((v) => (v + 1) % SLIDES.length), SLIDE_DURATION)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section
      className="relative overflow-hidden bg-brand-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0">
        {SLIDES.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt="Annai Packers & Movers relocation service"
            initial={false}
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/75 via-brand-950/45 to-brand-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/55 via-transparent to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container-page relative flex min-h-[640px] flex-col justify-center py-28 sm:min-h-[700px]"
      >
        <motion.span
          variants={itemVariants}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent-300 backdrop-blur"
        >
          <ShieldCheck size={14} /> Insured &amp; Trusted Since {COMPANY.founded}
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Packing & Moving, <span className="text-accent-400">Made Effortless.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
          {COMPANY.tagline} From homes to offices, across the city or across the world &mdash; our trained
          professionals handle every move with precision and care.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
          <Button to="/contact" size="lg">
            Get Free Quote
          </Button>
          <Button href={`tel:${COMPANY.phoneRaw}`} variant="outline" size="lg" icon={PhoneCall} iconPosition="left">
            {COMPANY.phone}
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 grid max-w-lg grid-cols-2 gap-x-6 gap-y-3 border-t border-white/15 pt-6 sm:flex sm:flex-wrap sm:max-w-none"
        >
          {TRUST_INDICATORS.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <item.icon size={16} className="shrink-0 text-accent-400" />
              <span className="text-sm text-white/90">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2.5 rounded-full bg-black/25 px-3 py-2.5 backdrop-blur-sm">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className="relative h-1.5 overflow-hidden rounded-full bg-white/30 transition-[width] duration-300"
            style={{ width: active === i ? 40 : 10 }}
          >
            {active === i && (
              <AnimatePresence>
                <motion.span
                  key={`${active}-${paused}`}
                  className="absolute inset-y-0 left-0 rounded-full bg-accent-400"
                  initial={{ width: paused ? '100%' : '0%' }}
                  animate={{ width: '100%' }}
                  transition={paused ? { duration: 0 } : { duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                />
              </AnimatePresence>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
