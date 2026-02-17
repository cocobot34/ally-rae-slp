import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — Resources & Insights',
  description:
    'Resources, insights, and articles about adult speech-language pathology from Ally Rae Schwab, CF-SLP in Cleveland, Ohio.',
  alternates: { canonical: 'https://allyraespeech.com/blog' },
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
          Articles and resources about adult speech-language pathology are coming
          soon. Check back for insights on dysphagia, aphasia, cognitive-communication,
          and more.
        </p>
        <div className="bg-surface rounded-2xl p-10 border border-surface">
          <p className="text-neutral-mid text-lg italic mb-6">
            &ldquo;Coming soon — stay tuned for clinical insights and resources.&rdquo;
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
          >
            Get Notified
          </Link>
        </div>
      </div>
    </section>
  )
}
