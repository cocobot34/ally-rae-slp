import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Clinical Experience',
  description:
    'Ally Schwab\'s clinical placements and fieldwork experience across medical SLP, school-based, and outpatient settings.',
  alternates: { canonical: `${SITE_URL}/experience` },
}

const placements = [
  {
    title: 'Medical SLP — Skilled Nursing & Rehabilitation',
    facility: 'Brentwood Healthcare Center',
    location: 'Northfield, OH',
    dates: 'January 2026 – May 2026',
    setting: 'SNF / Inpatient Rehab / Memory Care / Assisted Living',
    highlights: [
      'Assessed and treated adults and geriatric patients with dysphagia, cognitive-communication disorders, and dementia across four distinct care settings',
      'Performed clinical bedside swallow evaluations to assess aspiration risk; recommended diet texture modifications including thin liquids and puree consistencies',
      'Conducted mealtime observations to evaluate swallow safety in real-time',
      'Supported patients transitioning from NG tube to oral feeding through systematic swallow rehabilitation',
      'Participated in instrumental swallow assessments — hands-on with FEES, observed MBS studies',
      'Administered cognitive screenings: SLUMS, BIMS, MoCA, and MMSE for orientation, memory, and executive function',
      'Collaborated daily with physicians, OT, PT, nursing, dietary, and social work',
      'Documented evaluations, skilled treatment plans, and daily progress notes in Net Health EMR — Medicare-compliant',
    ],
    featured: true,
  },
  {
    title: 'School-Based SLP',
    facility: 'Fairview Park City Schools',
    location: 'Fairview Park, OH (Elementary, Middle, and High School)',
    dates: 'August 2025 – December 2025',
    setting: 'K-12 Public Schools',
    highlights: [
      'Managed caseload of 50+ students across elementary, middle, and high school levels',
      'Populations: articulation, receptive/expressive language, fluency, AAC, autism spectrum disorders',
      'Led eligibility team meetings and ETR processes; developed measurable IEP goals aligned with academic standards',
      'Communicated assessment results and progress data to parents, teachers, and multidisciplinary teams',
    ],
    featured: false,
  },
  {
    title: 'Telepractice — Adult Cognitive-Communication',
    facility: 'Cleveland State University Speech & Hearing Clinic',
    location: 'Cleveland, OH',
    dates: 'May 2025 – June 2025',
    setting: 'Teletherapy',
    highlights: [
      'Provided teletherapy to an adult client targeting cognitive-communication skills',
      'Adapted treatment materials and session structure for effective virtual delivery',
    ],
    featured: false,
  },
  {
    title: 'School-Based SLP — K-12',
    facility: 'Albert Einstein Academy',
    location: 'Strongsville, OH',
    dates: 'January 2025 – May 2025',
    setting: 'K-12 Private School',
    highlights: [
      'Delivered individual and group therapy targeting articulation, language, social communication, and behavioral regulation',
      'Implemented interventions for WH-questions, main idea/detail comprehension, inferencing, and functional communication',
      'Collected and analyzed treatment data to monitor progress and adjust approaches',
    ],
    featured: false,
  },
  {
    title: 'Adult Outpatient — Aphasia & Voice',
    facility: 'Cleveland State University Speech & Hearing Clinic',
    location: 'Cleveland, OH',
    dates: 'August 2024 – December 2024',
    setting: 'University Outpatient Clinic',
    highlights: [
      'Provided weekly therapy to an adult client with aphasia — targeting respiratory support, speech intelligibility, and voice production',
      'Used evidence-based voice therapy techniques for neurogenic communication disorders',
      'Developed individualized treatment plans and tracked measurable outcomes',
    ],
    featured: false,
  },
]

