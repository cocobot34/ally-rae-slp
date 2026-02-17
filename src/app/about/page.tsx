import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'About Ally Rae',
  description:
    'Learn about Ally Rae Schwab — a speech-language pathologist specializing in adult medical rehabilitation in Cleveland, Ohio. MS from Cleveland State University.',
  alternates: { canonical: 'https://allyraespeech.com/about' },
  keywords: [
    'Ally Rae Schwab SLP',
    'Cleveland State University speech pathology',
    'CF-SLP Cleveland',
    'speech language pathologist Cleveland Ohio',
  ],
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ally Rae Schwab',
  jobTitle: 'Speech-Language Pathologist',
  worksFor: {
    '@type': 'MedicalBusiness',
    name: 'Ally Rae Speech',
  },
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
  url: 'https://allyraespeech.com/about',
  sameAs: ['https://www.linkedin.com/in/ally-schwab'],
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema} />

      {/* Hero */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
              About
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-dark mb-6">
              Hi, I&apos;m Ally.
            </h1>
            <p className="text-neutral-mid text-xl leading-relaxed">
              I&apos;m a speech-language pathologist with a passion for helping
              adults rebuild their communication and reclaim their independence
              after stroke, brain injury, and neurological conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-8">
              Why Speech-Language Pathology?
            </h2>
            <div className="space-y-5 text-neutral-mid text-lg leading-relaxed">
              <p>
                Communication is at the heart of everything — our relationships,
                our independence, our identity. When a stroke, injury, or
                diagnosis disrupts someone&apos;s ability to speak, understand,
                or even swallow safely, the impact reaches every part of their
                life.
              </p>
              <p>
                That&apos;s what drew me to medical speech-language pathology.
                I wanted to be part of the team that helps people find their way
                back — not just to words, but to connection, confidence, and
                quality of life.
              </p>
              <p>
                My clinical training has taken me from skilled nursing facilities
                and inpatient rehabilitation to outpatient clinics and school
                settings. While I value the breadth of this field, my heart is in{' '}
                <strong>adult medical rehabilitation</strong> — working alongside
                physicians, occupational therapists, physical therapists, and
                nursing staff to deliver truly collaborative, patient-centered
                care.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Approach */}
      <AnimatedSection className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-8">
              My Approach
            </h2>
            <div className="space-y-5 text-neutral-mid text-lg leading-relaxed">
              <p>
                I believe effective therapy starts with listening. Every patient
                brings a unique history, set of goals, and definition of
                progress. My job is to meet them where they are and build a plan
                that&apos;s grounded in the best available evidence — and shaped
                by what matters most to <em>them</em>.
              </p>
              <p>
                Whether I&apos;m conducting a bedside swallow evaluation,
                working through language exercises with someone recovering from a
                stroke, or helping a patient with TBI rebuild their
                problem-solving skills, I bring the same commitment:
                compassionate, evidence-based care delivered with warmth and
                clinical rigor.
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
                {/* TODO: Update to "CCC-SLP" once certificate is officially conferred by ASHA */}
                <p className="text-neutral-mid">
                  Completing ASHA-required Clinical Fellowship under the
                  supervision of a licensed CCC-SLP
                </p>
                <p className="text-neutral-mid text-sm mt-1">
                  CCC-SLP certification in progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Clinical Experience Highlights */}
      <AnimatedSection className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-10">
              Clinical Experience
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-neutral-dark text-lg">
                  Medical SLP — Skilled Nursing &amp; Rehabilitation
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  Brentwood Healthcare Center, Northfield, OH
                </p>
                <ul className="text-neutral-mid space-y-2 text-[15px] leading-relaxed list-disc list-inside">
                  <li>
                    Assess and treat adults with dysphagia, cognitive-communication
                    disorders, and dementia across SNF, memory care, and inpatient rehab
                  </li>
                  <li>
                    Perform bedside swallow evaluations and participate in FEES
                    and MBS instrumental assessments
                  </li>
                  <li>
                    Collaborate within interdisciplinary teams including physicians,
                    OT, PT, nursing, dietary, and social work
                  </li>
                  <li>
                    Document evaluations and treatment plans in compliance with
                    Medicare standards
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-dark text-lg">
                  Adult Outpatient — Aphasia &amp; Voice Therapy
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  Cleveland State University Speech &amp; Hearing Clinic
                </p>
                <ul className="text-neutral-mid space-y-2 text-[15px] leading-relaxed list-disc list-inside">
                  <li>
                    Provided individual therapy targeting respiratory support,
                    speech intelligibility, and voice production
                  </li>
                  <li>
                    Developed treatment plans using evidence-based approaches for
                    neurogenic communication disorders
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Clinical Skills */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-10">
              Clinical Skills &amp; Training
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface rounded-2xl p-6">
                <h3 className="font-semibold text-neutral-dark mb-3">
                  Assessment
                </h3>
                <p className="text-neutral-mid text-sm leading-relaxed">
                  Bedside swallow evaluation, aspiration risk assessment, FEES,
                  MBS, cognitive screenings (SLUMS, BIMS, MoCA, MMSE),
                  standardized language and articulation assessments
                </p>
              </div>
              <div className="bg-surface rounded-2xl p-6">
                <h3 className="font-semibold text-neutral-dark mb-3">
                  Treatment
                </h3>
                <p className="text-neutral-mid text-sm leading-relaxed">
                  Dysphagia, aphasia, cognitive-communication disorders, voice
                  disorders, motor speech disorders, TBI rehabilitation, AAC
                </p>
              </div>
              <div className="bg-surface rounded-2xl p-6">
                <h3 className="font-semibold text-neutral-dark mb-3">
                  Documentation
                </h3>
                <p className="text-neutral-mid text-sm leading-relaxed">
                  EMR systems (Net Health), Medicare-compliant documentation,
                  SOAP notes, evaluation reports
                </p>
              </div>
              <div className="bg-surface rounded-2xl p-6">
                <h3 className="font-semibold text-neutral-dark mb-3">
                  Populations
                </h3>
                <p className="text-neutral-mid text-sm leading-relaxed">
                  Adults &amp; geriatrics (SNF, memory care, rehabilitation),
                  pediatrics (PreK-12, private practice)
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Personal */}
      <AnimatedSection className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-6">
              Beyond the Clinic
            </h2>
            <p className="text-neutral-mid text-lg leading-relaxed mb-4">
              When I&apos;m not in the clinic, you&apos;ll find me exploring
              everything the Cleveland area has to offer. I&apos;m proud to call
              Northeast Ohio home and I&apos;m committed to serving this
              community through my career in speech-language pathology.
            </p>
            <p className="text-neutral-mid text-lg leading-relaxed">
              I&apos;m also a proud member of NSSLHA and have volunteered with
              organizations like Operation Smiles and Star Camp, supporting
              children with disabilities.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-20 md:py-28 bg-primary text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Want to connect?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            I&apos;m always happy to talk about speech-language pathology,
            collaboration opportunities, or my clinical fellowship journey.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-surface transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </AnimatedSection>
    </>
  )
}
