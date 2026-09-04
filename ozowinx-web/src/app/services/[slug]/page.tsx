import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES, getService } from '@/lib/services';
import { ServiceDetail } from '@/components/service/ServiceDetail';
import { ServiceStub } from '@/components/service/ServiceStub';
import { buildMetadata, serviceJsonLd, faqJsonLd } from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.name,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const jsonLd: object[] = [
    serviceJsonLd(service.name, service.summary, `/services/${service.slug}`),
  ];
  if (service.detail?.faqs?.length) {
    jsonLd.push(faqJsonLd(service.detail.faqs));
  }

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
      {service.detail ? (
        <ServiceDetail service={service} />
      ) : (
        <ServiceStub service={service} />
      )}
    </>
  );
}
