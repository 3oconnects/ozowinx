import type { ReactNode } from 'react';
import { WordReveal } from './WordReveal';

export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-site px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  alt = false,
  id,
  className = '',
}: {
  children: ReactNode;
  alt?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-30 ${alt ? 'bg-surface' : ''} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  center = false,
  className = '',
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mb-16 max-w-2xl ${center ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${center ? 'eyebrow-center' : ''}`}>{eyebrow}</p>
      )}
      <WordReveal
        as="h2"
        trigger="inView"
        text={title}
        className="mt-4 text-[2.125rem] leading-[1.1] tracking-[-0.02em] md:text-h2"
      />
      {/* Short accent rule under every section heading, so the eye has a
          consistent anchor as it moves down a long page. */}
      <span
        aria-hidden="true"
        className={`mt-6 block h-0.5 w-10 rounded-full bg-accent ${center ? 'mx-auto' : ''}`}
      />
      {body && (
        <p className="mt-5 text-lg leading-relaxed text-ink-secondary">{body}</p>
      )}
    </div>
  );
}
