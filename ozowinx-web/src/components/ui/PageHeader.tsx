import type { ReactNode } from 'react';
import { Container } from './Section';
import { Reveal } from './Reveal';
import { Aurora } from './WordReveal';

/**
 * Standard interior page header.
 *
 * Every route below the home page opened with the same hand-rolled block;
 * this is that block, so the treatment stays consistent as pages are filled
 * in. The aurora and grid are a quieter version of the home hero — enough
 * to connect the pages, not enough to compete with the content underneath.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  /** Optional trailing content, e.g. a status note or filter row. */
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line pb-16 pt-16">
      <div className="opacity-60">
        <Aurora />
      </div>
      <div
        aria-hidden="true"
        className="grid-bg pointer-events-none absolute inset-0 -z-1 opacity-50"
      />

      <Container>
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-5 max-w-3xl text-[2.25rem] leading-[1.08] tracking-[-0.025em] sm:text-[3.25rem]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-[19px] leading-relaxed text-ink-secondary">
              {intro}
            </p>
          </Reveal>
        )}
        {children && <Reveal delay={0.18}>{children}</Reveal>}
      </Container>
    </section>
  );
}
