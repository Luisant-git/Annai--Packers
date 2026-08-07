const { sendQuoteConfirmation } = require('../src/services/mailer')

const testQuote = {
  name: 'Test User',
  email: process.env.TEST_EMAIL || process.env.SMTP_TEST_TO || 'you@example.com',
  phone: '9876543210',
  movingFrom: 'Test City A',
  movingTo: 'Test City B',
  serviceType: 'Household',
  propertyType: '2 BHK',
  moveDate: '2026-08-07',
  estimatedSize: '2 rooms',
  message: 'This is a test email to verify inline logo embedding.',
}

;(async () => {
  try {
    await sendQuoteConfirmation(testQuote)
    console.log('Test email sent (check inbox).')
  } catch (err) {
    console.error('Failed to send test email:', err)
  }
})()
