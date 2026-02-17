import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ally Rae, speech-language pathologist in Cleveland, Ohio. Reach out for questions about speech therapy services or collaboration.',
  alternates: { canonical: 'https://allyraespeech.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-4">
              Contact
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-dark mb-6">
              Let&apos;s Connect
            </h1>
            <p className="text-neutral-mid text-xl leading-relaxed">
              Whether you have questions about speech-language pathology, want to
              discuss collaboration, or just want to say hello — I&apos;d love
              to hear from you.
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
              <div>
                <h2 className="font-semibold text-neutral-dark text-lg mb-3">
                  Email
                </h2>
                <a
                  href="mailto:Allyrschwab@gmail.com"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  Allyrschwab@gmail.com
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
              <div className="bg-surface rounded-2xl p-6 border border-surface">
                <h2 className="font-semibold text-neutral-dark text-lg mb-3">
                  Response Time
                </h2>
                <p className="text-neutral-mid text-sm leading-relaxed">
                  I typically respond within 1–2 business days. Thank you for
                  your patience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
