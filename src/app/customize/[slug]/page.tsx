import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllStyles, getStyleBySlug } from '@/data/styles';
import { CustomizerWorkspace } from '@/components/customizer/customizer-workspace';

interface CustomizePageProps {
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

export async function generateMetadata({ params }: CustomizePageProps): Promise<Metadata> {
  const { slug } = await params;
  const style = getStyleBySlug(slug);

  if (!style) {
    return {
      title: 'Style Not Found — StyPro',
    };
  }

  return {
    title: `Customize ${style.name} — Visual Design Customizer — StyPro`,
    description: `Personalize semantic colors, typography scale, geometry, and spacing for ${style.name}. Generate implementation-ready AI coding prompts.`,
  };
}

export default async function CustomizePage({ params }: CustomizePageProps) {
  const { slug } = await params;
  const style = getStyleBySlug(slug);

  if (!style) {
    notFound();
  }

  return <CustomizerWorkspace baseStyle={style} />;
}

