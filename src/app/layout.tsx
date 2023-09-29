import Header from '@/components/Header'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bringer',
  description: 'Bringer Parcel Services - Ship anywhere in the world with a click.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="h-full bg-white">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  )
}
