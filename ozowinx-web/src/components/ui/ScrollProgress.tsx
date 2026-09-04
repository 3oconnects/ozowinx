'use client';

import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';

/**
 * Reading-progress bar pinned under the header.
 *
 * Purely informational — it is aria-hidden and carries no interaction, so
 * it is dropped entirely when the user has asked for reduced motion.
 */
export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    restDelta: 0.001,
  });

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="brand-bar fixed inset-x-0 top-0 z-60 h-0.5 origin-left"
    />
  );
}
