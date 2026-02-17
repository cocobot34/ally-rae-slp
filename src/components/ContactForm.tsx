'use client'

import { useState, FormEvent } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string
    const referral = data.get('referral') as string

    // Try mailto as a best-effort approach, but be honest about it
    const subject = encodeURIComponent(`Website Inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nHow they found you: ${referral}\n\nMessage:\n${message}`
    )

    // Open mailto in a new context so we don't navigate away
    const mailtoLink = `mailto:Allyrschwab@gmail.com?subject=${subject}&body=${body}`
    const mailWindow = window.open(mailtoLink, '_self')

    // Show honest messaging — we can't confirm delivery with mailto
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-surface rounded-2xl p-8 text-center">
        <p className="text-2xl mb-3">✉️</p>
        <h3 className="font-serif text-2xl text-neutral-dark mb-2">
          Almost there!
        </h3>
        <p className="text-neutral-mid mb-4">
          Your email client should have opened with your message pre-filled.
          If it didn&apos;t open, please email me directly:
        </p>
        <a
          href="mailto:Allyrschwab@gmail.com"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
        >
          Allyrschwab@gmail.com
        </a>
        <p className="text-neutral-mid text-sm mt-4">
          You can also reach me on{' '}
          <a
            href="https://www.linkedin.com/in/ally-schwab"
            className="text-primary underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-accent/10 rounded-xl p-4 text-sm text-neutral-mid">
        <strong>Note:</strong> This form is for general inquiries only. Please
        do not include any personal health information.
      </div>

      {error && (
        <div className="bg-red-50 rounded-xl p-4 text-sm text-red-700">
          Something went wrong. Please email me directly at{' '}
          <a href="mailto:Allyrschwab@gmail.com" className="underline">
            Allyrschwab@gmail.com
          </a>
          .
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-neutral-dark mb-1.5"
        >
          Name <span className="text-accent-dark">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-neutral-mid/30 bg-bg px-4 py-3 text-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-neutral-dark mb-1.5"
        >
          Email <span className="text-accent-dark">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-xl border border-neutral-mid/30 bg-bg px-4 py-3 text-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="referral"
          className="block text-sm font-medium text-neutral-dark mb-1.5"
        >
          How did you find me?
        </label>
        <input
          type="text"
          id="referral"
          name="referral"
          className="w-full rounded-xl border border-neutral-mid/30 bg-bg px-4 py-3 text-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          placeholder="Google, LinkedIn, referral, etc."
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-neutral-dark mb-1.5"
        >
          Message <span className="text-accent-dark">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-neutral-mid/30 bg-bg px-4 py-3 text-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-y"
          placeholder="How can I help you?"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-dark transition-colors w-full md:w-auto disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
