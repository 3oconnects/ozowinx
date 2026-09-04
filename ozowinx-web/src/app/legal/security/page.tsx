import { PageShell } from '@/components/ui/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Security',
  description: 'Security practices and vulnerability disclosure at Ozowinx.',
  path: '/legal/security',
});

export default function Page() {
  return (
    <PageShell
      eyebrow={'Legal'}
      title={'Security.'}
      intro={'Our security posture, practices, and how to report a vulnerability.'}
      outline={['Security practices', 'Infrastructure', 'Access control', 'Incident response', 'Responsible disclosure']}
    />
  );
}
