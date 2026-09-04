import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { PageHeader } from '@/components/ui/PageHeader';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { FinalCTA } from '@/components/ui/FinalCTA';
import { getAllEntries } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Case Studies',
  description:
    'Selected Ozowinx work — the business challenge, the approach, the architecture, and the outcome.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  const entries = getAllEntries('case-studies');
  const anyPlaceholder = entries.some((e) => e.frontmatter.placeholder);

  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title="Built to solve meaningful problems."
        intro="Each study covers the challenge, the approach, the architecture, and what actually changed for the business."
      >
        {anyPlaceholder ? (
          <p className="mt-6 inline-block rounded-lg border border-line bg-white/70 px-4 py-2.5 font-mono text-[12px] text-ink-secondary backdrop-blur">
            Some studies below are clearly marked placeholders, pending client
            approval.
          </p>
        ) : null}
      </PageHeader>

      <Section>
        <RevealGroup className="grid gap-6 lg:grid-cols-3">
          {entries.map((e) => (
            <RevealItem key={e.slug}>
              <Link
                href={`/case-studies/${e.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line p-8 transition-all duration-200 hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                    {e.frontmatter.category}
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-ink-tertiary transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </div>
                <h2 className="mt-3 text-[22px]">{e.frontmatter.title}</h2>
                {e.frontmatter.placeholder && (
                  <span className="mt-2.5 inline-block self-start rounded border border-line px-2 py-0.5 font-mono text-[10.5px] text-ink-tertiary">
                    Placeholder project
                  </span>
                )}
                <p className="mt-3 flex-1 text-[15px] text-ink-secondary">
                  {e.frontmatter.description}
                </p>
                {e.frontmatter.outcome && (
                  <p className="mt-5 border-t border-line pt-4 text-[14.5px] font-medium">
                    {e.frontmatter.outcome}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {(e.frontmatter.technologies ?? []).map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line bg-surface-alt px-2.5 py-0.5 font-mono text-[11.5px] text-ink-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <FinalCTA />
    </>
  );
}
