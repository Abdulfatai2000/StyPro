import { Metadata } from 'next';
import { getAllStyles } from '@/data/styles';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { PageContainer } from '@/components/layout/page-container';
import { StyleExplorerClient } from '@/components/explore/style-explorer-client';

export const metadata: Metadata = {
  title: 'Explore Design Styles — StyPro',
  description:
    'Browse our curated collection of professional UI design styles. Inspect color palettes, typography scales, spacing rules, and live components.',
};

export default function ExplorePage() {
  const styles = getAllStyles();

  return (
    <div className="flex flex-col min-h-screen bg-[#050506]">
      <Navbar />

      <main className="flex-1 py-12 md:py-16">
        <PageContainer>
          {/* Header */}
          <div className="max-w-3xl mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-[#5E6AD2]/30 bg-[#5E6AD2]/10 text-xs font-medium text-[#5E6AD2]">
              Design System Catalogue
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F5F8]">
              Explore Design Styles
            </h1>
            <p className="text-base text-[#8C92A4] leading-relaxed">
              Discover production-grade UI design systems tailored for engineering platforms, editorial publications, and SaaS dashboards. Inspect their semantic tokens and live interactive components.
            </p>
          </div>

          {/* Interactive Discovery Explorer */}
          <StyleExplorerClient initialStyles={styles} />
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}

