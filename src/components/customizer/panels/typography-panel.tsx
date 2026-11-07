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
    { label: 'Inter (Technical SaaS & Interface)', value: 'Inter, -apple-system, sans-serif' },
    { label: 'Geist Sans (Clean Geometric)', value: 'var(--font-geist-sans), Inter, sans-serif' },
    { label: 'Helvetica Neue (Swiss Editorial)', value: 'Helvetica Neue, Arial, sans-serif' },
    { label: 'JetBrains Mono (Code Specimen)', value: 'JetBrains Mono, Menlo, monospace' },
  ];

  const currentHeadingFont = typographyOverrides.headingFont || baseTypography.headingFont;
  const currentBodyFont = typographyOverrides.bodyFont || baseTypography.bodyFont;
  const currentHeadingWeight = typographyOverrides.headingWeight || baseTypography.fontWeights.bold;
  const currentLineHeight = typographyOverrides.lineHeight || 'normal';
  const currentLetterSpacing = typographyOverrides.letterSpacing || 'normal';

  return (
    <div className="space-y-6 font-sans">
      {/* Category Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div>
          <h3 className="text-base font-bold text-white font-display">Typography System</h3>
          <p className="text-xs text-[#9499ad] mt-0.5">
            Select fonts, weights, and vertical spacing scale.
          </p>
        </div>
        {isDirty && (
          <button
            type="button"
            onClick={onResetCategory}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#818cf8] hover:text-white bg-[#5e6ad2]/15 hover:bg-[#5e6ad2] rounded-md border border-[#5e6ad2]/30 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Typography</span>
          </button>
        )}
      </div>

      <div className="space-y-5">
        {/* Heading Font */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-white">
            Heading Font Family
          </label>
          <select
            value={currentHeadingFont}
            onChange={(e) => onChange({ headingFont: e.target.value })}
            className="w-full text-xs p-2.5 rounded-lg bg-[#0c0d12] border border-white/[0.1] text-white focus:border-[#5e6ad2] focus:outline-none cursor-pointer"
          >
            {fontOptions.map((opt) => (
              <option key={opt.label} value={opt.value} className="bg-[#0c0d12] text-white">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Body Font */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-white">
            Body Font Family
          </label>
          <select
            value={currentBodyFont}
            onChange={(e) => onChange({ bodyFont: e.target.value })}
            className="w-full text-xs p-2.5 rounded-lg bg-[#0c0d12] border border-white/[0.1] text-white focus:border-[#5e6ad2] focus:outline-none cursor-pointer"
          >
            {fontOptions.map((opt) => (
              <option key={opt.label} value={opt.value} className="bg-[#0c0d12] text-white">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Heading Weight */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-semibold text-white">Heading Weight</span>
            <span className="font-mono text-[#818cf8] font-bold">{currentHeadingWeight}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[500, 600, 700, 800].map((weight) => (
              <button
                key={weight}
                type="button"
                onClick={() => onChange({ headingWeight: weight })}
                className={`py-2 text-xs font-mono rounded-md border transition-colors cursor-pointer ${
                  currentHeadingWeight === weight
                    ? 'border-[#5e6ad2] bg-[#5e6ad2] text-white font-bold shadow-xs'
                    : 'border-white/[0.08] bg-white/[0.03] text-[#9499ad] hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {weight}
              </button>
            ))}
          </div>
        </div>

        {/* Line Height Scale */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-white">
            Line Height Rhythm
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'tight', label: 'Tight (1.2)' },
              { id: 'normal', label: 'Normal (1.5)' },
              { id: 'relaxed', label: 'Relaxed (1.6)' },
            ].map((lh) => (
              <button
                key={lh.id}
                type="button"
                onClick={() => onChange({ lineHeight: lh.id as 'tight' | 'normal' | 'relaxed' })}
                className={`py-2 px-2 text-xs rounded-md border transition-colors cursor-pointer font-medium ${
                  currentLineHeight === lh.id
                    ? 'border-[#5e6ad2] bg-[#5e6ad2] text-white shadow-xs'
                    : 'border-white/[0.08] bg-white/[0.03] text-[#9499ad] hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {lh.label}
              </button>
            ))}
          </div>
        </div>

        {/* Letter Spacing */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-white">
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
                className={`py-2 px-2 text-xs rounded-md border transition-colors cursor-pointer font-medium ${
                  currentLetterSpacing === ls.id
                    ? 'border-[#5e6ad2] bg-[#5e6ad2] text-white shadow-xs'
                    : 'border-white/[0.08] bg-white/[0.03] text-[#9499ad] hover:text-white hover:bg-white/[0.06]'
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
