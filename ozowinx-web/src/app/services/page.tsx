import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHead } from '@/components/ui/Section';
import { PageHeader } from '@/components/ui/PageHeader';
import { SpotlightCard } from '@/components/ui/Spotlight';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { FAQ } from '@/components/ui/FAQ';
import { FinalCTA } from '@/components/ui/FinalCTA';
import { SERVICES } from '@/lib/services';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Services',
  description:
    'Product engineering, AI systems, cloud infrastructure, automation, and digital transformation — delivered end to end by Ozowinx.',
  path: '/services',
});

const FAQS = [
  {
    q: 'Can you work on just one part of a project?',
    a: 'Yes. Engagements range from a focused architecture review to full delivery and ongoing operation.',
  },
  {
    q: 'How do engagements usually start?',
    a: 'With a discovery conversation, followed by a written scope covering approach, timeline, and cost before any commitment.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. Most clients continue with a support and evolution arrangement sized to the system.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="From strategy to production."
        intro="Five practices that work together. Most projects draw on more than one — the boundaries matter less than the outcome."
      />

      <Section>
        <RevealGroup className="grid gap-6 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <RevealItem key={service.slug}>
              <SpotlightCard className="glow-ring h-full rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-line-strong hover:shadow-float">
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col p-9"
              >
                <p className="font-mono text-xs text-ink-tertiary">
                  {service.index}
                </p>
                <h2 className="mt-3.5 text-[25px]">{service.name}</h2>
                <p className="mt-3 text-[15.5px] text-ink-secondary">
                  {service.summary}
                </p>
                <ul className="mt-5.5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-line pt-5.5">
                  {service.capabilities.map((c) => (
                    <li
                      key={c}
                      className="flex items-baseline gap-2 text-sm text-ink-secondary"
                    >
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                      {c}
                    </li>
                  ))}
                </ul>
                <span className="mt-6.5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold transition-colors group-hover:text-accent-dark">
                  Explore {service.navLabel}
                  <ArrowRight className="size-3.5 transition-transform duration-250 group-hover:translate-x-1.5" />
                </span>
              </Link>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section alt>
        <Reveal>
          <SectionHead center eyebrow="FAQ" title="Working with us." />
        </Reveal>
        <Reveal>
          <FAQ items={FAQS} />
        </Reveal>
      </Section>

      <FinalCTA />
    </>
  );
}
