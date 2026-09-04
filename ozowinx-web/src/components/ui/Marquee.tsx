import type { ReactNode } from 'react';

/**
 * Infinite horizontal ticker.
 *
 * The children are rendered twice and the track translates by exactly -50%,
 * which is what makes the loop seamless. The duplicate is aria-hidden so the
 * list is announced once. Pauses on hover; falls back to a static wrapped
 * row under prefers-reduced-motion (see globals.css).
 */
export function Marquee({
  children,
  duration = 42,
  className = '',
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div
        className="marquee-track"
        style={{ ['--ozw-marquee-duration' as string]: `${duration}s` }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
