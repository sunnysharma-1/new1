import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Axis Security - Premier Security Solutions',
  description: 'Professional security solutions with trained officers, world-class technology, and comprehensive supervision. 15+ years of trusted service.',
  generator: 'v0.app',
  icons: {
    icon: '/images/axis-logo.jpg',
    apple: '/images/axis-logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${playfair.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
