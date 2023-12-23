import { GithubIcon, LinkedinIcon } from 'lucide-react'

export const navLinks = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/ref',
    name: 'My References'
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
