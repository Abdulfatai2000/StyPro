'use client';

import React from 'react';
import { RotateCcw } from 'lucide-react';
import { StyleTypography } from '@/types/style';
import { TypographyOverrides } from '@/types/customizer';

interface TypographyPanelProps {
  baseTypography: StyleTypography;
  typographyOverrides: TypographyOverrides;
  onChange: (overrides: Partial<TypographyOverrides>) => void;
  onResetCategory: () => void;
  isDirty: boolean;
}

export function TypographyPanel({
  baseTypography,
  typographyOverrides,
  onChange,
  onResetCategory,
  isDirty,
}: TypographyPanelProps) {
  const fontOptions = [
    { label: 'Geist Sans (Clean Geometric)', value: 'var(--font-geist-sans), Inter, sans-serif' },
    { label: 'Helvetica Neue (Swiss Editorial)', value: 'Helvetica Neue, Arial, sans-serif' },
    { label: 'Inter (Technical SaaS)', value: 'Inter, -apple-system, sans-serif' },
    { label: 'System Monospace (Code Specimen)', value: 'var(--font-geist-mono), JetBrains Mono, monospace' },
  ];

  const currentHeadingFont = typographyOverrides.headingFont || baseTypography.headingFont;
  const currentBodyFont = typographyOverrides.bodyFont || baseTypography.bodyFont;
  const currentHeadingWeight = typographyOverrides.headingWeight || baseTypography.fontWeights.bold;
  const currentLineHeight = typographyOverrides.lineHeight || 'normal';
  const currentLetterSpacing = typographyOverrides.letterSpacing || 'normal';

  return (
    <div className="space-y-6">
      {/* Category Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div>
          <h3 className="text-sm font-bold text-[#F4F5F8]">Typography System</h3>
          <p className="text-xs text-[#8C92A4]">
            Select fonts, weights, and vertical spacing scale.
          </p>
        </div>
        {isDirty && (
          <button
            type="button"
            onClick={onResetCategory}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-[#5E6AD2] hover:text-white bg-[#5E6AD2]/10 hover:bg-[#5E6AD2]/20 rounded border border-[#5E6AD2]/30 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Typography</span>
          </button>
        )}
      </div>

      <div className="space-y-5">
        {/* Heading Font */}
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-[#F4F5F8]">
            Heading Font Family
          </label>
          <select
            value={currentHeadingFont}
            onChange={(e) => onChange({ headingFont: e.target.value })}
            className="w-full text-xs p-2.5 rounded-lg bg-[#050506] border border-white/[0.1] text-[#F4F5F8] focus:border-[#5E6AD2] focus:outline-none cursor-pointer"
          >
            {fontOptions.map((opt) => (
              <option key={opt.label} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Body Font */}
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-[#F4F5F8]">
            Body Font Family
          </label>
          <select
            value={currentBodyFont}
            onChange={(e) => onChange({ bodyFont: e.target.value })}
            className="w-full text-xs p-2.5 rounded-lg bg-[#050506] border border-white/[0.1] text-[#F4F5F8] focus:border-[#5E6AD2] focus:outline-none cursor-pointer"
          >
            {fontOptions.map((opt) => (
              <option key={opt.label} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Heading Weight */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-medium text-[#F4F5F8]">Heading Weight</span>
            <span className="font-mono text-[#5E6AD2]">{currentHeadingWeight}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[500, 600, 700, 900].map((weight) => (
              <button
                key={weight}
                type="button"
                onClick={() => onChange({ headingWeight: weight })}
                className={`py-1.5 text-xs font-mono rounded border transition-all cursor-pointer ${
                  currentHeadingWeight === weight
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/15 text-white font-bold'
                    : 'border-white/[0.08] bg-[#050506] text-[#8C92A4] hover:text-white'
                }`}
              >
                {weight}
              </button>
            ))}
          </div>
        </div>

        {/* Line Height Scale */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-[#F4F5F8]">
            Line Height Rhythm
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'tight', label: 'Tight (1.25)' },
              { id: 'normal', label: 'Normal (1.5)' },
              { id: 'relaxed', label: 'Relaxed (1.75)' },
            ].map((lh) => (
              <button
                key={lh.id}
                type="button"
                onClick={() => onChange({ lineHeight: lh.id as 'tight' | 'normal' | 'relaxed' })}
                className={`py-1.5 px-2 text-xs rounded border transition-all cursor-pointer ${
                  currentLineHeight === lh.id
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/15 text-white font-medium'
                    : 'border-white/[0.08] bg-[#050506] text-[#8C92A4] hover:text-white'
                }`}
              >
                {lh.label}
              </button>
            ))}
          </div>
        </div>

        {/* Letter Spacing */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-[#F4F5F8]">
            Letter Spacing (Tracking)
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'tight', label: 'Tight (-0.02em)' },
              { id: 'normal', label: 'Normal (0)' },
              { id: 'wide', label: 'Wide (+0.04em)' },
            ].map((ls) => (
              <button
                key={ls.id}
                type="button"
                onClick={() => onChange({ letterSpacing: ls.id as 'tight' | 'normal' | 'wide' })}
                className={`py-1.5 px-2 text-xs rounded border transition-all cursor-pointer ${
                  currentLetterSpacing === ls.id
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/15 text-white font-medium'
                    : 'border-white/[0.08] bg-[#050506] text-[#8C92A4] hover:text-white'
                }`}
              >
                {ls.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

