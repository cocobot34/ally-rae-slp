import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Ally Rae — SLP Portfolio',
    default: 'Ally Rae | Speech-Language Pathologist — Cleveland, Ohio',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Ally Rae SLP',
    'speech language pathologist Cleveland',
    'CF-SLP Cleveland Ohio',
    'medical SLP portfolio',
    'dysphagia treatment Cleveland',
    'aphasia therapy Cleveland',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Ally Rae | Speech-Language Pathologist — Cleveland, Ohio',
    description: SITE_DESCRIPTION,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ally Rae — SLP Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ally Rae | SLP Portfolio',
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alexandra R. Schwab',
  alternateName: 'Ally Rae',
  jobTitle: 'Speech-Language Pathologist (CF-SLP)',
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Cleveland State University',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Kent State University',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cleveland',
    addressRegion: 'OH',
    addressCountry: 'US',
  },
  knowsAbout: [
    'Speech-Language Pathology',
    'Dysphagia Management',
    'Aphasia Treatment',
    'Cognitive-Communication Disorders',
    'Traumatic Brain Injury Rehabilitation',
  ],
  sameAs: ['https://www.linkedin.com/in/ally-schwab'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerifDisplay.variable}`}
    >
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        <JsonLd data={personSchema} />
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
