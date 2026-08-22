import type { CertificationItem, EducationItem, LanguageItem } from './types'

export const education: EducationItem[] = [
  {
    id: 'uoc-bsc',
    degree: {
      en: "Bachelor's Degree in Computer Science",
      es: 'Grado en Ingeniería Informática',
    },
    institution: {
      en: 'Universitat Oberta de Catalunya (UOC)',
      es: 'Universitat Oberta de Catalunya (UOC)',
    },
    period: '2023 – 2026',
  },
  {
    id: 'ilerna-cfgs',
    degree: {
      en: 'Higher Education Course in Multiplatform Apps Development',
      es: 'CFGS en Desarrollo de Aplicaciones Multiplataforma',
    },
    institution: {
      en: 'Ilerna FP Online',
      es: 'Ilerna FP Online',
    },
    period: '2022 – 2023',
  },
  {
    id: 'uma-ma',
    degree: {
      en: "Master's Degree in English Studies and Multilingual and Intercultural Communication",
      es: 'Máster en Estudios Ingleses y Comunicación Multilingüe e Intercultural',
    },
    institution: {
      en: 'University of Malaga (UMA)',
      es: 'Universidad de Málaga (UMA)',
    },
    period: '2019 – 2020',
    certificateImage: 'MATitle.jpg',
  },
  {
    id: 'uma-ba',
    degree: {
      en: "Bachelor's Degree in Translation and Interpreting (EN/FR/DE/ES)",
      es: 'Grado en Traducción e Interpretación (EN/FR/DE/ES)',
    },
    institution: {
      en: 'University of Malaga (UMA)',
      es: 'Universidad de Málaga (UMA)',
    },
    period: '2014 – 2018',
    certificateImage: 'BATitle.jpg',
  },
]

export const certifications: CertificationItem[] = [
  {
    id: 'rolling-bootcamp',
    title: {
      en: 'Bootcamp in Full-Stack Development',
      es: 'Bootcamp en Desarrollo Full-Stack',
    },
    issuer: 'Rolling Code School',
    period: '2022 – 2023',
    tech: ['MERN', 'React', 'Node.js', 'MongoDB'],
    certificateImage: 'RollingTitle.png',
  },
  {
    id: 'spring-angular',
    title: {
      en: 'Spring Boot and Angular Full Stack',
      es: 'Spring Boot y Angular Full Stack',
    },
    issuer: 'Udemy',
    period: '2022',
    tech: ['Spring Boot', 'Java', 'Angular', 'Docker', 'SQL'],
    certificateImage: 'AngularSpringFullStackTitle.jpg',
  },
]

export const languages: LanguageItem[] = [
  {
    name: { en: 'Spanish', es: 'Español' },
    level: { en: 'Native or Bilingual', es: 'Nativo o bilingüe' },
    stars: 5,
  },
  {
    name: { en: 'English', es: 'Inglés' },
    level: { en: 'Professional Working (C1 TOEFL)', es: 'Profesional (C1 TOEFL)' },
    stars: 4.5,
    certificateImage: 'TOEFLTitle.jpg',
  },
  {
    name: { en: 'German', es: 'Alemán' },
    level: { en: 'Professional Working (B1 TELC)', es: 'Profesional (B1 TELC)' },
    stars: 3,
    certificateImage: 'GermanTELCTitle.jpg',
  },
  {
    name: { en: 'French', es: 'Francés' },
    level: { en: 'Professional Working (B1)', es: 'Profesional (B1)' },
    stars: 3,
  },
]
