import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-primary text-white/90">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl text-white mb-3">
              Ally Schwab
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              MS, CF-SLP · Speech-language pathologist specializing in adult medical rehabilitation in Cleveland, Ohio.
            </p>
            <p className="text-accent-light text-sm font-medium mt-3">
              ✨ Open to Clinical Fellowship opportunities
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-white transition-colors">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>Cleveland, Ohio</li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ally-schwab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="/resume-ally-schwab.pdf"
                  className="hover:text-white transition-colors"
                  download
                >
                  Download Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Ally Schwab. All rights reserved.
          </p>
          <p className="mt-2">
            This website is for informational purposes only and does not
            constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
