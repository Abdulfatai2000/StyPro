import React from 'react';
import Link from 'next/link';
import { ArrowLeft, SlidersHorizontal, Sparkles, Download, ArrowDown } from 'lucide-react';
import { DesignStyle } from '@/types/style';

interface StyleHeaderProps {
  style: DesignStyle;
}

export function StyleHeader({ style }: StyleHeaderProps) {
  return (
    <div className="space-y-6 pb-8 border-b border-[#dde0e6]">
      {/* Back button */}
      <Link
        href="/explore"
        className="inline-flex items-center gap-1.5 text-sm text-[#454c58] hover:text-[#16191f] font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to catalogue</span>
      </Link>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#074ce0] bg-[#074ce0]/10 px-3 py-1 rounded-full border border-[#074ce0]/20">
              {style.category}
            </span>
            {style.isFeatured && (
              <span className="text-xs font-semibold text-white bg-[#074ce0] px-3 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Style
              </span>
            )}
            <span className="text-xs text-[#454c58] font-mono">
              id: {style.slug}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16191f] font-display leading-[1.1]">
            {style.name}
          </h1>

          <p className="text-base text-[#454c58] leading-[1.6]">
            {style.tagline}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`/customize/${style.slug}`}
            className="btn-secondary text-sm"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#074ce0]" />
            <span>Customize Style</span>
          </Link>

          <Link
            href={`/export/${style.slug}`}
            className="btn-secondary text-sm"
          >
            <Download className="w-4 h-4 text-[#074ce0]" />
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
