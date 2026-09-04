import { PageShell } from '@/components/ui/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Technology for real business problems',
  description: 'Launch faster, reduce operational work, modernize legacy technology, and build scalable foundations with Ozowinx.',
  path: '/solutions',
});

export default function Page() {
  return (
    <PageShell
      eyebrow={'Solutions'}
      title={'Technology for real business problems.'}
      intro={'Four outcomes our clients ask for most often, and the engineering behind each.'}
      outline={['Launch Faster', 'Reduce Operational Work', 'Modernize Existing Technology', 'Build for the Future', 'Engagement models', 'Related case studies']}
    />
  );
}
