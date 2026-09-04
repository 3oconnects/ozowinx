import Link from 'next/link';
import { Logo, BrandSignal } from './Logo';
import { Container } from '@/components/ui/Section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { FOOTER_COLUMNS, SITE } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pb-8 pt-18">
      {/* The mark's full spectrum, as a hairline. It is the one place the
          whole ramp appears at once outside the logo itself. */}
      <span aria-hidden="true" className="brand-bar absolute inset-x-0 top-0 h-0.5" />
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <Reveal>
            <Logo />
            <BrandSignal className="mt-4" />
            <p className="mt-4 max-w-56 text-[14.5px] text-ink-secondary">
              Technology. Engineering. Transformation.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 inline-block text-[14.5px] font-medium text-accent underline-offset-4 transition-colors hover:text-accent-dark hover:underline"
            >
              {SITE.email}
            </a>
          </Reveal>

          {FOOTER_COLUMNS.map((col, i) => (
            <Reveal key={col.heading} delay={0.06 * (i + 1)}>
              <h3 className="mb-4 font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink-tertiary">
                {col.heading}
              </h3>
              <RevealGroup className="space-y-2.5" stagger={0.03}>
                {col.links.map((link) => (
                  <RevealItem key={link.href + link.label} direction="right" distance={8}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-[14.5px] text-ink-secondary transition-colors hover:text-ink"
                    >
                      <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </Link>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-7">
          <p className="text-[13.5px] text-ink-tertiary">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="text-[13.5px] text-ink-secondary hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="text-[13.5px] text-ink-secondary hover:text-ink">
              Terms
            </Link>
            <Link href="/legal/security" className="text-[13.5px] text-ink-secondary hover:text-ink">
              Security
            </Link>
          </div>
        </div>

        <p className="mt-2 text-[12.5px] text-ink-tertiary">
          A company in the {SITE.parent} ecosystem.
        </p>
      </Container>
    </footer>
  );
}
