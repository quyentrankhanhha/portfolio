import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from 'react-hot-toast'
import ScrollToTopButton from '@/components/ScrollToTopButton'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ha Quyen's Portfolio"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
          <ScrollToTopButton />
          <Toaster position='top-right' />
        </ThemeProvider>
      </body>
    </html>
  )
}
