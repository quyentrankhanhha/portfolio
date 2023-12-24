import React from 'react'
import { Html, Head, Preview, Body, Container, Section, Heading, Text, Hr } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
  message: string
  senderEmail: string
}

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from portfolio contact</Preview>
      <Tailwind>
        <Body className='bg-gray-100'>
          <Container>
            <Section className='my-10 rounded-md border-black bg-white px-10 py-4'>
              <Heading className='leading-tight'>You received the following message from the contact form</Heading>
              <Text>The sender&apos;s email is: {senderEmail}</Text>
              <Hr />
              <Text>{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
