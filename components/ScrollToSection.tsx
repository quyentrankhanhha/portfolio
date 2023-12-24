'use client'
import React from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/button'

type ScrollToSectionProps = {
  elementId: string
}

export default function ScrollToSection({ elementId }: ScrollToSectionProps) {
  const handleClickScroll = () => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <Button
      className='absolute bottom-10 left-2/4 hidden bg-transparent hover:bg-transparent md:flex xl:bottom-12'
      onClick={handleClickScroll}
    >
      <ChevronDown className='h-10 w-10 text-primary' />
    </Button>
  )
}
