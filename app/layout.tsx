import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

import SmoothScroll from '@/components/smooth-scroll'
import DeferredAnalytics from '@/components/deferred-analytics'

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: 'Axis Security - Premier Security Solutions',
  description: 'Professional security solutions with trained officers, world-class technology, and comprehensive supervision. 15+ years of trusted service.',
  metadataBase: new URL('https://axissecurity.in'),
  verification: {
    google: 'vMVsihnrZL0_U9i9XZp8Dh8prH94VsUbi78SfSHBmV4',
  },
  icons: {
    icon: '/images/axis-logo.jpg',
    apple: '/images/axis-logo.jpg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020617',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/apex-hero-group.webp" type="image/webp" />
      </head>
      <body className={`${geist.variable} font-sans antialiased`}>
        <SmoothScroll />
        {children}
        <DeferredAnalytics />
      </body>
    </html>
  )
}
