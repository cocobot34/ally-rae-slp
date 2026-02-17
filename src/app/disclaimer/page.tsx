import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Healthcare disclaimer for allyschwab.com.',
  alternates: { canonical: `${SITE_URL}/disclaimer` },
}

export default function DisclaimerPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 prose prose-neutral">
        <h1 className="font-serif text-4xl text-neutral-dark mb-8">Disclaimer</h1>
        <p className="text-neutral-mid text-sm mb-8">Last updated: February 2026</p>

        <h2 className="font-serif text-2xl text-neutral-dark mt-10 mb-4">Informational Purposes Only</h2>
        <p className="text-neutral-mid leading-relaxed mb-4">
          The content on this website is provided for general informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
        </p>

        <h2 className="font-serif text-2xl text-neutral-dark mt-10 mb-4">No Professional Relationship</h2>
        <p className="text-neutral-mid leading-relaxed mb-4">
          Viewing this website or contacting Ally Schwab through the contact form does not establish a clinician-patient relationship. A clinician-patient relationship is only formed through a formal evaluation and agreement to provide services.
        </p>

        <h2 className="font-serif text-2xl text-neutral-dark mt-10 mb-4">Seek Professional Help</h2>
        <p className="text-neutral-mid leading-relaxed mb-4">
          If you have concerns about speech, language, cognitive-communication, or swallowing, please consult a licensed speech-language pathologist or your healthcare provider. In case of a medical emergency, call 911 or go to your nearest emergency room.
        </p>

        <h2 className="font-serif text-2xl text-neutral-dark mt-10 mb-4">No Health Information Collection</h2>
        <p className="text-neutral-mid leading-relaxed mb-4">
          This website does not collect protected health information (PHI). The contact form is intended for general inquiries only. Please do not submit personal health details through this website.
        </p>

        <h2 className="font-serif text-2xl text-neutral-dark mt-10 mb-4">Accuracy of Information</h2>
        <p className="text-neutral-mid leading-relaxed">
          While every effort is made to ensure accuracy, Ally Schwab makes no warranties regarding the completeness, accuracy, or reliability of any content. Information is subject to change without notice.
        </p>
      </div>
    </section>
  )
}
