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
    <div className="space-y-6">
      {/* Category Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div>
          <h3 className="text-sm font-bold text-[#F4F5F8]">Geometry & Elevation</h3>
          <p className="text-xs text-[#8C92A4]">
            Tune corner rounding, border thickness, and shadow depth.
          </p>
        </div>
        {isDirty && (
          <button
            type="button"
            onClick={onResetCategory}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-[#5E6AD2] hover:text-white bg-[#5E6AD2]/10 hover:bg-[#5E6AD2]/20 rounded border border-[#5E6AD2]/30 transition-all cursor-pointer"
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
            <span className="font-medium text-[#F4F5F8]">General Border Radius</span>
            <span className="font-mono text-[#5E6AD2]">{currentGeneralRadius}</span>
          </div>
          <div className="grid grid-cols-6 gap-1.5">
            {['0px', '4px', '6px', '8px', '12px', '9999px'].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => onChange({ borderRadiusGeneral: r })}
                className={`py-1.5 text-xs font-mono rounded border transition-all cursor-pointer ${
                  currentGeneralRadius === r
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/15 text-white font-bold'
                    : 'border-white/[0.08] bg-[#050506] text-[#8C92A4] hover:text-white'
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
            <span className="font-medium text-[#F4F5F8]">Button Corner Radius</span>
            <span className="font-mono text-[#5E6AD2]">{currentButtonRadius}</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {['0px', '4px', '6px', '8px', '9999px'].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => onChange({ buttonRadius: r })}
                className={`py-1.5 text-xs font-mono rounded border transition-all cursor-pointer ${
                  currentButtonRadius === r
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/15 text-white font-bold'
                    : 'border-white/[0.08] bg-[#050506] text-[#8C92A4] hover:text-white'
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
            <span className="font-medium text-[#F4F5F8]">Card Corner Radius</span>
            <span className="font-mono text-[#5E6AD2]">{currentCardRadius}</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {['0px', '4px', '8px', '12px', '16px'].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => onChange({ cardRadius: r })}
                className={`py-1.5 text-xs font-mono rounded border transition-all cursor-pointer ${
                  currentCardRadius === r
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/15 text-white font-bold'
                    : 'border-white/[0.08] bg-[#050506] text-[#8C92A4] hover:text-white'
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
            <span className="font-medium text-[#F4F5F8]">Border Thickness</span>
            <span className="font-mono text-[#5E6AD2]">{currentThickness}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['1px', '1.5px', '2px', '3px'].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => onChange({ borderThickness: t })}
                className={`py-1.5 text-xs font-mono rounded border transition-all cursor-pointer ${
                  currentThickness === t
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/15 text-white font-bold'
                    : 'border-white/[0.08] bg-[#050506] text-[#8C92A4] hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Shadow Elevation */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-[#F4F5F8]">
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
                className={`py-1.5 text-[11px] rounded border transition-all cursor-pointer ${
                  currentShadow === s.id
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/15 text-white font-medium'
                    : 'border-white/[0.08] bg-[#050506] text-[#8C92A4] hover:text-white'
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

