import householdShifting from '@/assets/hero-banner2.webp'
import vehicleTransport from '@/assets/hero-banner1.webp'
import internationalRelocation from '@/assets/hero-banner3.webp'
import packingServices from '@/assets/chooseus-img4.jpg'
import officeCorporateRelocation from '@/assets/img4.jpeg'
import warehousingStorage from '@/assets/img1.jpeg'
import loadingUnloading from '@/assets/img6.jpeg'
import carTransportation from '@/assets/img3.jpeg'
import exportPacking from '@/assets/img13.jpeg'

export const SERVICES = [
  {
    id: 'household-shifting',
    title: 'Household Shifting',
    slug: 'household-shifting',
    shortDesc: 'Safe, careful relocation of your entire home — from single rooms to full villas.',
    description:
      'Our household shifting service covers every step of your move: pre-move survey, professional packing with premium materials, secure loading, insured transportation, and unpacking at your new home. Every item is labelled and handled by trained staff to ensure nothing is damaged in transit.\n\nWhether you are moving a 1 BHK apartment or a large independent house, our team plans the move around your schedule and budget, with transparent, itemised pricing and no hidden charges.',
    icon: 'Home',
    coverImage: householdShifting,
    highlights: [
      'Free pre-move survey & consultation',
      'Premium packing materials & labelling',
      'Insured, GPS-tracked transportation',
      'Unpacking & arrangement on request',
    ],
    order: 1,
  },
  {
    id: 'office-corporate-relocation',
    title: 'Office & Corporate Relocation',
    slug: 'office-corporate-relocation',
    shortDesc: 'Minimise downtime with our structured office and corporate relocation plans.',
    description:
      'We understand that time is money for businesses. Our office relocation team works around your operating hours to dismantle, pack, move and reassemble workstations, IT equipment, files and furniture with minimal disruption to your operations.\n\nWe provide dedicated project coordinators for large corporate moves, ensuring every department is relocated in the right sequence with clear communication throughout.',
    icon: 'Building2',
    coverImage: officeCorporateRelocation,
    highlights: [
      'Dedicated relocation project coordinator',
      'After-hours & weekend moves available',
      'IT equipment & workstation handling',
      'Minimal disruption to business operations',
    ],
    order: 2,
  },
  {
    id: 'vehicle-transportation',
    title: 'Vehicle Transportation',
    slug: 'vehicle-transportation',
    shortDesc: 'Door-to-door car and bike transportation on enclosed, GPS-tracked carriers.',
    description:
      'Moving your vehicle across cities or states doesn’t have to mean added mileage or risk. Our vehicle transportation service uses secure car carriers with full insurance coverage, GPS tracking and experienced drivers.\n\nWe handle two-wheelers, sedans, SUVs and more, with condition reports taken at pickup and delivery so you have complete peace of mind.',
    icon: 'Truck',
    coverImage: vehicleTransport,
    highlights: [
      'Enclosed, GPS-tracked car carriers',
      'Comprehensive transit insurance',
      'Condition report at pickup & delivery',
      'Two-wheelers, sedans and SUVs',
    ],
    order: 3,
  },
  {
    id: 'warehousing-storage',
    title: 'Warehousing & Storage',
    slug: 'warehousing-storage',
    shortDesc: 'Secure, climate-conscious short and long-term storage for your belongings.',
    description:
      'Need a place to store your belongings between moves, or long term? Our warehousing facilities are secure, monitored 24/7, and protected from pests and moisture. Items are inventoried, wrapped and stacked systematically for easy retrieval.\n\nWe offer flexible short-term and long-term storage plans tailored to household and commercial needs.',
    icon: 'Warehouse',
    coverImage: warehousingStorage,
    highlights: [
      '24/7 monitored storage facility',
      'Protected from pests & moisture',
      'Flexible short & long-term plans',
      'Full inventory tracking',
    ],
    order: 4,
  },
  {
    id: 'packing-services',
    title: 'Packing Services',
    slug: 'packing-services',
    shortDesc: 'Professional packing with premium materials to protect fragile and valuable items.',
    description:
      'Our trained packing crews use high-grade corrugated boxes, bubble wrap, foam sheets and wooden crating for fragile and high-value items such as glassware, electronics and artwork.\n\nEvery box is labelled by room and content for easy unpacking, and an inventory list is shared with you before loading begins.',
    icon: 'PackageCheck',
    coverImage: packingServices,
    highlights: [
      'High-grade corrugated boxes & crating',
      'Bubble wrap & foam for fragile items',
      'Room-wise labelling system',
      'Pre-loading inventory checklist',
    ],
    order: 5,
  },
  {
    id: 'international-relocation',
    title: 'International Relocation',
    slug: 'international-relocation',
    shortDesc: 'End-to-end international moving with customs documentation support.',
    description:
      'Relocating abroad involves more than packing boxes. Our international relocation service includes customs documentation guidance, secure crating for sea and air freight, and coordination with partner agents at the destination for smooth delivery.\n\nWe manage the full journey so you can focus on settling into your new country.',
    icon: 'Globe2',
    coverImage: internationalRelocation,
    highlights: [
      'Customs documentation support',
      'Secure sea & air freight crating',
      'Destination-country partner coordination',
      'End-to-end shipment tracking',
    ],
    order: 6,
  },
  {
    id: 'loading-unloading',
    title: 'Loading & Unloading',
    slug: 'loading-unloading',
    shortDesc: 'On-demand professional loading and unloading crews for any size job.',
    description:
      'Already have your own transportation arranged but need skilled hands? Our loading and unloading crews are trained to handle furniture, appliances and boxes efficiently and safely, reducing the risk of injury or damage.\n\nAvailable as a standalone service or bundled with any of our other moving solutions.',
    icon: 'Boxes',
    coverImage: loadingUnloading,
    highlights: [
      'Trained, careful handling crew',
      'Available standalone or bundled',
      'Safe handling of furniture & appliances',
      'Flexible scheduling',
    ],
    order: 7,
  },
  {
    id: 'car-transportation',
    title: 'Car Transportation',
    slug: 'car-transportation',
    shortDesc: 'Safe, door-to-door car transport on enclosed carriers with full insurance cover.',
    description:
      'Relocating your car to a new city? Our dedicated car transportation service uses enclosed, GPS-tracked carriers and experienced drivers to move your vehicle safely without adding wear or mileage.\n\nEvery car is inspected and photographed before loading and after delivery, and covered by comprehensive transit insurance for complete peace of mind.',
    icon: 'Car',
    coverImage: carTransportation,
    highlights: [
      'Enclosed, GPS-tracked car carriers',
      'Comprehensive transit insurance',
      'Photographic condition report at pickup & delivery',
      'Door-to-door scheduling',
    ],
    order: 8,
  },
  {
    id: 'export-packing',
    title: 'Export Packing',
    slug: 'export-packing',
    shortDesc: 'Export-grade wooden crating and packing that meets international shipping standards.',
    description:
      'Shipping goods overseas requires packing that can withstand long transit times, handling and customs inspection. Our export packing team builds ISPM-15 compliant wooden crates and uses moisture-resistant, shock-absorbent materials for fragile and high-value cargo.\n\nWe prepare shipments for sea and air freight and coordinate with your freight forwarder to keep documentation and packing specifications aligned.',
    icon: 'Package',
    coverImage: exportPacking,
    highlights: [
      'ISPM-15 compliant wooden crating',
      'Moisture-resistant, shock-absorbent packing',
      'Sea & air freight ready',
      'Freight forwarder coordination',
    ],
    order: 9,
  },
]

export const getServices = () => SERVICES

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug)
