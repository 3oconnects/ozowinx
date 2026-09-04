import { Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-tertiary">
        Error 404
      </p>
      <h1 className="mt-4 text-[2.5rem] tracking-[-0.025em]">
        That page does not exist.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[17px] text-ink-secondary">
        The link may be out of date, or the page may have moved. The services
        index is a good place to pick the thread back up.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3.5">
        <Button href="/" variant="primary">
          Back to home
        </Button>
        <Button href="/services" variant="secondary" showArrow>
          Browse services
        </Button>
      </div>
    </Container>
  );
}
