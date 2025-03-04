import type { Metadata } from 'next'
import './globals.scss'
import { Providers } from './providers'
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      <html lang="en">
        <body>
          <SpeedInsights />
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </>
  )
}
