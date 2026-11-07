import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-[#16191f] text-[#fcfcfd] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.15] bg-white/[0.05] text-[13px] font-medium text-[#fcfcfd]">
          <Sparkles className="w-3.5 h-3.5 text-[#074ce0]" />
          <span>Ready to build consistent interfaces?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#fcfcfd] font-display leading-[1.1]">
          Find your next design direction today.
        </h2>

        <p className="text-base text-[#d0d4dd] max-w-xl mx-auto leading-relaxed font-body">
          Explore the curated design systems, inspect their semantic design tokens, and generate deterministic AI prompts for Antigravity, Cursor, and Claude Code.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link href="/explore" className="btn-primary !px-6 !py-3 text-[15px]">
            <span>Browse All 12 Styles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/styles/modern-dark"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] border border-white/[0.2] bg-white/[0.06] hover:bg-white/[0.1] text-white text-[15px] font-medium transition-all"
          >
            <span>View Modern Dark Spec</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
