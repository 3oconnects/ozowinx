export type ServiceSlug =
  | 'product-engineering'
  | 'ai-solutions'
  | 'cloud-devops'
  | 'automation'
  | 'digital-transformation';

export type Service = {
  slug: ServiceSlug;
  index: string;
  name: string;
  navLabel: string;
  tagline: string;
  summary: string;
  capabilities: string[];
  /* Detail-page content. Populated fully for shipped pages. */
  detail?: {
    problem: { heading: string; body: string; symptoms: string[] };
    solution: { heading: string; body: string };
    capabilities: { name: string; body: string }[];
    process: { step: string; name: string; body: string }[];
    technologies: { group: string; items: string[] }[];
    deliverables: string[];
    faqs: { q: string; a: string }[];
  };
};

export const SERVICES: Service[] = [
  {
    slug: 'product-engineering',
    index: '01',
    name: 'Product Engineering',
    navLabel: 'Product Engineering',
    tagline: 'Web, mobile, and SaaS platforms built for performance and scale.',
    summary:
      'Design and develop modern web and mobile applications that are built for performance, usability, and scale.',
    capabilities: [
      'Web Applications',
      'Mobile Applications',
      'SaaS Platforms',
      'Enterprise Software',
      'API Development',
    ],
    detail: {
      problem: {
        heading: 'Shipping software is easy. Shipping software that lasts is not.',
        body: 'Most product problems are not coding problems. They are decisions made early — about data models, boundaries, and ownership — that quietly set a ceiling on how fast the product can change later. By the time the symptoms are visible, the cost of the fix has already compounded.',
        symptoms: [
          'Every new feature takes longer than the last one did.',
          'A change in one part of the product breaks something unrelated.',
          'The team is afraid to deploy on a Friday.',
          'Onboarding a new engineer takes months, not weeks.',
          'Performance degrades as real usage grows.',
        ],
      },
      solution: {
        heading: 'We engineer for the second year, not the first demo.',
        body: 'We start from the business model and work inward: what the product must do, what it must never do, and where it will need to bend. That produces an architecture with deliberate seams — so the parts that change often are cheap to change, and the parts that must stay stable are protected.',
      },
      capabilities: [
        {
          name: 'Web Applications',
          body: 'Server-rendered and single-page applications built on React and Next.js, with real performance budgets rather than aspirational ones.',
        },
        {
          name: 'Mobile Applications',
          body: 'Cross-platform and native mobile products that share business logic with the web where it makes sense, and diverge where it does not.',
        },
        {
          name: 'SaaS Platforms',
          body: 'Multi-tenant architecture, billing, entitlements, and role models designed before the first customer, not retrofitted after the tenth.',
        },
        {
          name: 'Enterprise Software',
          body: 'Internal systems that respect how the organization actually works — including the exceptions, approvals, and edge cases nobody documented.',
        },
        {
          name: 'API Development',
          body: 'Versioned, documented, and tested interfaces designed to be consumed by teams you will never meet.',
        },
      ],
      process: [
        {
          step: '01',
          name: 'Discover',
          body: 'We map the business process, the users, the existing technical environment, and the constraints that are non-negotiable.',
        },
        {
          step: '02',
          name: 'Design',
          body: 'Architecture, data model, interface, and delivery roadmap — with the trade-offs written down and agreed before code starts.',
        },
        {
          step: '03',
          name: 'Build',
          body: 'Incremental delivery against a working environment. You see the real product early and often, not a demo at the end.',
        },
        {
          step: '04',
          name: 'Scale',
          body: 'Monitoring, performance work, and architectural evolution as usage and requirements grow.',
        },
      ],
      technologies: [
        { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
        { group: 'Backend', items: ['Node.js', 'Python', 'REST', 'GraphQL'] },
        { group: 'Data', items: ['PostgreSQL', 'Redis', 'Supabase'] },
        { group: 'Infrastructure', items: ['AWS', 'Vercel', 'Docker'] },
      ],
      deliverables: [
        'Production application, deployed and running',
        'Architecture documentation and decision record',
        'Test suite and CI/CD pipeline',
        'Monitoring, logging, and alerting',
        'Handover documentation and team walkthrough',
        'Post-launch support window',
      ],
      faqs: [
        {
          q: 'Can you take over a codebase someone else wrote?',
          a: 'Yes. We start with an assessment — architecture, dependencies, test coverage, and risk — and give you an honest read on whether it should be extended or replaced before we touch it.',
        },
        {
          q: 'Do you work with our in-house engineers?',
          a: 'Often. We can lead delivery, embed alongside your team, or focus narrowly on architecture and review while your team builds.',
        },
        {
          q: 'How do you handle scope changing mid-project?',
          a: 'We expect it. Delivery runs in increments with a re-prioritised backlog, so a change in direction costs a sprint rather than a rewrite.',
        },
        {
          q: 'Who owns the code?',
          a: 'You do — repositories, infrastructure, and accounts are yours from day one, not transferred at the end.',
        },
      ],
    },
  },
  {
    slug: 'ai-solutions',
    index: '02',
    name: 'AI & Intelligent Systems',
    navLabel: 'AI Solutions',
    tagline: 'Practical AI applied where it creates measurable value.',
    summary:
      'Build practical AI systems that improve workflows, decision-making, automation, and customer experiences.',
    capabilities: [
      'AI Applications',
      'AI Agents',
      'Intelligent Automation',
      'Knowledge Systems',
      'AI Integrations',
    ],
  },
  {
    slug: 'cloud-devops',
    index: '03',
    name: 'Cloud & DevOps',
    navLabel: 'Cloud & DevOps',
    tagline: 'Infrastructure and delivery pipelines built to be operated.',
    summary:
      'Design reliable cloud infrastructure and deployment systems for modern applications.',
    capabilities: [
      'Cloud Architecture',
      'DevOps',
      'CI/CD',
      'Infrastructure Automation',
      'Monitoring',
    ],
  },
  {
    slug: 'automation',
    index: '04',
    name: 'Automation & Integration',
    navLabel: 'Automation',
    tagline: 'Connected systems and workflows that run without supervision.',
    summary:
      'Connect systems, eliminate repetitive work, and create intelligent business workflows.',
    capabilities: [
      'Workflow Automation',
      'API Integrations',
      'Business Process Automation',
      'Third-party Integrations',
      'Data Synchronization',
    ],
  },
  {
    slug: 'digital-transformation',
    index: '05',
    name: 'Digital Transformation',
    navLabel: 'Digital Transformation',
    tagline: 'Modernizing how a business runs, not just what it runs on.',
    summary:
      'Assess, modernize, and re-platform legacy systems and the operating processes built around them.',
    capabilities: [
      'Technology Assessment',
      'Legacy Modernization',
      'Process Redesign',
      'Data Migration',
      'Change Enablement',
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
