import { SERVICES } from './services';

export const SITE = {
  name: 'Ozowinx',
  tagline: 'Technology that moves your business forward.',
  description:
    'Ozowinx helps businesses design, build, modernize, integrate, and operate digital products and technology systems — across product engineering, AI, cloud, and automation.',
  /* Set this to the production origin before launch. Used for canonical URLs, sitemap and JSON-LD. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ozowinx.com',
  email: 'hello@ozowinx.com',
  parent: 'Ozofi',
} as const;

/* ------------------------------------------------------------------
   Business metrics. Deliberately centralised and clearly provisional
   so real figures can replace these in one place before launch.
   ------------------------------------------------------------------ */
export const METRICS = {
  verified: false, // flip to true once the numbers below are real
  items: [
    { label: 'Products Built', value: '10+' },
    { label: 'Systems Integrated', value: '20+' },
    { label: 'Technologies', value: '30+' },
    { label: 'Focus', value: 'Engineering' },
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const NAV: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: SERVICES.map((s) => ({
      label: s.navLabel,
      href: `/services/${s.slug}`,
      description: s.tagline,
    })),
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Startups', href: '/solutions/startups', description: 'Fast, scalable foundations for early-stage growth.' },
      { label: 'SMEs', href: '/solutions/smes', description: 'Practical systems that grow with the business.' },
      { label: 'Enterprise', href: '/solutions/enterprise', description: 'Large-scale architecture and system integration.' },
      { label: 'Industry Solutions', href: '/solutions/industries', description: 'Sector-specific technology programmes.' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Company', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Culture', href: '/about/culture' },
      { label: 'Careers', href: '/about/careers' },
    ],
  },
  { label: 'Insights', href: '/insights' },
];

export const FOOTER_COLUMNS = [
  {
    heading: 'Services',
    links: SERVICES.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Culture', href: '/about/culture' },
      { label: 'Careers', href: '/about/careers' },
      { label: 'Insights', href: '/insights' },
    ],
  },
  {
    heading: 'Work',
    links: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Industries', href: '/solutions/industries' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];
