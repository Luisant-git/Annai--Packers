const asyncHandler = require('../utils/asyncHandler')
const { sendEnquiryNotification, sendEnquiryConfirmation } = require('../services/mailer')

const createEnquiry = asyncHandler(async (req, res) => {
  const { name, email, phone, subject, message } = req.body
  const enquiry = { name, email, phone, subject, message }

  await Promise.all([sendEnquiryNotification(enquiry), sendEnquiryConfirmation(enquiry)])

  res.status(200).json({
    success: true,
    message: 'Your enquiry has been submitted successfully.',
  })
})

module.exports = { createEnquiry }
