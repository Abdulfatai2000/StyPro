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
    <div className="software-card group relative flex flex-col p-6 transition-all duration-160">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 mb-3.5">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[12px] font-semibold text-[#074ce0] bg-[#074ce0]/10 px-2.5 py-0.5 rounded-full border border-[#074ce0]/20">
              {style.category}
            </span>
            {style.isFeatured && (
              <span className="text-[11px] font-medium text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#10b981]/20">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold tracking-tight text-[#16191f] group-hover:text-[#074ce0] transition-colors font-display">
            {style.name}
          </h3>
        </div>

        {/* Visual Miniature Badge */}
        <div
          className="w-9 h-9 rounded-[8px] flex items-center justify-center text-xs font-bold border shadow-xs transition-transform duration-160 group-hover:scale-105 shrink-0"
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
      <p className="text-sm text-[#454c58] leading-relaxed mb-4 line-clamp-2 font-body">
        {style.description}
      </p>

      {/* Mini Color Palette Swatches */}
      <div className="mb-4 space-y-1.5">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#454c58]/80 block">
          Palette Swatches
        </span>
        <div className="flex items-center gap-1.5">
          {palettePreview.map((c, i) => (
            <div
              key={i}
              className="flex-1 h-6 rounded-[6px] border border-[#dde0e6] relative group/swatch transition-transform duration-160 hover:scale-105"
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
            className="text-[12px] text-[#454c58] bg-[#f3f4f6] px-2.5 py-0.5 rounded-md border border-[#dde0e6]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Card Footer Actions */}
      <div className="mt-auto pt-4 border-t border-[#dde0e6] flex items-center justify-between">
        <Link
          href={`/styles/${style.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#074ce0] hover:underline transition-colors"
        >
          <span>Explore System</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-160 group-hover:translate-x-0.5" />
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href={`/customize/${style.slug}`}
            className="text-xs font-medium text-[#454c58] hover:text-[#074ce0] bg-[#f3f4f6] hover:bg-[#e9ecf2] px-2.5 py-1 rounded-[6px] flex items-center gap-1 transition-colors"
            title="Open Visual Customizer"
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>Customize</span>
          </Link>

          <Link
            href={`/export/${style.slug}`}
            className="text-xs font-medium text-[#074ce0] bg-[#074ce0]/10 hover:bg-[#074ce0]/15 px-2.5 py-1 rounded-[6px] flex items-center gap-1 transition-colors"
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
