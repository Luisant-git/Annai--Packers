export default function FormInput({ label, name, error, className = '', ...rest }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-brand-800">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={`w-full rounded-lg border px-4 py-3 text-sm text-brand-900 outline-none transition-colors placeholder:text-brand-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-100 ${
          error ? 'border-red-400' : 'border-brand-200'
        }`}
        {...rest}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}
