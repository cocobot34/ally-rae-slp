import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { JsonLd } from '@/components/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Ally Rae',
  description:
    'Ally Rae is a speech-language pathologist specializing in adult medical rehabilitation. MS from Cleveland State University, clinical training at Brentwood Healthcare Center.',
  alternates: { canonical: `${SITE_URL}/about` },
  keywords: [
    'Ally Rae SLP',
    'Cleveland State University speech pathology',
    'CF-SLP Cleveland',
    'medical SLP portfolio',
  ],
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alexandra R. Schwab',
  alternateName: 'Ally Rae',
  jobTitle: 'Speech-Language Pathologist (CF-SLP)',
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Cleveland State University' },
    { '@type': 'CollegeOrUniversity', name: 'Kent State University' },
  ],
  url: `${SITE_URL}/about`,
  sameAs: ['https://www.linkedin.com/in/ally-schwab'],
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema} />

      {/* Hero */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
              About
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-dark mb-6">
              Hi, I&apos;m Ally.
            </h1>
            <p className="text-neutral-mid text-xl leading-relaxed">
              I&apos;m a speech-language pathologist finishing my Master&apos;s at Cleveland State and heading into my Clinical Fellowship. I work with adults — mostly older adults — who are trying to get back to eating, talking, and thinking clearly after a stroke, a brain injury, or a diagnosis that changed everything.
            </p>
          </div>
        </div>
      </section>

      {/* Why SLP */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-8">
              Why Speech-Language Pathology?
            </h2>
            <div className="space-y-5 text-neutral-mid text-lg leading-relaxed">
              <p>
                [ALLY — this is the most important paragraph on the site. What moment made you realize this was it? Was there a patient, a class, a rotation? Something specific. Not "I always loved helping people" — the real story. Even 3-4 sentences would transform this section.]
              </p>
              <p>
                I didn&apos;t start out knowing I&apos;d land in medical SLP. I came into grad school thinking I&apos;d probably end up in schools — it&apos;s where most people picture SLPs working. But my rotations in medical settings changed that. Working with adults who were fighting to recover basic functions — swallowing without aspirating, saying their family&apos;s names, remembering what day it was — that felt urgent in a way I hadn&apos;t experienced before.
              </p>
              <p>
                At Brentwood Healthcare Center, I got to work across skilled nursing, memory care, assisted living, and inpatient rehab — sometimes in the same day. I ran bedside swallow evals, participated in FEES and MBS studies, administered cognitive screenings, and coordinated with physicians, OTs, PTs, nurses, and dietary. That range is what I want in a Clinical Fellowship.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* My Approach — completely rewritten, FLAGS 9 & 10 */}
      <AnimatedSection className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-8">
              How I Work
            </h2>
            {/* [ALLY: please verify — this section is our best guess at your workflow based on your resume and placements. Read through and correct anything that doesn't match how you'd actually describe your approach.] */}
            <div className="space-y-5 text-neutral-mid text-lg leading-relaxed">
              <p>
                Here&apos;s what I&apos;ve learned so far: the treatment plan is only as good as the assessment, and the assessment is only as good as the conversation that comes before it. Patients tell you what they need if you actually listen — not just to their answers on a standardized screening, but to what they mention offhand. The guy who keeps asking when he can have coffee again. The woman whose first question is always about going home to her dog.
              </p>
              <p>
                [ALLY: add an example of a time your listening changed the direction of a treatment plan. Doesn&apos;t need to be dramatic. Could be noticing something small that shifted your approach. Anonymize it.]
              </p>
              <p>
                I use real assessment tools — SLUMS, BIMS, MoCA, MMSE for cognition, bedside swallow evals for dysphagia — and I write documentation that meets Medicare standards. I chart in Net Health. I know what skilled treatment looks like on paper because I&apos;ve been trained to document it properly. But I also know that the best therapy happens when the patient actually wants to be there, and that starts with figuring out what matters to <em>them</em>, not just what&apos;s on the eval.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Education & Credentials */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-10">
              Education &amp; Credentials
            </h2>
            <div className="space-y-6">
              <div className="bg-surface rounded-2xl p-6 border border-surface">
                <h3 className="font-semibold text-neutral-dark text-lg">
                  Master of Science in Speech-Language Pathology
                </h3>
                <p className="text-neutral-mid">
                  Cleveland State University · Expected May 2026
                </p>
                <p className="text-neutral-mid text-sm mt-1">GPA: 3.9</p>
              </div>
              <div className="bg-surface rounded-2xl p-6 border border-surface">
                <h3 className="font-semibold text-neutral-dark text-lg">
                  Bachelor of Science in Speech-Language Pathology &amp; Audiology
                </h3>
                <p className="text-neutral-mid">
                  Kent State University · May 2024
                </p>
                <p className="text-neutral-mid text-sm mt-1">
                  Dean&apos;s List 2021, 2022, 2023
                </p>
              </div>
              <div className="bg-surface rounded-2xl p-6 border border-surface">
                <h3 className="font-semibold text-neutral-dark text-lg">
                  Clinical Fellowship (CF-SLP)
                </h3>
                <p className="text-neutral-mid">
                  On the ASHA certification track — completing CF under licensed CCC-SLP supervision
                </p>
                <p className="text-neutral-mid text-sm mt-1">
                  CCC-SLP certification in progress · CPR certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Personal — completely rewritten, FLAG 11 */}
      <AnimatedSection className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-6">
              Outside of Work
            </h2>
            <p className="text-neutral-mid text-lg leading-relaxed mb-4">
              [ALLY — this section needs YOU. What do you actually do when you&apos;re not at a placement? Hiking? Cooking? Reading specific kinds of books? A sport? A pet? A weird hobby? Hiring managers read this section to figure out if you&apos;d be fun to work with. Give them something real — even just 2-3 specific details. &quot;I&apos;m trying to visit every taco spot in Cleveland&quot; is infinitely better than &quot;I enjoy exploring the Cleveland area.&quot;]
            </p>
            <p className="text-neutral-mid text-lg leading-relaxed">
              I&apos;m also a member of NSSLHA and have volunteered with Operation Smiles at Kent State (fundraising for children with cleft palate) and as a camp counselor at Star Camp, a summer program for children with disabilities in Independence, OH.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA — rewritten, FLAG 12 */}
      <AnimatedSection className="py-20 md:py-28 bg-primary text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            I&apos;m looking for the right CF position.
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            If you&apos;re hiring a medical SLP who&apos;s trained across settings, writes solid documentation, and genuinely wants to do this work — let&apos;s talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-surface transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="/resume-ally-rae.pdf"
              className="inline-block border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
