import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { PageHeader } from '@/components/ui/PageHeader';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { FinalCTA } from '@/components/ui/FinalCTA';
import { getAllEntries, formatDate } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Insights',
  description:
    'Engineering, AI, cloud, and automation writing from the Ozowinx team.',
  path: '/insights',
});

export default function InsightsPage() {
  const entries = getAllEntries('insights');

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Notes from the build."
        intro="What we have learned shipping and operating technology systems — written for the people who have to live with the decisions."
      />

      <Section>
        {entries.length === 0 ? (
          <p className="text-ink-secondary">
            No articles published yet. Add an <code className="font-mono">.mdx</code>{' '}
            file to <code className="font-mono">content/insights/</code> and it
            appears here automatically.
          </p>
        ) : (
          <RevealGroup className="flex flex-col gap-5">
            {entries.map((e) => (
              <RevealItem key={e.slug}>
                <Link
                  href={`/insights/${e.slug}`}
                  className="group flex items-start justify-between gap-8 rounded-2xl border border-line p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                        {e.frontmatter.category}
                      </span>
                      <span className="font-mono text-[11px] text-ink-tertiary">
                        {formatDate(e.frontmatter.date)}
                      </span>
                      {e.frontmatter.placeholder && (
                        <span className="rounded border border-line px-2 py-0.5 font-mono text-[10.5px] text-ink-tertiary">
                          Sample post
                        </span>
                      )}
                    </div>
                    <h2 className="mt-3 text-[23px]">{e.frontmatter.title}</h2>
                    <p className="mt-2 max-w-2xl text-[15.5px] text-ink-secondary">
                      {e.frontmatter.description}
                    </p>
                  </div>
                  <span className="flex size-9.5 shrink-0 items-center justify-center rounded-full border border-line-strong transition-all group-hover:border-ink group-hover:bg-ink">
                    <ArrowUpRight className="size-4 transition-colors group-hover:text-white" />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        )}
      </Section>

      <FinalCTA />
    </>
  );
}
