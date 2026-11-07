import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { PageContainer } from '@/components/layout/page-container';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050506]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20">
        <PageContainer size="narrow">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#090A0F] border border-white/[0.1] text-[#5E6AD2] shadow-[0_0_30px_rgba(94,106,210,0.2)]">
              <Compass className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#5E6AD2]">
                404 Error
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F5F8]">
                Design Style Not Found
              </h1>
              <p className="text-sm text-[#8C92A4] max-w-md mx-auto leading-relaxed">
                The requested style slug does not exist in the StyPro catalogue or may have been relocated.
              </p>
            </div>

            <div className="pt-4 flex items-center justify-center gap-3">
              <Link
                href="/explore"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#5E6AD2] hover:bg-[#6E79D8] text-white text-xs font-medium transition-all shadow-[0_0_20px_rgba(94,106,210,0.3)]"
              >
                <span>Browse All Styles</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.1] bg-[#090A0F] hover:bg-white/[0.04] text-[#F4F5F8] text-xs font-medium transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return Home</span>
              </Link>
            </div>
          </div>
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}

