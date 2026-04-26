import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://brandxmedia.co'),
  title: 'BrandXMedia | Premium Digital Agency',
  description: 'Strategy-led digital excellence. We build brands that generate revenue through high-converting websites, branding, and automation growth systems.',
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
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
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
      <body className={`${jakarta.className} bg-surface text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container`}>
        {children}
        <a 
          href="https://wa.me/919347047827?text=Hi,%20I%20want%20to%20grow%20my%20business" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          <span className="material-symbols-outlined text-3xl">chat</span>
        </a>
      </body>
    </html>
  )
}
