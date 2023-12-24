'use client'

import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from '@/components/SubmitBtn'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AtSign, MessageSquareText } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  return (
    <form
      className='mt-10 flex flex-col gap-y-4'
      action={async (formData) => {
        const { error } = await sendEmail(formData)

        if (error) {
          toast.error(error)
          return
        }
        toast.success('Email sent successfully!')
      }}
    >
      <div className='relative flex items-center'>
        <Input id='email' placeholder='Email' type='email' name='email' required />
        <AtSign className='absolute right-6' size={20} />
      </div>
      <div className='relative flex items-center'>
        <Textarea id='message' name='message' placeholder='Your message' required />
        <MessageSquareText className='absolute right-6 top-4' size={20} max={5000} />
      </div>
      <SubmitBtn />
    </form>
  )
}
