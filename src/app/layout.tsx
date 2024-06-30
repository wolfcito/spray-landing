import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import LocalFont from 'next/font/local'

export const metadata: Metadata = {
  title: {
    default: 'modespray.xyz',
    template: '%s | modespray.xyz',
  },
  description: 'Send Tokens to Multiple Addresses in One Click',
  openGraph: {
    title: 'modespray.xyz',
    description: 'Send Tokens to Multiple Addresses in One Click',
    url: 'https://modespray.xyz',
    siteName: 'modespray.xyz',
    images: [
      {
        url: 'https://modespray.xyz/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'ModeSpray',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.png',
  },
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const calSans = LocalFont({
  src: '../../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(' ')}>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        {children}
      </body>
    </html>
  )
}
