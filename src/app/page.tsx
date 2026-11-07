import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { PageContainer } from '@/components/layout/page-container';
import { HeroSection } from '@/components/home/hero-section';
import { FeaturedStyles } from '@/components/home/featured-styles';
import { HowItWorks } from '@/components/home/how-it-works';
import { BenefitsSection } from '@/components/home/benefits-section';
import { CtaSection } from '@/components/home/cta-section';

export const metadata: Metadata = {
  title: 'StyPro — From Style to Prompt to Code',
  description:
    'Discover professional UI design styles, preview them on realistic components, and turn visual directions into implementation-ready prompts.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050506]">
      <Navbar />

      <main className="flex-1">
        <PageContainer>
          <HeroSection />
          <FeaturedStyles />
          <HowItWorks />
          <BenefitsSection />
          <CtaSection />
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}
