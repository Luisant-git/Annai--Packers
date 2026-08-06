export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

export const isValidPhone = (value) => /^[+]?[\d\s-]{7,15}$/.test(value.trim())

export const isRequired = (value) => value !== undefined && value !== null && String(value).trim().length > 0

export const validateContactForm = (data) => {
  const errors = {}
  if (!isRequired(data.name)) errors.name = 'Name is required'
  if (!isRequired(data.email)) errors.email = 'Email is required'
  else if (!isValidEmail(data.email)) errors.email = 'Enter a valid email address'
  if (!isRequired(data.phone)) errors.phone = 'Phone number is required'
  else if (!isValidPhone(data.phone)) errors.phone = 'Enter a valid phone number'
  if (!isRequired(data.message)) errors.message = 'Message is required'
  return errors
}

export const validateQuoteForm = (data) => {
  const errors = {}
  if (!isRequired(data.name)) errors.name = 'Name is required'
  if (!isRequired(data.email)) errors.email = 'Email is required'
  else if (!isValidEmail(data.email)) errors.email = 'Enter a valid email address'
  if (!isRequired(data.phone)) errors.phone = 'Phone number is required'
  else if (!isValidPhone(data.phone)) errors.phone = 'Enter a valid phone number'
  if (!isRequired(data.movingFrom)) errors.movingFrom = 'Pickup location is required'
  if (!isRequired(data.movingTo)) errors.movingTo = 'Destination is required'
  if (!isRequired(data.serviceType)) errors.serviceType = 'Please select a service'
  return errors
}
