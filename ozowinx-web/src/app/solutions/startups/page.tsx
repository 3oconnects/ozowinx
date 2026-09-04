import { PageShell } from '@/components/ui/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Technology for startups',
  description: 'Ozowinx helps startups build fast without creating technical debt that blocks the next stage of growth.',
  path: '/solutions/startups',
});

export default function Page() {
  return (
    <PageShell
      eyebrow={'Solutions'}
      title={'Technology for startups.'}
      intro={'Scalable foundations that do not need rebuilding at your Series A.'}
      outline={['The startup constraint', 'MVP vs foundation', 'Architecture that survives growth', 'Cost control', 'Case studies']}
    />
  );
}
