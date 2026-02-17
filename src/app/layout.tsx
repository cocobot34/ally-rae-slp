import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
    template: '%s | Ally Rae Speech — Cleveland SLP',
    default: 'Ally Rae Speech | Speech-Language Pathologist in Cleveland, Ohio',
  },
  description:
    'Evidence-based speech therapy for adults in Cleveland, Ohio. Specializing in dysphagia, aphasia, voice disorders, TBI rehabilitation, and cognitive-communication.',
  keywords: [
    'speech language pathologist Cleveland',
    'adult speech therapy Ohio',
    'dysphagia treatment Cleveland',
    'aphasia therapy Cleveland',
    'voice disorder specialist Cleveland Ohio',
    'TBI speech therapy Cleveland',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://allyraespeech.com',
    siteName: 'Ally Rae Speech',
    title: 'Ally Rae Speech | Speech-Language Pathologist in Cleveland, Ohio',
    description:
      'Evidence-based speech therapy for adults in Cleveland, Ohio. Specializing in dysphagia, aphasia, voice disorders, and cognitive-communication.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ally Rae Speech — Cleveland SLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ally Rae Speech | Cleveland SLP',
    description:
      'Evidence-based speech therapy for adults in Cleveland, Ohio.',
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://allyraespeech.com'),
  alternates: {
    canonical: 'https://allyraespeech.com',
  },
}

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'LocalBusiness'],
  name: 'Ally Rae Speech',
  url: 'https://allyraespeech.com',
  description:
    'Evidence-based speech therapy for adults in Cleveland, Ohio',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cleveland',
    addressRegion: 'OH',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Greater Cleveland, Ohio',
  },
  medicalSpecialty: [
    'Speech-Language Pathology',
    'Dysphagia',
    'Aphasia',
    'Voice Disorders',
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
        <JsonLd data={businessSchema} />
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
