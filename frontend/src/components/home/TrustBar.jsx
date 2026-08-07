import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { TRUST_STATS } from '@/utils/constants'
import { getIcon } from '@/utils/iconMap'

function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    const isDecimal = !Number.isInteger(value)

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = value * eased
      setDisplay(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return <span ref={ref}>{display}</span>
}

export default function TrustBar() {
  return (
    <section className="bg-brand-900 py-16">
      <div className="container-page grid grid-cols-2 gap-y-10 gap-x-8 lg:grid-cols-4">
        {TRUST_STATS.map((stat, i) => {
          const Icon = getIcon(stat.icon)
          return (
            <div
              key={stat.label}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                <Icon size={26} />
              </div>
              <span className="mt-5 font-display text-3xl font-bold text-accent-400 sm:text-4xl">
                <Counter value={stat.value} />
                {stat.suffix}
              </span>
              <span className="mt-2 text-sm text-brand-200">{stat.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
