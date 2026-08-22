import {
  profile,
  experience,
  projects,
  education,
  certifications,
  languages,
  skills,
} from './index'

export function buildKbFile(): string {
  const file = {
    profile: {
      name: profile.name,
      title: profile.title,
      location: profile.location,
      bio: profile.bio,
      highlights: profile.highlights,
      email: profile.email,
      phone: profile.phone,
      social: profile.social,
    },
    experience: experience.map((item) => ({
      company: item.company,
      role: item.role,
      location: item.location,
      period: item.period,
      current: item.current ?? false,
      tech: item.tech,
      highlights: item.highlights,
    })),
    projects: projects.map((item) => ({
      title: item.title,
      tech: item.tech,
      description: item.description,
      links: item.links,
    })),
    education: education.map((item) => ({
      degree: item.degree,
      institution: item.institution,
      period: item.period,
    })),
    certifications: certifications.map((item) => ({
      title: item.title,
      issuer: item.issuer,
      period: item.period,
      tech: item.tech,
    })),
    languages: languages.map((item) => ({
      name: item.name,
      level: item.level,
    })),
    skills: skills.map((item) => ({
      category: item.title,
      skills: item.skills,
    })),
  }

  return JSON.stringify(file, null, 2)
}

export const SYSTEM_PROMPT = `You are a helpful assistant on Nacho Campos Martí's personal portfolio website.
Answer questions about Nacho using ONLY the knowledge base provided below.
If you don't know something from the knowledge base, say so honestly — do not invent information.
Keep answers concise, friendly, and professional. Match the language the user writes in (English or Spanish).
When relevant, mention specific technologies, projects, or experiences from the knowledge base.

KNOWLEDGE BASE:
`
