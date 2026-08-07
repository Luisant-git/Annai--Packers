import { useMemo, useState } from 'react'
import { Search, ChevronDown, PhoneCall, Clock, Users2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SeoHead from '@/components/seo/SeoHead'
import PageHero from '@/components/common/PageHero'
import Button from '@/components/common/Button'
import { FAQS } from '@/data/faq'
import { COMPANY } from '@/utils/constants'

export default function Faq() {
  const faqs = FAQS

  const [query, setQuery] = useState('')
  const [openIds, setOpenIds] = useState(() => new Set())

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return faqs
    return faqs.filter(
      (item) => item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
    )
  }, [faqs, query])

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const expandAll = () => setOpenIds(new Set(filtered.map((item) => item.id)))
  const collapseAll = () => setOpenIds(new Set())

  return (
    <>
      <SeoHead
        title="FAQ"
        description="Answers to frequently asked questions about Annai Packers & Movers' packing, moving and relocation services."
      />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking your move."
        breadcrumb={[{ label: 'FAQ' }]}
      />

      <section className="py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div
                  className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                  data-aos="fade-up"
                >
                  <div className="relative flex-1">
                    <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-400" />
                    <input
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search questions or answers..."
                      aria-label="Search FAQs"
                      className="w-full rounded-full border border-brand-200 bg-white py-3 pl-11 pr-4 text-sm text-brand-900 outline-none transition-colors placeholder:text-brand-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-100"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={expandAll}
                      className="rounded-full border border-brand-200 px-4 py-2 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-50"
                    >
                      Expand all
                    </button>
                    <button
                      onClick={collapseAll}
                      className="rounded-full border border-brand-200 px-4 py-2 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-50"
                    >
                      Collapse all
                    </button>
                  </div>
                </div>

                <p className="mb-5 text-sm text-brand-700/60" data-aos="fade-up">
                  {filtered.length} question{filtered.length !== 1 ? 's' : ''} found
                </p>

                {filtered.length === 0 ? (
                  <div className="rounded-2xl border border-brand-100 bg-white p-10 text-center shadow-soft">
                    <p className="font-semibold text-brand-900">No matching questions</p>
                    <p className="mt-1 text-sm text-brand-700/80">Try a different keyword or clear your search.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filtered.map((item, idx) => {
                      const isOpen = openIds.has(item.id)
                      return (
                        <div
                          key={item.id}
                          data-aos="fade-up"
                          data-aos-delay={(idx % 6) * 60}
                          className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-soft"
                        >
                          <button
                            onClick={() => toggle(item.id)}
                            aria-expanded={isOpen}
                            className="flex w-full items-start gap-4 p-5 text-left"
                          >
                            <span
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                                isOpen ? 'bg-accent-500 text-white' : 'bg-accent-50 text-accent-600'
                              }`}
                            >
                              {idx + 1}
                            </span>
                            <span className="flex-1 pt-1.5 font-semibold text-brand-900">{item.question}</span>
                            <ChevronDown
                              size={18}
                              className={`mt-2 shrink-0 text-brand-400 transition-transform duration-300 ${
                                isOpen ? 'rotate-180 text-accent-500' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <p className="px-5 pb-5 pl-[3.75rem] text-sm leading-relaxed text-brand-700/80">
                                  {item.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              <aside className="lg:col-span-5">
                <div className="sticky top-28 overflow-hidden rounded-2xl border border-brand-100 shadow-card" data-aos="fade-up">
                  <div className="bg-brand-900 p-8 text-white">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent-400">
                      Need help now?
                    </p>
                    <h3 className="mt-3 text-xl font-bold">Talk to our specialists</h3>
                    <p className="mt-2 text-sm text-brand-200">
                      Get personalised guidance, an instant estimate, or schedule a free site visit.
                    </p>

                    <div className="mt-6 flex flex-col gap-3">
                      <Button
                        href={getContactHref(COMPANY.phoneRaw)}
                        icon={PhoneCall}
                        iconPosition="left"
                        className="w-full"
                        {...(isWaMe(getContactHref(COMPANY.phoneRaw)) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        Call {COMPANY.phone}
                      </Button>
                      <Button to="/contact" variant="outline" className="w-full">
                        Request a Quote
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white p-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-start gap-2">
                        <Clock size={16} className="mt-0.5 shrink-0 text-accent-500" />
                        <div>
                          <p className="text-xs text-brand-700/60">Working Hours</p>
                          <p className="font-medium text-brand-900">{COMPANY.hours}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users2 size={16} className="mt-0.5 shrink-0 text-accent-500" />
                        <div>
                          <p className="text-xs text-brand-700/60">Response Time</p>
                          <p className="font-medium text-brand-900">Usually within an hour</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
          </div>
        </div>
      </section>
    </>
  )
}
