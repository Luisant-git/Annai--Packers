const ADDRESS = '17/1, Devi Poorani Nagar, Kalapatti, Coimbatore – 641048'
// Used only for the map query. Google's free (no-API-key) geocoder can't resolve the "17/1" door
// number reliably — including it made the pin snap to an unrelated building ("Stark Towers",
// wrong pincode). Dropping the door number and keeping the named locality resolves correctly to
// Devi Poorani Nagar, Kalapatti, Coimbatore 641048.
const MAP_ADDRESS = 'Devi Poorani Nagar, Kalapatti, Coimbatore - 641048, Tamil Nadu, India'

export const COMPANY = {
  name: 'Annai Packers & Movers',
  shortName: 'Annai Packers',
  tagline: 'Safe. Secure. Stress-Free.',
  taglineItems: [
    'House Hold & Office Shifting',
    'Industrial Shifting',
    'Export Wooden Box Packing',
    'All Over India Services',
  ],
  // Primary number — used for all single click-to-call buttons (Header, Hero, CTA bands, floating action).
  phone: '+91 87541 27755',
  phoneRaw: '+918754127755',
  // Full list — used wherever all numbers should be visible (Top Bar, Footer, Contact page).
  phones: [
    { display: '+91 87541 27755', raw: '+918754127755' },
    { display: '+91 89408 87555', raw: '+918940887555' },
    { display: '+91 94872 17415', raw: '+919487217415' },
  ],
  whatsapp: '+918754127755',
  email: 'annaipackersrini56@gmail.com',
  address: ADDRESS,
  hours: 'Mon - Sun: 8:00 AM - 9:00 PM',
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(MAP_ADDRESS)}&z=17&output=embed`,
  mapDirectionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_ADDRESS)}`,
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
  },
  founded: 2009,
}

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
]

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-of-service' },
  ],
}

export const TRUST_STATS = [
  { label: 'Happy Clients', value: 800, suffix: '+', icon: 'Users' },
  { label: 'Years of Experience', value: 12, suffix: '+', icon: 'Award' },
  { label: 'Successful Moves', value: 15000, suffix: '+', icon: 'Truck' },
  { label: 'Customer Rating', value: 4.8, suffix: '/5', icon: 'Star' },
]

export const WHY_CHOOSE_US = [
  {
    icon: 'ShieldCheck',
    title: 'Fully Insured & Licensed',
    desc: 'Every move is backed by comprehensive insurance and verified licensing for complete peace of mind.',
  },
  {
    icon: 'Users',
    title: 'Trained Professional Staff',
    desc: 'Our packing and moving crews are trained, background-verified and experienced in handling valuables.',
  },
  {
    icon: 'MapPin',
    title: 'Real-Time GPS Tracking',
    desc: 'Track your shipment live from pickup to delivery with our GPS-enabled fleet.',
  },
  {
    icon: 'Clock',
    title: 'On-Time Delivery',
    desc: 'We plan every move meticulously to guarantee punctual pickup and delivery, every time.',
  },
  {
    icon: 'PackageCheck',
    title: 'Premium Packing Materials',
    desc: 'High-grade boxes, bubble wrap and crating protect your belongings from damage in transit.',
  },
  {
    icon: 'Headset',
    title: '24/7 Customer Support',
    desc: 'Our support team is available round the clock to answer questions and resolve concerns.',
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Enquiry & Site Survey',
    desc: 'Share your moving requirements and our team conducts a free survey to assess the scope.',
    icon: 'ClipboardList',
  },
  {
    step: '02',
    title: 'Custom Quote',
    desc: 'Receive a transparent, itemised quote with no hidden charges.',
    icon: 'FileCheck2',
  },
  {
    step: '03',
    title: 'Professional Packing',
    desc: 'Our trained crew carefully packs and labels every item using premium materials.',
    icon: 'PackageCheck',
  },
  {
    step: '04',
    title: 'Safe Delivery',
    desc: 'Your belongings are transported and delivered on schedule, unpacked and arranged on request.',
    icon: 'Truck',
  },
]

export const SERVICE_TYPES = [
  'Household Shifting',
  'Office & Corporate Relocation',
  'Vehicle Transportation',
  'Warehousing & Storage',
  'Packing Services',
  'International Relocation',
  'Loading & Unloading',
  'Car Transportation',
  'Export Packing',
  'Other',
]

export const PROPERTY_TYPES = ['1 BHK', '2 BHK', '3 BHK', '4+ BHK', 'Office / Commercial Space', 'Other']
