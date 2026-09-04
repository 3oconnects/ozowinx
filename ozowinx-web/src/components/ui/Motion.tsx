'use client';

import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { MotionValue } from 'motion/react';
import { useMotionValue, useSpring, useTransform } from 'motion/react';

const EASE = [0.2, 0.7, 0.2, 1] as const;

/**
 * Horizontal rule that draws itself left-to-right when scrolled into view.
 *
 * Used for the process timeline, where the line is carrying real meaning —
 * the steps are sequential — so drawing it reinforces the order.
 */
export function AnimatedRail({
  className = '',
  vertical = false,
}: {
  className?: string;
  /** Draw top-to-bottom instead of left-to-right. */
  vertical?: boolean;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <span aria-hidden="true" className={className} />;

  const axis = vertical ? 'scaleY' : 'scaleX';

  return (
    <motion.span
      aria-hidden="true"
      className={`${vertical ? 'origin-top' : 'origin-left'} block ${className}`}
      initial={{ [axis]: 0 }}
      whileInView={{ [axis]: 1 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: vertical ? 0.5 : 1.1, ease: EASE }}
    />
  );
}

/**
 * Subtle pointer-driven 3D tilt.
 *
 * Rotation is capped low on purpose — enough to give a flat diagram some
 * physical presence, not enough to make text hard to read at an angle.
 */
export function Tilt({
  children,
  max = 6,
  className = '',
}: {
  children: ReactNode;
  /** Maximum rotation in degrees on either axis. */
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 200, damping: 22, mass: 0.6 };
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [max, -max]),
    spring,
  ) as MotionValue<number>;
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-max, max]),
    spring,
  ) as MotionValue<number>;

  if (reduced) return <div className={className}>{children}</div>;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={className}
      style={{ perspective: 1000 }}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        {children}
      </motion.div>
    </div>
  );
}
