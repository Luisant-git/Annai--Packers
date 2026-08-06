export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`flex flex-col ${alignClass} ${className}`} data-aos="fade-up" data-aos-duration="700">
      {eyebrow && (
        <span
          className={`mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${
            light ? 'bg-white/10 text-accent-300' : 'bg-accent-50 text-accent-600'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`max-w-2xl text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-brand-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed ${light ? 'text-brand-100' : 'text-brand-700/80'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
