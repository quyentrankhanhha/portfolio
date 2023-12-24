'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { Button } from './ui/button'
import { MoonStar, SunIcon } from 'lucide-react'

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <Button
        variant='outline'
        size='icon'
        className='light:border-black hover:scale-105 dark:border-white'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        <MoonStar className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100' />
      </Button>
    </div>
  )
}

export default ThemeToggler
