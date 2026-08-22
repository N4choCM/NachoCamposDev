import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { PageBackground } from './PageBackground'
import { ChatWidget } from '@/components/chat/ChatWidget'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <PageBackground />
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
