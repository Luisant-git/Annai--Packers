import familyMovingDay from '@/assets/img8.jpeg'
import loadingFurniture from '@/assets/img2.jpeg'
import settlingIn from '@/assets/img11.jpeg'
import friendlyHandover from '@/assets/img7.jpeg'
import furnitureWrapping from '@/assets/img15.jpeg'
import packingFragileItems from '@/assets/img12.jpeg'
import stretchWrapping from '@/assets/img13.jpeg'
import cushionedFurniture from '@/assets/img17.jpeg'
import warehouseHandling from '@/assets/img3.jpeg'
import fleetInDistributionHub from '@/assets/img5.jpeg'

export const GALLERY_IMAGES = [
  { id: 1, url: familyMovingDay, caption: "A family's moving day, made easy", category: 'Household', order: 1 },
  { id: 2, url: loadingFurniture, caption: 'Loading furniture with care', category: 'Household', order: 2 },
  { id: 3, url: settlingIn, caption: 'Settling into a new home together', category: 'Household', order: 3 },
  { id: 4, url: friendlyHandover, caption: 'Friendly service, every step of the way', category: 'Household', order: 4 },
  { id: 5, url: furnitureWrapping, caption: 'Secure wrapping before the move', category: 'Packing', order: 5 },
  { id: 6, url: packingFragileItems, caption: 'Careful packing of fragile items', category: 'Packing', order: 6 },
  { id: 7, url: stretchWrapping, caption: 'Stretch-wrapping for extra protection', category: 'Packing', order: 7 },
  { id: 8, url: cushionedFurniture, caption: 'Furniture wrapped and cushioned', category: 'Packing', order: 8 },
  { id: 9, url: warehouseHandling, caption: 'Warehouse handling in progress', category: 'Warehousing', order: 9 },
  { id: 10, url: fleetInDistributionHub, caption: 'Our fleet across the distribution network', category: 'Fleet', order: 10 },
]

export const getGalleryImages = () => GALLERY_IMAGES
