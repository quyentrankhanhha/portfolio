import { GithubIcon, LinkedinIcon } from 'lucide-react'

export const navLinks = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '#about',
    name: 'about me'
  },
  {
    path: '#experience',
    name: 'experiences'
  },
  {
    path: '#project',
    name: 'projects'
  },
  {
    path: '/contact',
    name: 'contact'
  }
]

export const socialLinks = [
  { path: 'https://github.com/quyentrankhanhha', name: <LinkedinIcon /> },
  { path: 'https://www.linkedin.com/in/ha-quyen/', name: <GithubIcon /> }
]
