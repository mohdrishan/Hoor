'use client'
import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { clsx } from 'clsx'

interface Props {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  y?: number
}

// Shared transition factory — avoids recreating objects on every render
const makeTransition = (duration: number, delay: number) => ({
  duration,
  delay,
  ease: [0.25, 0.1, 0.25, 1] as const,
})

export function FadeUp({ children, delay = 0, duration = 1.0, className, y = 36 }: Props) {
  const { ref, inView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={makeTransition(duration, delay)}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, delay = 0, duration = 0.9, className }: Props) {
  const { ref, inView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  )
}

export function SlideIn({
  children, delay = 0, direction = 'left', className,
}: Props & { direction?: 'left' | 'right' }) {
  const { ref, inView } = useScrollReveal('-40px')
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={makeTransition(1.2, delay)}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerParent({
  children, className,
}: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChild({
  children, className,
}: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  )
}
