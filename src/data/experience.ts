import type { ExperienceItem } from './types'

export const experience: ExperienceItem[] = [
  {
    id: 'phoenix-security',
    company: 'Phoenix Security | ASPM',
    role: {
      en: 'Backend Engineer',
      es: 'Ingeniero Backend',
    },
    location: {
      en: 'Málaga (Spain)',
      es: 'Málaga (España)',
    },
    period: {
      en: 'Dec 2025 – Present',
      es: 'Dic 2025 – Actualidad',
    },
    current: true,
    tech: ['Python', 'Kotlin', 'Spring Boot', 'PostgreSQL', 'AWS SQS', 'AWS S3'],
    highlights: {
      en: [
        'Developed Python-based automation tools for bulk client data ingestion and automated PDF report generation.',
        'Designed, maintained, and improved backend services using Kotlin, Spring Boot, and PostgreSQL.',
        'Integrated multiple third-party security scanners into the platform to streamline vulnerability management workflows.',
        'Implemented event-driven integrations using AWS services such as Amazon SQS and Amazon S3.',
        'Designed AI-agnostic workflows, reusable skills, and rule-based automations compatible with multiple AI-assisted development platforms.',
      ],
      es: [
        'Desarrollé herramientas de automatización en Python para ingesta masiva de datos de clientes y generación automatizada de informes PDF.',
        'Diseñé, mantuve y mejoré servicios backend con Kotlin, Spring Boot y PostgreSQL.',
        'Integré múltiples escáneres de seguridad de terceros para optimizar flujos de gestión de vulnerabilidades.',
        'Implementé integraciones event-driven con servicios AWS como Amazon SQS y Amazon S3.',
        'Diseñé flujos agnósticos de IA, skills reutilizables y automatizaciones basadas en reglas compatibles con múltiples plataformas de desarrollo asistido por IA.',
      ],
    },
  },
  {
    id: 'dekra',
    company: 'DEKRA Digital & Product Solutions',
    role: {
      en: 'Full Stack Developer',
      es: 'Desarrollador Full Stack',
    },
    location: {
      en: 'Málaga (Spain)',
      es: 'Málaga (España)',
    },
    period: {
      en: 'Jan 2023 – Dec 2025',
      es: 'Ene 2023 – Dic 2025',
    },
    tech: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'React', 'Azure', 'Azure OpenAI', 'n8n'],
    highlights: {
      en: [
        'Developed and maintained REST APIs and microservices using Java and Spring Boot for AI-driven applications.',
        'Built and maintained React frontends integrated with backend services for internal and customer-facing tools.',
        'Implemented asynchronous communication between backend services and Azure Container Instances using Azure Service Bus.',
        'Developed AI-powered workflows using Azure OpenAI, n8n, Python, and FastAPI.',
        'Designed backend architectures, application workflows, and cloud infrastructure documentation using Mermaid and Draw.io.',
        'Developed unit tests with JUnit 5 and Mockito; contributed to CI/CD pipelines on Microsoft Azure.',
        'Maintained technical documentation and API references using Docusaurus.',
      ],
      es: [
        'Desarrollé y mantuve APIs REST y microservicios con Java y Spring Boot para aplicaciones impulsadas por IA.',
        'Desarrollé y mantuve frontends en React integrados con servicios backend para herramientas internas y de cara al cliente.',
        'Implementé comunicación asíncrona entre servicios backend y Azure Container Instances mediante Azure Service Bus.',
        'Desarrollé flujos con IA usando Azure OpenAI, n8n, Python y FastAPI.',
        'Diseñé arquitecturas backend, flujos de aplicación y documentación de infraestructura cloud con Mermaid y Draw.io.',
        'Desarrollé tests unitarios con JUnit 5 y Mockito; contribuí a pipelines CI/CD en Microsoft Azure.',
        'Mantuve documentación técnica y referencias de API con Docusaurus.',
      ],
    },
  },
  {
    id: 'pre-tech',
    company: {
      en: 'Language & Linguistics Background',
      es: 'Trayectoria en Lenguas y Lingüística',
    },
    role: {
      en: 'Translator, Teacher & NLP Annotator',
      es: 'Traductor, profesor y anotador de NLP',
    },
    location: {
      en: 'Spain & France',
      es: 'España y Francia',
    },
    period: {
      en: '2017 – 2022',
      es: '2017 – 2022',
    },
    tech: ['NLP', 'Translation', 'Language Teaching'],
    highlights: {
      en: [
        'Spanish linguist annotator at Meteojob – Visiotalent (Paris), improving NLP models for a recruitment platform.',
        'Spanish and English teacher at La Playa Escuela de Español (A2–B2 levels).',
        'Languages teacher at Academia de idiomas Inma: Cambridge exams (A2–C1), Spanish for foreigners, French B1, German A2–B1.',
        'Spanish conversation assistant at Académie de Versailles (Boulogne-Billancourt).',
        'Professional translator EN ↔ ES at PALABRAS and BIC EURONOVA.',
      ],
      es: [
        'Anotador lingüista de español en Meteojob – Visiotalent (París), mejorando modelos de NLP para una plataforma de reclutamiento.',
        'Profesor de español e inglés en La Playa Escuela de Español (niveles A2–B2).',
        'Profesor de idiomas en Academia de idiomas Inma: exámenes Cambridge (A2–C1), español para extranjeros, francés B1, alemán A2–B1.',
        'Auxiliar de conversación de lengua española en la Académie de Versailles (Boulogne-Billancourt).',
        'Traductor profesional EN ↔ ES en PALABRAS y BIC EURONOVA.',
      ],
    },
  },
]
