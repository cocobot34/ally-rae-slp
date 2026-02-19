import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'

const expertiseAreas = [
  {
    title: 'Dysphagia & Swallowing',
    description:
      'Bedside swallow evaluations, aspiration risk assessment, diet texture modifications, and hands-on experience with FEES and MBS studies.',
    icon: '🫁',
  },
  {
    title: 'Aphasia & Language',
    description:
      'Helping adults find their words again after stroke or brain injury — targeting expression, comprehension, reading, and writing.',
    icon: '💬',
  },
  {
    title: 'Cognitive-Communication',
    description:
      'Memory, attention, problem-solving, executive function — the invisible challenges after TBI or with dementia that change everything.',
    icon: '🧠',
  },
  {
    title: 'Voice Disorders',
    description:
      'Respiratory support, vocal cord function, and voice therapy techniques for dysphonia, vocal fatigue, and post-surgical voice rehab.',
    icon: '🎙️',
  },
  {
    title: 'Motor Speech',
    description:
      'Improving speech clarity for adults with dysarthria or apraxia — Parkinson\'s, stroke, ALS, and other neurological conditions.',
    icon: '🗣️',
  },
  {
    title: 'TBI Rehabilitation',
    description:
      'Working within rehab teams to address the full picture — language, cognition, voice, and swallowing — after traumatic brain injury.',
    icon: '💪',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            {/* Open to opportunities badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Seeking Clinical Fellowship positions — Available May 2026
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-dark leading-tight mb-6">
              I help adults get back to the things that matter most.
            </h1>
            <p className="text-neutral-mid text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              I&apos;m Ally Rae — a speech-language pathologist trained in adult medical rehab. Swallowing, speaking, thinking clearly. The stuff most people take for granted until it&apos;s gone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/experience"
                className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                See My Experience
              </Link>
              <a
                href="/resume-ally-rae.pdf"
                className="border-2 border-neutral-mid/30 text-neutral-mid px-8 py-3.5 rounded-full font-semibold hover:border-primary hover:text-primary transition-colors"
                download
              >
                Download Resume ↓
              </a>
            </div>
            <p className="mt-6 text-neutral-mid text-sm">
              MS, CF-SLP · Cleveland State University · 3.9 GPA
            </p>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -right-10 top-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Quick intro — replaces the AI-heavy "Compassionate, Evidence-Based Care" section */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-6">
              Trained across settings. Focused on what I do best.
            </h2>
            <p className="text-neutral-mid text-lg leading-relaxed mb-4">
              I&apos;ve worked in skilled nursing facilities, inpatient rehab, outpatient clinics, and schools — but adult medical rehab is where I come alive. There&apos;s something about working with someone who just had a stroke and watching them take their first safe swallow, or say their daughter&apos;s name again. That&apos;s the work I want to keep doing.
            </p>
            <p className="text-neutral-mid text-lg leading-relaxed mb-8">
              [ALLY — add a sentence or two here about a specific moment in your clinical training that confirmed this was the right path. Something real. Could be at Brentwood, could be at CSU clinic. Keep it brief.]
            </p>
            <Link
              href="/about"
              className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center gap-2"
            >
              More about me
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Clinical Focus Areas */}
      <AnimatedSection className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-4">
              Clinical Focus Areas
            </h2>
            <p className="text-neutral-mid text-lg max-w-2xl mx-auto">
              Here&apos;s what I&apos;ve trained in and where I can hit the ground running.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area) => (
              <div
                key={area.title}
                className="bg-bg rounded-2xl p-8 hover:shadow-lg transition-shadow border border-surface"
              >
                <span className="text-3xl mb-4 block" aria-hidden="true">
                  {area.icon}
                </span>
                <h3 className="font-semibold text-lg text-neutral-dark mb-2">
                  {area.title}
                </h3>
                <p className="text-neutral-mid text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/expertise"
              className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center gap-2"
            >
              See detailed expertise
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
              <p className="text-xs text-neutral-mid/70">Cleveland State · 3.9 GPA</p>
            </div>
            <div className="text-center">
              <p className="text-2xl mb-1">📋</p>
              <p>Clinical Fellow (CF-SLP)</p>
              <p className="text-xs text-neutral-mid/70">ASHA Certification Track</p>
            </div>
            <div className="text-center">
              <p className="text-2xl mb-1">🏥</p>
              <p>500+ Clinical Hours</p>
              <p className="text-xs text-neutral-mid/70">SNF · Rehab · Outpatient · Schools</p>
            </div>
            <div className="text-center">
              <p className="text-2xl mb-1">🔬</p>
              <p>FEES & MBS Trained</p>
              <p className="text-xs text-neutral-mid/70">Instrumental Assessment</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Placeholder */}
      <AnimatedSection className="py-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="max-w-xl mx-auto bg-bg rounded-2xl p-8 border border-surface">
            <p className="text-3xl mb-4" aria-hidden="true">💬</p>
            <p className="text-neutral-mid italic text-lg leading-relaxed mb-4">
              [ALLY — if any clinical supervisors or professors would write you a brief quote about your work, this would be the highest-impact addition to this site. Even 1-2 sentences from your Brentwood supervisor would be gold.]
            </p>
            <p className="text-neutral-mid text-sm">
              Supervisor recommendations coming soon.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 md:py-28 bg-primary text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Looking for a medical SLP who&apos;s ready to work?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            I&apos;m finishing my MS in May 2026 and actively seeking Clinical Fellowship positions in adult medical rehab — SNF, acute care, inpatient rehab, or outpatient neuro. If you&apos;re hiring, I&apos;d love to talk.
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
