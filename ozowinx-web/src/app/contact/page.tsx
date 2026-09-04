import { PageShell } from '@/components/ui/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Start a conversation',
  description: 'Get in touch with Ozowinx about a project, a technical challenge, or a partnership.',
  path: '/contact',
});

export default function Page() {
  return (
    <PageShell
      eyebrow={'Contact'}
      title={'Start a conversation.'}
      intro={'Tell us what you are building, what is slowing you down, or where you want to go next.'}
      outline={['Project enquiry form', 'Direct contact details', 'Office locations', 'What happens after you get in touch', 'Response time commitment']}
    />
  );
}
