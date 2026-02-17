import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'

const services = [
  {
    title: 'Dysphagia & Swallowing',
    description:
      'Comprehensive evaluation and treatment of swallowing disorders, including bedside assessments and diet modification planning.',
    icon: '🫁',
  },
  {
    title: 'Aphasia & Language',
    description:
      'Restoring communication abilities after stroke or brain injury through evidence-based language therapy approaches.',
    icon: '💬',
  },
  {
    title: 'Cognitive-Communication',
    description:
      'Addressing memory, attention, problem-solving, and executive function challenges following TBI or neurological conditions.',
    icon: '🧠',
  },
  {
    title: 'Voice Disorders',
    description:
      'Treating dysphonia, vocal cord dysfunction, and post-surgical voice rehabilitation with targeted voice therapy techniques.',
    icon: '🎙️',
  },
  {
    title: 'Motor Speech Disorders',
    description:
      'Improving speech clarity and intelligibility for adults with dysarthria or apraxia of speech.',
    icon: '🗣️',
  },
  {
    title: 'TBI Rehabilitation',
    description:
      'Holistic speech-language intervention supporting recovery and functional communication after traumatic brain injury.',
    icon: '💪',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-4">
              Speech-Language Pathologist · Cleveland, Ohio
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-dark leading-tight mb-6">
              Helping adults reclaim their voice, communication, and confidence
            </h1>
            <p className="text-neutral-mid text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              I&apos;m Ally Rae — a speech-language pathologist specializing in
              adult rehabilitation. I work with people rebuilding their words,
              their voice, and their connection to the world around them.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
            <p className="mt-6 text-neutral-mid text-sm">
              MS, CF-SLP · Cleveland State University
            </p>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -right-10 top-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* About Snapshot */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-6">
              Compassionate, Evidence-Based Care
            </h2>
            <p className="text-neutral-mid text-lg leading-relaxed mb-4">
              With clinical training spanning skilled nursing, inpatient rehabilitation,
              and outpatient settings, I bring a patient-centered approach to every
              interaction. My focus is on adults and geriatric populations navigating
              communication and swallowing challenges — from stroke recovery to
              traumatic brain injury rehabilitation.
            </p>
            <p className="text-neutral-mid text-lg leading-relaxed mb-8">
              I believe that effective therapy begins with understanding each
              person&apos;s unique story, goals, and strengths.
            </p>
            <Link
              href="/about"
              className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center gap-2"
            >
              More About My Approach
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Preview */}
      <AnimatedSection className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-4">
              Areas of Expertise
            </h2>
            <p className="text-neutral-mid text-lg max-w-2xl mx-auto">
              Specialized in adult medical speech-language pathology with
              clinical experience across rehabilitation settings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-bg rounded-2xl p-8 hover:shadow-lg transition-shadow border border-surface"
              >
                <span className="text-3xl mb-4 block" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="font-semibold text-lg text-neutral-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-mid text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center gap-2"
            >
              View All Services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Credentials Strip */}
      <AnimatedSection className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 text-neutral-mid text-sm font-medium">
            <div className="text-center">
              <p className="text-2xl mb-1">🎓</p>
              <p>MS, Speech-Language Pathology</p>
              <p className="text-xs text-neutral-mid/70">Cleveland State University</p>
            </div>
            <div className="text-center">
              <p className="text-2xl mb-1">📋</p>
              <p>Clinical Fellow (CF-SLP)</p>
              <p className="text-xs text-neutral-mid/70">ASHA Certification Track</p>
            </div>
            <div className="text-center">
              <p className="text-2xl mb-1">🏥</p>
              <p>Medical SLP Focus</p>
              <p className="text-xs text-neutral-mid/70">SNF · Rehab · Outpatient</p>
            </div>
            <div className="text-center">
              <p className="text-2xl mb-1">❤️</p>
              <p>CPR Certified</p>
              <p className="text-xs text-neutral-mid/70">Current</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 md:py-28 bg-primary text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Whether you&apos;re a fellow clinician, a potential employer, or
            someone seeking information about speech-language pathology services
            — I&apos;d love to hear from you.
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
