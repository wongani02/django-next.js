import NavBar from '@/components/common/NavBar'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/common/Footer'
import AppProvider from '@/redux/provider'
import { Toaster } from '@/components/ui/toaster'
import Setup from '@/components/utils/setup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dj Next',
  description: 'django and next js app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Setup />
          <NavBar/>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-8'>
            {children}
          </div>
          <Footer/>
          <Toaster />
        </AppProvider>
      </body>
    </html>
  )
}
