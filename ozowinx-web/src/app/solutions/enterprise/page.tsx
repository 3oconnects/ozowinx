import { PageShell } from '@/components/ui/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Technology for enterprise',
  description: 'Ozowinx delivers enterprise architecture, system integration, and legacy modernization at scale.',
  path: '/solutions/enterprise',
});

export default function Page() {
  return (
    <PageShell
      eyebrow={'Solutions'}
      title={'Technology for enterprise.'}
      intro={'Large-scale architecture, integration, and modernization programmes.'}
      outline={['Enterprise architecture', 'Legacy modernization', 'Integration strategy', 'Governance and compliance', 'Security posture', 'Case studies']}
    />
  );
}
