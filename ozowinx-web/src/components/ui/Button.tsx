import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'accent' | 'secondary' | 'invert' | 'outlineInvert';

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-ink text-white border-transparent hover:bg-accent-dark hover:shadow-lift',
  accent:
    'bg-accent text-white border-transparent hover:bg-accent-dark hover:shadow-lift',
  secondary:
    'bg-transparent text-ink border-line-strong hover:border-ink hover:bg-surface',
  invert:
    'bg-white text-ink border-transparent hover:bg-accent-tint',
  outlineInvert:
    'bg-transparent text-white border-white/35 hover:border-white hover:bg-white/10',
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = 'primary',
  showArrow = false,
  className = '',
}: Props) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');
  // `shine` paints a sweep across solid fills on hover; on the transparent
  // variants there is nothing to sweep across, so it is left off.
  const sweep = variant === 'secondary' || variant === 'outlineInvert' ? '' : 'shine';

  const classes = `group relative isolate overflow-hidden inline-flex items-center gap-2 rounded-lg border px-[22px] py-[13px] text-[15px] font-semibold whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${sweep} ${VARIANTS[variant]} ${className}`;

  const inner = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          className="size-[15px] shrink-0 transition-transform duration-250 group-hover:translate-x-[4px]"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
