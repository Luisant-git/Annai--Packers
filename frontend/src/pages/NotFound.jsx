import { Home, ArrowLeft } from 'lucide-react'
import SeoHead from '@/components/seo/SeoHead'
import Button from '@/components/common/Button'

export default function NotFound() {
  return (
    <>
      <SeoHead title="Page Not Found" description="The page you are looking for could not be found." />
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <span className="font-display text-8xl font-bold text-brand-100">404</span>
        <h1 className="mt-4 text-2xl font-bold text-brand-900 sm:text-3xl">Page Not Found</h1>
        <p className="mt-3 max-w-md text-brand-700/80">
          Sorry, the page you're looking for doesn't exist or may have been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/" icon={Home} iconPosition="left">
            Back to Home
          </Button>
          <Button to="/contact" variant="ghost" icon={ArrowLeft} iconPosition="left">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
