import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllStyles, getStyleBySlug } from '@/data/styles';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { PageContainer } from '@/components/layout/page-container';
import { StyleHeader } from '@/components/styles/style-header';
import { StylePreview } from '@/components/preview/style-preview';
import { StylePalette } from '@/components/styles/style-palette';
import { StyleTypography } from '@/components/styles/style-typography';
import { StyleProperties } from '@/components/styles/style-properties';

interface StylePageProps {
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

export async function generateMetadata({ params }: StylePageProps): Promise<Metadata> {
  const { slug } = await params;
  const style = getStyleBySlug(slug);

  if (!style) {
    return {
      title: 'Style Not Found — StyPro',
    };
  }

  return {
    title: `${style.name} — Design Style Specification — StyPro`,
    description: style.description,
  };
}

export default async function StyleDetailPage({ params }: StylePageProps) {
  const { slug } = await params;
  const style = getStyleBySlug(slug);

  if (!style) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd] text-[#16191f] font-sans">
      <Navbar />

      <main className="flex-1 py-10 md:py-14 space-y-14">
        <PageContainer>
          {/* Style Header */}
          <StyleHeader style={style} />
        </PageContainer>

        {/* Live Preview System */}
        <PageContainer>
          <section id="live-preview" className="space-y-4 scroll-mt-24">
            <div className="flex items-center justify-between pb-3 border-b border-[#dde0e6]">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-[#16191f] font-display">
                  Live Component Demonstration
                </h2>
                <p className="text-sm text-[#454c58] mt-0.5">
                  Realistic UI components rendered with {style.name} design tokens
                </p>
              </div>
            </div>

            <StylePreview style={style} />
          </section>
        </PageContainer>

        {/* Color Palette Specification */}
        <PageContainer>
          <section className="space-y-4">
            <StylePalette style={style} />
          </section>
        </PageContainer>

        {/* Typography Scale */}
        <PageContainer>
          <section className="space-y-4">
            <StyleTypography style={style} />
          </section>
        </PageContainer>

        {/* Geometry, Shadows, and Spacing Properties */}
        <PageContainer>
          <section className="space-y-4">
            <StyleProperties style={style} />
          </section>
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}
