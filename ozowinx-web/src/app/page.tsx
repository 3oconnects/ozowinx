import { Hero } from '@/components/home/Hero';
import {
  CapabilityStrip,
  Intro,
  ServicesGrid,
  EngineeringFeature,
  Solutions,
  Industries,
  WhyOzowinx,
  Ecosystem,
  Process,
  TechStack,
  MetricsStrip,
  Security,
  CaseStudyTeasers,
} from '@/components/home/Sections';
import { Section, SectionHead } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { FAQ } from '@/components/ui/FAQ';
import { FinalCTA } from '@/components/ui/FinalCTA';
import { getAllEntries } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = buildMetadata({
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  path: '/',
});

const HOME_FAQS = [
  {
    q: 'What does Ozowinx do?',
    a: 'Ozowinx designs, builds, modernizes, integrates, and operates digital products and technology systems — combining product engineering, AI, cloud infrastructure, and automation.',
  },
  {
    q: 'What type of businesses do you work with?',
    a: 'We work with startups, SMEs, professional services firms, and growing enterprises across retail, education, finance, healthcare, and more.',
  },
  {
    q: 'Can Ozowinx build a product from scratch?',
    a: 'Yes. We handle the full lifecycle — from discovery and architecture through engineering, deployment, and ongoing scaling.',
  },
  {
    q: 'Can you modernize an existing application?',
    a: 'Yes. We assess legacy systems and modernize architecture, infrastructure, and workflows without disrupting the business.',
  },
  {
    q: 'Do you provide AI development services?',
    a: 'Yes. We build practical AI applications, agents, and intelligent automation designed for real business value.',
  },
  {
    q: 'Can you integrate our existing systems?',
    a: 'Yes. We connect internal and third-party systems through APIs and automation to eliminate manual, repetitive work.',
  },
  {
    q: 'Do you provide ongoing technical support?',
    a: 'Yes. Beyond launch, we monitor, maintain, and evolve systems as your business and requirements grow.',
  },
  {
    q: 'How does a project typically begin?',
    a: 'With a discovery conversation about your business, goals, and technical environment — leading to a clear, scoped plan.',
  },
];

export default function HomePage() {
  const studies = getAllEntries('case-studies')
    .slice(0, 3)
    .map((e) => ({
      slug: e.slug,
      title: e.frontmatter.title,
      category: e.frontmatter.category,
      challenge: e.frontmatter.description,
      outcome: e.frontmatter.outcome ?? '',
      technologies: e.frontmatter.technologies ?? [],
      placeholder: e.frontmatter.placeholder,
    }));

  return (
    <>
      <Hero />
      <CapabilityStrip />
      <Intro />
      <ServicesGrid />
      <EngineeringFeature />
      <Solutions />
      <Industries />
      <WhyOzowinx />
      <Ecosystem />
      <Process />
      <TechStack />
      <CaseStudyTeasers studies={studies} />
      <MetricsStrip />
      <Security />

      <Section>
        <Reveal>
          <SectionHead center eyebrow="FAQ" title="Common questions." />
        </Reveal>
        <Reveal>
          <FAQ items={HOME_FAQS} />
        </Reveal>
      </Section>

      <FinalCTA />
    </>
  );
}
