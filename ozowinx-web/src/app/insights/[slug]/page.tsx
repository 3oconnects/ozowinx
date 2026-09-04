import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section } from '@/components/ui/Section';
import { Prose } from '@/components/ui/Prose';
import { FinalCTA } from '@/components/ui/FinalCTA';
import { getSlugs, getEntry, formatDate } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getSlugs('insights').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry('insights', slug);
  if (!entry) return {};

  return buildMetadata({
    title: entry.frontmatter.title,
    description: entry.frontmatter.description,
    path: `/insights/${slug}`,
    type: 'article',
    publishedTime: entry.frontmatter.date,
  });
}

export default async function InsightPage({ params }: Params) {
  const { slug } = await params;
  const entry = getEntry('insights', slug);
  if (!entry) notFound();

  return (
    <>
      <section className="border-b border-line pb-12 pt-16">
        <Container>
          <Link
            href="/insights"
            className="font-mono text-[12px] text-ink-tertiary hover:text-ink"
          >
            ← All insights
          </Link>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
              {entry.frontmatter.category}
            </span>
            <span className="font-mono text-[11px] text-ink-tertiary">
              {formatDate(entry.frontmatter.date)}
            </span>
          </div>
          <h1 className="mt-3 max-w-3xl text-[2rem] leading-[1.1] tracking-[-0.025em] sm:text-[2.75rem]">
            {entry.frontmatter.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[18px] leading-relaxed text-ink-secondary">
            {entry.frontmatter.description}
          </p>
        </Container>
      </section>

      <Section>
        <Prose source={entry.body} />
      </Section>

      <FinalCTA />
    </>
  );
}
