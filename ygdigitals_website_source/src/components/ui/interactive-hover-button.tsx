'use client'

/**
 * @author: @emerald-ui
 * @description: Interactive Hover Button Component
 * @version: 1.0.0
 * @date: 2026-01-28
 * @license: MIT
 * @website: https://emerald-ui.com
 */
import React, { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useRouter } from 'next/navigation'

function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

import { HTMLMotionProps } from 'framer-motion'

interface InteractiveHoverButtonProps extends Omit<HTMLMotionProps<"button">, 'children' | 'onClick'> {
  text?: string
  loadingText?: string
  successText?: string
  classes?: string
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function InteractiveHoverButton({
  text = 'Button',
  loadingText = 'Processing...',
  successText = 'Complete!',
  classes,
  href,
  onClick,
  ...props
}: InteractiveHoverButtonProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const router = useRouter()

  const isIdle = status === 'idle'

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (status !== 'idle') return

    if (onClick) {
      onClick(e)
    }

    setStatus('loading')
    // Simulate async process (for demo purpose only)
    setTimeout(() => {
      setStatus('success')
      if (href) {
        setTimeout(() => {
          if (href.startsWith('http') || href.startsWith('#')) {
            window.location.href = href;
          } else {
            router.push(href)
          }
          setTimeout(() => setStatus('idle'), 500)
        }, 800)
      } else {
        setTimeout(() => {
          setStatus('idle')
        }, 3000) // Reset after success
      }
    }, href ? 800 : 2000)
  }

  return (
    <motion.button
      className={cn(
        'group bg-background text-foreground relative flex min-w-40 items-center justify-center overflow-hidden rounded-full border border-border p-2 px-6 font-semibold',
        status === 'loading' && 'px-2 min-w-0 w-12 h-12', // Circle shape when loading
        classes
      )}
      onClick={handleClick}
      layout
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      {...props}
    >
      <AnimatePresence mode='popLayout' initial={false}>
        <motion.div
          key={status}
          className='flex items-center gap-2'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div
            className={cn(
              'bg-primary h-2 w-2 rounded-full transition-all duration-500 group-hover:scale-[40]',
              !isIdle && 'scale-[40]'
            )}
          />
          <span
            className={cn(
              'inline-block transition-all duration-500 group-hover:translate-x-20 group-hover:opacity-0',
              !isIdle && 'translate-x-20 opacity-0'
            )}
          >
            {text}
          </span>
          <div
            className={cn(
              'text-primary-foreground absolute top-0 left-0 z-10 flex h-full w-full -translate-x-16 items-center justify-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100',
              !isIdle && 'translate-x-0 opacity-100'
            )}
          >
            {status === 'idle' ? (
              <>
                <span>{text}</span>
                <ArrowRight className='h-4 w-4' />
              </>
            ) : status === 'loading' ? (
              <>
                <div className='border-primary-foreground border-t-transparent h-4 w-4 animate-spin rounded-full border-2' />
                <span className='text-primary-foreground hidden md:inline-block'>{loadingText}</span>
              </>
            ) : (
              // success
              <>
                <Check className='h-4 w-4 text-primary-foreground' />
                <span className='text-primary-foreground hidden md:inline-block'>{successText}</span>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}
