import type { Metadata } from 'next';
import { SITE } from './site';

type SeoInput = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
};

/** Build consistent per-page metadata, including canonical + Open Graph. */
export function buildMetadata({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
}: SeoInput): Metadata {
  const url = `${SITE.url}${path}`;
  const images = [{ url: '/og.png', width: 1200, height: 630, alt: SITE.name }];

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type,
      images,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  };
}

/** Organization JSON-LD, emitted once in the root layout. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    email: SITE.email,
    logo: `${SITE.url}/logo.png`,
    parentOrganization: { '@type': 'Organization', name: SITE.parent },
  };
}

/** Service JSON-LD for each service detail page. */
export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE.url}${path}`,
    provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
