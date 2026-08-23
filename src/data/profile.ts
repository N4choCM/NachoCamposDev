import type { LocalizedString, LocalizedStringArray, SocialLink } from './types'

export interface StoryBeat {
  id: string
  emoji: string
  title: LocalizedString
  description: LocalizedString
}

export interface StatItem {
  value: string
  label: LocalizedString
}

export const profile = {
  name: 'Juan Ignacio Campos Martí',
  shortName: 'Nacho Campos',
  title: {
    en: 'Backend Engineer | Java • Kotlin • Spring Boot • Python • FastAPI | AWS & Azure',
    es: 'Ingeniero Backend | Java • Kotlin • Spring Boot • Python • FastAPI | AWS y Azure',
  } satisfies LocalizedString,
  location: {
    en: 'Málaga (Spain)',
    es: 'Málaga (España)',
  } satisfies LocalizedString,
  tagline: {
    en: 'I turn complex business problems into clean, scalable backend systems — from microservices to AI-powered workflows.',
    es: 'Convierto problemas de negocio complejos en sistemas backend limpios y escalables — de microservicios a flujos impulsados por IA.',
  } satisfies LocalizedString,
  aboutIntro: {
    en: 'Backend engineer with a linguistics background — I bring analytical precision and a product mindset to every system I build.',
    es: 'Ingeniero backend con formación en lingüística — aporto precisión analítica y mentalidad de producto a cada sistema que construyo.',
  } satisfies LocalizedString,
  story: [
    {
      id: 'linguistics',
      emoji: '🌍',
      title: { en: 'Languages first', es: 'Primero, los idiomas' },
      description: {
        en: 'Translation & Linguistics graduate — analytical thinking about human language.',
        es: 'Graduado en Traducción e Interpretación — pensamiento analítico sobre el lenguaje humano.',
      },
    },
    {
      id: 'pivot',
      emoji: '⚡',
      title: { en: 'The pivot', es: 'El giro' },
      description: {
        en: 'Discovered that same mindset maps perfectly to software engineering.',
        es: 'Descubrí que esa misma mentalidad encajaba perfectamente con la ingeniería de software.',
      },
    },
    {
      id: 'backend',
      emoji: '🔧',
      title: { en: 'Backend focus', es: 'Foco backend' },
      description: {
        en: '3+ years building Java/Kotlin, Python & cloud-native systems.',
        es: '3+ años construyendo sistemas Java/Kotlin, Python y cloud-native.',
      },
    },
    {
      id: 'today',
      emoji: '🚀',
      title: { en: 'Today', es: 'Hoy' },
      description: {
        en: 'Designing APIs, event-driven architectures & AI integrations at scale.',
        es: 'Diseñando APIs, arquitecturas event-driven e integraciones de IA a escala.',
      },
    },
  ] satisfies StoryBeat[],
  stats: [
    { value: '3+', label: { en: 'Years of experience', es: 'Años de experiencia' } },
    { value: '4', label: { en: 'Languages', es: 'Idiomas' } },
    { value: '2', label: { en: 'Cloud platforms', es: 'Plataformas cloud' } },
    { value: '10+', label: { en: 'Technologies', es: 'Tecnologías' } },
  ] satisfies StatItem[],
  bio: {
    en: 'I build backend systems for cloud and AI products. After graduating in Translation and Linguistics, I discovered that the analytical thinking required to understand human languages transferred surprisingly well to software engineering. That led me to complete a Bachelor\'s Degree in Computer Engineering and transition into backend development. Over the last 3+ years I\'ve worked on Java/Kotlin & Spring Boot microservices, Python/FastAPI services, cloud-native architectures (AWS & Azure), AI integrations using Azure OpenAI, event-driven systems, and REST APIs. I particularly enjoy designing clean architectures, simplifying complex systems, and working close to product teams to transform business requirements into scalable software. Outside work I\'m passionate about endurance sports and continuous learning.',
    es: 'Desarrollo sistemas backend para productos cloud e IA. Tras graduarme en Traducción e Interpretación, descubrí que el pensamiento analítico necesario para entender lenguas humanas encajaba sorprendentemente bien con la ingeniería de software. Eso me llevó a completar un Grado en Ingeniería Informática y a hacer la transición al desarrollo backend. En los últimos 3+ años he trabajado con microservicios Java/Kotlin y Spring Boot, servicios Python/FastAPI, arquitecturas cloud-native (AWS y Azure), integraciones de IA con Azure OpenAI, sistemas event-driven y APIs REST. Disfruto especialmente diseñando arquitecturas limpias, simplificando sistemas complejos y trabajando cerca de equipos de producto para convertir requisitos de negocio en software escalable. Fuera del trabajo me apasionan los deportes de resistencia y el aprendizaje continuo.',
  } satisfies LocalizedString,
  highlights: {
    en: [
      'Cloud-native on AWS & Azure',
      'AI integrations with Azure OpenAI',
      'Event-driven & clean architecture',
      'Multilingual: EN · DE · FR · ES',
    ],
    es: [
      'Cloud-native en AWS y Azure',
      'Integraciones IA con Azure OpenAI',
      'Event-driven y arquitectura limpia',
      'Multilingüe: EN · DE · FR · ES',
    ],
  } satisfies LocalizedStringArray,
  email: 'nachocamposmarti@gmail.com',
  phone: '+34 628 523 682',
  social: [
    { name: 'GitHub', url: 'https://github.com/N4choCM', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ignacio-campos-marti', icon: 'linkedin' },
    { name: 'YouTube', url: 'https://www.youtube.com/@NachoCamposMarti', icon: 'youtube' },
  ] satisfies SocialLink[],
}
