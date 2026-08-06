export default function Spinner({ className = '' }) {
  return (
    <div className={`flex items-center justify-center py-16 ${className}`}>
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-100 border-t-accent-500" />
    </div>
  )
}
