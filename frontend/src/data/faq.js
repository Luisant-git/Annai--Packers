export const FAQS = [
  {
    id: 1,
    question: 'How far in advance should I book my move?',
    answer:
      'We recommend booking at least 1-2 weeks in advance, especially during peak moving seasons, to secure your preferred date and allow time for a proper survey.',
    category: 'Booking',
    order: 1,
  },
  {
    id: 2,
    question: 'Do you provide packing materials?',
    answer: 'Yes, we supply all packing materials including boxes, bubble wrap, foam sheets and wooden crates as part of our packing services.',
    category: 'Booking',
    order: 2,
  },
  {
    id: 3,
    question: 'How is the moving cost calculated?',
    answer:
      'Costs are based on distance, volume/weight of items, packing requirements and any additional services such as storage. We provide a free, no-obligation survey and itemised quote before booking.',
    category: 'Pricing',
    order: 1,
  },
  {
    id: 4,
    question: 'Are hidden charges applied after booking?',
    answer:
      'No. Our quotes are transparent and itemised. Any changes in scope (such as added items) are communicated and approved before being charged.',
    category: 'Pricing',
    order: 2,
  },
  {
    id: 5,
    question: 'Is my shipment insured during transit?',
    answer: 'Yes, all moves are covered under transit insurance. Full details of coverage are shared and explained at the time of booking.',
    category: 'Safety & Insurance',
    order: 1,
  },
  {
    id: 6,
    question: 'What items cannot be transported?',
    answer:
      'We are unable to transport hazardous, illegal, flammable or perishable items. Our team will share a complete list during the survey.',
    category: 'Safety & Insurance',
    order: 2,
  },
  {
    id: 7,
    question: 'Can I track my shipment during the move?',
    answer: 'Yes, our fleet is GPS-enabled, allowing you to track your shipment in real time from pickup to delivery.',
    category: 'Safety & Insurance',
    order: 3,
  },
  {
    id: 8,
    question: 'Do you offer international relocation services?',
    answer:
      'Yes, we handle end-to-end international moves including customs documentation support and coordination with destination-country partner agents.',
    category: 'General',
    order: 1,
  },
]

export const getFaqs = () => FAQS
