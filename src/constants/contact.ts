/** WhatsApp click-to-chat base URL (https://developers.facebook.com/docs/whatsapp/click-to-chat). */
export const WHATSAPP_BASE_URL = 'https://wa.me'

export function buildWhatsAppUrl(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, '')
  return `${WHATSAPP_BASE_URL}/${digits}?text=${encodeURIComponent(message)}`
}
