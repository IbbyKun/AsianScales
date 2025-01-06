import { Metadata } from 'next'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Asian Scales - Industrial Weighing Solutions',
    template: '%s | Asian Scales'
  },
  description: 'Leading provider of industrial weighing solutions, automation systems, and trading services in Asia',
  keywords: ['industrial scales', 'weighing solutions', 'automation', 'trading', 'Asian Scales'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  openGraph: {
    title: 'Asian Scales - Industrial Weighing Solutions',
    description: 'Leading provider of industrial weighing solutions, automation systems, and trading services in Asia',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Asian Scales',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asian Scales - Industrial Weighing Solutions',
    description: 'Leading provider of industrial weighing solutions, automation systems, and trading services in Asia',
  }
}

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
