import ContactForm from '@/components/views/contact/ContactForm'
import React from 'react'

export default function ContactPage() {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='mb-6 grid pt-12 xl:mb-24 xl:h-[480px] xl:grid-cols-2'>
          <div className='grid xl:justify-items-center '>
            <div className='mb-4 flex items-center gap-x-4 text-lg text-primary'>
              <span className='h-[2px] w-[30px] bg-primary'></span>
              chào, moi, hi
            </div>
            <h1 className='h1 max-w xl:max-w-40'>Want to have a chat?</h1>
          </div>
          <div className='mt-8 xl:mt-24'>
            <p>
              Please contact me directly at{' '}
              <a className='underline' href='mailto:quyentrankhanhha@gmail.com'>
                quyentrankhanhha@gmail.com
              </a>{' '}
              or{' '}
              <a className='underline' href='tel:+358417163232'>
                +358 41 716 3232
              </a>{' '}
              or through this form.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
