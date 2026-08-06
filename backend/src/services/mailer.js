const nodemailer = require('nodemailer')
const { mail } = require('../config/env')
const {
  enquiryCustomerTemplate,
  enquiryAdminTemplate,
  quoteCustomerTemplate,
  quoteAdminTemplate,
} = require('./emailTemplates')

let transporter = null

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: mail.host,
      port: mail.port,
      secure: mail.secure,
      auth: mail.user ? { user: mail.user, pass: mail.pass } : undefined,
    })
  }
  return transporter
}

async function sendMail({ to, subject, html, replyTo }) {
  if (!mail.host || !mail.user) {
    console.warn('[mailer] SMTP is not configured — skipping email send.')
    return
  }

  try {
    await getTransporter().sendMail({
      from: mail.from,
      to,
      subject,
      html,
      replyTo,
    })
  } catch (err) {
    console.error('[mailer] Failed to send email:', err.message)
  }
}

function sendEnquiryNotification(enquiry) {
  return sendMail({
    to: mail.to,
    subject: `New Enquiry from ${enquiry.name}`,
    html: enquiryAdminTemplate(enquiry),
    replyTo: enquiry.email,
  })
}

function sendEnquiryConfirmation(enquiry) {
  return sendMail({
    to: enquiry.email,
    subject: 'We received your enquiry — Annai Packers & Movers',
    html: enquiryCustomerTemplate(enquiry),
  })
}

function sendQuoteNotification(quote) {
  return sendMail({
    to: mail.to,
    subject: `New Quote Request from ${quote.name}`,
    html: quoteAdminTemplate(quote),
    replyTo: quote.email,
  })
}

function sendQuoteConfirmation(quote) {
  return sendMail({
    to: quote.email,
    subject: 'Your quote request — Annai Packers & Movers',
    html: quoteCustomerTemplate(quote),
  })
}

module.exports = {
  sendEnquiryNotification,
  sendEnquiryConfirmation,
  sendQuoteNotification,
  sendQuoteConfirmation,
}
