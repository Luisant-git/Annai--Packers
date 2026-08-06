import { useMemo, useState } from 'react'
import { Expand } from 'lucide-react'
import Lightbox from '@/components/gallery/Lightbox'

const TILE_PATTERN = [
  { span: 'sm:col-span-2 lg:col-span-2', height: 'h-64 sm:h-72 md:h-80' },
  { span: 'sm:col-span-1 lg:col-span-1', height: 'h-52 sm:h-60 md:h-64' },
  { span: 'sm:col-span-1 lg:col-span-1', height: 'h-52 sm:h-60 md:h-64' },
  { span: 'sm:col-span-1 lg:col-span-1', height: 'h-52 sm:h-52 md:h-56' },
  { span: 'sm:col-span-2 lg:col-span-2', height: 'h-52 sm:h-60 md:h-64' },
  { span: 'sm:col-span-1 lg:col-span-1', height: 'h-52 sm:h-52 md:h-56' },
]

export default function GalleryGrid({ images }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeIndex, setActiveIndex] = useState(null)

  const categories = useMemo(() => {
    const set = new Set(images.map((img) => img.category).filter(Boolean))
    return ['All', ...set]
  }, [images])

  const filtered = useMemo(
    () => (activeCategory === 'All' ? images : images.filter((img) => img.category === activeCategory)),
    [images, activeCategory]
  )

  return (
    <>
      {categories.length > 1 && (
        <div className="mb-10 flex flex-wrap justify-center gap-3" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-brand-900 text-white'
                  : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((img, i) => {
          const pattern =
            filtered.length <= 4
              ? { span: '', height: 'h-56 sm:h-64 md:h-72' }
              : TILE_PATTERN[i % TILE_PATTERN.length]
          return (
            <button
              key={img.id}
              onClick={() => setActiveIndex(i)}
              data-aos="zoom-in"
              data-aos-delay={(i % 6) * 70}
              className={`group relative overflow-hidden rounded-xl ${pattern.span} ${pattern.height}`}
            >
              <img
                src={img.url}
                alt={img.caption || 'Annai Packers & Movers gallery'}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-lg">
                  <Expand size={18} />
                </span>
              </div>

              {(img.caption || img.category) && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8 text-left">
                  {img.caption && <p className="truncate text-sm font-semibold text-white">{img.caption}</p>}
                  {img.category && (
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wide text-white/70">
                      {img.category}
                    </p>
                  )}
                </div>
              )}
            </button>
          )
        })}
      </div>

      <Lightbox images={filtered} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} />
    </>
  )
}
