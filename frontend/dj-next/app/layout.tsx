import NavBar from '@/components/common/NavBar'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/common/Footer'
import AppProvider from '@/redux/provider'

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
          <NavBar/>
          <div>
            {children}
          </div>
          <Footer/>
        </AppProvider>
      </body>
    </html>
  )
}
