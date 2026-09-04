import { PageShell } from '@/components/ui/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Leadership',
  description: 'Meet the leadership team behind Ozowinx.',
  path: '/about/leadership',
});

export default function Page() {
  return (
    <PageShell
      eyebrow={'About'}
      title={'Leadership.'}
      intro={'The people accountable for the work.'}
      outline={['Leadership profiles', 'Engineering leadership', 'Advisory', 'Contact']}
    />
  );
}
