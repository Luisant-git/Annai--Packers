import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import useForm from '@/hooks/useForm'
import { validateContactForm } from '@/utils/validators'
import { submitEnquiry } from '@/services/enquiryService'
import FormInput from '@/components/forms/FormInput'
import FormTextarea from '@/components/forms/FormTextarea'

const INITIAL = { name: '', email: '', phone: '', subject: '', message: '' }

export default function ContactForm() {
  const { values, errors, handleChange, validateForm, reset } = useForm(INITIAL, validateContactForm)
  const [status, setStatus] = useState('idle')
  const [serverError, setServerError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setStatus('loading')
    setServerError('')
    try {
      await submitEnquiry(values)
      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setServerError(err.message)
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-brand-50 py-16 text-center">
        <CheckCircle2 className="text-green-600" size={44} />
        <h3 className="text-lg font-semibold text-brand-900">Enquiry Sent Successfully</h3>
        <p className="max-w-sm text-sm text-brand-700/80">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-accent-600 hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <FormInput label="Full Name" name="name" placeholder="Your name" value={values.name} onChange={handleChange} error={errors.name} />
      <FormInput label="Email Address" name="email" type="email" placeholder="you@example.com" value={values.email} onChange={handleChange} error={errors.email} />
      <FormInput label="Phone Number" name="phone" placeholder="+91 98765 43210" value={values.phone} onChange={handleChange} error={errors.phone} />
      <FormInput label="Subject" name="subject" placeholder="How can we help?" value={values.subject} onChange={handleChange} error={errors.subject} />
      <FormTextarea
        label="Message"
        name="message"
        placeholder="Tell us more about your requirement..."
        value={values.message}
        onChange={handleChange}
        error={errors.message}
        className="sm:col-span-2"
      />

      {status === 'error' && <p className="sm:col-span-2 text-sm text-red-500">{serverError}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600 disabled:opacity-60 sm:col-span-2 sm:w-fit"
      >
        <Send size={16} />
        {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  )
}
