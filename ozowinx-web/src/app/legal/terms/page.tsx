import { PageShell } from '@/components/ui/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Terms of Service',
  description: 'Ozowinx terms of service.',
  path: '/legal/terms',
});

export default function Page() {
  return (
    <PageShell
      eyebrow={'Legal'}
      title={'Terms of Service.'}
      intro={'The terms governing use of this website and our services.'}
      outline={['Use of this website', 'Service agreements', 'Intellectual property', 'Liability', 'Governing law']}
    />
  );
}
