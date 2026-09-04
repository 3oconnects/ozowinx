'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

const EASE = [0.2, 0.7, 0.2, 1] as const;

/**
 * Headline that animates in word by word.
 *
 * Words are split on whitespace and each gets its own span, so the browser
 * still wraps the line naturally. Wrap a word in {@link Accent} to give it
 * the gradient treatment.
 */
export function WordReveal({
  text,
  accent,
  className = '',
  delay = 0,
  as: Tag = 'h1',
  trigger = 'mount',
}: {
  text: string;
  /** Words rendered with the gradient. Matched case-insensitively, punctuation ignored. */
  accent?: string[];
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'p';
  /** 'mount' for above-the-fold headlines, 'inView' for anything below it. */
  trigger?: 'mount' | 'inView';
}) {
  const reduced = useReducedMotion();
  const words = text.split(' ');
  const accentSet = new Set((accent ?? []).map((w) => w.toLowerCase()));
  const isAccent = (w: string) =>
    accentSet.has(w.toLowerCase().replace(/[^a-z0-9-]/gi, ''));

  if (reduced) {
    return (
      <Tag className={className}>
        {words.map((w, i) => (
          <span key={i} className={isAccent(w) ? 'text-gradient' : undefined}>
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </Tag>
    );
  }

  const MotionTag = motion[Tag];
  const run =
    trigger === 'inView'
      ? {
          whileInView: 'visible',
          viewport: { once: true, margin: '0px 0px -80px 0px' },
        }
      : { animate: 'visible' };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      {...run}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.05, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        // The inline-block wrapper is what clips the rising word; without it
        // the translate would be visible above the previous line.
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${isAccent(word) ? 'text-gradient' : ''}`}
            variants={{
              hidden: { y: '105%', opacity: 0 },
              visible: {
                y: '0%',
                opacity: 1,
                transition: { duration: 0.75, ease: EASE },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  );
}

/** Decorative blurred colour wash. Sits behind content, never above it. */
export function Aurora({ children }: { children?: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-1 overflow-hidden"
    >
      <div
        className="aurora-blob left-[-10%] top-[-18%] size-[38rem]"
        style={{ background: 'rgb(37 99 235 / 0.16)' }}
      />
      <div
        className="aurora-blob right-[-12%] top-[-6%] size-[32rem]"
        style={{ background: 'rgb(99 102 241 / 0.14)', animationDelay: '-9s' }}
      />
      <div
        className="aurora-blob bottom-[-24%] left-[38%] size-[30rem]"
        style={{ background: 'rgb(22 163 74 / 0.09)', animationDelay: '-18s' }}
      />
      {children}
    </div>
  );
}
