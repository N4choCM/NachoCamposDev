import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  id?: string
}

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-violet-500" />
    </div>
  )
}

interface TechBadgeProps {
  label: string
}

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-600 ring-1 ring-brand-500/20 dark:text-brand-300">
      {label}
    </span>
  )
}

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  target?: string
  rel?: string
}

const variantClasses = {
  primary:
    'bg-gradient-to-r from-cyan-500 to-brand-600 text-white hover:from-cyan-400 hover:to-brand-500 shadow-lg shadow-brand-500/30',
  secondary:
    'border border-cyan-300/60 bg-white/80 text-zinc-800 shadow-sm shadow-cyan-500/10 hover:border-cyan-400 hover:bg-cyan-50/50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:shadow-none',
  ghost: 'text-zinc-600 hover:bg-cyan-50 hover:text-brand-700 dark:text-zinc-400 dark:hover:bg-zinc-800',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  target,
  rel,
}: ButtonProps) {
  const classes = `inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
