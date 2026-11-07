import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 border-t border-white/[0.08] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#5E6AD2]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-[#090A0F] text-xs font-mono text-[#9BA1B0]">
          <Sparkles className="w-3.5 h-3.5 text-[#5E6AD2]" />
          <span>Ready to build consistent interfaces?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F5F8]">
          Find your next design direction today.
        </h2>

        <p className="text-base text-[#8C92A4] max-w-xl mx-auto leading-relaxed">
          Explore the curated pilot systems, inspect their semantic design tokens, and discover the visual foundation for your next project.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 rounded-lg bg-[#5E6AD2] hover:bg-[#6E79D8] text-white px-6 py-3 text-sm font-semibold shadow-[0_0_25px_rgba(94,106,210,0.4)] transition-all hover:shadow-[0_0_35px_rgba(94,106,210,0.6)]"
          >
            <span>Browse All Design Styles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/styles/modern-dark"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-[#090A0F] hover:bg-white/[0.05] text-[#F4F5F8] px-6 py-3 text-sm font-semibold transition-colors"
          >
            <span>View Modern Dark Spec</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

