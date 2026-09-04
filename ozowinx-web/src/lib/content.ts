import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type Collection = 'insights' | 'case-studies';

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  category: string;
  /** Case studies only */
  client?: string;
  outcome?: string;
  technologies?: string[];
  /** Marks provisional content that must be replaced before launch. */
  placeholder?: boolean;
};

export type Entry = {
  slug: string;
  collection: Collection;
  frontmatter: Frontmatter;
  body: string;
};

const CONTENT_ROOT = path.join(process.cwd(), 'content');

function dirFor(collection: Collection) {
  return path.join(CONTENT_ROOT, collection);
}

export function getSlugs(collection: Collection): string[] {
  const dir = dirFor(collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getEntry(collection: Collection, slug: string): Entry | null {
  const file = path.join(dirFor(collection), `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    collection,
    frontmatter: data as Frontmatter,
    body: content,
  };
}

export function getAllEntries(collection: Collection): Entry[] {
  return getSlugs(collection)
    .map((slug) => getEntry(collection, slug))
    .filter((e): e is Entry => e !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
}

export function getCategories(collection: Collection): string[] {
  return Array.from(
    new Set(getAllEntries(collection).map((e) => e.frontmatter.category)),
  ).sort();
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
