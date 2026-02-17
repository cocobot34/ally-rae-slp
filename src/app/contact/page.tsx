import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { AnimatedSection } from '@/components/AnimatedSection'
import { CONTACT_EMAIL, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ally Schwab — speech-language pathologist in Cleveland, Ohio. Open to Clinical Fellowship positions and professional collaboration.',
  alternates: { canonical: `${SITE_URL}/contact` },
}

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
              Contact
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-dark mb-6">
              Let&apos;s Talk
            </h1>
            <p className="text-neutral-mid text-xl leading-relaxed">
              I&apos;m actively seeking Clinical Fellowship positions in adult medical SLP — SNF, acute care, inpatient rehab, or outpatient neuro. If you&apos;re hiring or just want to connect, reach out.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <h2 className="font-semibold text-primary text-lg mb-2">
                  Currently Seeking
                </h2>
                <p className="text-neutral-mid text-sm leading-relaxed">
                  Clinical Fellowship (CF) positions in adult medical speech-language pathology. Available May 2026. Open to full-time roles in the Greater Cleveland area or relocation for the right opportunity.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-neutral-dark text-lg mb-3">
                  Email
                </h2>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <h2 className="font-semibold text-neutral-dark text-lg mb-3">
                  Phone
                </h2>
                <a
                  href="tel:+13302418941"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  (330) 241-8941
                </a>
              </div>
              <div>
                <h2 className="font-semibold text-neutral-dark text-lg mb-3">
                  Location
                </h2>
                <p className="text-neutral-mid">
                  Cleveland, Ohio
                  <br />
                  Greater Cleveland Area
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-neutral-dark text-lg mb-3">
                  LinkedIn
                </h2>
                <a
                  href="https://www.linkedin.com/in/ally-schwab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  linkedin.com/in/ally-schwab
                </a>
              </div>
              <div>
                <a
                  href="/resume-ally-schwab.pdf"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors text-sm"
                  download
                >
                  📄 Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
