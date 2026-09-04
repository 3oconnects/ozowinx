import { PageShell } from '@/components/ui/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Build systems that matter',
  description: 'Engineering, AI, cloud, and delivery roles at Ozowinx.',
  path: '/about/careers',
});

export default function Page() {
  return (
    <PageShell
      eyebrow={'Careers'}
      title={'Build systems that matter.'}
      intro={'Open roles and what it is like to engineer here.'}
      outline={['Open roles', 'Hiring process', 'What we look for', 'Benefits', 'Life at Ozowinx']}
    />
  );
}
