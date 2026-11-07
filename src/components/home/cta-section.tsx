import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-[#08090c] text-white border-t border-white/[0.08] relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(94,106,210,0.25),transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-xs font-medium text-[#c7d2fe]">
          <Sparkles className="w-3.5 h-3.5 text-[#818cf8]" />
          <span>Ready to build consistent interfaces?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display leading-[1.1]">
          Find your next design direction today.
        </h2>

        <p className="text-base text-[#9499ad] max-w-xl mx-auto leading-relaxed font-body">
          Explore the curated design systems, inspect their semantic design tokens, and generate deterministic AI prompts for Antigravity, Cursor, and Claude Code.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
          <Link href="/explore" className="btn-primary !px-6 !py-3 text-sm">
            <span>Browse All 12 Styles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/styles/modern-dark"
            className="btn-secondary !px-6 !py-3 text-sm"
          >
            <span>View Modern Dark Spec</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
