import React from 'react';
import { Type } from 'lucide-react';
import { DesignStyle } from '@/types/style';

interface StyleTypographyProps {
  style: DesignStyle;
}

export function StyleTypography({ style }: StyleTypographyProps) {
  const fontFamilies = [
    { label: 'Display & Heading Font', value: style.typography.headingFont },
    { label: 'Body & Paragraph Font', value: style.typography.bodyFont },
    { label: 'Monospace & Code Font', value: style.typography.monospaceFont },
  ];

  const specimens = [
    {
      level: 'Display 4XL',
      size: style.typography.fontSizes['4xl'],
      weight: style.typography.fontWeights.bold,
      sample: 'System Architecture',
    },
    {
      level: 'Heading 2XL',
      size: style.typography.fontSizes['2xl'],
      weight: style.typography.fontWeights.semibold,
      sample: 'High-Density Control Planes',
    },
    {
      level: 'Heading LG',
      size: style.typography.fontSizes.lg,
      weight: style.typography.fontWeights.medium,
      sample: 'Continuous Telemetry & Distributed States',
    },
    {
      level: 'Body Regular',
      size: style.typography.fontSizes.base,
      weight: style.typography.fontWeights.regular,
      sample:
        'Engineered visual systems eliminate cognitive load through disciplined vertical cadence and deliberate contrast boundaries.',
    },
    {
      level: 'Mono Caption',
      size: style.typography.fontSizes.xs,
      weight: style.typography.fontWeights.regular,
      isMono: true,
      sample: 'const cluster = await stypro.connect({ mode: "strict" });',
    },
  ];

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div>
          <h3 className="text-xl font-bold text-white font-display">Typography Hierarchy</h3>
          <p className="text-sm text-[#9499ad] mt-0.5">
            Modular scale, weight hierarchy, and font stacks
          </p>
        </div>
      </div>

      {/* Font Family Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fontFamilies.map((font, idx) => (
          <div
            key={idx}
            className="linear-card p-5 space-y-1.5"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-[#818cf8]">
              <Type className="w-4 h-4" />
              <span>{font.label}</span>
            </div>
            <p className="text-sm font-semibold text-white truncate" title={font.value}>
              {font.value}
            </p>
          </div>
        ))}
      </div>

      {/* Typography Specimen Ladder */}
      <div className="linear-card overflow-hidden divide-y divide-white/[0.08]">
        {specimens.map((spec, sIdx) => (
          <div key={sIdx} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="md:w-48 shrink-0 space-y-0.5">
              <span className="text-xs font-bold text-[#818cf8] uppercase tracking-wide">
                {spec.level}
              </span>
              <div className="text-xs text-[#9499ad]">
                {spec.size} · weight {spec.weight}
              </div>
            </div>

            <div
              className="flex-1 overflow-hidden"
              style={{
                fontFamily: spec.isMono ? style.typography.monospaceFont : style.typography.headingFont,
                fontSize: spec.size,
                fontWeight: spec.weight,
                color: '#ffffff',
              }}
            >
              <div className="truncate">{spec.sample}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
