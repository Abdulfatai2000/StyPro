'use client';

import React from 'react';
import { RotateCcw } from 'lucide-react';
import { StyleSpacing, StyleLayout } from '@/types/style';
import { SpacingOverrides } from '@/types/customizer';

interface SpacingPanelProps {
  baseSpacing: StyleSpacing;
  baseLayout: StyleLayout;
  spacingOverrides: SpacingOverrides;
  onChange: (overrides: Partial<SpacingOverrides>) => void;
  onResetCategory: () => void;
  isDirty: boolean;
}

export function SpacingPanel({
  baseSpacing,
  baseLayout,
  spacingOverrides,
  onChange,
  onResetCategory,
  isDirty,
}: SpacingPanelProps) {
  const currentGaps = spacingOverrides.componentGaps || baseSpacing.componentGaps;
  const currentPadding = spacingOverrides.contentPadding || baseSpacing.contentPadding;
  const currentSectionSpacing = spacingOverrides.sectionSpacing || baseSpacing.sectionSpacing;
  const currentMaxWidth = spacingOverrides.containerMaxWidth || baseLayout.maxContentWidth;

  return (
    <div className="space-y-6 font-sans">
      {/* Category Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#dde0e6]">
        <div>
          <h3 className="text-base font-bold text-[#16191f] font-display">Spacing & Spatial Rhythms</h3>
          <p className="text-xs text-[#454c58] mt-0.5">
            Control card padding, component gaps, and layout boundaries.
          </p>
        </div>
        {isDirty && (
          <button
            type="button"
            onClick={onResetCategory}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#074ce0] hover:text-white bg-[#074ce0]/10 hover:bg-[#074ce0] rounded-md border border-[#074ce0]/30 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Spacing</span>
          </button>
        )}
      </div>

      <div className="space-y-5">
        {/* Component Gaps */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-semibold text-[#16191f]">Component Gaps</span>
            <span className="font-mono text-[#074ce0] font-bold">{currentGaps}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['0.75rem', '1rem', '1.5rem', '2rem'].map((gap) => (
              <button
                key={gap}
                type="button"
                onClick={() => onChange({ componentGaps: gap })}
                className={`py-2 text-xs font-mono rounded-md border transition-colors cursor-pointer ${
                  currentGaps === gap
                    ? 'border-[#074ce0] bg-[#074ce0] text-white font-bold'
                    : 'border-[#dde0e6] bg-white text-[#454c58] hover:text-[#16191f]'
                }`}
              >
                {gap}
              </button>
            ))}
          </div>
        </div>

        {/* Content Padding */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-semibold text-[#16191f]">Card & Surface Padding</span>
            <span className="font-mono text-[#074ce0] font-bold">{currentPadding}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['1rem', '1.5rem', '2rem', '2.5rem'].map((pad) => (
              <button
                key={pad}
                type="button"
                onClick={() => onChange({ contentPadding: pad })}
                className={`py-2 text-xs font-mono rounded-md border transition-colors cursor-pointer ${
                  currentPadding === pad
                    ? 'border-[#074ce0] bg-[#074ce0] text-white font-bold'
                    : 'border-[#dde0e6] bg-white text-[#454c58] hover:text-[#16191f]'
                }`}
              >
                {pad}
              </button>
            ))}
          </div>
        </div>

        {/* Section Spacing */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-semibold text-[#16191f]">Major Section Spacing</span>
            <span className="font-mono text-[#074ce0] font-bold">{currentSectionSpacing}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['3rem', '4rem', '5rem', '6rem'].map((sec) => (
              <button
                key={sec}
                type="button"
                onClick={() => onChange({ sectionSpacing: sec })}
                className={`py-2 text-xs font-mono rounded-md border transition-colors cursor-pointer ${
                  currentSectionSpacing === sec
                    ? 'border-[#074ce0] bg-[#074ce0] text-white font-bold'
                    : 'border-[#dde0e6] bg-white text-[#454c58] hover:text-[#16191f]'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>
        </div>

        {/* Max Container Width */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-semibold text-[#16191f]">Container Max Width</span>
            <span className="font-mono text-[#074ce0] font-bold">{currentMaxWidth}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['1100px', '1200px', '1280px', '1440px'].map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => onChange({ containerMaxWidth: w })}
                className={`py-2 text-xs font-mono rounded-md border transition-colors cursor-pointer ${
                  currentMaxWidth === w
                    ? 'border-[#074ce0] bg-[#074ce0] text-white font-bold'
                    : 'border-[#dde0e6] bg-white text-[#454c58] hover:text-[#16191f]'
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
