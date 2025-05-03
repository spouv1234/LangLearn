import type { Metadata } from 'next'
import { Inter, Noto_Sans_SC } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansSC = Noto_Sans_SC({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-sc'
})

export const metadata: Metadata = {
  title: 'LangLearn - Learn Chinese',
  description: 'An interactive platform for learning Chinese through stories and cultural context',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansSC.variable}`}>
      <body className="min-h-screen bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  )
} 