import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog — Resources & Insights',
  description:
    'Clinical insights and resources about adult speech-language pathology from Ally Rae, CF-SLP in Cleveland, Ohio.',
  alternates: { canonical: `${SITE_URL}/blog` },
}

export default function BlogPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
          Blog
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-neutral-dark mb-6">
          Resources &amp; Insights
        </h1>
        <p className="text-neutral-mid text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Clinical writing on dysphagia, aphasia, cognitive-communication, and what it&apos;s actually like working in medical SLP. Coming soon.
        </p>
        <div className="bg-surface rounded-2xl p-10 border border-surface">
          <p className="text-neutral-mid text-lg mb-6">
            I&apos;m working on a few posts right now. In the meantime, feel free to reach out with questions or topics you&apos;d like me to write about.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
          >
            Suggest a Topic
          </Link>
        </div>
      </div>
    </section>
  )
}
