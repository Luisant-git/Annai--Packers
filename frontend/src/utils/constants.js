export const COMPANY = {
  name: 'Annai Packers & Movers',
  shortName: 'Annai Packers',
  tagline: 'Safe. Secure. Stress-Free.',
  phone: '+91 98765 43210',
  phoneRaw: '+919876543210',
  whatsapp: '+919876543210',
  email: 'info@annaipackersmovers.com',
  address: 'No. 12, Anna Salai, Chennai, Tamil Nadu 600002, India',
  hours: 'Mon - Sun: 8:00 AM - 9:00 PM',
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(
    'No. 12, Anna Salai, Chennai, Tamil Nadu 600002, India'
  )}&output=embed`,
  googleReviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Annai+Packers+%26+Movers+Chennai',
  googleRating: 4.8,
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    twitter: 'https://twitter.com/',
    linkedin: 'https://linkedin.com/',
    youtube: 'https://youtube.com/',
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
  { label: 'Years of Experience', value: 15, suffix: '+' },
  { label: 'Successful Moves', value: 12000, suffix: '+' },
  { label: 'Cities Covered', value: 120, suffix: '+' },
  { label: 'Customer Rating', value: 4.8, suffix: '/5' },
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
  'Other',
]

export const PROPERTY_TYPES = ['1 BHK', '2 BHK', '3 BHK', '4+ BHK', 'Office / Commercial Space', 'Other']
