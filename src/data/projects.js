import plushImage from '@/assets/projects/plush-web.png'
import kiapImage from '@/assets/projects/kiap-web.png'
import bmImage from '@/assets/projects/bm-web.png'
import bmmcImage from '@/assets/projects/bmmc-web.png'
import lokaJamuImage from '@/assets/projects/lokajamu-api.jpg'
import siskapiImage from '@/assets/projects/siskapi-web.png'

export const projects = [
  {
    name: 'Plush.',
    description: "My first web project — a product catalog site for clothing, shoes, and more. Focused on UI and user experience, without payment integration.",
    image: plushImage,
    tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
    preview: '',
    repository: ''
  },
  {
    name: 'Kesehatan Ibu dan Anak Pintar',
    description: "A web platform for maternal and child health, featuring queue management, medical history, and parenting guides.",
    image: kiapImage,
    tech: ['CodeIgniter', 'Bootstrap', 'Javascript', 'MySQL'],
    preview: '',
    repository: 'https://github.com/rezyanto263/kiap'
  },
  {
    name: 'Boat Master',
    description: "A boat tour booking platform with key features including online reservations, integrated payment gateway, and QR code-based ticketing for seamless check-in.",
    image: bmImage,
    tech: ['CodeIgniter', 'Bootstrap', 'JQuery', 'MySQL'],
    preview: '',
    repository: 'https://github.com/rezyanto263/boat_master'
  },
  {
    name: 'Bali Mitra Medical Center (BMMC)',
    description: 'A web application for managing health insurance claims between companies and partner hospitals. Built with CodeIgniter, Bootstrap, and MySQL to streamline verification and tracking processes.',
    image: bmmcImage,
    tech: ['CodeIgniter', 'Bootstrap', 'JQuery', 'MySQL'],
    preview: '',
    repository: 'https://github.com/rezyanto263/bmmc'
  },
  {
    name: 'Loka Jamu Backend',
    description: 'A backend API built with Express.js and deployed on Google Cloud (App Engine, Cloud SQL, Cloud Storage), powering a traditional herbal remedy app.',
    image: lokaJamuImage,
    tech: ['Node JS', 'Express JS', 'Google Cloud'],
    preview: '',
    repository: 'https://github.com/rezyanto263/lokajamu-backend'
  },
  {
    name: 'SISKAPI',
    description: 'A student activity point tracking system that collects and converts certificates into SKKM points. Once fulfilled, the system generates an SKPI document to accompany the diploma.',
    image: siskapiImage,
    tech: ['Laravel', 'Tailwind','Javascript', 'MySQL'],
    preview: '',
    repository: 'https://github.com/Ina-Ari/SISKAPI'
  },
]