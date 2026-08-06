import { useState, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '@/data/testimonials'
import SectionHeading from '@/components/common/SectionHeading'
import TestimonialCard from '@/components/testimonials/TestimonialCard'

const PAGE_SIZE = 3

export default function TestimonialsCarousel() {
  const [page, setPage] = useState(0)

  const pageCount = Math.max(1, Math.ceil(TESTIMONIALS.length / PAGE_SIZE))
  const visible = useMemo(
    () => TESTIMONIALS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
    [page]
  )

  return (
    <section className="py-24">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Customers Say"
            align="left"
            className="sm:items-start sm:text-left"
          />
          {pageCount > 1 && (
            <div className="flex gap-3">
              <button
                onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 text-brand-700 transition-colors hover:bg-brand-900 hover:text-white"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setPage((p) => (p + 1) % pageCount)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 text-brand-700 transition-colors hover:bg-brand-900 hover:text-white"
                aria-label="Next testimonials"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
