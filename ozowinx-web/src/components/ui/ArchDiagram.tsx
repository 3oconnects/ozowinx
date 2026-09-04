import type { ReactNode } from 'react';

function Node({
  children,
  tone = 'default',
  className = '',
}: {
  children: ReactNode;
  tone?: 'default' | 'primary' | 'accent';
  className?: string;
}) {
  const tones = {
    default: 'border-line-strong bg-surface text-ink',
    primary: 'border-ink bg-ink text-white',
    accent: 'border-accent bg-accent-tint text-accent-dark',
  };
  return (
    <div
      className={`rounded-lg border px-4 py-2.5 text-center font-mono text-[12.5px] font-medium tracking-[0.04em] ${tones[tone]} ${className}`}
    >
      {children}
    </div>
  );
}

const Connector = () => <div className="mx-auto h-7 w-px bg-line-strong" />;

/** Horizontal fan-out: one parent to three children. */
const Fan = () => (
  <div className="relative mx-auto h-7 w-[70%] border-t border-line-strong">
    <span className="absolute left-0 top-0 h-7 w-px bg-line-strong" />
    <span className="absolute left-1/2 top-0 h-7 w-px bg-line-strong" />
    <span className="absolute right-0 top-0 h-7 w-px bg-line-strong" />
  </div>
);

/**
 * Simplified system architecture: how a request flows from users
 * through the application into data and cloud.
 */
export function ArchDiagram() {
  return (
    <div className="rounded-2xl border border-line bg-white px-6 py-10">
      <div className="flex justify-center">
        <Node>USERS</Node>
      </div>
      <Connector />
      <div className="flex justify-center">
        <Node tone="primary">APPLICATION</Node>
      </div>
      <Fan />
      <div className="flex gap-3">
        <Node className="flex-1">APIs</Node>
        <Node tone="accent" className="flex-1">
          AI Layer
        </Node>
        <Node className="flex-1">Automation</Node>
      </div>
      <Fan />
      <div className="flex justify-center">
        <Node tone="primary">DATA SYSTEMS</Node>
      </div>
      <Connector />
      <div className="flex justify-center">
        <Node>CLOUD</Node>
      </div>
    </div>
  );
}
