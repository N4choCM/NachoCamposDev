export type Locale = 'en' | 'es'

export type LocalizedString = Record<Locale, string>

export type LocalizedStringArray = Record<Locale, string[]>

export interface SocialLink {
  name: string
  url: string
  icon: 'github' | 'linkedin' | 'youtube' | 'email' | 'phone' | 'whatsapp'
}

export interface ExperienceItem {
  id: string
  company: LocalizedString | string
  role: LocalizedString
  location: LocalizedString
  period: LocalizedString
  current?: boolean
  tech: string[]
  highlights: LocalizedStringArray
}

export interface ProjectItem {
  id: string
  title: string
  image: string
  tech: string[]
  description: LocalizedString
  links: {
    github?: string
    demo?: string
    docs?: string
    store?: string
  }
}

export interface EducationItem {
  id: string
  degree: LocalizedString
  institution: LocalizedString
  period: string
  certificateImage?: string
}

export interface CertificationItem {
  id: string
  title: LocalizedString
  issuer: string
  period: string
  tech?: string[]
  certificateImage?: string
}

export interface LanguageItem {
  name: LocalizedString
  level: LocalizedString
  stars: number
  certificateImage?: string
}

export interface SkillCategory {
  id: string
  title: LocalizedString
  skills: string[]
}
