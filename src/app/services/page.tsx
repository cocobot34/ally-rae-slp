import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Services & Areas of Expertise',
  description:
    'Specialized adult speech therapy services in Cleveland, Ohio — dysphagia, aphasia, cognitive-communication disorders, voice therapy, TBI rehabilitation, and motor speech disorders.',
  alternates: { canonical: 'https://allyraespeech.com/services' },
  keywords: [
    'dysphagia treatment Cleveland',
    'aphasia speech therapy Ohio',
    'TBI rehab SLP',
    'voice disorder specialist Cleveland',
    'adult speech therapy services',
    'cognitive communication therapy',
  ],
}

const services = [
  {
    title: 'Dysphagia & Swallowing Disorders',
    icon: '🫁',
    description:
      'Swallowing difficulties can occur after stroke, surgery, neurological conditions, or as part of aging. I provide comprehensive evaluation — including bedside swallow assessments — and develop individualized treatment plans to improve swallow safety and help patients return to oral feeding when possible.',
    who: 'Adults recovering from stroke, surgery, or living with neurological conditions affecting swallowing.',
    approach:
      'Clinical bedside evaluation, diet texture modification, swallow rehabilitation exercises, coordination with dietary and nursing teams.',
  },
  {
    title: 'Aphasia & Language Disorders',
    icon: '💬',
    description:
      'Aphasia affects the ability to speak, understand, read, or write — often after a stroke or brain injury. I use evidence-based approaches to help patients rebuild their language skills and develop strategies for effective communication.',
    who: 'Adults with language difficulties following stroke, brain injury, or progressive neurological conditions.',
    approach:
      'Individualized language therapy targeting expression, comprehension, reading, and writing. Functional communication strategies for daily life.',
  },
  {
    title: 'Cognitive-Communication Disorders',
    icon: '🧠',
    description:
      'Cognitive-communication challenges — affecting memory, attention, problem-solving, and social communication — are common after traumatic brain injury and with conditions like dementia. I work with patients and families to maximize cognitive-communication function and independence.',
    who: 'Adults with TBI, dementia, or other conditions affecting cognitive processes that support communication.',
    approach:
      'Cognitive screenings (SLUMS, BIMS, MoCA, MMSE), compensatory strategy training, memory and attention exercises, caregiver education.',
  },
  {
    title: 'Voice Disorders',
    icon: '🎙️',
    description:
      'Voice disorders can result from vocal cord dysfunction, overuse, neurological conditions, or surgery. I provide assessment and therapy to restore vocal quality, comfort, and function.',
    who: 'Adults experiencing hoarseness, vocal fatigue, pitch changes, or voice loss from medical or functional causes.',
    approach:
      'Evidence-based voice therapy techniques targeting respiratory support, vocal cord function, and healthy voice use.',
  },
  {
    title: 'Motor Speech Disorders',
    icon: '🗣️',
    description:
      'Dysarthria and apraxia of speech affect the motor planning and execution of speech, making it difficult for others to understand. I help improve speech clarity and develop communication strategies.',
    who: "Adults with Parkinson's disease, stroke, TBI, ALS, or other conditions affecting speech motor control.",
    approach:
      'Targeted exercises for articulation, rate, and prosody. Compensatory strategies and AAC options when appropriate.',
  },
  {
    title: 'TBI Rehabilitation',
    icon: '💪',
    description:
      'Traumatic brain injury can affect nearly every aspect of communication — language, cognition, voice, and swallowing. I provide holistic speech-language intervention as part of an interdisciplinary rehabilitation team.',
    who: 'Adults recovering from mild, moderate, or severe traumatic brain injury.',
    approach:
      'Comprehensive assessment of communication and cognitive function, individualized therapy targeting functional goals, collaboration with OT, PT, and medical teams.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
              Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-dark mb-6">
              Areas of Expertise
            </h1>
            <p className="text-neutral-mid text-xl leading-relaxed">
              My clinical training and interests center on adult medical
              speech-language pathology. Here are the areas where I can help.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.title}
              delay={i * 0.05}
              className="bg-surface rounded-2xl p-8 md:p-10 border border-surface"
            >
              <div className="flex items-start gap-5">
                <span className="text-4xl flex-shrink-0" aria-hidden="true">
                  {service.icon}
                </span>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-neutral-dark mb-4">
                    {service.title}
                  </h2>
                  <p className="text-neutral-mid leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-neutral-dark text-sm uppercase tracking-wide mb-1">
                        Who Benefits
                      </h3>
                      <p className="text-neutral-mid text-sm leading-relaxed">
                        {service.who}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-dark text-sm uppercase tracking-wide mb-1">
                        My Approach
                      </h3>
                      <p className="text-neutral-mid text-sm leading-relaxed">
                        {service.approach}
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
            Questions about these services?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            I&apos;m happy to discuss how speech-language pathology can help you
            or your loved one. Reach out anytime.
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
