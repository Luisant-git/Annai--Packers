import { COMPANY } from './constants'

function digitsOnly(raw = '') {
  return String(raw).replace(/[^0-9]/g, '')
}

export function isWhatsAppNumber(raw) {
  return digitsOnly(raw) === digitsOnly(COMPANY.whatsapp)
}

export function getContactHref(raw) {
  if (!raw) return '#'
  if (isWhatsAppNumber(raw)) {
    return `https://wa.me/${digitsOnly(raw)}`
  }
  return `tel:${raw}`
}

export function isWaMe(href) {
  return typeof href === 'string' && href.startsWith('https://wa.me/')
}

export default getContactHref
