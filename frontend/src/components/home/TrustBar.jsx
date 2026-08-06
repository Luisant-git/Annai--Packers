import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { TRUST_STATS } from '@/utils/constants'

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
    <section className="border-b border-brand-100 bg-white">
      <div className="container-page grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
        {TRUST_STATS.map((stat, i) => (
          <div
            key={stat.label}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="flex flex-col items-center text-center"
          >
            <span className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">
              <Counter value={stat.value} />
              {stat.suffix}
            </span>
            <span className="mt-2 text-sm text-brand-700/60">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
