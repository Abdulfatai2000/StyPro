'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, SlidersHorizontal, Terminal, Download, Sparkles } from 'lucide-react';
import {
  modernDark,
  swissMinimalist,
  corporateClean,
  cyberDeck,
} from '@/data/styles';
import { StylePreview } from '@/components/preview/style-preview';

const showcaseStyles = [
  corporateClean,
  modernDark,
  swissMinimalist,
  cyberDeck,
];

export function HeroSection() {
  const [selectedSlug, setSelectedSlug] = useState<string>('corporate-clean');

  const activeStyle = showcaseStyles.find((s) => s.slug === selectedSlug) || corporateClean;

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* 1.45:1 Split Layout: Text Column (left) beside Product Convergence Diagram (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Wide Text Column (~7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Professional Release Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#dde0e6] bg-[#ffffff] shadow-sm text-[13px] font-medium text-[#454c58]">
              <span className="w-2 h-2 rounded-full bg-[#074ce0]" />
              <span className="font-semibold text-[#16191f]">StyPro v1.0</span>
              <span className="text-[#dde0e6]">|</span>
              <span>From Style to Prompt to Code</span>
            </div>

            {/* Display Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#16191f] leading-[1.08] font-display">
              Discover better styles.{' '}
              <span className="text-[#074ce0] block sm:inline">
                Build better interfaces.
              </span>
            </h1>

            {/* Introductory Text */}
            <p className="text-base sm:text-lg text-[#454c58] max-w-xl leading-relaxed font-body">
              Explore 12 production-grade design systems, customize visual tokens with real-time feedback, generate deterministic AI prompts, and export clean CSS, Tailwind v4, DTCG JSON, and Markdown specs.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link href="/explore" className="btn-primary">
                <span>Explore All 12 Styles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#featured" className="btn-secondary">
                <Compass className="w-4 h-4 text-[#074ce0]" />
                <span>View Curated Systems</span>
              </a>
            </div>
          </div>

          {/* Right Column: Compact Product Diagram (~5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[420px] p-6 rounded-[16px] border border-[#dde0e6] bg-[#ffffff] shadow-[0_4px_24px_rgba(16,24,40,0.06)] relative overflow-hidden">
              {/* Subtle radial orbit lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-64 h-64 rounded-full border border-[#dde0e6]" />
                <div className="w-44 h-44 rounded-full border border-[#074ce0]/20 absolute" />
              </div>

              {/* Central Product Core with Material Gradient */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-4 py-3">
                {/* Central Glowing Product Node */}
                <div className="w-16 h-16 rounded-[14px] bg-gradient-to-b from-[#074ce0] to-[#0536a0] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(7,76,224,0.35)]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#16191f] font-display">StyPro Engine</h3>
                  <p className="text-[12px] text-[#454c58]">Single-Source Token Nexus</p>
                </div>

                {/* 3 Converging Input Tiles */}
                <div className="grid grid-cols-3 gap-2.5 w-full pt-2">
                  <div className="p-2.5 rounded-[10px] bg-[#fcfcfd] border border-[#dde0e6] text-center shadow-xs">
                    <SlidersHorizontal className="w-4 h-4 text-[#074ce0] mx-auto mb-1" />
                    <span className="text-[11px] font-semibold text-[#16191f] block leading-tight">Visual Customizer</span>
                  </div>
                  <div className="p-2.5 rounded-[10px] bg-[#fcfcfd] border border-[#dde0e6] text-center shadow-xs">
                    <Terminal className="w-4 h-4 text-[#074ce0] mx-auto mb-1" />
                    <span className="text-[11px] font-semibold text-[#16191f] block leading-tight">AI Prompt Synthesis</span>
                  </div>
                  <div className="p-2.5 rounded-[10px] bg-[#fcfcfd] border border-[#dde0e6] text-center shadow-xs">
                    <Download className="w-4 h-4 text-[#074ce0] mx-auto mb-1" />
                    <span className="text-[11px] font-semibold text-[#16191f] block leading-tight">4-Format Export</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tightly Ruled Facts Strip Below Hero */}
        <div className="software-card grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#dde0e6]">
          <div className="p-5 space-y-1">
            <span className="text-[12px] font-semibold text-[#074ce0] uppercase tracking-wider block">System Catalogue</span>
            <div className="text-lg font-bold text-[#16191f] font-display">12 Curated Systems</div>
            <p className="text-[13px] text-[#454c58]">Handcrafted, zero generic defaults</p>
          </div>
          <div className="p-5 space-y-1">
            <span className="text-[12px] font-semibold text-[#074ce0] uppercase tracking-wider block">AI Integration</span>
            <div className="text-lg font-bold text-[#16191f] font-display">0s Latency Output</div>
            <p className="text-[13px] text-[#454c58]">Antigravity, Cursor & Claude Code</p>
          </div>
          <div className="p-5 space-y-1">
            <span className="text-[12px] font-semibold text-[#074ce0] uppercase tracking-wider block">Production Formats</span>
            <div className="text-lg font-bold text-[#16191f] font-display">4 Export Targets</div>
            <p className="text-[13px] text-[#454c58]">CSS, Tailwind v4/v3, DTCG, Markdown</p>
          </div>
          <div className="p-5 space-y-1">
            <span className="text-[12px] font-semibold text-[#074ce0] uppercase tracking-wider block">Architecture</span>
            <div className="text-lg font-bold text-[#16191f] font-display">100% In-Browser</div>
            <p className="text-[13px] text-[#454c58]">Zero backend, complete privacy</p>
          </div>
        </div>

        {/* Interactive Showcase Preview */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 gap-3 border-b border-[#dde0e6]">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[13px] font-medium text-[#454c58]">
                Interactive Preview:
              </span>
              <div className="flex items-center gap-1 bg-[#f3f4f6] p-1 rounded-lg border border-[#dde0e6] overflow-x-auto">
                {showcaseStyles.map((style) => (
                  <button
                    key={style.slug}
                    type="button"
                    onClick={() => setSelectedSlug(style.slug)}
                    className={`px-3 py-1 rounded-[6px] text-[13px] font-medium transition-all duration-160 cursor-pointer whitespace-nowrap ${
                      selectedSlug === style.slug
                        ? 'bg-white text-[#16191f] shadow-xs font-semibold'
                        : 'text-[#454c58] hover:text-[#16191f]'
                    }`}
                  >
                    {style.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-[13px]">
              <Link
                href={`/customize/${activeStyle.slug}`}
                className="text-[#454c58] hover:text-[#074ce0] flex items-center gap-1 font-medium transition-colors"
              >
                <span>Customize</span>
              </Link>
              <Link
                href={`/export/${activeStyle.slug}`}
                className="text-[#074ce0] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Export Tokens</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Embed */}
          <div className="rounded-[16px] overflow-hidden border border-[#dde0e6] shadow-[0_8px_30px_rgba(16,24,40,0.06)]">
            <StylePreview style={activeStyle} />
          </div>
        </div>
      </div>
    </section>
  );
}
