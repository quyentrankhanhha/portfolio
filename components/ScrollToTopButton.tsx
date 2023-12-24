'use client'

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { ChevronsUp } from 'lucide-react'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <Button
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } group fixed bottom-10 right-10 z-50 h-10 w-10 rounded-full p-1`}
      onClick={scrollToTop}
    >
      <ChevronsUp className='text-4xl group-hover:-translate-y-1' />
    </Button>
  )
}