const relatedExperience = [
  {
    title: 'Speech Therapy Assistant',
    facility: 'Buckeye Speech, Strongsville, OH',
    dates: 'May 2022 – July 2022',
    description: 'Observed in-person and telepractice sessions across pediatric populations. Created therapy materials and prepped session resources for licensed SLPs.',
  },
  {
    title: 'Therapy Assistant / Intern',
    facility: 'Sprout Therapy, Strongsville, OH',
    dates: 'August 2022 – July 2023',
    description: 'Completed RBT training program. Assisted with in-home evaluations and play-based therapy. Developed materials and supported treatment sessions for pediatric clients.',
  },
]

export default function ExperiencePage() {
  return (
    <>
      <section className="hero-gradient py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
              Clinical Experience
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-dark mb-6">
              Where I&apos;ve Trained
            </h1>
            <p className="text-neutral-mid text-xl leading-relaxed">
              Five clinical placements across medical, school-based, outpatient, and telepractice settings. Here&apos;s what I did at each one.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Placements */}
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 space-y-10">
          {placements.map((placement, i) => (
            <AnimatedSection
              key={placement.title + placement.facility}
              delay={i * 0.03}
              className={`rounded-2xl p-8 md:p-10 border ${
                placement.featured
                  ? 'bg-primary/5 border-primary/20'
                  : 'bg-surface border-surface'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-1">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-neutral-dark mb-1">
                    {placement.title}
                  </h2>
                  <p className="text-primary font-medium">
                    {placement.facility} · {placement.location}
                  </p>
                </div>
                {placement.featured && (
                  <span className="hidden md:inline-flex shrink-0 items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    ★ Primary Medical Placement
                  </span>
                )}
              </div>
              <p className="text-neutral-mid text-sm mb-4">
                {placement.dates} · {placement.setting}
              </p>
              <ul className="text-neutral-mid space-y-2 text-[15px] leading-relaxed list-disc list-inside">
                {placement.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Related Experience */}
      <AnimatedSection className="py-16 md:py-24 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl text-neutral-dark mb-8">
            Earlier Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedExperience.map((exp) => (
              <div key={exp.title} className="bg-bg rounded-2xl p-6 border border-surface">
                <h3 className="font-semibold text-neutral-dark text-lg mb-1">
                  {exp.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-1">{exp.facility}</p>
                <p className="text-neutral-mid text-sm mb-3">{exp.dates}</p>
                <p className="text-neutral-mid text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Grid */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-10 text-center">
            Clinical Skills at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-surface rounded-2xl p-6">
              <h3 className="font-semibold text-neutral-dark mb-3">Assessment Tools</h3>
              <p className="text-neutral-mid text-sm leading-relaxed">
                Bedside swallow evaluation · Aspiration risk assessment · FEES (hands-on) · MBS (observation) · SLUMS · BIMS · MoCA · MMSE · Standardized language &amp; articulation assessments
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-6">
              <h3 className="font-semibold text-neutral-dark mb-3">Treatment Areas</h3>
              <p className="text-neutral-mid text-sm leading-relaxed">
                Dysphagia · Aphasia · Cognitive-communication · Voice disorders · Motor speech · TBI rehab · AAC · Dementia
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-6">
              <h3 className="font-semibold text-neutral-dark mb-3">Documentation</h3>
              <p className="text-neutral-mid text-sm leading-relaxed">
                Net Health EMR · Medicare-compliant skilled documentation · SOAP notes · Evaluation reports · IEP/ETR development
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-6">
              <h3 className="font-semibold text-neutral-dark mb-3">Populations</h3>
              <p className="text-neutral-mid text-sm leading-relaxed">
                Adults &amp; geriatrics (SNF, memory care, inpatient rehab) · Pediatrics (PreK-12, private practice) · Teletherapy
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-20 md:py-28 bg-primary text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Want the full picture?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Download my resume for the complete details, or reach out directly — I&apos;m happy to talk through my experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/resume-ally-schwab.pdf"
              className="inline-block bg-white text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-surface transition-colors"
              download
            >
              Download Resume
            </a>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
