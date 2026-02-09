import { notFound } from "next/navigation";
import { infrastructureData } from "@/lib/site-data";
import { DetailPageTemplate } from "@/components/DetailPageTemplate";

export function generateStaticParams() {
  return Object.keys(infrastructureData).map((slug) => ({
    slug,
  }));
}

export default async function InfrastructurePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = infrastructureData[slug];

  if (!data) {
    notFound();
  }

  return <DetailPageTemplate data={data} category="Infrastructure" />;
}
