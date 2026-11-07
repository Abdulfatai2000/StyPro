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
    <div className="space-y-6">
      {/* Category Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div>
          <h3 className="text-sm font-bold text-[#F4F5F8]">Spacing & Spatial Rhythms</h3>
          <p className="text-xs text-[#8C92A4]">
            Control card padding, component gaps, and layout boundaries.
          </p>
        </div>
        {isDirty && (
          <button
            type="button"
            onClick={onResetCategory}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-[#5E6AD2] hover:text-white bg-[#5E6AD2]/10 hover:bg-[#5E6AD2]/20 rounded border border-[#5E6AD2]/30 transition-all cursor-pointer"
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
            <span className="font-medium text-[#F4F5F8]">Component Gaps</span>
            <span className="font-mono text-[#5E6AD2]">{currentGaps}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['0.75rem', '1rem', '1.5rem', '2rem'].map((gap) => (
              <button
                key={gap}
                type="button"
                onClick={() => onChange({ componentGaps: gap })}
                className={`py-1.5 text-xs font-mono rounded border transition-all cursor-pointer ${
                  currentGaps === gap
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/15 text-white font-bold'
                    : 'border-white/[0.08] bg-[#050506] text-[#8C92A4] hover:text-white'
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
            <span className="font-medium text-[#F4F5F8]">Card & Surface Padding</span>
            <span className="font-mono text-[#5E6AD2]">{currentPadding}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['1rem', '1.5rem', '2rem', '2.5rem'].map((pad) => (
              <button
                key={pad}
                type="button"
                onClick={() => onChange({ contentPadding: pad })}
                className={`py-1.5 text-xs font-mono rounded border transition-all cursor-pointer ${
                  currentPadding === pad
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/15 text-white font-bold'
                    : 'border-white/[0.08] bg-[#050506] text-[#8C92A4] hover:text-white'
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
            <span className="font-medium text-[#F4F5F8]">Major Section Spacing</span>
            <span className="font-mono text-[#5E6AD2]">{currentSectionSpacing}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['3rem', '4rem', '5rem', '6rem'].map((sec) => (
              <button
                key={sec}
                type="button"
                onClick={() => onChange({ sectionSpacing: sec })}
                className={`py-1.5 text-xs font-mono rounded border transition-all cursor-pointer ${
                  currentSectionSpacing === sec
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/15 text-white font-bold'
                    : 'border-white/[0.08] bg-[#050506] text-[#8C92A4] hover:text-white'
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
            <span className="font-medium text-[#F4F5F8]">Container Max Width</span>
            <span className="font-mono text-[#5E6AD2]">{currentMaxWidth}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['1100px', '1200px', '1280px', '1440px'].map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => onChange({ containerMaxWidth: w })}
                className={`py-1.5 text-xs font-mono rounded border transition-all cursor-pointer ${
                  currentMaxWidth === w
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/15 text-white font-bold'
                    : 'border-white/[0.08] bg-[#050506] text-[#8C92A4] hover:text-white'
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

