import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { SERVICES } from '@/lib/services';
import { getSlugs } from '@/lib/content';

const STATIC_ROUTES = [
  '',
  '/services',
  '/solutions',
  '/solutions/startups',
  '/solutions/smes',
  '/solutions/enterprise',
  '/solutions/industries',
  '/case-studies',
  '/about',
  '/about/leadership',
  '/about/culture',
  '/about/careers',
  '/insights',
  '/contact',
  '/legal/privacy',
  '/legal/terms',
  '/legal/security',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...STATIC_ROUTES.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...getSlugs('case-studies').map((slug) => ({
      url: `${SITE.url}/case-studies/${slug}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    ...getSlugs('insights').map((slug) => ({
      url: `${SITE.url}/insights/${slug}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
