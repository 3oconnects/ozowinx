import { PageShell } from '@/components/ui/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'How we work',
  description: 'Inside the engineering culture and delivery practices at Ozowinx.',
  path: '/about/culture',
});

export default function Page() {
  return (
    <PageShell
      eyebrow={'About'}
      title={'How we work.'}
      intro={'Engineering culture, delivery practices, and the standards we hold.'}
      outline={['Engineering standards', 'Code review and quality', 'How we run projects', 'Remote and collaboration', 'Learning and growth']}
    />
  );
}
