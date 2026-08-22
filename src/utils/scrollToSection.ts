/** Fixed navbar height (h-16) plus breathing room */
export const NAV_SCROLL_OFFSET = 80

export function scrollToSection(id: string, behavior: ScrollBehavior = 'smooth') {
  const el = document.getElementById(id)
  if (!el) return false

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET
  window.scrollTo({ top, behavior })
  return true
}

export function scrollToSectionWhenReady(
  id: string,
  { maxAttempts = 30, behavior = 'smooth' }: { maxAttempts?: number; behavior?: ScrollBehavior } = {},
) {
  let attempts = 0

  const tryScroll = () => {
    if (scrollToSection(id, behavior)) return
    attempts += 1
    if (attempts < maxAttempts) requestAnimationFrame(tryScroll)
  }

  requestAnimationFrame(tryScroll)
}
