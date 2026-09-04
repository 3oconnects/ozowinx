import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Layers,
  Zap,
} from 'lucide-react';
import { Section, SectionHead, Container } from '@/components/ui/Section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { ArchDiagram } from '@/components/ui/ArchDiagram';
import { CountUp } from '@/components/ui/CountUp';
import { Marquee } from '@/components/ui/Marquee';
import { SpotlightCard } from '@/components/ui/Spotlight';
import { AnimatedRail, Tilt } from '@/components/ui/Motion';
import { ScrollRail } from '@/components/ui/ScrollFade';
import { SERVICES } from '@/lib/services';
import { METRICS, SITE } from '@/lib/site';
import { brandAt, VERBS } from '@/lib/brand';

/* ---------------------------------------------------------------- */

export function CapabilityStrip() {
  const items = [
    'Product Engineering',
    'AI Systems',
    'Cloud & DevOps',
    'Automation',
    'Web & Mobile',
    'System Integration',
  ];
  return (
    <div className="border-y border-line bg-surface/60">
      {/* A ticker rather than a static row. This is the one place on the page
          where continuous motion is honest — these capabilities are running
          all the time. Pauses on hover; falls back to a static wrapped grid
          when the visitor has asked for reduced motion. */}
      <Marquee duration={38} className="py-5.5">
        {items.map((item, i) => (
          <span
            key={item}
            className="group flex items-center gap-3 whitespace-nowrap px-8 font-mono text-xs uppercase tracking-[0.07em] text-ink-tertiary transition-colors hover:text-ink"
          >
            <span
              className="size-1.5 rounded-full opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:ring-3"
              style={{ background: brandAt(i).hex }}
            />
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/* ---------------------------------------------------------------- */

export function Intro() {
  // Keyed to VERBS rather than to position: these three are the logo's own
  // tagline, so their colours are fixed by the artwork, not by order.
  const principles = [
    { name: 'Build', body: 'Transform ideas into reliable digital products.' },
    { name: 'Modernize', body: 'Upgrade legacy systems and workflows.' },
    {
      name: 'Scale',
      body: 'Build infrastructure and systems capable of supporting growth.',
    },
  ] as const;

  return (
    <Section>
      <Reveal>
        <SectionHead
          center
          eyebrow="What We Do"
          title="Technology built around your business."
          body="Your technology should solve business problems, not create more of them. Ozowinx works across product, engineering, infrastructure, and automation to create systems that are reliable, scalable, and designed for real-world use."
        />
      </Reveal>

      {/* The three verbs are the company's own tagline — Build | Modernize | Scale */}
      <RevealGroup className="grid overflow-hidden rounded-2xl border border-line md:grid-cols-3">
        {principles.map((p, i) => (
          <RevealItem
            key={p.name}
            className={i < 2 ? 'border-b border-line md:border-b-0 md:border-r' : ''}
          >
            <SpotlightCard className="group h-full bg-white p-9">
              <p
                className="font-mono text-xs tracking-[0.08em]"
                style={{ color: VERBS[p.name].hex }}
              >
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3.5 text-[23px]">{p.name}</h3>
              <p className="mt-2.5 text-[15.5px] text-ink-secondary">{p.body}</p>
              {/* Rule grows from the left on hover — a small confirmation that
                  the tile is a live surface, not a static panel. */}
              <span
                className="mt-5 block h-px w-9 origin-left transition-transform duration-400 group-hover:scale-x-[3]"
                style={{ background: VERBS[p.name].hex }}
              />
            </SpotlightCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* ---------------------------------------------------------------- */

export function ServicesGrid() {
  return (
    <Section alt id="services">
      <Reveal>
        <SectionHead eyebrow="Our Services" title="From strategy to production." />
      </Reveal>

      <RevealGroup className="grid gap-6 lg:grid-cols-2">
        {SERVICES.slice(0, 4).map((service, i) => (
          <RevealItem key={service.slug}>
            <Tilt max={4} className="h-full">
            <SpotlightCard className="glow-ring h-full rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-line-strong hover:shadow-float">
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col p-9"
              >
              <p
                className="font-mono text-xs text-ink-tertiary transition-colors"
                style={{ color: brandAt(i).hex }}
              >
                {service.index}
              </p>
              <h3 className="mt-3.5 text-[25px]">{service.name}</h3>
              <p className="mt-3 text-[15.5px] text-ink-secondary">
                {service.summary}
              </p>

              <ul className="mt-5.5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-line pt-5.5">
                {service.capabilities.map((c) => (
                  <li
                    key={c}
                    className="flex items-baseline gap-2 text-sm text-ink-secondary"
                  >
                    <span
                      className="mt-1.5 size-1 shrink-0 rounded-full transition-all duration-300"
                      style={{ background: brandAt(i).hex }}
                    />
                    {c}
                  </li>
                ))}
              </ul>

              <span
                className="mt-6.5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold transition-colors"
                style={{ color: brandAt(i).hex }}
              >
                Explore {service.navLabel}
                <ArrowRight className="size-3.5 transition-transform duration-250 group-hover:translate-x-1.5" />
              </span>
              </Link>
            </SpotlightCard>
            </Tilt>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-10">
        <Button href="/services" variant="secondary" showArrow>
          View all services
        </Button>
      </Reveal>
    </Section>
  );
}

/* ---------------------------------------------------------------- */

export function EngineeringFeature() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-18">
        <Reveal>
          <p className="eyebrow">Engineering</p>
          <h2 className="mt-4 text-[2rem] md:text-[2.625rem]">
            Complex systems. Simplified.
          </h2>
          <p className="mt-4.5 text-[17px] leading-relaxed text-ink-secondary">
            We take complex business requirements and turn them into
            maintainable, scalable technology systems.
          </p>
          <div className="mt-7.5">
            <Button href="/contact" variant="secondary" showArrow>
              Talk to an Engineer
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} direction="left" distance={28}>
          <Tilt>
            <ArchDiagram />
          </Tilt>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */

export function Solutions() {
  const items = [
    {
      name: 'Launch Faster',
      body: 'Move from idea to production without unnecessary complexity.',
    },
    {
      name: 'Reduce Operational Work',
      body: 'Automate repetitive workflows and connect disconnected systems.',
    },
    {
      name: 'Modernize Existing Technology',
      body: 'Improve legacy applications, architecture, infrastructure, and workflows.',
    },
    {
      name: 'Build for the Future',
      body: 'Create scalable foundations that support long-term growth.',
    },
  ];

  return (
    <Section alt id="solutions">
      <Reveal>
        <SectionHead
          eyebrow="Solutions"
          title="Technology for real business problems."
        />
      </Reveal>
      <RevealGroup className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <RevealItem key={item.name}>
            <SpotlightCard className="h-full rounded-2xl border border-line bg-surface p-10 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:bg-white hover:shadow-lift">
              <h3 className="text-2xl">{item.name}</h3>
              <p className="mt-3 text-[15.5px] text-ink-secondary">{item.body}</p>
            </SpotlightCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* ---------------------------------------------------------------- */

const INDUSTRIES = [
  { name: 'Startups', body: 'Fast, scalable foundations for early-stage growth.', Icon: Zap },
  { name: 'SMEs', body: 'Practical systems that grow with the business.', Icon: Building2 },
  { name: 'Professional Services', body: 'Streamlined operations and client-facing tools.', Icon: Briefcase },
  { name: 'Retail & Commerce', body: 'Connected storefronts, inventory, and fulfillment.', Icon: ShoppingBag },
  { name: 'Education', body: 'Learning platforms and administrative systems.', Icon: GraduationCap },
  { name: 'Finance', body: 'Secure, compliant systems for financial workflows.', Icon: Landmark },
  { name: 'Healthcare', body: 'Reliable systems for patient and operational data.', Icon: HeartPulse },
  { name: 'Enterprise', body: 'Large-scale architecture and system integration.', Icon: Layers },
];

export function Industries() {
  return (
    <Section id="industries">
      <Reveal>
        <SectionHead eyebrow="Industries" title="Built for ambitious businesses." />
      </Reveal>
      <RevealGroup className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.04}>
        {INDUSTRIES.map(({ name, body, Icon }, i) => (
          <RevealItem key={name}>
            <Link
              href="/solutions/industries"
              className="group block h-full rounded-xl border border-line bg-white p-6.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span
                className="mb-4 flex size-9.5 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                style={{ background: brandAt(i).tint }}
              >
                <Icon
                  className="size-4.5 transition-colors duration-300"
                  style={{ color: brandAt(i).hex }}
                  aria-hidden="true"
                />
              </span>
              <h3 className="text-[17px]">{name}</h3>
              <p className="mt-1.5 text-[13.5px] text-ink-secondary">{body}</p>
              <span className="mt-4 flex items-center gap-1.5 text-[13px] font-semibold text-ink-tertiary transition-all group-hover:gap-2.5">
                Learn more
                <ArrowRight
                  className="size-3.5"
                  style={{ color: brandAt(i).hex }}
                />
              </span>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* ---------------------------------------------------------------- */

export function WhyOzowinx() {
  const reasons = [
    {
      name: 'Business-first engineering',
      body: 'Technology decisions are connected to measurable business outcomes.',
    },
    {
      name: 'Engineering ownership',
      body: 'We focus on architecture, quality, maintainability, and long-term reliability.',
    },
    {
      name: 'Practical AI',
      body: 'We use AI where it creates genuine value — not simply because it is fashionable.',
    },
    {
      name: 'Built for scale',
      body: 'Systems are designed with future growth, security, and operational requirements in mind.',
    },
  ];

  return (
    <Section alt id="why">
      <Reveal>
        <SectionHead eyebrow="Why Ozowinx" title="More than a technology vendor." />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-18">
        <Reveal>
          <p className="text-[1.875rem] font-bold leading-tight tracking-[-0.02em] lg:sticky lg:top-30 lg:text-[2.375rem]">
            We think beyond the code.
          </p>
        </Reveal>

        <RevealGroup className="flex flex-col">
          {reasons.map((r, i) => (
            <RevealItem
              key={r.name}
              className={`border-t border-line py-7 ${i === reasons.length - 1 ? 'border-b' : ''}`}
            >
              <h3 className="text-[19px]">{r.name}</h3>
              <p className="mt-2 text-[15.5px] text-ink-secondary">{r.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */

export function Ecosystem() {
  return (
    <Section>
      <Reveal>
        <div className="grid items-center gap-9 rounded-3xl border border-line bg-surface p-8 md:p-14 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <div>
            <p className="eyebrow">Part of the {SITE.parent} Ecosystem</p>
            <h2 className="mt-3.5 text-[1.75rem] md:text-[2rem]">
              Powered by the same engineering mindset behind {SITE.parent}.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-secondary">
              Ozowinx is the technology services and delivery arm of the{' '}
              {SITE.parent} ecosystem, bringing product engineering, AI,
              automation, and digital transformation capabilities to businesses
              beyond our own products.
            </p>
          </div>

          <RevealGroup className="font-mono text-xs" stagger={0.12}>
            <RevealItem className="rounded-xl border border-line-strong bg-white px-4.5 py-3.5 text-center">
              <span className="text-[13px] font-semibold tracking-[0.03em]">
                {SITE.parent.toUpperCase()}
              </span>
              <span className="mt-0.5 block text-[11px] font-normal text-ink-tertiary">
                Product &amp; Technology
              </span>
            </RevealItem>
            <AnimatedRail className="mx-auto h-6 w-px origin-top bg-line-strong" vertical />
            <RevealItem className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-line-strong bg-white p-4 text-center transition-colors duration-300 hover:border-ink">
                PRODUCTS
              </div>
              <div className="rounded-xl border border-accent bg-accent-tint p-4 text-center font-semibold text-accent-dark shadow-glow">
                OZOWINX
                <span className="mt-0.5 block text-[11px] font-normal">
                  Services &amp; Engineering
                </span>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------------------------------------------------------------- */

export function Process() {
  const steps = [
    {
      step: '01',
      name: 'Discover',
      body: 'Understand the business, users, requirements, and technical environment.',
    },
    {
      step: '02',
      name: 'Design',
      body: 'Define the architecture, experience, roadmap, and implementation strategy.',
    },
    {
      step: '03',
      name: 'Build',
      body: 'Engineer, integrate, test, and deploy the solution.',
    },
    {
      step: '04',
      name: 'Scale',
      body: 'Monitor, improve, optimize, and evolve the system as the business grows.',
    },
  ];

  return (
    <Section alt>
      <Reveal>
        <SectionHead
          eyebrow="How We Work"
          title="From challenge to working system."
        />
      </Reveal>

      <RevealGroup className="relative grid gap-0 md:grid-cols-4">
        {/* Timeline rail — the steps really are sequential, so the line earns its place. */}
        {/* The rail fills as the reader moves through the steps, so its
            length reports progress rather than only decorating the row. */}
        <ScrollRail className="absolute left-[5%] right-[5%] top-[5px] hidden h-px bg-line md:block" />
        {steps.map((s, i) => (
          <RevealItem
            key={s.step}
            className="group/step relative ml-2.5 border-l border-line pb-8 pl-7 md:ml-0 md:border-l-0 md:pb-0 md:pr-6"
          >
            <span
              className="absolute -left-1.5 top-0 size-2.75 rounded-full ring-4 transition-all duration-300 group-hover/step:scale-150 md:relative md:left-0 md:block"
              style={{
                background: brandAt(i).hex,
                ['--tw-ring-color' as string]: brandAt(i).tint,
              }}
            />
            <p
              className="mt-0 font-mono text-[13px] md:mt-5"
              style={{ color: brandAt(i).hex }}
            >
              {s.step}
            </p>
            <h3 className="mt-2 text-xl">{s.name}</h3>
            <p className="mt-2 text-[14.5px] text-ink-secondary">{s.body}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* ---------------------------------------------------------------- */

export function TechStack() {
  const groups = [
    { group: 'Frontend', items: 'React · Next.js · TypeScript' },
    { group: 'Backend', items: 'Node.js · Python · APIs' },
    { group: 'Data', items: 'PostgreSQL · Redis · Supabase' },
    { group: 'Cloud', items: 'AWS · Vercel · Docker' },
    { group: 'AI', items: 'LLMs · AI Agents · NLP · Intelligent Automation' },
  ];

  return (
    <Section>
      <Reveal>
        <SectionHead eyebrow="Technology" title="Technologies we work with." />
      </Reveal>
      <RevealGroup
        className="grid overflow-hidden rounded-xl border border-line sm:grid-cols-2 lg:grid-cols-5"
        stagger={0.04}
      >
        {groups.map((g, i) => (
          <RevealItem
            key={g.group}
            className={
              i < groups.length - 1
                ? 'border-b border-line lg:border-b-0 lg:border-r'
                : ''
            }
          >
            <SpotlightCard className="group h-full bg-white p-6.5 transition-colors duration-300 hover:bg-surface">
              <h3
                className="font-mono text-xs uppercase tracking-[0.08em] transition-colors"
                style={{ color: brandAt(i).hex }}
              >
                {g.group}
              </h3>
              <p className="mt-2.5 text-[14.5px] font-medium">{g.items}</p>
            </SpotlightCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* ---------------------------------------------------------------- */

export function MetricsStrip() {
  return (
    <Section>
      <Reveal>
        <div className="relative isolate grid gap-8 overflow-hidden rounded-3xl bg-ink p-8 sm:grid-cols-2 md:p-14 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-1 opacity-[0.14]"
            style={{
              backgroundImage:
                'radial-gradient(rgb(255 255 255 / 0.6) 1px, transparent 1px)',
              backgroundSize: '26px 26px',
              maskImage:
                'radial-gradient(ellipse 70% 90% at 50% 0%, #000, transparent 75%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 70% 90% at 50% 0%, #000, transparent 75%)',
            }}
          />
          {METRICS.items.map((m, i) => (
            <div key={m.label} className="group relative">
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/50">
                {m.label}
              </p>
              <p className="mt-2.5 text-[2.5rem] font-bold tracking-[-0.02em] text-white">
                <CountUp value={m.value} />
              </p>
              <span
                className="mt-3 block h-0.5 w-8 origin-left rounded-full transition-transform duration-500 group-hover:scale-x-[2.5]"
                style={{ background: brandAt(i).hex }}
              />
            </div>
          ))}
        </div>
        {!METRICS.verified && (
          <p className="mt-3 text-center font-mono text-[11px] text-ink-tertiary">
            Provisional figures — replace in <code>src/lib/site.ts</code> before launch.
          </p>
        )}
      </Reveal>
    </Section>
  );
}

/* ---------------------------------------------------------------- */

export function Security() {
  const items = [
    {
      name: 'Secure Architecture',
      body: 'Systems designed with isolation, least-privilege access, and defense-in-depth as defaults.',
    },
    {
      name: 'Identity & Access',
      body: 'Role-based access control designed around real organizational structures.',
    },
    {
      name: 'Data Protection',
      body: 'Encryption, backups, and access boundaries applied consistently across environments.',
    },
    {
      name: 'Operational Reliability',
      body: 'Monitoring, alerting, and incident response built into every system we operate.',
    },
  ];

  return (
    <Section alt>
      <Reveal>
        <SectionHead
          eyebrow="Security"
          title="Security is part of the architecture."
          body="Security, reliability, access control, data protection, and operational resilience are considered from the beginning — not added after deployment."
        />
      </Reveal>
      <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <RevealItem key={item.name}>
            <SpotlightCard className="h-full rounded-xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-lift">
              <SecurityGlyph variant={i} />
              <h3 className="mt-5 text-[16.5px]">{item.name}</h3>
              <p className="mt-2 text-sm text-ink-secondary">{item.body}</p>
            </SpotlightCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/** Small technical glyphs — a system diagram fragment, not a padlock cliché. */
function SecurityGlyph({ variant }: { variant: number }) {
  const stroke = 'var(--color-line-strong)';
  const accent = 'var(--color-accent)';

  const glyphs = [
    // Segmented services, one hardened
    <>
      <rect x="1" y="16" width="34" height="20" rx="4" stroke={stroke} />
      <rect x="45" y="16" width="34" height="20" rx="4" stroke={accent} strokeWidth="1.4" />
      <rect x="89" y="16" width="34" height="20" rx="4" stroke={stroke} />
      <path d="M35 26h10M79 26h10" stroke={stroke} />
    </>,
    // Verified identity into a chain
    <>
      <circle cx="26" cy="26" r="15" stroke={stroke} />
      <path d="M21 26l4 4 8-8" stroke={accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 26h72" stroke={stroke} />
      <circle cx="70" cy="26" r="3" fill={stroke} />
      <circle cx="102" cy="26" r="3" fill={stroke} />
    </>,
    // Layered storage
    <>
      <ellipse cx="30" cy="14" rx="20" ry="6" stroke={stroke} />
      <path d="M10 14v10c0 3.3 9 6 20 6s20-2.7 20-6V14" stroke={stroke} />
      <path d="M10 26v10c0 3.3 9 6 20 6s20-2.7 20-6V26" stroke={accent} strokeWidth="1.4" />
    </>,
    // Uptime trace with an incident spike
    <>
      <path d="M2 30h30l10-16 14 30 12-14h54" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 14l14 30 12-14" stroke={accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>,
  ];

  return (
    <svg viewBox="0 0 124 52" fill="none" className="h-11 w-full" aria-hidden="true">
      {glyphs[variant % glyphs.length]}
    </svg>
  );
}

/* ---------------------------------------------------------------- */

export function CaseStudyTeasers({
  studies,
}: {
  studies: {
    slug: string;
    title: string;
    category: string;
    challenge: string;
    outcome: string;
    technologies: string[];
    placeholder?: boolean;
  }[];
}) {
  if (studies.length === 0) return null;

  return (
    <Section alt id="work">
      <Reveal>
        <SectionHead
          eyebrow="Selected Work"
          title="Built to solve meaningful problems."
        />
      </Reveal>

      <RevealGroup className="flex flex-col gap-5">
        {studies.map((s) => (
          <RevealItem key={s.slug}>
            <SpotlightCard className="rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-float">
            <Link
              href={`/case-studies/${s.slug}`}
              className="group grid gap-8 p-10 lg:grid-cols-[1fr_1fr_1fr_auto]"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                  {s.category}
                </p>
                <h3 className="mt-2.5 text-[23px]">{s.title}</h3>
                {s.placeholder && (
                  <span className="mt-2.5 inline-block rounded border border-line px-2 py-0.5 font-mono text-[11px] text-ink-tertiary">
                    Placeholder project
                  </span>
                )}
              </div>

              <div>
                <h4 className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-tertiary">
                  Challenge
                </h4>
                <p className="mt-2 text-[14.5px] text-ink-secondary">{s.challenge}</p>
              </div>

              <div>
                <h4 className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-tertiary">
                  Outcome
                </h4>
                <p className="mt-2 text-[14.5px] text-ink-secondary">{s.outcome}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line bg-surface-alt px-2.5 py-0.5 font-mono text-[11.5px] text-ink-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <span className="flex size-9.5 shrink-0 items-center justify-center rounded-full border border-line-strong transition-all duration-300 group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink">
                <ArrowUpRight className="size-4 transition-colors group-hover:text-white" />
              </span>
            </Link>
            </SpotlightCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
