import Link from 'next/link';
import { Check } from 'lucide-react';
import { Container, Section, SectionHead } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { FinalCTA } from '@/components/ui/FinalCTA';
import type { Service } from '@/lib/services';

/**
 * Rendered for services whose long-form detail content is not yet written.
 * The route, metadata and navigation are real; only the body is pending —
 * so the page is honest rather than padded with filler.
 */
export function ServiceStub({ service }: { service: Service }) {
  return (
    <>
      <section className="border-b border-line pb-16 pt-16">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-[12px] text-ink-tertiary">
              <li>
                <Link href="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:text-ink">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink">{service.navLabel}</li>
            </ol>
          </nav>

          <p className="eyebrow">Service {service.index}</p>
          <h1 className="mt-5 max-w-3xl text-[2.25rem] leading-[1.08] tracking-[-0.025em] sm:text-[3rem]">
            {service.name}
          </h1>
          <p className="mt-5 max-w-xl text-[19px] leading-relaxed text-ink-secondary">
            {service.summary}
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="accent" showArrow>
              Start a Project
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <Reveal>
          <SectionHead eyebrow="Capabilities" title="What this covers." />
          <ul className="grid max-w-3xl gap-3.5 sm:grid-cols-2">
            {service.capabilities.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2.5 rounded-xl border border-line p-4 text-[15px]"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-xl border border-line bg-surface p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-tertiary">
              Content pending
            </p>
            <p className="mt-2 max-w-2xl text-[15px] text-ink-secondary">
              The full detail page for this service — problem, approach, process,
              technologies, deliverables, and FAQs — follows the template shipped
              on{' '}
              <Link
                href="/services/product-engineering"
                className="font-medium text-accent hover:text-accent-dark"
              >
                Product Engineering
              </Link>
              . Add a <code className="font-mono text-[13px]">detail</code> block
              to this service in{' '}
              <code className="font-mono text-[13px]">src/lib/services.ts</code>{' '}
              and this page renders the full layout automatically.
            </p>
          </div>
        </Reveal>
      </Section>

      <FinalCTA />
    </>
  );
}
