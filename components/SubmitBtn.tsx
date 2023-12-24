import React from 'react'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import { useFormStatus } from 'react-dom'

export default function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <Button className='group gap-x-2 disabled:scale-100 disabled:bg-opacity-65' disabled={pending}>
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Let&apos;s talk <MoveRight size={16} className='group-hover:translate-x-1' />
        </>
      )}
    </Button>
  )
}
