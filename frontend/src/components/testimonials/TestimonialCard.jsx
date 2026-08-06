import { Quote } from 'lucide-react'
import RatingStars from '@/components/common/RatingStars'

export default function TestimonialCard({ testimonial, index = 0 }) {
  const initials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
      className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-8 shadow-soft"
    >
      <Quote className="text-accent-300" size={28} />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-800">&ldquo;{testimonial.message}&rdquo;</p>
      <RatingStars rating={testimonial.rating} className="mt-5" />
      <div className="mt-5 flex items-center gap-3">
        {testimonial.photoUrl ? (
          <img src={testimonial.photoUrl} alt={testimonial.name} className="h-11 w-11 rounded-full object-cover" />
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-900 text-sm font-semibold text-white">
            {initials}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-brand-900">{testimonial.name}</p>
          {testimonial.location && <p className="text-xs text-brand-700/60">{testimonial.location}</p>}
        </div>
      </div>
    </div>
  )
}
