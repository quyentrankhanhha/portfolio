import React from 'react'
import Social from './Social'

export default function Footer() {
  return (
    <footer className='mt-20 bg-secondary py-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          <h3 className='h3'>Ha Quyen</h3>
          <p>Software Developer Trainee at Fatman Oy</p>
          <Social containerStyles='flex gap-x-6 mx-auto xl:mx-0 my-4' iconStyles='rounded' />
        </div>
      </div>
    </footer>
  )
}
