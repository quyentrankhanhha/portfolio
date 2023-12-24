import React from 'react'
import Social from './Social'

export default function Footer() {
  return (
    <footer className='mt-20 bg-secondary py-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          <h3 className='h3'>Ha Quyen</h3>
          <p className='mt-4'>Software Developer Trainee at Fatman Oy</p>
          <Social containerStyles='flex gap-x-6 mx-auto xl:mx-0 my-4' iconStyles='rounded' />
          <p className='text-xs text-gray-500'>
            <span className='font-semibold'>About this website:</span> build with React & Next.js, TypeScript, Tailwind
            CSS, shadcn/ui, Framer Motion, React Email & Resend, Sanity, and Vercel hosting.
          </p>
        </div>
      </div>
    </footer>
  )
}
