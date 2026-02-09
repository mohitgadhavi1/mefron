import { notFound } from "next/navigation";
import { servicesData } from "@/lib/site-data";
import { DetailPageTemplate } from "@/components/DetailPageTemplate";

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    notFound();
  }

  return <DetailPageTemplate data={data} category="Manufacturing Service" />;
}
