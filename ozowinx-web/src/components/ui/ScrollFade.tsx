'use client';

import { useRef } from 'react';
import type { ReactNode } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';

/**
 * Fades and settles its child as the section scrolls out of the top of the
 * viewport, so the hero recedes instead of sliding away at full contrast.
 *
 * Scrubbed off scroll position rather than timed: the movement belongs to the
 * scroll, so it should reverse exactly when the reader scrolls back up.
 */
export function ScrollFade({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ opacity, scale, y }}>{children}</motion.div>
    </div>
  );
}

/**
 * Scroll-scrubbed vertical progress line.
 *
 * Used on the process timeline: the rail fills as the reader moves through the
 * steps, so its length reports where they are rather than just decorating.
 */
export function ScrollRail({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 60%'],
  });

  if (reduced) return <span aria-hidden="true" className={className} />;

  return (
    <span ref={ref} aria-hidden="true" className={`${className} block`}>
      <motion.span
        className="block size-full origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
      />
    </span>
  );
}
