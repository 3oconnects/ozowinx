import { MDXRemote } from 'next-mdx-remote/rsc';
import type { ReactNode } from 'react';

/** Typographic defaults for MDX bodies — set here rather than via a plugin
 *  so the article type scale stays tied to the design tokens. */
const components = {
  h2: (props: { children?: ReactNode }) => (
    <h2 className="mt-12 text-[1.75rem] first:mt-0" {...props} />
  ),
  h3: (props: { children?: ReactNode }) => (
    <h3 className="mt-9 text-[1.375rem]" {...props} />
  ),
  p: (props: { children?: ReactNode }) => (
    <p className="mt-5 text-[17px] leading-[1.7] text-ink-secondary" {...props} />
  ),
  ul: (props: { children?: ReactNode }) => (
    <ul className="mt-5 space-y-2.5 pl-5" {...props} />
  ),
  ol: (props: { children?: ReactNode }) => (
    <ol className="mt-5 list-decimal space-y-2.5 pl-5" {...props} />
  ),
  li: (props: { children?: ReactNode }) => (
    <li className="text-[17px] leading-[1.7] text-ink-secondary" {...props} />
  ),
  a: (props: { children?: ReactNode; href?: string }) => (
    <a className="font-medium text-accent underline-offset-2 hover:underline" {...props} />
  ),
  code: (props: { children?: ReactNode }) => (
    <code
      className="rounded border border-line bg-surface-alt px-1.5 py-0.5 font-mono text-[14px]"
      {...props}
    />
  ),
  pre: (props: { children?: ReactNode }) => (
    <pre
      className="mt-5 overflow-x-auto rounded-xl border border-line bg-surface p-5 font-mono text-[13.5px]"
      {...props}
    />
  ),
  blockquote: (props: { children?: ReactNode }) => (
    <blockquote
      className="mt-6 border-l-2 border-accent pl-5 text-[17px] italic text-ink-secondary"
      {...props}
    />
  ),
};

export function Prose({ source }: { source: string }) {
  return (
    <div className="max-w-[68ch]">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
