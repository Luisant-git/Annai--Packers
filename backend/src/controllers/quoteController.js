const asyncHandler = require('../utils/asyncHandler')
const { sendQuoteNotification, sendQuoteConfirmation } = require('../services/mailer')

const createQuoteRequest = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    movingFrom,
    movingTo,
    moveDate,
    propertyType,
    serviceType,
    estimatedSize,
    message,
  } = req.body

  const quote = {
    name,
    email,
    phone,
    movingFrom,
    movingTo,
    moveDate,
    propertyType,
    serviceType,
    estimatedSize,
    message,
  }

  await Promise.all([sendQuoteNotification(quote), sendQuoteConfirmation(quote)])

  res.status(200).json({
    success: true,
    message: 'Your quote request has been submitted successfully.',
  })
})

module.exports = { createQuoteRequest }
