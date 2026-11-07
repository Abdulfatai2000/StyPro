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
    { label: 'Host Grotesk (Tight Display)', value: 'Host Grotesk, -apple-system, sans-serif' },
    { label: 'Instrument Sans (Legible Body)', value: 'Instrument Sans, -apple-system, sans-serif' },
    { label: 'Inter (Technical SaaS)', value: 'Inter, -apple-system, sans-serif' },
    { label: 'Helvetica Neue (Swiss Editorial)', value: 'Helvetica Neue, Arial, sans-serif' },
    { label: 'System Monospace (Code Specimen)', value: 'JetBrains Mono, Menlo, monospace' },
  ];

  const currentHeadingFont = typographyOverrides.headingFont || baseTypography.headingFont;
  const currentBodyFont = typographyOverrides.bodyFont || baseTypography.bodyFont;
  const currentHeadingWeight = typographyOverrides.headingWeight || baseTypography.fontWeights.bold;
  const currentLineHeight = typographyOverrides.lineHeight || 'normal';
  const currentLetterSpacing = typographyOverrides.letterSpacing || 'normal';

  return (
    <div className="space-y-6 font-sans">
      {/* Category Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#dde0e6]">
        <div>
          <h3 className="text-base font-bold text-[#16191f] font-display">Typography System</h3>
          <p className="text-xs text-[#454c58] mt-0.5">
            Select fonts, weights, and vertical spacing scale.
          </p>
        </div>
        {isDirty && (
          <button
            type="button"
            onClick={onResetCategory}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#074ce0] hover:text-white bg-[#074ce0]/10 hover:bg-[#074ce0] rounded-md border border-[#074ce0]/30 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Typography</span>
          </button>
        )}
      </div>

      <div className="space-y-5">
        {/* Heading Font */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-[#16191f]">
            Heading Font Family
          </label>
          <select
            value={currentHeadingFont}
            onChange={(e) => onChange({ headingFont: e.target.value })}
            className="w-full text-xs p-2.5 rounded-lg bg-white border border-[#dde0e6] text-[#16191f] focus:border-[#074ce0] focus:outline-none cursor-pointer"
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
          <label className="block text-xs font-semibold text-[#16191f]">
            Body Font Family
          </label>
          <select
            value={currentBodyFont}
            onChange={(e) => onChange({ bodyFont: e.target.value })}
            className="w-full text-xs p-2.5 rounded-lg bg-white border border-[#dde0e6] text-[#16191f] focus:border-[#074ce0] focus:outline-none cursor-pointer"
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
            <span className="font-semibold text-[#16191f]">Heading Weight</span>
            <span className="font-mono text-[#074ce0] font-bold">{currentHeadingWeight}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[500, 600, 700, 800].map((weight) => (
              <button
                key={weight}
                type="button"
                onClick={() => onChange({ headingWeight: weight })}
                className={`py-2 text-xs font-mono rounded-md border transition-colors cursor-pointer ${
                  currentHeadingWeight === weight
                    ? 'border-[#074ce0] bg-[#074ce0] text-white font-bold'
                    : 'border-[#dde0e6] bg-white text-[#454c58] hover:text-[#16191f]'
                }`}
              >
                {weight}
              </button>
            ))}
          </div>
        </div>

        {/* Line Height Scale */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-[#16191f]">
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
                    ? 'border-[#074ce0] bg-[#074ce0] text-white'
                    : 'border-[#dde0e6] bg-white text-[#454c58] hover:text-[#16191f]'
                }`}
              >
                {lh.label}
              </button>
            ))}
          </div>
        </div>

        {/* Letter Spacing */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-[#16191f]">
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
                    ? 'border-[#074ce0] bg-[#074ce0] text-white'
                    : 'border-[#dde0e6] bg-white text-[#454c58] hover:text-[#16191f]'
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
