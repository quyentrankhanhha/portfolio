'use client'

import { sendEmail } from '@/actions/sendEmail'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AtSign, MoveRight, MessageSquareText } from 'lucide-react'
import React from 'react'

export default function ContactForm() {
  return (
    <form
      className='mt-10 flex flex-col gap-y-4'
      action={async (formData) => {
        await sendEmail(formData)
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
      <Button className='group gap-x-2'>
        Let&apos;s talk <MoveRight size={16} className='group-hover:translate-x-1' />
      </Button>
    </form>
  )
}
