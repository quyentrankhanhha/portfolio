import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { AlignJustify } from 'lucide-react'
import Logo from './Logo'
import Nav from './Nav'
import Social from './Social'

export default function MobileNav() {
  const [open, setOpen] = useState<boolean>(false)

  const handleToogleMobileNav = () => {
    setOpen(!open)
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent onClick={handleToogleMobileNav}>
        <div className='flex h-full flex-col items-center justify-between py-8'>
          <div className='flex flex-col items-center gap-y-28'>
            <Logo />
            <Nav containerStyles='flex flex-col items-center gap-y-6' linkStyles='text-2xl' />
          </div>
          <Social containerStyles='flex gap-x-4' iconStyles='text-2xl' />
        </div>
      </SheetContent>
    </Sheet>
  )
}
