import Link from 'next/link';
import { Section } from './Section';
import { PageHeader } from './PageHeader';
import { FinalCTA } from './FinalCTA';
import { Reveal, RevealGroup, RevealItem } from './Reveal';
import type { ReactNode } from 'react';

/**
 * Shell for routes whose content is not yet written.
 *
 * These exist so the information architecture, navigation, sitemap and
 * internal linking are real and testable from day one. Each states plainly
 * that its content is pending rather than shipping generated filler.
 */
export function PageShell({
  eyebrow,
  title,
  intro,
  children,
  outline,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
  outline?: string[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} intro={intro} />

      <Section>
        {children}

        {outline && (
          <Reveal>
            <div className="mt-4 rounded-xl border border-line bg-surface p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-tertiary">
                Content pending — planned sections
              </p>
              <RevealGroup
                className="mt-4 grid gap-2.5 sm:grid-cols-2"
                stagger={0.045}
              >
                {outline.map((item) => (
                  <RevealItem
                    key={item}
                    direction="right"
                    distance={10}
                    className="flex items-baseline gap-2.5 text-[15px] text-ink-secondary"
                  >
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-line-strong" />
                    {item}
                  </RevealItem>
                ))}
              </RevealGroup>
              <p className="mt-5 text-[14px] text-ink-secondary">
                The pattern to follow is on{' '}
                <Link
                  href="/services/product-engineering"
                  className="font-medium text-accent underline-offset-4 transition-colors hover:text-accent-dark hover:underline"
                >
                  Product Engineering
                </Link>
                .
              </p>
            </div>
          </Reveal>
        )}
      </Section>

      <FinalCTA />
    </>
  );
}
