import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import useForm from '@/hooks/useForm'
import { validateQuoteForm } from '@/utils/validators'
import { submitQuoteRequest } from '@/services/quoteService'
import { SERVICE_TYPES, PROPERTY_TYPES } from '@/utils/constants'
import FormInput from '@/components/forms/FormInput'
import FormSelect from '@/components/forms/FormSelect'
import FormTextarea from '@/components/forms/FormTextarea'

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  movingFrom: '',
  movingTo: '',
  moveDate: '',
  propertyType: '',
  serviceType: '',
  estimatedSize: '',
  message: '',
}

export default function QuoteForm({ compact = false, defaultServiceType = '' }) {
  const { values, errors, handleChange, validateForm, reset } = useForm(
    { ...INITIAL, serviceType: defaultServiceType },
    validateQuoteForm
  )
  const [status, setStatus] = useState('idle')
  const [serverError, setServerError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setStatus('loading')
    setServerError('')
    try {
      await submitQuoteRequest(values)
      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setServerError(err.message)
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-brand-50 py-12 text-center">
        <CheckCircle2 className="text-green-600" size={40} />
        <h3 className="text-base font-semibold text-brand-900">Quote Request Received</h3>
        <p className="max-w-sm text-sm text-brand-700/80">
          Thanks! Our team will review your details and send a custom quote shortly.
        </p>
        <button onClick={() => setStatus('idle')} className="text-sm font-semibold text-accent-600 hover:underline">
          Request another quote
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`grid grid-cols-1 gap-5 ${compact ? '' : 'sm:grid-cols-2'}`}>
      <FormInput label="Full Name" name="name" placeholder="Your name" value={values.name} onChange={handleChange} error={errors.name} />
      <FormInput label="Phone Number" name="phone" placeholder="+91 98765 43210" value={values.phone} onChange={handleChange} error={errors.phone} />
      <FormInput
        label="Email Address"
        name="email"
        type="email"
        placeholder="you@example.com"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        className={compact ? '' : 'sm:col-span-2'}
      />
      <FormInput label="Moving From" name="movingFrom" placeholder="Pickup city / address" value={values.movingFrom} onChange={handleChange} error={errors.movingFrom} />
      <FormInput label="Moving To" name="movingTo" placeholder="Destination city / address" value={values.movingTo} onChange={handleChange} error={errors.movingTo} />
      <FormInput label="Preferred Move Date" name="moveDate" type="date" value={values.moveDate} onChange={handleChange} error={errors.moveDate} />
      <FormSelect
        label="Service Type"
        name="serviceType"
        options={SERVICE_TYPES}
        value={values.serviceType}
        onChange={handleChange}
        error={errors.serviceType}
      />
      <FormSelect
        label="Property Type"
        name="propertyType"
        options={PROPERTY_TYPES}
        value={values.propertyType}
        onChange={handleChange}
        error={errors.propertyType}
      />
      <FormInput
        label="Estimated Size / Load"
        name="estimatedSize"
        placeholder="e.g. 2 rooms, 15 boxes"
        value={values.estimatedSize}
        onChange={handleChange}
        error={errors.estimatedSize}
      />
      <FormTextarea
        label="Additional Details"
        name="message"
        placeholder="Any special requirements..."
        value={values.message}
        onChange={handleChange}
        error={errors.message}
        rows={3}
        className={compact ? '' : 'sm:col-span-2'}
      />

      {status === 'error' && <p className="text-sm text-red-500">{serverError}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-900 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800 disabled:opacity-60 ${
          compact ? 'w-full' : 'sm:col-span-2 sm:w-fit'
        }`}
      >
        <Send size={16} />
        {status === 'loading' ? 'Submitting...' : 'Request Free Quote'}
      </button>
    </form>
  )
}
