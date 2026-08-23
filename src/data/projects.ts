import type { ProjectItem } from './types'

export const projects: ProjectItem[] = [
  {
    id: 'vulnassist',
    title: 'VulnAssist',
    image: 'vulnassist.png',
    tech: ['Python', 'FastAPI', 'React', 'BERT', 'RoBERTa', 'Ollama', 'Docker'],
    description: {
      en: "Bachelor's dissertation in Computer Science: hybrid NLP conversational system for querying and analyzing cybersecurity vulnerabilities from NVD and MITRE ATT&CK, with intent classification, dialogue management, and grounded LLM responses.",
      es: 'TFG del Grado en Ingeniería Informática: sistema conversacional híbrido con NLP para consultar y analizar vulnerabilidades de ciberseguridad desde NVD y MITRE ATT&CK, con clasificación de intenciones, gestión de diálogo y respuestas LLM fundamentadas.',
    },
    links: {
      github: 'https://github.com/N4choCM/vuln-assist',
    },
  },
  {
    id: 'ruben-ruzafa',
    title: 'Rubén Ruzafa',
    image: 'rubenRuzafa.jpg',
    tech: ['React', 'EmailJS', 'Netlify'],
    description: {
      en: 'Official website for professional triathlete Rubén Ruzafa (7× world champion). Responsive landing with biography, achievements, calendar, gallery, contact, and a section where he offers personal coaching services.',
      es: 'Web oficial del triatleta profesional Rubén Ruzafa (7× campeón del mundo). Landing responsive con biografía, palmarés, calendario, galería, contacto y una sección donde ofrece sus servicios como entrenador personal.',
    },
    links: {
      github: 'https://github.com/N4choCM/webRubenRuzafa',
      demo: 'https://www.rubenruzafa.com',
    },
  },
  {
    id: 'redflix',
    title: 'Redflix REST API',
    image: 'redflixApiPic.jpg',
    tech: ['Node.js', 'Express.js', 'Python', 'PostgreSQL'],
    description: {
      en: 'Node.js/Express backend with a Python fake data generator for PostgreSQL. Features an email service and will support a responsive web app for watching movie trailers.',
      es: 'Backend Node.js/Express con generador de datos fake en Python para PostgreSQL. Incluye servicio de email y futura web app responsive para ver trailers de películas.',
    },
    links: {
      github: 'https://github.com/N4choCM/redflix-node',
      docs: 'https://documenter.getpostman.com/view/22117131/2s9YJW6Rbk',
    },
  },
  {
    id: 'rolling-eats',
    title: 'Rolling Eats',
    image: 'rollingEats.jpg',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    description: {
      en: 'Final bootcamp project: real-time order management platform built with the MERN stack.',
      es: 'Proyecto final del bootcamp: plataforma de gestión de pedidos en tiempo real con stack MERN.',
    },
    links: {
      github: 'https://github.com/N4choCM/rollingEats',
      demo: 'https://rolling-eats.netlify.app',
    },
  },
  {
    id: 'shadowbane',
    title: 'Shadowbane',
    image: 'shadowbane.jpg',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: {
      en: 'Browser-based dungeon escape video game built with vanilla JavaScript.',
      es: 'Videojuego de escape de mazmorras en el navegador, desarrollado con JavaScript vanilla.',
    },
    links: {
      github: 'https://github.com/N4choCM/shadowbane',
      demo: 'https://shadowbane.netlify.app/',
    },
  },
  {
    id: 'photogram',
    title: 'Photogram',
    image: 'photogramPic.jpg',
    tech: ['HTML', 'CSS'],
    description: {
      en: 'Photography blog developed during the Rolling Code School bootcamp.',
      es: 'Blog de fotografía desarrollado durante el bootcamp de Rolling Code School.',
    },
    links: {
      github: 'https://github.com/N4choCM/photogram',
      demo: 'https://photogramers.netlify.app/',
    },
  },
]
