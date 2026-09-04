'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

const EASE = [0.2, 0.7, 0.2, 1] as const;

/**
 * The Ozowinx logo — the real artwork, cut from Logo.png.
 *
 * Earlier this file redrew the mark as inline SVG. That was an approximation,
 * and an approximation of a logo is the wrong thing to ship: the master is a
 * shaded ribbon with over/under weaving that a stroked path cannot express.
 * The lockup below is the master file itself, background removed, tagline
 * trimmed off, served through next/image so it comes down as AVIF/WebP at the
 * size actually rendered.
 *
 * The tagline is not part of the image on purpose — it is live text
 * ({@link BrandSignal}), so it stays selectable and sharp at any size.
 */

/** Mark only — for square and compact contexts. */
export function LogoMark({
  className = 'size-7',
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      width={320}
      height={199}
      priority={priority}
      className={className}
      aria-hidden="true"
    />
  );
}

export function Logo({
  className = '',
  animated = false,
  priority = false,
}: {
  className?: string;
  /** Wipe the lockup in on mount. */
  animated?: boolean;
  priority?: boolean;
}) {
  const reduced = useReducedMotion();
  const play = animated && !reduced;

  return (
    <Link
      href="/"
      className={`group relative inline-block overflow-hidden ${className}`}
      aria-label="Ozowinx — home"
    >
      <motion.span
        className="block"
        initial={
          play
            ? { clipPath: 'inset(0 100% 0 0)', opacity: 0, scale: 0.97 }
            : false
        }
        animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <Image
          src="/logo-lockup.png"
          alt="Ozowinx"
          width={760}
          height={168}
          priority={priority}
          sizes="160px"
          className="h-8 w-auto transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </motion.span>

      {/* Light sweeps across the artwork on hover. Pointer-events off so it
          never sits between the cursor and the link. */}
      {!reduced && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100"
        />
      )}
    </Link>
  );
}

const SIGNAL = [
  { word: 'Build', color: '#0057E8' },
  { word: 'Modernize', color: '#009D4A' },
  { word: 'Scale', color: '#E11F2C' },
] as const;

/**
 * The logo's tagline — Build | Modernize | Scale.
 *
 * Colours are sampled from the master artwork's own tagline, so this matches
 * the printed lockup rather than approximating it with theme colours.
 */
export function BrandSignal({
  className = '',
  size = 'sm',
}: {
  className?: string;
  size?: 'sm' | 'lg';
}) {
  const reduced = useReducedMotion();

  return (
    <p
      className={`flex flex-wrap items-center font-mono uppercase ${
        size === 'lg'
          ? 'gap-3 text-[13px] tracking-[0.16em]'
          : 'gap-2.5 text-[11px] tracking-[0.14em]'
      } ${className}`}
    >
      {SIGNAL.map(({ word, color }, i) => (
        <span key={word} className="flex items-center gap-2.5">
          {i > 0 && (
            <span aria-hidden="true" className="text-line-strong">
              |
            </span>
          )}
          <motion.span
            style={{ color }}
            className="font-semibold"
            initial={reduced ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: reduced ? 0 : 0.12 * i }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
}
