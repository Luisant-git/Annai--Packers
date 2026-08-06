const ApiError = require('../utils/ApiError')

const isNonEmptyString = (v) => typeof v === 'string' && v.trim().length > 0
const isValidEmail = (v) => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
const isValidPhone = (v) => typeof v === 'string' && /^[+]?[\d\s-]{7,15}$/.test(v.trim())

function validateEnquiry(req, res, next) {
  const { name, email, phone, message } = req.body || {}
  const errors = {}

  if (!isNonEmptyString(name)) errors.name = 'Name is required'
  if (!isValidEmail(email)) errors.email = 'A valid email is required'
  if (!isValidPhone(phone)) errors.phone = 'A valid phone number is required'
  if (!isNonEmptyString(message)) errors.message = 'Message is required'

  if (Object.keys(errors).length > 0) {
    return next(Object.assign(new ApiError(422, 'Validation failed'), { errors }))
  }
  next()
}

function validateQuoteRequest(req, res, next) {
  const { name, email, phone, movingFrom, movingTo, serviceType } = req.body || {}
  const errors = {}

  if (!isNonEmptyString(name)) errors.name = 'Name is required'
  if (!isValidEmail(email)) errors.email = 'A valid email is required'
  if (!isValidPhone(phone)) errors.phone = 'A valid phone number is required'
  if (!isNonEmptyString(movingFrom)) errors.movingFrom = 'Pickup location is required'
  if (!isNonEmptyString(movingTo)) errors.movingTo = 'Destination is required'
  if (!isNonEmptyString(serviceType)) errors.serviceType = 'Service type is required'

  if (Object.keys(errors).length > 0) {
    return next(Object.assign(new ApiError(422, 'Validation failed'), { errors }))
  }
  next()
}

module.exports = { validateEnquiry, validateQuoteRequest }
