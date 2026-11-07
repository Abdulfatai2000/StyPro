import React from 'react';
import Link from 'next/link';
import { ArrowLeft, SlidersHorizontal, Sparkles, Download, ArrowDown } from 'lucide-react';
import { DesignStyle } from '@/types/style';

interface StyleHeaderProps {
  style: DesignStyle;
}

export function StyleHeader({ style }: StyleHeaderProps) {
  return (
    <div className="space-y-6 pb-8 border-b border-white/[0.08]">
      {/* Back button */}
      <Link
        href="/explore"
        className="inline-flex items-center gap-1.5 text-sm text-[#9499ad] hover:text-white font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to catalogue</span>
      </Link>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#818cf8] bg-[#5e6ad2]/15 px-3 py-1 rounded-full border border-[#5e6ad2]/30">
              {style.category}
            </span>
            {style.isFeatured && (
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full flex items-center gap-1 border border-emerald-500/25">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Style
              </span>
            )}
            <span className="text-xs text-[#9499ad] font-mono">
              id: {style.slug}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.1]">
            {style.name}
          </h1>

          <p className="text-base text-[#9499ad] leading-[1.6]">
            {style.tagline}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`/customize/${style.slug}`}
            className="btn-secondary text-sm"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#818cf8]" />
            <span>Customize Style</span>
          </Link>

          <Link
            href={`/export/${style.slug}`}
            className="btn-secondary text-sm"
          >
            <Download className="w-4 h-4 text-[#818cf8]" />
            <span>Export Tokens</span>
          </Link>

          <a
            href="#live-preview"
            className="btn-primary text-sm"
          >
            <span>Live Preview</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
