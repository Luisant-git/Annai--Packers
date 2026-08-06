import { useState, useCallback } from 'react'

export default function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))
  }, [])

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const validateForm = useCallback(() => {
    const nextErrors = validate ? validate(values) : {}
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, validate])

  return { values, errors, handleChange, validateForm, reset, setValues }
}
