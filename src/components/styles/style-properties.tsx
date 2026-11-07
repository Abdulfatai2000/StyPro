import React from 'react';
import { Box, CheckCircle2, Maximize2, Sliders, Sparkles } from 'lucide-react';
import { DesignStyle } from '@/types/style';

interface StylePropertiesProps {
  style: DesignStyle;
}

export function StyleProperties({ style }: StylePropertiesProps) {
  return (
    <div className="space-y-6 font-sans">
      {/* Philosophy & Recommended Use Cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Philosophy */}
        <div className="linear-card p-6 space-y-3.5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#818cf8]">
            <Sparkles className="w-4 h-4" />
            <span>Design Philosophy</span>
          </div>
          <h4 className="text-lg font-bold text-white font-display">
            {style.philosophy.direction}
          </h4>
          <p className="text-base text-[#9499ad] leading-[1.6]">
            {style.philosophy.intendedAtmosphere}
          </p>
          <div className="pt-3 border-t border-white/[0.08] space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wide">
              Key Visual Characteristics:
            </span>
            <ul className="space-y-1.5">
              {style.philosophy.visualCharacteristics.map((item, idx) => (
                <li key={idx} className="text-sm text-[#9499ad] flex items-start gap-2">
                  <span className="text-[#818cf8] font-bold">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommended Use Cases */}
        <div className="linear-card p-6 space-y-3.5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#818cf8]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Recommended Domain Applications</span>
          </div>
          <h4 className="text-lg font-bold text-white font-display">
            Ideal For
          </h4>
          <ul className="space-y-2">
            {style.philosophy.recommendedUseCases.map((useCase, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-lg border border-white/[0.08] bg-white/[0.03] text-sm text-white font-medium"
              >
                <div className="w-2 h-2 rounded-full bg-[#818cf8]" />
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Geometry, Shadows, and Spacing Tokens Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Border Radius */}
        <div className="linear-card p-5 space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#818cf8] flex items-center gap-2">
            <Box className="w-4 h-4" />
            <span>Corner Geometry</span>
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-1.5 border-b border-white/[0.08]">
              <span className="text-[#9499ad]">Radius SM</span>
              <span className="font-mono text-white font-medium">{style.shapesEffects.borderRadius.sm}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/[0.08]">
              <span className="text-[#9499ad]">Radius MD (Default)</span>
              <span className="font-mono text-white font-medium">{style.shapesEffects.borderRadius.md}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/[0.08]">
              <span className="text-[#9499ad]">Radius LG</span>
              <span className="font-mono text-white font-medium">{style.shapesEffects.borderRadius.lg}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/[0.08]">
              <span className="text-[#9499ad]">Border Width</span>
              <span className="font-mono text-white font-medium">{style.shapesEffects.borderThickness.thin}</span>
            </div>
          </div>
        </div>

        {/* Shadows & Elevation */}
        <div className="linear-card p-5 space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#818cf8] flex items-center gap-2">
            <Sliders className="w-4 h-4" />
            <span>Shadows & Elevation</span>
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-1.5 border-b border-white/[0.08]">
              <span className="text-[#9499ad]">Elevation Base</span>
              <span className="font-mono text-white font-medium">{style.shapesEffects.elevation}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/[0.08]">
              <span className="text-[#9499ad]">Shadow MD</span>
              <span className="font-mono text-white font-medium truncate max-w-[130px]">{style.shapesEffects.shadows.md}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/[0.08]">
              <span className="text-[#9499ad]">Shadow LG</span>
              <span className="font-mono text-white font-medium truncate max-w-[130px]">{style.shapesEffects.shadows.lg}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/[0.08]">
              <span className="text-[#9499ad]">Backdrop Blur</span>
              <span className="font-mono text-white font-medium">{style.shapesEffects.backdropBlur}</span>
            </div>
          </div>
        </div>

        {/* Grid & Spacing */}
        <div className="linear-card p-5 space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#818cf8] flex items-center gap-2">
            <Maximize2 className="w-4 h-4" />
            <span>Layout & Spatial Rhythm</span>
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-1.5 border-b border-white/[0.08]">
              <span className="text-[#9499ad]">Grid Columns</span>
              <span className="font-mono text-white font-medium">{style.layout.gridColumns}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/[0.08]">
              <span className="text-[#9499ad]">Column Gap</span>
              <span className="font-mono text-white font-medium">{style.layout.columnGap}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/[0.08]">
              <span className="text-[#9499ad]">Max Container</span>
              <span className="font-mono text-white font-medium">{style.layout.maxContentWidth}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/[0.08]">
              <span className="text-[#9499ad]">Component Gaps</span>
              <span className="font-mono text-white font-medium">{style.spacing.componentGaps}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
