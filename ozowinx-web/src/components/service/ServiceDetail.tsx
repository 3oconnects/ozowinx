import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Section, SectionHead, Container } from '@/components/ui/Section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/ui/FAQ';
import { FinalCTA } from '@/components/ui/FinalCTA';
import { SERVICES, type Service } from '@/lib/services';

/**
 * Full service detail template. Every service page renders through this,
 * so the five pages stay structurally identical and only content varies.
 */
export function ServiceDetail({ service }: { service: Service }) {
  const d = service.detail;
  if (!d) return null;

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
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

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="eyebrow">Service {service.index}</p>
              <h1 className="mt-5 text-[2.25rem] leading-[1.08] tracking-[-0.025em] sm:text-[3rem] lg:text-[3.5rem]">
                {service.name}
              </h1>
              <p className="mt-5 max-w-xl text-[19px] leading-relaxed text-ink-secondary">
                {service.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button href="/contact" variant="accent" showArrow>
                  Start a Project
                </Button>
                <Button href="/case-studies" variant="secondary">
                  See related work
                </Button>
              </div>
            </div>

            {/* Capability index — doubles as an in-page summary */}
            <div className="rounded-2xl border border-line bg-surface p-7">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-tertiary">
                What this covers
              </h2>
              <ul className="mt-4 space-y-3">
                {service.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[15px]">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-18">
          <Reveal>
            <p className="eyebrow">The Problem</p>
            <h2 className="mt-4 text-[1.875rem] md:text-[2.375rem]">
              {d.problem.heading}
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-secondary">
              {d.problem.body}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-tertiary">
                Symptoms we hear
              </h3>
              <ul className="mt-5 space-y-4">
                {d.problem.symptoms.map((s) => (
                  <li
                    key={s}
                    className="border-l-2 border-line-strong pl-4 text-[15.5px] leading-relaxed text-ink-secondary"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Solution */}
      <Section alt>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow eyebrow-center">Our Approach</p>
            <h2 className="mt-4 text-[1.875rem] md:text-[2.375rem]">
              {d.solution.heading}
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-secondary">
              {d.solution.body}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Capabilities */}
      <Section>
        <Reveal>
          <SectionHead eyebrow="Capabilities" title="What we build." />
        </Reveal>
        <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {d.capabilities.map((c, i) => (
            <RevealItem key={c.name}>
              <div className="h-full rounded-2xl border border-line bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-line-strong hover:shadow-lift">
                <p className="font-mono text-xs text-ink-tertiary">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-[20px]">{c.name}</h3>
                <p className="mt-2.5 text-[15px] text-ink-secondary">{c.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Process */}
      <Section alt>
        <Reveal>
          <SectionHead eyebrow="Process" title="How the work runs." />
        </Reveal>
        <RevealGroup className="relative grid md:grid-cols-4">
          <span
            className="absolute left-[5%] right-[5%] top-[5px] hidden h-px bg-line md:block"
            aria-hidden="true"
          />
          {d.process.map((s) => (
            <RevealItem
              key={s.step}
              className="relative ml-2.5 border-l border-line pb-8 pl-7 md:ml-0 md:border-l-0 md:pb-0 md:pr-6"
            >
              <span className="absolute -left-1.5 top-0 size-2.75 rounded-full bg-accent md:relative md:left-0 md:block" />
              <p className="mt-0 font-mono text-[13px] text-ink-tertiary md:mt-5">
                {s.step}
              </p>
              <h3 className="mt-2 text-xl">{s.name}</h3>
              <p className="mt-2 text-[14.5px] text-ink-secondary">{s.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Technologies + Deliverables */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-18">
          <Reveal>
            <p className="eyebrow">Technologies</p>
            <h2 className="mt-4 text-[1.75rem] md:text-[2rem]">
              What we build with.
            </h2>
            <div className="mt-7 overflow-hidden rounded-xl border border-line">
              {d.technologies.map((g, i) => (
                <div
                  key={g.group}
                  className={`flex flex-wrap items-baseline gap-x-4 gap-y-2 p-5 ${
                    i < d.technologies.length - 1 ? 'border-b border-line' : ''
                  }`}
                >
                  <h3 className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-tertiary">
                    {g.group}
                  </h3>
                  <p className="text-[14.5px] font-medium">
                    {g.items.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">Deliverables</p>
            <h2 className="mt-4 text-[1.75rem] md:text-[2rem]">
              What you actually receive.
            </h2>
            <ul className="mt-7 space-y-3.5">
              {d.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-line pb-3.5 text-[15.5px]"
                >
                  <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section alt>
        <Reveal>
          <SectionHead center eyebrow="FAQ" title={`${service.navLabel} questions.`} />
        </Reveal>
        <Reveal>
          <FAQ items={d.faqs} />
        </Reveal>
      </Section>

      {/* Related services */}
      <Section>
        <Reveal>
          <SectionHead eyebrow="Related" title="Other services." />
        </Reveal>
        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {related.map((s) => (
            <RevealItem key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line p-7 transition-all duration-200 hover:-translate-y-1 hover:border-line-strong hover:shadow-card"
              >
                <p className="font-mono text-xs text-ink-tertiary">{s.index}</p>
                <h3 className="mt-3 text-[19px]">{s.name}</h3>
                <p className="mt-2 flex-1 text-[14.5px] text-ink-secondary">
                  {s.tagline}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold">
                  Explore
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <FinalCTA
        title={`Need help with ${service.navLabel.toLowerCase()}?`}
        body="Tell us where you are and what is in the way. We'll give you an honest read on the options and what each one costs."
      />
    </>
  );
}
