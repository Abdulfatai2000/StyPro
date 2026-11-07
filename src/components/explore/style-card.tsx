import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, SlidersHorizontal, Download } from 'lucide-react';
import { DesignStyle } from '@/types/style';

interface StyleCardProps {
  style: DesignStyle;
}

export function StyleCard({ style }: StyleCardProps) {
  // Compute initials dynamically (e.g. "Corporate Clean" -> "CC")
  const initials = style.name
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  // Key preview color tokens
  const palettePreview = [
    { label: 'BG', hex: style.colors.background },
    { label: 'Surface', hex: style.colors.surface },
    { label: 'Primary', hex: style.colors.primary },
    { label: 'Accent', hex: style.colors.accent },
    { label: 'Border', hex: style.colors.border },
  ];

  return (
    <div className="linear-card group relative flex flex-col p-6">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 mb-3.5">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-[#818cf8] bg-[#5e6ad2]/15 px-2.5 py-0.5 rounded-full border border-[#5e6ad2]/30">
              {style.category}
            </span>
            {style.isFeatured && (
              <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-500/25">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#818cf8] transition-colors font-display">
            {style.name}
          </h3>
        </div>

        {/* Visual Miniature Badge */}
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold border shadow-xs transition-transform duration-160 group-hover:scale-105 shrink-0"
          style={{
            backgroundColor: style.colors.primary,
            color: style.colors.primaryForeground,
            borderColor: style.colors.border,
          }}
        >
          {initials}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#9499ad] leading-relaxed mb-4 line-clamp-2 font-body">
        {style.description}
      </p>

      {/* Mini Color Palette Swatches */}
      <div className="mb-4 space-y-1.5">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#9499ad]/80 block">
          Palette Swatches
        </span>
        <div className="flex items-center gap-1.5">
          {palettePreview.map((c, i) => (
            <div
              key={i}
              className="flex-1 h-6 rounded-md border border-white/[0.1] relative group/swatch transition-transform duration-160 hover:scale-105"
              style={{ backgroundColor: c.hex }}
              title={`${c.label}: ${c.hex}`}
            >
              <span className="sr-only">{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Characteristics Chips */}
      <div className="mb-6 flex flex-wrap gap-1.5">
        {style.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs text-[#9499ad] bg-white/[0.04] px-2.5 py-0.5 rounded-md border border-white/[0.08]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Card Footer Actions */}
      <div className="mt-auto pt-4 border-t border-white/[0.08] flex items-center justify-between">
        <Link
          href={`/styles/${style.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#818cf8] hover:text-white transition-colors"
        >
          <span>Explore System</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-160 group-hover:translate-x-0.5" />
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href={`/customize/${style.slug}`}
            className="text-xs font-medium text-[#9499ad] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] px-2.5 py-1 rounded-md flex items-center gap-1 transition-colors"
            title="Open Visual Customizer"
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>Customize</span>
          </Link>

          <Link
            href={`/export/${style.slug}`}
            className="text-xs font-medium text-[#818cf8] hover:text-white bg-[#5e6ad2]/15 hover:bg-[#5e6ad2]/25 border border-[#5e6ad2]/30 px-2.5 py-1 rounded-md flex items-center gap-1 transition-colors"
            title="Export Tokens"
          >
            <Download className="w-3 h-3" />
            <span>Export</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
