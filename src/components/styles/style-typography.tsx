import React from 'react';
import { Type } from 'lucide-react';
import { DesignStyle } from '@/types/style';

interface StyleTypographyProps {
  style: DesignStyle;
}

export function StyleTypography({ style }: StyleTypographyProps) {
  const fontFamilies = [
    { label: 'Display & Heading', value: style.typography.headingFont },
    { label: 'Body & Paragraph', value: style.typography.bodyFont },
    { label: 'Monospace & Telemetry', value: style.typography.monospaceFont },
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#F4F5F8]">Typography System</h3>
          <p className="text-xs text-[#8C92A4]">
            Modular scale, weight hierarchy, and font stacks
          </p>
        </div>
      </div>

      {/* Font Family Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fontFamilies.map((font, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/[0.08] bg-[#090A0F] p-4 space-y-1.5"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-[#5E6AD2]">
              <Type className="w-3.5 h-3.5" />
              <span>{font.label}</span>
            </div>
            <p className="text-xs font-mono text-[#F4F5F8] truncate" title={font.value}>
              {font.value}
            </p>
          </div>
        ))}
      </div>

      {/* Typography Specimen Ladder */}
      <div className="rounded-xl border border-white/[0.08] bg-[#090A0F] p-6 space-y-6 divide-y divide-white/[0.06]">
        {specimens.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row md:items-baseline justify-between gap-4 ${
              idx > 0 ? 'pt-6' : ''
            }`}
          >
            <div className="w-36 shrink-0">
              <span className="block text-xs font-mono text-[#5E6AD2]">{item.level}</span>
              <span className="block text-[11px] font-mono text-[#8C92A4]">
                {item.size} / w{item.weight}
              </span>
            </div>

            <div className="flex-1">
              <p
                style={{
                  fontSize: item.size,
                  fontWeight: item.weight,
                  fontFamily: item.isMono ? style.typography.monospaceFont : style.typography.headingFont,
                  letterSpacing: style.typography.letterSpacing.tight,
                  color: '#F4F5F8',
                }}
                className="leading-snug"
              >
                {item.sample}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

