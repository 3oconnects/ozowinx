'use client';

import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { useReducedMotion } from 'motion/react';

/**
 * Card wrapper with a pointer-following highlight.
 *
 * The glow is a plain absolutely-positioned gradient driven by CSS custom
 * properties, so tracking the pointer costs one style write per move and
 * never triggers a React re-render of the card's contents.
 */
export function SpotlightCard({
  children,
  className = '',
  as: Tag = 'div',
  intensity = 0.07,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'li';
  intensity?: number;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--ozw-x', `${e.clientX - r.left}px`);
    el.style.setProperty('--ozw-y', `${e.clientY - r.top}px`);
  };

  return (
    <Tag
      // The ref type varies with the polymorphic tag; the DOM node is the same.
      ref={ref as React.Ref<never>}
      onMouseMove={onMove}
      onMouseEnter={() => !reduced && setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`relative overflow-hidden ${className}`}
      {...rest}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(340px circle at var(--ozw-x, 50%) var(--ozw-y, 50%), rgb(37 99 235 / ${intensity}), transparent 65%)`,
        }}
      />
      <span className="relative z-1 flex h-full flex-col">{children}</span>
    </Tag>
  );
}
