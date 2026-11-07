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
    <div className="flex flex-col min-h-screen bg-[#08090c] text-[#f4f5f8] font-sans">
      <Navbar />

      <main className="flex-1 py-12 md:py-16">
        <PageContainer>
          <div className="mb-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.04] text-xs font-semibold text-[#818cf8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8] shadow-[0_0_8px_#818cf8]" />
              <span>Curated Style Catalogue</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display leading-[1.15]">
              Explore Design Styles
            </h1>

            <p className="text-base text-[#9499ad] max-w-2xl leading-[1.6]">
              Discover 12 production-grade UI design systems tailored for engineering platforms, fintech portals, neo-brutalist brands, and editorial publications. Inspect their semantic tokens, live component specimens, and export code directly.
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
