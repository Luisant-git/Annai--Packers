import { ShieldCheck, Truck, PackageCheck, Home, Building2, Zap, UserCheck, MapPin, Star, Boxes } from 'lucide-react'

const BADGES = [
  { icon: Star, label: '4.8 Customer Rating' },
  { icon: ShieldCheck, label: 'Insured Handling' },
  { icon: Truck, label: 'GPS-Tracked Fleet' },
  { icon: PackageCheck, label: 'Premium Packing' },
  { icon: Home, label: 'Household Moves' },
  { icon: Building2, label: 'Office Relocation' },
  { icon: Zap, label: 'Fast Turnaround' },
  { icon: UserCheck, label: 'Trained Crew' },
  { icon: Boxes, label: 'Modern Equipment' },
  { icon: MapPin, label: 'Doorstep Service' },
]

const track = [...BADGES, ...BADGES]

export default function TrustMarquee() {
  return (
    <section className="border-y border-brand-100 bg-white py-12">
      <div
        className="marquee-wrap relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        data-aos="fade-up"
      >
        <div className="marquee-track flex w-max gap-4">
          {track.map((badge, i) => (
            <div
              key={i}
              className="flex flex-none items-center gap-2.5 rounded-full border border-brand-100 bg-white px-5 py-3 shadow-soft"
            >
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent-50 text-accent-600">
                <badge.icon size={15} />
              </span>
              <span className="whitespace-nowrap text-sm font-semibold text-brand-900">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .marquee-track {
            animation: annai-marquee 34s linear infinite;
          }
          .marquee-wrap:hover .marquee-track {
            animation-play-state: paused;
          }
          @keyframes annai-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track {
              animation: none;
            }
          }
        `}
      </style>
    </section>
  )
}
