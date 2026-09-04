import { PageShell } from '@/components/ui/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Technology for SMEs',
  description: 'Ozowinx builds and modernizes technology for small and medium enterprises, without enterprise overhead.',
  path: '/solutions/smes',
});

export default function Page() {
  return (
    <PageShell
      eyebrow={'Solutions'}
      title={'Technology for SMEs.'}
      intro={'Practical systems that fit how the business already works.'}
      outline={['Common SME technology gaps', 'Integration over replacement', 'Automation opportunities', 'Cost and timeline', 'Case studies']}
    />
  );
}
