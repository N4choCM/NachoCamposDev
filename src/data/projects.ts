import type { ProjectItem } from './types'

export const projects: ProjectItem[] = [
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
    id: 'nacho-gpt',
    title: 'Nacho-GPT',
    image: 'Nacho-gpt-lg.jpg',
    tech: ['Python', 'Reflex', 'OpenAI'],
    description: {
      en: 'ChatGPT clone powered by GPT-3.5, built with Python and the Reflex framework.',
      es: 'Clon de ChatGPT con GPT-3.5, construido con Python y el framework Reflex.',
    },
    links: {
      github: 'https://github.com/N4choCM/Nacho_GPT',
      demo: 'https://www.youtube.com/watch?v=bZS5Ut1ctFI',
    },
  },
  {
    id: 'flagged',
    title: 'Flagged!',
    image: 'flagged.jpg',
    tech: ['Kotlin', 'Android'],
    description: {
      en: 'Flag quiz Android app published on Google Play Store.',
      es: 'App Android de quiz de banderas publicada en Google Play Store.',
    },
    links: {
      github: 'https://github.com/N4choCM/flagged',
      store: 'https://play.google.com/store/apps/details?id=com.nachocampos.flagged',
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
