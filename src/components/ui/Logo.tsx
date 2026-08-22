import { Link, useLocation } from 'react-router-dom'
import logo from '@/assets/logo.png'

interface LogoProps {
  className?: string
}

export function Logo({ className = 'h-12 w-12' }: LogoProps) {
  const location = useLocation()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <Link
      to="/"
      onClick={handleClick}
      className="group relative block shrink-0"
      aria-label="Nacho Campos — Home"
    >
      <div
        className={`${className} relative aspect-square overflow-hidden rounded-full transition duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-brand-500/40`}
      >
        <img
          src={logo}
          alt=""
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <div className="absolute -inset-1 -z-10 aspect-square rounded-full bg-gradient-to-br from-cyan-400/0 to-violet-500/0 opacity-0 blur-lg transition duration-300 group-hover:from-cyan-400/35 group-hover:to-violet-500/35 group-hover:opacity-100" />
    </Link>
  )
}
