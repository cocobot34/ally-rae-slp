import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Clinical Expertise',
  description:
    'Ally Rae\'s clinical focus areas: dysphagia, aphasia, cognitive-communication, voice disorders, motor speech, and TBI rehabilitation.',
  alternates: { canonical: `${SITE_URL}/expertise` },
  keywords: [
    'dysphagia treatment',
    'aphasia speech therapy',
    'TBI rehab SLP',
    'voice disorder specialist',
    'cognitive communication therapy',
    'medical SLP skills',
  ],
}

const areas = [
  {
    title: 'Dysphagia & Swallowing Disorders',
    icon: '🫁',
    description:
      'This is probably where I\'m strongest right now. At Brentwood, I ran bedside swallow evals almost daily — assessing aspiration risk, recommending diet textures, monitoring patients moving from NG tubes back to oral feeding. I\'ve had hands-on time with FEES and observed MBS studies. I know what a safe swallow looks like and what to do when it isn\'t.',
    skills: 'Bedside swallow evaluation · Aspiration risk assessment · Diet texture modification · FEES (hands-on) · MBS (observation) · Mealtime observations · Swallow rehabilitation · Coordination with dietary & nursing',
    who: 'Adults post-stroke, post-surgery, with neurological conditions, or aging-related swallowing difficulty.',
  },
  {
    title: 'Aphasia & Language Disorders',
    icon: '💬',
    description:
      'Aphasia takes away the thing that makes people feel like themselves — their words. I\'ve worked with adults post-stroke and post-TBI on rebuilding expressive language, comprehension, reading, and writing. At CSU\'s clinic, I provided weekly individual therapy targeting speech intelligibility and voice production for a client with aphasia. The work is slow, and the wins are huge.',
    skills: 'Expressive & receptive language therapy · Functional communication strategies · Reading & writing rehabilitation · Neurogenic communication disorder treatment',
    who: 'Adults with language loss following stroke, brain injury, or progressive neurological conditions.',
  },
  {
    title: 'Cognitive-Communication Disorders',
    icon: '🧠',
    description:
      'Memory, attention, problem-solving, executive function — these are the deficits that don\'t always look like "speech therapy" to people who don\'t work in our field. But they change everything about how someone communicates and functions. I\'ve administered SLUMS, BIMS, MoCA, and MMSE screenings and developed treatment plans targeting these areas for patients with TBI and dementia.',
    skills: 'SLUMS · BIMS · MoCA · MMSE · Compensatory strategy training · Memory & attention exercises · Caregiver education · Functional goal-setting',
    who: 'Adults with TBI, dementia, or other conditions affecting the cognitive processes behind communication.',
  },
  {
    title: 'Voice Disorders',
    icon: '🎙️',
    description:
      'Voice therapy was part of my outpatient rotation at Cleveland State — working on respiratory support, vocal cord function, and healthy voice use. Dysphonia, vocal fatigue, pitch changes, voice loss from medical or functional causes. It\'s a smaller part of my experience than dysphagia or cognition, but it\'s an area I enjoy and want to keep developing.',
    skills: 'Respiratory support techniques · Vocal cord function therapy · Voice quality restoration · Post-surgical voice rehabilitation',
    who: 'Adults with hoarseness, vocal fatigue, pitch changes, or voice loss.',
  },
  {
    title: 'Motor Speech Disorders',
    icon: '🗣️',
    description:
      'Dysarthria and apraxia of speech — when the brain knows what it wants to say but the motor system can\'t execute it clearly. I work on articulation, rate, prosody, and when oral communication isn\'t enough, I know when to bring in AAC options.',
    skills: 'Articulation therapy · Rate & prosody modification · Compensatory strategies · AAC integration',
    who: 'Adults with Parkinson\'s, stroke, TBI, ALS, or other conditions affecting speech motor control.',
  },
  {
    title: 'TBI Rehabilitation',
    icon: '💪',
    description:
      'TBI doesn\'t just affect one thing — it can hit language, cognition, voice, and swallowing all at once. At Brentwood, I worked on interdisciplinary rehab teams with OT, PT, physicians, nursing, and social work to address the full picture. That collaboration isn\'t a buzzword for me — it was my daily reality.',
    skills: 'Comprehensive communication & cognitive assessment · Functional goal development · Interdisciplinary team collaboration · Progress monitoring & documentation',
    who: 'Adults recovering from mild, moderate, or severe traumatic brain injury.',
  },
]

export default function ExpertisePage() {
  return (
    <>
      <section className="hero-gradient py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
              Expertise
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-dark mb-6">
              What I Know How to Do
            </h1>
            <p className="text-neutral-mid text-xl leading-relaxed">
              These are my clinical focus areas — the populations and conditions I&apos;ve trained in and want to keep working with. Not a menu of services. A portfolio of what I bring.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          {areas.map((area, i) => (
            <AnimatedSection
              key={area.title}
              delay={i * 0.04}
              className="bg-surface rounded-2xl p-8 md:p-10 border border-surface"
            >
              <div className="flex items-start gap-5">
                <span className="text-4xl flex-shrink-0" aria-hidden="true">
                  {area.icon}
                </span>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-neutral-dark mb-4">
                    {area.title}
                  </h2>
                  <p className="text-neutral-mid leading-relaxed mb-5">
                    {area.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-neutral-dark text-sm uppercase tracking-wide mb-1">
                        Specific Skills & Tools
                      </h3>
                      <p className="text-neutral-mid text-sm leading-relaxed">
                        {area.skills}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-dark text-sm uppercase tracking-wide mb-1">
                        Populations
                      </h3>
                      <p className="text-neutral-mid text-sm leading-relaxed">
                        {area.who}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatedSection className="py-20 md:py-28 bg-primary text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Questions about my clinical training?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            I&apos;m happy to talk through any of these areas in more detail — or discuss how my training fits your team&apos;s needs.
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
