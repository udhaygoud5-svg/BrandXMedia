import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BrandXMedia | Premium Digital Agency',
  description: 'Strategy-led digital excellence. We build brands that generate revenue through high-converting websites, branding, and AI-powered growth systems.',
  openGraph: {
    title: 'BrandXMedia | Premium Digital Agency',
    description: 'Strategy-led digital excellence for ambitious brands.',
    type: 'website',
    locale: 'en_US',
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
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.87/build/spline-viewer.js" async></script>
      </head>
      <body className={`${inter.className} bg-surface text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container`}>
        {children}
      </body>
    </html>
  )
}
