'use client'
import React from 'react'

type ExperienceProps = {
  title: string
  year: string
  company: string
  location: string
  description?: string[]
}

export default function Experience({ year, company, location, description, title }: ExperienceProps) {
  return (
    <>
      <div className='grid grid-cols-[1fr_max-content_1fr]'>
        <div>
          <h4 className='h4 mb-1 block text-right'>{year}</h4>
          <span className='block text-right'>{company}</span>
          <span className='block text-right'>{location}</span>
        </div>

        <div className='justify-self-center px-8 py-1'>
          <span className='relative inline-block h-[12px] w-[12px] rounded-full bg-primary before:absolute before:h-[20px] before:w-[20px] before:-translate-x-[4px] before:-translate-y-[4px] before:rounded-full before:border before:border-primary before:content-[""]' />
          <span className='block h-[90%] w-[2px] -translate-y-4 translate-x-1 bg-primary' />
        </div>

        <div>
          <h4 className='h4 mb-1'>{title}</h4>
          {description &&
            description.map((item, index) => {
              return <div key={index}>{item}</div>
            })}
        </div>
      </div>
    </>
  )
}
