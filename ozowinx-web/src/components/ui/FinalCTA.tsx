import { Container } from './Section';
import { Button } from './Button';
import { Magnetic } from './Magnetic';
import { Reveal } from './Reveal';
import { SITE } from '@/lib/site';

export function FinalCTA({
  title = 'Have a technology challenge worth solving?',
  body = "Tell us what you're building, what is slowing you down, or where you want to go next. We'll help you identify the right path forward.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-20 md:py-30">
      <Container>
        <div className="group relative isolate overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center md:px-10 md:py-22">
          {/* Ribbon hairline across the top of the slab — the spectrum reads
              at full strength against the ink. */}
          <span aria-hidden="true" className="brand-bar absolute inset-x-0 top-0 h-1" />
          {/* Architecture lines — structural, not decorative noise. The dashed
              overlay traces the same paths, so the movement reads as traffic
              across the grid rather than as an unrelated effect. */}
          <svg
            className="pointer-events-none absolute inset-0 size-full opacity-50"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
              <path d="M0 80h1200M0 200h1200M0 320h1200" />
              <path d="M150 0v400M450 0v400M750 0v400M1050 0v400" />
            </g>
            <g
              className="flow-line"
              stroke="rgba(96,165,250,0.55)"
              strokeWidth="1.5"
            >
              <path d="M0 200h1200" />
            </g>
            <g
              className="flow-line"
              stroke="rgba(96,165,250,0.3)"
              strokeWidth="1.5"
              style={{ animationDelay: '-4.5s' }}
            >
              <path d="M0 80h1200" />
            </g>
          </svg>

          {/* Warm centre light so the slab is not a flat block of ink. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 -z-1 h-80 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
            style={{ background: 'rgb(37 99 235 / 0.35)' }}
          />

          <Reveal>
            <h2 className="relative mx-auto max-w-2xl text-[2rem] text-white md:text-[2.875rem]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="relative mx-auto mt-5 max-w-lg text-[17px] text-white/70">
              {body}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="relative mt-9 flex flex-wrap justify-center gap-3.5">
              <Magnetic>
                <Button href="/contact" variant="invert" showArrow>
                  Start a Project
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href={`mailto:${SITE.email}`} variant="outlineInvert">
                  Talk to Ozowinx
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
