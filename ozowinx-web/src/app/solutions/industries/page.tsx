import { PageShell } from '@/components/ui/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Built for ambitious businesses',
  description: 'Technology solutions for startups, SMEs, professional services, retail, education, finance, healthcare, and enterprise.',
  path: '/solutions/industries',
});

export default function Page() {
  return (
    <PageShell
      eyebrow={'Industries'}
      title={'Built for ambitious businesses.'}
      intro={'Sector-specific technology programmes across eight industries.'}
      outline={['Startups', 'SMEs', 'Professional Services', 'Retail & Commerce', 'Education', 'Finance', 'Healthcare', 'Enterprise']}
    />
  );
}
