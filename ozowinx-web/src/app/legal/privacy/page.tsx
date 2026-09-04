import { PageShell } from '@/components/ui/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Ozowinx privacy policy.',
  path: '/legal/privacy',
});

export default function Page() {
  return (
    <PageShell
      eyebrow={'Legal'}
      title={'Privacy Policy.'}
      intro={'How Ozowinx collects, uses, and protects personal data.'}
      outline={['Data we collect', 'How we use it', 'Legal basis', 'Retention', 'Your rights', 'Contact the data controller']}
    />
  );
}
