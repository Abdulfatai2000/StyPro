'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, CheckCircle2 } from 'lucide-react';
import {
  modernDark,
  swissMinimalist,
  neoBrutalist,
  cyberDeck,
} from '@/data/styles';
import { StylePreview } from '@/components/preview/style-preview';

const showcaseStyles = [
  modernDark,
  swissMinimalist,
  neoBrutalist,
  cyberDeck,
];

export function HeroSection() {
  const [selectedSlug, setSelectedSlug] = useState<string>('modern-dark');

  const activeStyle = showcaseStyles.find((s) => s.slug === selectedSlug) || modernDark;

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background ambient radial gradients (Restrained, subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#5E6AD2]/12 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-[#5E6AD2]/6 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 px-4">
        {/* Release / Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-[#090A0F]/90 backdrop-blur-sm text-xs font-mono text-[#9BA1B0] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>StyPro v1.0 — Discover. Customize. Prompt. Export.</span>
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
          Explore 12 production-grade design systems, customize visual tokens with live feedback, generate deterministic AI prompts, and export clean CSS, Tailwind v4, DTCG JSON, and Markdown specs.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 rounded-lg bg-[#5E6AD2] hover:bg-[#6E79D8] text-white px-5 py-3 text-sm font-semibold shadow-[0_0_25px_rgba(94,106,210,0.4)] transition-all duration-150 hover:shadow-[0_0_35px_rgba(94,106,210,0.6)]"
          >
            <span>Explore All 12 Styles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#featured"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-[#090A0F] hover:bg-white/[0.05] text-[#F4F5F8] px-5 py-3 text-sm font-semibold transition-colors"
          >
            <Compass className="w-4 h-4 text-[#5E6AD2]" />
            <span>View Featured Systems</span>
          </a>
        </div>

        {/* Feature Checkpoints */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8C92A4]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#5E6AD2]" />
            12 Distinct Design Systems
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#5E6AD2]" />
            Live Reactive Preview
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#5E6AD2]" />
            Deterministic AI Prompts
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            4 Production Export Formats
          </span>
        </div>
      </div>

      {/* Interactive Hero Preview Demonstration */}
      <div className="relative z-10 max-w-5xl mx-auto mt-14 px-4">
        {/* Style Switcher Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 px-2 gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C92A4]">
              Interactive Preview:
            </span>
            <div className="flex items-center gap-1 bg-[#090A0F] p-1 rounded-lg border border-white/[0.08] overflow-x-auto">
              {showcaseStyles.map((style) => (
                <button
                  key={style.slug}
                  type="button"
                  onClick={() => setSelectedSlug(style.slug)}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    selectedSlug === style.slug
                      ? 'bg-[#151824] text-[#F4F5F8] shadow-sm'
                      : 'text-[#8C92A4] hover:text-[#F4F5F8]'
                  }`}
                >
                  {style.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={`/customize/${activeStyle.slug}`}
              className="text-xs text-[#8C92A4] hover:text-[#F4F5F8] flex items-center gap-1 font-mono transition-colors"
            >
              <span>Customize</span>
            </Link>
            <Link
              href={`/export/${activeStyle.slug}`}
              className="text-xs text-[#10B981] hover:underline flex items-center gap-1 font-mono"
            >
              <span>Export Tokens</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Live Preview Embed */}
        <StylePreview style={activeStyle} />
      </div>
    </section>
  );
}
