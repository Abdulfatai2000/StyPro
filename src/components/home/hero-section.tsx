'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, CheckCircle2 } from 'lucide-react';
import { modernDark, swissMinimalist } from '@/data/styles';
import { StylePreview } from '@/components/preview/style-preview';

export function HeroSection() {
  const [selectedPilot, setSelectedPilot] = useState<'modern-dark' | 'swiss-minimalist'>(
    'modern-dark'
  );

  const activeStyle = selectedPilot === 'modern-dark' ? modernDark : swissMinimalist;

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background ambient radial gradients (Restrained, subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#5E6AD2]/12 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-[#5E6AD2]/6 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 px-4">
        {/* Release / Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-[#090A0F]/90 backdrop-blur-sm text-xs font-mono text-[#9BA1B0] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#5E6AD2] animate-pulse" />
          <span>StyPro v1.0 — Design Systems for Modern Developers</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F4F5F8] leading-[1.1]">
          Discover better styles.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F5F8] via-[#9497A1] to-[#5E6AD2]">
            Build better interfaces.
          </span>
        </h1>

        {/* Supporting Explanation */}
        <p className="text-base sm:text-lg md:text-xl text-[#9BA1B0] max-w-2xl mx-auto leading-relaxed">
          Explore professional design systems, customize visual directions and turn your design decisions into implementation-ready prompts.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 rounded-lg bg-[#5E6AD2] hover:bg-[#6E79D8] text-white px-5 py-3 text-sm font-semibold shadow-[0_0_25px_rgba(94,106,210,0.4)] transition-all duration-150 hover:shadow-[0_0_35px_rgba(94,106,210,0.6)]"
          >
            <span>Explore Design Styles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#featured"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-[#090A0F] hover:bg-white/[0.05] text-[#F4F5F8] px-5 py-3 text-sm font-semibold transition-colors"
          >
            <Compass className="w-4 h-4 text-[#5E6AD2]" />
            <span>View Pilot Styles</span>
          </a>
        </div>

        {/* Feature Checkpoints */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8C92A4]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#5E6AD2]" />
            Data-Driven Token Specs
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#5E6AD2]" />
            Realistic Component Previews
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#5E6AD2]" />
            AI Prompt Ready Architecture
          </span>
        </div>
      </div>

      {/* Interactive Hero Preview Demonstration */}
      <div className="relative z-10 max-w-5xl mx-auto mt-14 px-4">
        {/* Style Switcher Bar */}
        <div className="flex items-center justify-between pb-3 px-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C92A4]">
              Interactive Preview:
            </span>
            <div className="flex items-center gap-1 bg-[#090A0F] p-1 rounded-lg border border-white/[0.08]">
              <button
                type="button"
                onClick={() => setSelectedPilot('modern-dark')}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                  selectedPilot === 'modern-dark'
                    ? 'bg-[#151824] text-[#F4F5F8]'
                    : 'text-[#8C92A4] hover:text-[#F4F5F8]'
                }`}
              >
                Modern Dark
              </button>
              <button
                type="button"
                onClick={() => setSelectedPilot('swiss-minimalist')}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                  selectedPilot === 'swiss-minimalist'
                    ? 'bg-[#151824] text-[#F4F5F8]'
                    : 'text-[#8C92A4] hover:text-[#F4F5F8]'
                }`}
              >
                Swiss Minimalist
              </button>
            </div>
          </div>

          <Link
            href={`/styles/${activeStyle.slug}`}
            className="text-xs text-[#5E6AD2] hover:underline flex items-center gap-1 font-mono"
          >
            <span>Inspect {activeStyle.name} tokens</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Live Preview Embed */}
        <StylePreview style={activeStyle} />
      </div>
    </section>
  );
}

