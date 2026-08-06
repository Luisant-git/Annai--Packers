import { useEffect, useState } from 'react'
import { PhoneCall, ArrowUp } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { COMPANY } from '@/utils/constants'

const ICON_SIZE = 22

const ACTIONS_BASE =
  'flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0'

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 280)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3.5 sm:right-7">
      <a
        href={`https://wa.me/${COMPANY.whatsapp.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className={`${ACTIONS_BASE} bg-[#25D366] hover:bg-[#20bd5a]`}
      >
        <FaWhatsapp size={ICON_SIZE} />
      </a>

      <a
        href={`tel:${COMPANY.phoneRaw}`}
        aria-label="Call us"
        title="Call us"
        className={`${ACTIONS_BASE} bg-[#2563EB] hover:bg-[#1d4ed8]`}
      >
        <PhoneCall size={ICON_SIZE} strokeWidth={2} />
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        title="Back to top"
        className={`${ACTIONS_BASE} bg-accent-500 hover:bg-accent-600 ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        <ArrowUp size={ICON_SIZE} strokeWidth={2} />
      </button>
    </div>
  )
}
