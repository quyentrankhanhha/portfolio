'use server'

import ContactFormEmail from '@/components/ContactFormEmail'
import { getErrorMessage, validateString } from '@/lib/utils'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('email')
  const message = formData.get('message')
  let data

  if (!validateString(senderEmail)) {
    return {
      error: 'Invalid sender email'
    }
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message'
    }
  }

  try {
    data = await resend.emails.send({
      from: 'Portfolio Contact<onboarding@resend.dev>',
      to: 'quyentrankhanhha@gmail.com',
      subject: 'Message from portfolio',
      reply_to: senderEmail as string,
      react: ContactFormEmail({ message: message as string, senderEmail: senderEmail as string })
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data
  }
}
