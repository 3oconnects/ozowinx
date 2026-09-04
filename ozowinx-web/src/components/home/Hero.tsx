'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { WordReveal, Aurora } from '@/components/ui/WordReveal';
import { Magnetic, Parallax } from '@/components/ui/Magnetic';
import { ScrollFade } from '@/components/ui/ScrollFade';
import { BrandSignal } from '@/components/site/Logo';
import { OperationsPanel } from './OperationsPanel';

const EASE = [0.2, 0.7, 0.2, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20, filter: 'blur(6px)' },
          animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
          transition: { duration: 0.75, ease: EASE, delay },
        };

  return (
    <section className="relative isolate overflow-hidden pb-25 pt-22">
      <Aurora />
      <div
        aria-hidden="true"
        className="grid-bg pointer-events-none absolute inset-0 -z-1 opacity-70"
      />

      <ScrollFade>
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div {...rise(0)}>
              {/* Status pill — gives the eyebrow somewhere to live and reads
                  as a live signal rather than a decorative label. */}
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 py-1.5 pl-2 pr-3.5 font-mono text-[11.5px] uppercase tracking-[0.07em] text-ink-secondary shadow-card backdrop-blur">
                <span className="relative flex size-4 items-center justify-center">
                  <span className="absolute inline-flex size-2 animate-ping rounded-full bg-accent/60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                Digital Engineering · AI · Cloud · Automation
              </span>
            </motion.div>

            <WordReveal
              as="h1"
              delay={0.1}
              accent={['forward']}
              text="We build technology that moves businesses forward."
              className="mt-6 text-[2.5rem] leading-[1.05] tracking-[-0.025em] sm:text-[3.25rem] lg:text-display"
            />

            <motion.p
              {...rise(0.42)}
              className="mt-6 max-w-lg text-[19px] leading-relaxed text-ink-secondary"
            >
              From product engineering to AI-powered systems, Ozowinx helps
              businesses turn complex technology challenges into scalable
              digital solutions.
            </motion.p>

            <motion.div {...rise(0.5)} className="mt-9 flex flex-wrap gap-3.5">
              <Magnetic>
                <Button href="/contact" variant="accent" showArrow>
                  Start a Project
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="/services" variant="secondary">
                  Explore Our Services
                </Button>
              </Magnetic>
            </motion.div>

            {/* The logo's own three verbs, in the logo's own three colours —
                the tagline is part of the mark, so it belongs here rather
                than being restated as a different line of copy. */}
            <motion.div {...rise(0.58)} className="mt-8">
              <BrandSignal size="lg" />
            </motion.div>
          </div>

          <Parallax offset={26}>
            <OperationsPanel />
          </Parallax>
        </div>
      </Container>
      </ScrollFade>
    </section>
  );
}
