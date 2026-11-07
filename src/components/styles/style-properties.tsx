import React from 'react';
import { Box, CheckCircle2, Maximize2, Sliders, Sparkles } from 'lucide-react';
import { DesignStyle } from '@/types/style';

interface StylePropertiesProps {
  style: DesignStyle;
}

export function StyleProperties({ style }: StylePropertiesProps) {
  return (
    <div className="space-y-8">
      {/* Philosophy & Recommended Use Cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Philosophy */}
        <div className="rounded-xl border border-white/[0.08] bg-[#090A0F] p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5E6AD2]">
            <Sparkles className="w-4 h-4" />
            <span>Design Philosophy & Direction</span>
          </div>
          <h4 className="text-lg font-bold text-[#F4F5F8]">
            {style.philosophy.direction}
          </h4>
          <p className="text-sm text-[#8C92A4] leading-relaxed">
            {style.philosophy.intendedAtmosphere}
          </p>
          <div className="pt-2 border-t border-white/[0.06] space-y-2">
            <span className="text-xs font-semibold text-[#F4F5F8]">Key Characteristics:</span>
            <ul className="space-y-1.5">
              {style.philosophy.visualCharacteristics.map((item, idx) => (
                <li key={idx} className="text-xs text-[#8C92A4] flex items-start gap-2">
                  <span className="text-[#5E6AD2] font-bold">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommended Use Cases */}
        <div className="rounded-xl border border-white/[0.08] bg-[#090A0F] p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#10B981]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Recommended Product Types</span>
          </div>
          <h4 className="text-lg font-bold text-[#F4F5F8]">
            Best Suited Application Domains
          </h4>
          <ul className="space-y-3">
            {style.philosophy.recommendedUseCases.map((useCase, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-lg border border-white/[0.04] bg-[#050506] text-xs text-[#F4F5F8]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Geometry, Shadows, and Spacing Tokens Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Border Radius */}
        <div className="rounded-xl border border-white/[0.08] bg-[#090A0F] p-6 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#5E6AD2] flex items-center gap-2">
            <Box className="w-4 h-4" />
            <span>Corner Geometry</span>
          </h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-[#8C92A4]">Radius SM</span>
              <span className="font-mono text-[#F4F5F8]">{style.shapesEffects.borderRadius.sm}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-[#8C92A4]">Radius MD (Default)</span>
              <span className="font-mono text-[#F4F5F8]">{style.shapesEffects.borderRadius.md}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-[#8C92A4]">Radius LG</span>
              <span className="font-mono text-[#F4F5F8]">{style.shapesEffects.borderRadius.lg}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#8C92A4]">Border Thickness</span>
              <span className="font-mono text-[#F4F5F8]">{style.shapesEffects.borderThickness.thin}</span>
            </div>
          </div>
        </div>

        {/* Shadows & Elevation */}
        <div className="rounded-xl border border-white/[0.08] bg-[#090A0F] p-6 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#5E6AD2] flex items-center gap-2">
            <Sliders className="w-4 h-4" />
            <span>Shadows & Elevation</span>
          </h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-[#8C92A4]">Elevation</span>
              <span className="font-mono text-[#F4F5F8]">{style.shapesEffects.elevation}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-[#8C92A4]">Shadow SM</span>
              <span className="font-mono text-[#F4F5F8] truncate max-w-[140px]" title={style.shapesEffects.shadows.sm}>
                {style.shapesEffects.shadows.sm}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-[#8C92A4]">Shadow MD</span>
              <span className="font-mono text-[#F4F5F8] truncate max-w-[140px]" title={style.shapesEffects.shadows.md}>
                {style.shapesEffects.shadows.md}
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#8C92A4]">Backdrop Blur</span>
              <span className="font-mono text-[#F4F5F8]">{style.shapesEffects.backdropBlur}</span>
            </div>
          </div>
        </div>

        {/* Layout & Grid */}
        <div className="rounded-xl border border-white/[0.08] bg-[#090A0F] p-6 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#5E6AD2] flex items-center gap-2">
            <Maximize2 className="w-4 h-4" />
            <span>Layout & Spatial Grid</span>
          </h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-[#8C92A4]">Max Content Width</span>
              <span className="font-mono text-[#F4F5F8]">{style.layout.maxContentWidth}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-[#8C92A4]">Grid Columns</span>
              <span className="font-mono text-[#F4F5F8]">{style.layout.gridColumns}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-[#8C92A4]">Content Padding</span>
              <span className="font-mono text-[#F4F5F8]">{style.spacing.contentPadding}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#8C92A4]">Transitions</span>
              <span className="font-mono text-[#F4F5F8] truncate max-w-[140px]" title={style.interaction.transitions}>
                {style.interaction.transitions}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

