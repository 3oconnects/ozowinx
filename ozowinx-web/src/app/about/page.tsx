import { PageShell } from '@/components/ui/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'An engineering company, first',
  description: 'Ozowinx is the technology services and delivery arm of the Ozofi ecosystem — engineering-led, business-focused.',
  path: '/about',
});

export default function Page() {
  return (
    <PageShell
      eyebrow={'About'}
      title={'An engineering company, first.'}
      intro={'How Ozowinx works, what we believe about building software, and who does the work.'}
      outline={['Mission', 'Vision', 'Engineering philosophy', 'Values', 'Why clients choose us', 'The Ozofi relationship']}
    />
  );
}
