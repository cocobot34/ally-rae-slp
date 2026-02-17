'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.section
      initial={prefersReduced ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={
        prefersReduced
          ? { duration: 0 }
          : { duration: 0.6, delay, ease: 'easeOut' }
      }
      className={className}
    >
      {children}
    </motion.section>
  )
}
