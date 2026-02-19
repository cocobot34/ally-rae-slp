import type { Metadata } from 'next'
import { CONTACT_EMAIL, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for allyraespeech.com.',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
}

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 prose prose-neutral">
        <h1 className="font-serif text-4xl text-neutral-dark mb-8">Privacy Policy</h1>
        <p className="text-neutral-mid text-sm mb-8">Last updated: February 2026</p>

        <h2 className="font-serif text-2xl text-neutral-dark mt-10 mb-4">Information We Collect</h2>
        <p className="text-neutral-mid leading-relaxed mb-4">
          This website collects minimal information. When you use the contact form, we collect your name, email address, and any message you voluntarily provide. We do not collect health information through this website.
        </p>

        <h2 className="font-serif text-2xl text-neutral-dark mt-10 mb-4">How We Use Your Information</h2>
        <p className="text-neutral-mid leading-relaxed mb-4">
          Information submitted through the contact form is used solely to respond to your inquiry. We do not sell, share, or distribute your personal information to third parties.
        </p>

        <h2 className="font-serif text-2xl text-neutral-dark mt-10 mb-4">Cookies &amp; Analytics</h2>
        <p className="text-neutral-mid leading-relaxed mb-4">
          This website uses privacy-friendly analytics (Vercel Analytics) to understand general traffic patterns. These tools do not use cookies to track individual users and do not collect personally identifiable information.
        </p>

        <h2 className="font-serif text-2xl text-neutral-dark mt-10 mb-4">Third-Party Links</h2>
        <p className="text-neutral-mid leading-relaxed mb-4">
          This website may contain links to third-party websites (such as LinkedIn). We are not responsible for the privacy practices of these external sites.
        </p>

        <h2 className="font-serif text-2xl text-neutral-dark mt-10 mb-4">Contact</h2>
        <p className="text-neutral-mid leading-relaxed mb-4">
          If you have questions about this privacy policy, please contact Ally Rae at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:text-primary-dark">
            {CONTACT_EMAIL}
          </a>.
        </p>

        <h2 className="font-serif text-2xl text-neutral-dark mt-10 mb-4">Changes to This Policy</h2>
        <p className="text-neutral-mid leading-relaxed">
          This privacy policy may be updated from time to time. Any changes will be posted on this page with an updated date.
        </p>
      </div>
    </section>
  )
}
