import type { Metadata } from 'next'
import './globals.scss'
import { Providers } from './providers'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Kevin Čížik | Web Developer',
  description: 'Web Developer'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </>
  )
}
