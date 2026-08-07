// templates: image is embedded via CID by the mailer

const BRAND = {
  primary: '#f68b0c',
  dark: '#0d2c46',
  muted: '#64748b',
  bg: '#f4f7fb',
}

// Use CID-based image embedding handled by the mailer. Do not inline local file paths here.

function esc(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function row(label, value, multiline = false) {
  return `
    <tr>
      <td style="width:150px;padding:12px 14px;border-top:1px solid rgba(13,44,70,0.08);color:${BRAND.muted};font-weight:700;font-size:12px;vertical-align:top;">
        ${esc(label)}
      </td>
      <td style="padding:12px 14px;border-top:1px solid rgba(13,44,70,0.08);color:${BRAND.dark};font-weight:600;font-size:13px;${
        multiline ? 'white-space:pre-line;' : ''
      }">
        ${esc(value ?? '—')}
      </td>
    </tr>`
}

function badge(label) {
  return `<span style="display:inline-block;padding:6px 12px;border-radius:999px;background:#ffffff;border:1px solid rgba(13,44,70,0.1);font-size:11px;color:${BRAND.dark};font-weight:700;margin:0 6px 6px 0;">${esc(
    label
  )}</span>`
}

function layout({ heading, intro, rowsHtml, badges = [], nextSteps = [], footerNote = '' }) {
  const year = new Date().getFullYear()

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>Annai Packers &amp; Movers</title>
  <style>
    @media (max-width: 620px) {
      .email-card { width: 100% !important; border-radius: 0 !important; }
      .email-header { padding: 26px 20px 22px !important; }
      .email-logo { width: 170px !important; }
      .email-section { padding-left: 20px !important; padding-right: 20px !important; }
      .email-heading { font-size: 17px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${BRAND.bg};font-family:Inter,Segoe UI,Arial,sans-serif;color:${BRAND.dark};">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.bg};padding:32px 12px;">
    <tr>
      <td align="center">
        <table class="email-card" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 16px 40px rgba(13,44,70,0.12);">

          <tr>
            <td style="height:4px;background:linear-gradient(90deg, ${BRAND.primary}, #ffb64f);"></td>
          </tr>

          <tr>
            <td class="email-header" style="padding:36px 28px 30px;background:${BRAND.dark};text-align:center;">
              <img
                src="cid:annai_logo"
                width="220"
                alt="Annai Packers & Movers"
                class="email-logo"
                style="display:inline-block;width:220px;max-width:70%;height:auto;"
              />
              <p style="margin:16px 0 0;font-size:12px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.65);">
                Safe &bull; Secure &bull; Stress-Free
              </p>
            </td>
          </tr>

          <tr>
            <td class="email-section" style="padding:28px 28px 0;">
              <div style="border-radius:14px;background:linear-gradient(135deg, rgba(246,139,12,0.12), rgba(13,44,70,0.03));border:1px solid rgba(13,44,70,0.06);padding:20px;">
                <div class="email-heading" style="font-size:19px;font-weight:800;line-height:1.35;color:${BRAND.dark};">${esc(heading)}</div>
                <div style="margin-top:10px;font-size:13.5px;line-height:1.7;color:${BRAND.muted};">${intro}</div>
                ${badges.length ? `<div style="margin-top:16px;">${badges.map(badge).join('')}</div>` : ''}
              </div>
            </td>
          </tr>

          <tr>
            <td class="email-section" style="padding:20px 28px 0;">
              <div style="border-radius:14px;border:1px solid rgba(13,44,70,0.1);overflow:hidden;">
                <div style="padding:12px 14px;background:rgba(13,44,70,0.03);font-weight:800;color:${BRAND.dark};font-size:12.5px;">
                  Details
                </div>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  ${rowsHtml}
                </table>
              </div>
            </td>
          </tr>

          ${footerNote ? `<tr>
            <td class="email-section" style="padding:18px 28px 0;">
              <div style="border-radius:10px;background:rgba(13,44,70,0.03);padding:12px 14px;color:${BRAND.dark};font-size:13px;">
                ${footerNote}
              </div>
            </td>
          </tr>` : ''}

          ${
            nextSteps.length
              ? `<tr>
            <td class="email-section" style="padding:20px 28px 0;">
              <div style="border-radius:14px;border:1px dashed rgba(246,139,12,0.5);background:rgba(246,139,12,0.06);padding:16px 18px;">
                <div style="font-weight:800;color:${BRAND.dark};font-size:12.5px;">What happens next?</div>
                <ul style="margin:10px 0 0 18px;padding:0;color:${BRAND.muted};font-size:12.5px;line-height:1.8;">
                  ${nextSteps.map((step) => `<li>${esc(step)}</li>`).join('')}
                </ul>
              </div>
            </td>
          </tr>`
              : ''
          }

          <tr>
            <td class="email-section" style="padding:24px 28px 28px;">
              <div style="height:1px;background:rgba(13,44,70,0.08);margin:8px 0 18px;"></div>
              <div style="font-size:11.5px;color:${BRAND.muted};text-align:center;line-height:1.7;">
                &copy; ${year} Annai Packers &amp; Movers<br/>
                Coimbatore &bull; Tamil Nadu &bull; India
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function enquiryCustomerTemplate(enquiry) {
  return layout({
    heading: `Hi ${enquiry.name}, we've received your enquiry`,
    intro:
      "Thank you for contacting Annai Packers &amp; Movers. Our team will review your message and get back to you within 24 hours.",
    badges: ['Insured handling', 'Professional crew', 'Fast support'],
    rowsHtml: [
      row('Subject', enquiry.subject),
      row('Message', enquiry.message, true),
    ].join(''),
    nextSteps: [
      'Our team reviews your enquiry',
      'A specialist reaches out with guidance or an estimate',
      'We schedule a free site survey if needed',
    ],
  })
}

function enquiryAdminTemplate(enquiry) {
  return layout({
    heading: 'New Contact Enquiry',
    intro: 'A new enquiry was submitted on the website.',
    rowsHtml: [
      row('Name', enquiry.name),
      row('Email', enquiry.email),
      row('Phone', enquiry.phone),
      row('Subject', enquiry.subject),
      row('Message', enquiry.message, true),
    ].join(''),
  })
}

function quoteCustomerTemplate(quote) {
  return layout({
    heading: `Hi ${quote.name}, your quote request is in`,
    intro:
      "Thanks for requesting a quote from Annai Packers &amp; Movers. Here's a summary of what you shared — our team will follow up shortly with a transparent, itemised estimate.",
    badges: ['No hidden charges', 'GPS-tracked fleet', 'Insured transit'],
    rowsHtml: [
      row('Moving From', quote.movingFrom),
      row('Moving To', quote.movingTo),
      row('Service Type', quote.serviceType),
      row('Property Type', quote.propertyType),
      row('Preferred Date', quote.moveDate),
      row('Estimated Size', quote.estimatedSize),
      row('Additional Details', quote.message, true),
    ].join(''),
    nextSteps: [
      'We confirm your pickup and drop details',
      'You receive a transparent, itemised quote',
      'Our crew arrives on schedule for packing and loading',
    ],
  })
}

function quoteAdminTemplate(quote) {
  const customerRows = [row('Name', quote.name), row('Email', quote.email), row('Phone', quote.phone)].join('')
  const movingRows = [
    row('Moving From', quote.movingFrom),
    row('Moving To', quote.movingTo),
    row('Preferred Date', quote.moveDate),
    row('Service Type', quote.serviceType),
    row('Property Type', quote.propertyType),
    row('Estimated Size', quote.estimatedSize),
  ].join('')
  const additional = row('Additional Requirements', quote.message, true)

  const rowsHtml = `
    <tr>
      <td colspan="2" style="padding:8px 14px 0 14px;">
        <strong style="font-size:14px;color:${BRAND.dark};">Customer Details</strong>
      </td>
    </tr>
    ${customerRows}
    <tr><td colspan="2" style="height:8px"></td></tr>
    <tr>
      <td colspan="2" style="padding:8px 14px 0 14px;">
        <strong style="font-size:14px;color:${BRAND.dark};">Moving Details</strong>
      </td>
    </tr>
    ${movingRows}
    <tr><td colspan="2" style="height:8px"></td></tr>
    <tr>
      <td colspan="2" style="padding:8px 14px 0 14px;">
        <strong style="font-size:14px;color:${BRAND.dark};">Additional Requirements</strong>
      </td>
    </tr>
    ${additional}
  `

  return layout({
    heading: 'New Quote Request Received',
    intro:
      'A new quotation request has been submitted through the Annai Packers &amp; Movers website. Please review the customer details below and contact the customer as soon as possible.',
    rowsHtml,
    footerNote:
      'Please contact the customer as soon as possible to provide a quotation and schedule the relocation.',
  })
}

module.exports = {
  enquiryCustomerTemplate,
  enquiryAdminTemplate,
  quoteCustomerTemplate,
  quoteAdminTemplate,
}
