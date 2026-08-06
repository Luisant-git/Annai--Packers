import fleetTruck from '@/assets/hero-banner1.webp'
import householdMove from '@/assets/hero-banner2.webp'
import familyHandover from '@/assets/hero-banner3.webp'
import carefulHandling from '@/assets/chooseus-img4.jpg'

export const GALLERY_IMAGES = [
  { id: 1, url: fleetTruck, caption: 'Our fleet ready for dispatch', category: 'Fleet', order: 1 },
  { id: 2, url: householdMove, caption: 'Household shifting in progress', category: 'Household', order: 2 },
  { id: 3, url: familyHandover, caption: 'Safe delivery to a happy family', category: 'Household', order: 3 },
  { id: 4, url: carefulHandling, caption: 'Careful handling, every time', category: 'Packing', order: 4 },
]

export const getGalleryImages = () => GALLERY_IMAGES
