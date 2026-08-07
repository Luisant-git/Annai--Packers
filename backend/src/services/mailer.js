const nodemailer = require('nodemailer')
const fs = require('fs')
const path = require('path')
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

  // prepare inline logo attachment (if present)
  const attachments = []
  try {
    const logoPath = path.join(__dirname, '..', 'assets', 'logo-email.png')
    if (fs.existsSync(logoPath)) {
      const logoBuffer = fs.readFileSync(logoPath)
      attachments.push({
        filename: 'logo-email.png',
        content: logoBuffer,
        contentType: 'image/png',
        cid: 'annai_logo',
        contentDisposition: 'inline',
      })
    } else {
      console.warn(`[mailer] logo not found at ${logoPath}`)
    }
  } catch (e) {
    console.warn('[mailer] failed to read logo file for embedding:', e.message)
  }

  try {
    const info = await getTransporter().sendMail({
      from: mail.from,
      to,
      subject,
      html,
      attachments,
      replyTo,
    })

    // Helpful debug/log: messageId and accepted recipients
    console.info('[mailer] message sent:', { messageId: info.messageId, accepted: info.accepted })
  } catch (err) {
    console.error('[mailer] Failed to send email:', err.message)
  }
}

function sendEnquiryNotification(enquiry) {
  return sendMail({
    to: mail.to,
    subject: `📩 New Contact Enquiry – Annai Packers & Movers`,
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
    subject: `📦 New Quote Request Received – Annai Packers & Movers`,
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
