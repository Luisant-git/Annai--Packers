import { Star } from 'lucide-react'

export default function RatingStars({ rating = 5, size = 16, className = '' }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'fill-accent-400 text-accent-400' : 'fill-brand-100 text-brand-100'}
        />
      ))}
    </div>
  )
}
