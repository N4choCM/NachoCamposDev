import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSectionWhenReady } from '@/utils/scrollToSection'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, '')
      if (id) scrollToSectionWhenReady(id)
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
