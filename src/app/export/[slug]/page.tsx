import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllStyles, getStyleBySlug } from '@/data/styles';
import { ExportWorkspace } from '@/components/export/export-workspace';

interface ExportPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const styles = getAllStyles();
  return styles.map((style) => ({
    slug: style.slug,
  }));
}

export async function generateMetadata({ params }: ExportPageProps): Promise<Metadata> {
  const { slug } = await params;
  const style = getStyleBySlug(slug);

  if (!style) {
    return {
      title: 'Style Not Found — StyPro',
    };
  }

  return {
    title: `Export ${style.name} — CSS, Tailwind, JSON Tokens & Markdown — StyPro`,
    description: `Export production-ready design tokens for ${style.name} in CSS custom properties, Tailwind CSS configuration, DTCG JSON format, and markdown documentation.`,
  };
}

export default async function ExportPage({ params }: ExportPageProps) {
  const { slug } = await params;
  const style = getStyleBySlug(slug);

  if (!style) {
    notFound();
  }

  return <ExportWorkspace baseStyle={style} />;
}
