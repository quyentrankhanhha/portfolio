'use client'
import React, { useEffect, useState } from 'react'
import ThemeToggler from './ThemeToggler'
import Logo from './Logo'
import Nav from './Nav'
import MobileNav from './MobileNav'

export default function Header() {
  const [header, setHeader] = useState<boolean>(false)

  const scrollHeader = () => {
    if (window && window.scrollY >= 20) {
      setHeader(true)
    } else setHeader(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)
    return () => {
      window.removeEventListener('scroll', scrollHeader)
    }
  }, [])

  return (
    <header
      className={`${
        header ? 'bg-white py-4 shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all`}
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
