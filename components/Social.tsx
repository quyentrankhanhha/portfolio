'use client'

import Link from 'next/link'
import React from 'react'
import { socialLinks } from '../consts/link'

export default function Social({ containerStyles, iconStyles }: { containerStyles: string; iconStyles: string }) {
  return (
    <div className={`${containerStyles}`}>
      {socialLinks.map((icon, index) => {
        return (
          <Link
            href={icon.path}
            key={index}
            className='focus:shadow-outline mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-all hover:scale-105 hover:bg-primary hover:text-secondary'
            target='_blank'
          >
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}
