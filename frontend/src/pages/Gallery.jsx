import SeoHead from '@/components/seo/SeoHead'
import PageHero from '@/components/common/PageHero'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import { GALLERY_IMAGES } from '@/data/gallery'

export default function Gallery() {
  return (
    <>
      <SeoHead
        title="Gallery"
        description="Browse photos of Annai Packers & Movers in action — packing, loading, transportation and safe delivery."
      />
      <PageHero
        title="Our Gallery"
        subtitle="A closer look at how our team packs, moves and delivers with care."
        breadcrumb={[{ label: 'Gallery' }]}
        compact
      />

      <section className="py-24">
        <div className="container-page">
          <GalleryGrid images={GALLERY_IMAGES} />
        </div>
      </section>
    </>
  )
}
