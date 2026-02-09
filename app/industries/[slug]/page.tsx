import { notFound } from "next/navigation";
import { industriesData } from "@/lib/site-data";
import { DetailPageTemplate } from "@/components/DetailPageTemplate";

export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug,
  }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = industriesData[slug];

  if (!data) {
    notFound();
  }

  return <DetailPageTemplate data={data} category="Industry Solution" />;
}
