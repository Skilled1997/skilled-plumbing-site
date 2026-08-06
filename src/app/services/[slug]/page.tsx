import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceCategories } from "../../our-services/servicesData";
import ServiceDetailContent from "./ServiceDetailContent";

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = serviceCategories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    openGraph: {
      title: `${category.metaTitle} | Skilled Plumbing Services`,
      description: category.metaDescription,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = serviceCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const base = "https://skilledplumbingservices.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Our Services", item: `${base}/our-services` },
      { "@type": "ListItem", position: 3, name: category.title, item: `${base}/services/${category.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: category.title,
    provider: {
      "@type": "Plumber",
      name: "Skilled Plumbing Services",
      url: base,
    },
    areaServed: "Perth, WA",
    description: category.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailContent category={category} />
    </>
  );
}
