import type { SkillCategory } from './types'

export const skills: SkillCategory[] = [
  {
    id: 'backend',
    title: { en: 'Backend', es: 'Backend' },
    skills: [
      'Java',
      'Kotlin',
      'Spring Boot',
      'Python',
      'FastAPI',
      'Node.js',
      'Express.js',
      'REST APIs',
      'Microservices',
      'PostgreSQL',
      'JUnit 5',
      'Mockito',
    ],
  },
  {
    id: 'cloud',
    title: { en: 'Cloud & DevOps', es: 'Cloud y DevOps' },
    skills: [
      'AWS (SQS, S3)',
      'Microsoft Azure',
      'Azure Service Bus',
      'Azure Container Instances',
      'CI/CD',
      'Docker',
      'Netlify',
    ],
  },
  {
    id: 'ai',
    title: { en: 'AI & Automation', es: 'IA y Automatización' },
    skills: [
      'Azure OpenAI',
      'LLM Integrations',
      'n8n',
      'NLP',
      'Event-driven Systems',
    ],
  },
  {
    id: 'frontend',
    title: { en: 'Frontend', es: 'Frontend' },
    skills: ['React', 'Angular', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    id: 'tools',
    title: { en: 'Tools & Methods', es: 'Herramientas y Métodos' },
    skills: [
      'Git',
      'Docusaurus',
      'Mermaid',
      'Postman',
      'Insomnia',
      'Thymeleaf',
      'Clean Architecture',
    ],
  },
]
