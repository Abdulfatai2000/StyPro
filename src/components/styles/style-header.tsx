import React from 'react';
import Link from 'next/link';
import { ArrowLeft, SlidersHorizontal, Sparkles } from 'lucide-react';
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
        className="inline-flex items-center gap-1.5 text-xs text-[#8C92A4] hover:text-[#F4F5F8] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Design Catalogue</span>
      </Link>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#5E6AD2] bg-[#5E6AD2]/10 px-2.5 py-0.5 rounded border border-[#5E6AD2]/25">
              {style.category}
            </span>
            {style.isFeatured && (
              <span className="text-xs font-medium text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded flex items-center gap-1 border border-[#10B981]/20">
                <Sparkles className="w-3 h-3" />
                Featured Style
              </span>
            )}
            <span className="text-xs font-mono text-[#8C92A4]">
              ID: {style.slug}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F5F8]">
            {style.name}
          </h1>

          <p className="text-base text-[#9BA1B0] leading-relaxed">
            {style.tagline}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`/customize/${style.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#5E6AD2]/40 bg-[#5E6AD2]/15 hover:bg-[#5E6AD2]/25 text-white text-xs font-semibold transition-all shadow-[0_0_15px_rgba(94,106,210,0.2)]"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#5E6AD2]" />
            <span>Customize Style</span>
          </Link>

          <a
            href="#live-preview"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#5E6AD2] hover:bg-[#6E79D8] text-white text-xs font-medium transition-all shadow-[0_0_20px_rgba(94,106,210,0.3)]"
          >
            <span>Jump to Live Preview</span>
          </a>
        </div>
      </div>
    </div>
  );
}

