'use client';

import React from 'react';
import { RotateCcw } from 'lucide-react';
import { StyleShapesEffects, StyleComponentRules } from '@/types/style';
import { GeometryOverrides } from '@/types/customizer';

interface GeometryPanelProps {
  baseShapes: StyleShapesEffects;
  baseRules: StyleComponentRules;
  geometryOverrides: GeometryOverrides;
  onChange: (overrides: Partial<GeometryOverrides>) => void;
  onResetCategory: () => void;
  isDirty: boolean;
}

export function GeometryPanel({
  baseShapes,
  baseRules,
  geometryOverrides,
  onChange,
  onResetCategory,
  isDirty,
}: GeometryPanelProps) {
  const currentGeneralRadius = geometryOverrides.borderRadiusGeneral || baseShapes.borderRadius.md;
  const currentButtonRadius = geometryOverrides.buttonRadius || baseRules.button.borderRadius;
  const currentCardRadius = geometryOverrides.cardRadius || baseRules.card.borderRadius;
  const currentThickness = geometryOverrides.borderThickness || baseShapes.borderThickness.thin;
  const currentShadow = geometryOverrides.shadowLevel || 'md';

  return (
    <div className="space-y-6 font-sans">
      {/* Category Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#dde0e6]">
        <div>
          <h3 className="text-base font-bold text-[#16191f] font-display">Geometry & Elevation</h3>
          <p className="text-xs text-[#454c58] mt-0.5">
            Tune corner rounding, border thickness, and shadow depth.
          </p>
        </div>
        {isDirty && (
          <button
            type="button"
            onClick={onResetCategory}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#074ce0] hover:text-white bg-[#074ce0]/10 hover:bg-[#074ce0] rounded-md border border-[#074ce0]/30 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Geometry</span>
          </button>
        )}
      </div>

      <div className="space-y-5">
        {/* General Corner Radius */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-semibold text-[#16191f]">General Border Radius</span>
            <span className="font-mono text-[#074ce0] font-bold">{currentGeneralRadius}</span>
          </div>
          <div className="grid grid-cols-6 gap-1.5">
            {['0px', '4px', '6px', '8px', '12px', '9999px'].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => onChange({ borderRadiusGeneral: r })}
                className={`py-2 text-xs font-mono rounded-md border transition-colors cursor-pointer ${
                  currentGeneralRadius === r
                    ? 'border-[#074ce0] bg-[#074ce0] text-white font-bold'
                    : 'border-[#dde0e6] bg-white text-[#454c58] hover:text-[#16191f]'
                }`}
              >
                {r === '9999px' ? 'Pill' : r}
              </button>
            ))}
          </div>
        </div>

        {/* Button Radius */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-semibold text-[#16191f]">Button Corner Radius</span>
            <span className="font-mono text-[#074ce0] font-bold">{currentButtonRadius}</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {['0px', '4px', '6px', '8px', '9999px'].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => onChange({ buttonRadius: r })}
                className={`py-2 text-xs font-mono rounded-md border transition-colors cursor-pointer ${
                  currentButtonRadius === r
                    ? 'border-[#074ce0] bg-[#074ce0] text-white font-bold'
                    : 'border-[#dde0e6] bg-white text-[#454c58] hover:text-[#16191f]'
                }`}
              >
                {r === '9999px' ? 'Pill' : r}
              </button>
            ))}
          </div>
        </div>

        {/* Card Radius */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-semibold text-[#16191f]">Card Corner Radius</span>
            <span className="font-mono text-[#074ce0] font-bold">{currentCardRadius}</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {['0px', '4px', '8px', '12px', '16px'].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => onChange({ cardRadius: r })}
                className={`py-2 text-xs font-mono rounded-md border transition-colors cursor-pointer ${
                  currentCardRadius === r
                    ? 'border-[#074ce0] bg-[#074ce0] text-white font-bold'
                    : 'border-[#dde0e6] bg-white text-[#454c58] hover:text-[#16191f]'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Border Thickness */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-semibold text-[#16191f]">Border Thickness</span>
            <span className="font-mono text-[#074ce0] font-bold">{currentThickness}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['1px', '1.5px', '2px', '3px'].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => onChange({ borderThickness: t })}
                className={`py-2 text-xs font-mono rounded-md border transition-colors cursor-pointer ${
                  currentThickness === t
                    ? 'border-[#074ce0] bg-[#074ce0] text-white font-bold'
                    : 'border-[#dde0e6] bg-white text-[#454c58] hover:text-[#16191f]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Shadow Elevation */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-[#16191f]">
            Shadow Elevation & Depth
          </label>
          <div className="grid grid-cols-5 gap-1.5">
            {[
              { id: 'none', label: 'Flat (None)' },
              { id: 'sm', label: 'Subtle' },
              { id: 'md', label: 'Medium' },
              { id: 'lg', label: 'Deep' },
              { id: 'colored', label: 'Glow Tint' },
            ].map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => onChange({ shadowLevel: s.id as 'none' | 'sm' | 'md' | 'lg' | 'colored' })}
                className={`py-2 text-xs font-medium rounded-md border transition-colors cursor-pointer ${
                  currentShadow === s.id
                    ? 'border-[#074ce0] bg-[#074ce0] text-white'
                    : 'border-[#dde0e6] bg-white text-[#454c58] hover:text-[#16191f]'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
