import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://brandxmedia.co'),
  title: 'BrandXMedia | Premium Digital Agency',
  description: 'Strategy-led digital excellence. We build brands that generate revenue through high-converting websites, branding, and AI-powered growth systems.',
  openGraph: {
    title: 'BrandXMedia | Premium Digital Agency',
    description: 'Strategy-led digital excellence for ambitious brands.',
    url: 'https://brandxmedia.co',
    siteName: 'BrandXMedia',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandXMedia | Premium Digital Agency',
    description: 'Strategy-led digital excellence for ambitious brands.',
    images: ['/og-image.png'],
  },
  keywords: ['digital agency', 'web design', 'branding', 'SEO', 'marketing', 'AI strategy'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-surface text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container`}>
        {children}
      </body>
    </html>
  )
}
