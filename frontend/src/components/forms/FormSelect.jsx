import { ChevronDown } from 'lucide-react'

export default function FormSelect({ label, name, error, options = [], placeholder, className = '', ...rest }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-brand-800">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          className={`w-full appearance-none rounded-lg border bg-white px-4 py-3 text-sm text-brand-900 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-100 ${
            error ? 'border-red-400' : 'border-brand-200'
          }`}
          {...rest}
        >
          <option value="">{placeholder || 'Select an option'}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-400" />
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}
