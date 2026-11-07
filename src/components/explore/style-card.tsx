import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, SlidersHorizontal, Download } from 'lucide-react';
import { DesignStyle } from '@/types/style';

interface StyleCardProps {
  style: DesignStyle;
}

export function StyleCard({ style }: StyleCardProps) {
  // Compute initials dynamically (e.g. "Modern Dark" -> "MD", "Paper & Ink" -> "PI")
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
    <div className="group relative flex flex-col rounded-xl border border-white/[0.08] bg-[#090A0F] p-6 transition-all duration-200 hover:border-[#5E6AD2]/50 hover:shadow-[0_8px_30px_rgba(94,106,210,0.12)]">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#5E6AD2] bg-[#5E6AD2]/10 px-2 py-0.5 rounded border border-[#5E6AD2]/20">
              {style.category}
            </span>
            {style.isFeatured && (
              <span className="text-[10px] font-medium text-[#10B981] bg-[#10B981]/10 px-1.5 py-0.5 rounded flex items-center gap-1 border border-[#10B981]/20">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold tracking-tight text-[#F4F5F8] group-hover:text-white transition-colors">
            {style.name}
          </h3>
        </div>

        {/* Visual Miniature Badge */}
        <div
          className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold border shadow-sm transition-transform group-hover:scale-105"
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
      <p className="text-sm text-[#8C92A4] leading-relaxed mb-5 line-clamp-2">
        {style.description}
      </p>

      {/* Mini Color Palette Swatches */}
      <div className="mb-5 space-y-1.5">
        <span className="text-[11px] uppercase tracking-wider font-mono text-[#636A7E]">
          Palette Tokens
        </span>
        <div className="flex items-center gap-1.5">
          {palettePreview.map((c, i) => (
            <div
              key={i}
              className="flex-1 h-7 rounded border border-white/[0.1] transition-transform hover:scale-105 relative group/swatch"
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
            className="text-[11px] text-[#9BA1B0] bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Card Footer Actions */}
      <div className="mt-auto pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <Link
          href={`/styles/${style.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5E6AD2] hover:text-[#6E79D8] transition-colors"
        >
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href={`/customize/${style.slug}`}
            className="text-[11px] font-mono text-[#8C92A4] hover:text-[#5E6AD2] flex items-center gap-1 transition-colors"
            title="Open Visual Customizer"
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>Customize</span>
          </Link>

          <Link
            href={`/export/${style.slug}`}
            className="text-[11px] font-mono text-[#8C92A4] hover:text-[#10B981] flex items-center gap-1 transition-colors"
            title="Export Design Tokens & Code"
          >
            <Download className="w-3 h-3" />
            <span>Export</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
