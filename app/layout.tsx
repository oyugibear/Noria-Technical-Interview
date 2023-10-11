import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Navigation/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Junito Dating Web App',
  description: 'By Arthur Oyugi. Built with NextJs 13, Typescript and Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
