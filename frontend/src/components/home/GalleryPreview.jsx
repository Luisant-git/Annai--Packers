import { GALLERY_IMAGES } from '@/data/gallery'
import SectionHeading from '@/components/common/SectionHeading'
import Button from '@/components/common/Button'

export default function GalleryPreview() {
  return (
    <section className="bg-brand-50/50 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Gallery"
          title="A Glimpse Into Our Work"
          description="Real moves, real teams — see how we pack, load and deliver with care."
        />

        <div className="mt-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY_IMAGES.slice(0, 8).map((img, i) => (
              <div
                key={img.id}
                data-aos="zoom-in"
                data-aos-delay={(i % 4) * 80}
                className="aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={img.url}
                  alt={img.caption || 'Annai Packers & Movers gallery'}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center" data-aos="fade-up">
          <Button to="/gallery" variant="ghost">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
