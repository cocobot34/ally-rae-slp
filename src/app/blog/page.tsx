import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Resources & Insights',
  description:
    'Evidence-based resources, patient education, and insights from Ally Rae — speech-language pathologist in Cleveland, Ohio.',
  alternates: { canonical: 'https://allyraespeech.com/blog' },
  keywords: [
    'speech therapy resources Cleveland',
    'SLP blog',
    'dysphagia education',
    'aphasia resources',
  ],
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
              Blog
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-dark mb-6">
              Resources &amp; Insights
            </h1>
            <p className="text-neutral-mid text-xl leading-relaxed">
              Evidence-based resources, patient education, and insights from the
              field of speech-language pathology. Check back soon!
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-6">
              {/* Placeholder cards */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-surface rounded-2xl p-8 border border-surface animate-pulse"
                >
                  <div className="h-4 bg-neutral-mid/10 rounded w-1/4 mb-4" />
                  <div className="h-6 bg-neutral-mid/10 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-neutral-mid/10 rounded w-full mb-2" />
                  <div className="h-4 bg-neutral-mid/10 rounded w-2/3" />
                </div>
              ))}
            </div>
            <p className="text-neutral-mid mt-10 text-lg">
              I&apos;ll be sharing evidence-based articles, patient education
              resources, and clinical insights here soon. Stay tuned!
            </p>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
