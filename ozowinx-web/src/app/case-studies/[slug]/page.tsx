import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section } from '@/components/ui/Section';
import { Prose } from '@/components/ui/Prose';
import { FinalCTA } from '@/components/ui/FinalCTA';
import { getSlugs, getEntry } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getSlugs('case-studies').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry('case-studies', slug);
  if (!entry) return {};

  return buildMetadata({
    title: entry.frontmatter.title,
    description: entry.frontmatter.description,
    path: `/case-studies/${slug}`,
    type: 'article',
  });
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const entry = getEntry('case-studies', slug);
  if (!entry) notFound();

  const { frontmatter: fm } = entry;

  return (
    <>
      <section className="border-b border-line pb-12 pt-16">
        <Container>
          <Link
            href="/case-studies"
            className="font-mono text-[12px] text-ink-tertiary hover:text-ink"
          >
            ← All case studies
          </Link>

          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
            {fm.category}
          </p>
          <h1 className="mt-3 max-w-3xl text-[2rem] leading-[1.1] tracking-[-0.025em] sm:text-[2.75rem]">
            {fm.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[18px] leading-relaxed text-ink-secondary">
            {fm.description}
          </p>

          {fm.placeholder && (
            <p className="mt-6 inline-block rounded-lg border border-line bg-surface px-4 py-2.5 font-mono text-[12px] text-ink-secondary">
              Placeholder project — replace with an approved client story before launch.
            </p>
          )}

          <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-tertiary">
                Client
              </dt>
              <dd className="mt-1.5 text-[15px] font-medium">{fm.client ?? '—'}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-tertiary">
                Outcome
              </dt>
              <dd className="mt-1.5 text-[15px] font-medium">{fm.outcome ?? '—'}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-tertiary">
                Technologies
              </dt>
              <dd className="mt-1.5 flex flex-wrap gap-1.5">
                {(fm.technologies ?? []).map((t) => (
                  <span
                    key={t}
                    className="rounded border border-line bg-surface-alt px-2.5 py-0.5 font-mono text-[11.5px] text-ink-secondary"
                  >
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <Section>
        <Prose source={entry.body} />
      </Section>

      <FinalCTA />
    </>
  );
}
