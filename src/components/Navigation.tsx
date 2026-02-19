'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-surface">
      <nav
        className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Ally Rae logo"
            width={36}
            height={36}
            className="rounded"
          />
          <span className="text-lg font-serif text-primary">
            Ally Rae
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className={`text-[15px] font-medium transition-colors ${
                pathname === link.href
                  ? 'text-primary'
                  : 'text-neutral-dark hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-neutral-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-surface overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4 bg-bg">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={`font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-neutral-dark hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center hover:bg-primary-dark transition-colors"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
