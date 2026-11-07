'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import {
  modernDark,
  swissMinimalist,
  corporateClean,
  cyberDeck,
} from '@/data/styles';
import { StylePreview } from '@/components/preview/style-preview';

const showcaseStyles = [
  modernDark,
  corporateClean,
  swissMinimalist,
  cyberDeck,
];

export function HeroSection() {
  const [selectedSlug, setSelectedSlug] = useState<string>('modern-dark');

  const activeStyle = showcaseStyles.find((s) => s.slug === selectedSlug) || modernDark;

  return (
    <section className="relative pt-14 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {/* Ambient Radial Spotlight (Linear / Raycast Style) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[550px] pointer-events-none opacity-60">
        <div className="w-full h-full bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(94,106,210,0.22),transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        {/* Centered Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Release Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] backdrop-blur-md shadow-xs text-xs font-medium text-[#c7d2fe]">
            <span className="w-2 h-2 rounded-full bg-[#818cf8] shadow-[0_0_8px_#818cf8]" />
            <span className="font-semibold text-white">StyPro v1.0</span>
            <span className="text-white/[0.2]">•</span>
            <span>From Style to Prompt to Code</span>
          </div>

          {/* Display Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-white leading-[1.08] font-display">
            Discover better styles.{' '}
            <span className="bg-gradient-to-r from-[#818cf8] via-[#a5b4fc] to-[#e0e7ff] bg-clip-text text-transparent block sm:inline">
              Build better interfaces.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#9499ad] max-w-2xl mx-auto leading-relaxed font-body">
            Explore 12 production-grade design systems, customize visual tokens with real-time feedback, generate deterministic AI prompts, and export clean CSS, Tailwind v4, DTCG JSON, and Markdown specs.
          </p>

          {/* Actions */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <Link href="/explore" className="btn-primary !px-5 !py-2.5 text-sm">
              <span>Explore All 12 Styles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#featured" className="btn-secondary !px-5 !py-2.5 text-sm">
              <Compass className="w-4 h-4 text-[#818cf8]" />
              <span>View Curated Systems</span>
            </a>
          </div>
        </div>

        {/* Ruled Facts Strip Below Hero */}
        <div className="linear-card grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.08]">
          <div className="p-5 space-y-1">
            <span className="text-xs font-semibold text-[#818cf8] uppercase tracking-wider block">System Catalogue</span>
            <div className="text-lg font-bold text-white font-display">12 Curated Systems</div>
            <p className="text-xs text-[#9499ad]">Handcrafted, zero generic defaults</p>
          </div>
          <div className="p-5 space-y-1">
            <span className="text-xs font-semibold text-[#818cf8] uppercase tracking-wider block">AI Integration</span>
            <div className="text-lg font-bold text-white font-display">0s Latency Output</div>
            <p className="text-xs text-[#9499ad]">Antigravity, Cursor & Claude Code</p>
          </div>
          <div className="p-5 space-y-1">
            <span className="text-xs font-semibold text-[#818cf8] uppercase tracking-wider block">Production Formats</span>
            <div className="text-lg font-bold text-white font-display">4 Export Targets</div>
            <p className="text-xs text-[#9499ad]">CSS, Tailwind v4/v3, DTCG, Markdown</p>
          </div>
          <div className="p-5 space-y-1">
            <span className="text-xs font-semibold text-[#818cf8] uppercase tracking-wider block">Architecture</span>
            <div className="text-lg font-bold text-white font-display">100% In-Browser</div>
            <p className="text-xs text-[#9499ad]">Zero backend, complete privacy</p>
          </div>
        </div>

        {/* Interactive Showcase Preview */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 gap-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-medium text-[#9499ad]">
                Interactive Specimen:
              </span>
              <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/[0.08] overflow-x-auto">
                {showcaseStyles.map((style) => (
                  <button
                    key={style.slug}
                    type="button"
                    onClick={() => setSelectedSlug(style.slug)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-160 cursor-pointer whitespace-nowrap ${
                      selectedSlug === style.slug
                        ? 'bg-[#5e6ad2] text-white shadow-xs font-semibold'
                        : 'text-[#9499ad] hover:text-white'
                    }`}
                  >
                    {style.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <Link
                href={`/customize/${activeStyle.slug}`}
                className="text-[#9499ad] hover:text-white flex items-center gap-1 font-medium transition-colors"
              >
                <span>Customize</span>
              </Link>
              <Link
                href={`/export/${activeStyle.slug}`}
                className="text-[#818cf8] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Export Tokens</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Embed */}
          <div className="rounded-xl overflow-hidden border border-white/[0.1] shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            <StylePreview style={activeStyle} />
          </div>
        </div>
      </div>
    </section>
  );
}
