import React from 'react';
import { Cpu, ShieldCheck, Zap } from 'lucide-react';
import { DesignStyle } from '@/types/style';

interface PreviewCardsProps {
  style: DesignStyle;
}

export function PreviewCards({ style }: PreviewCardsProps) {
  const isLight = style.slug === 'swiss-minimalist';

  const metrics = [
    {
      title: isLight ? 'Grid Ratio' : 'Edge Invocations',
      value: isLight ? '1 : 1.618' : '48.2M',
      change: isLight ? 'Golden Section' : '+18.4%',
      detail: isLight ? 'Modular baseline scale' : 'Past 24 hours',
      icon: Zap,
    },
    {
      title: isLight ? 'Type Weight' : 'Compute Latency',
      value: isLight ? '700 Semi' : '4.2ms',
      change: isLight ? '900 Display' : '-12.0%',
      detail: isLight ? 'Helvetica Neue specimen' : 'p99 global average',
      icon: Cpu,
    },
    {
      title: isLight ? 'Ink Contrast' : 'Cluster Health',
      value: isLight ? '18.4 : 1' : '99.98%',
      change: isLight ? 'WCAG AAA' : 'Active',
      detail: isLight ? 'Pure neutral canvas' : '36 nodes synchronized',
      icon: ShieldCheck,
    },
  ];

  return (
    <div
      className="p-6 md:p-8 border-b transition-colors"
      style={{
        backgroundColor: style.colors.background,
        borderColor: style.colors.border,
      }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-wider"
            style={{
              fontFamily: style.typography.headingFont,
              color: style.colors.mutedForeground,
            }}
          >
            {isLight ? '02 / Systematic Measurements' : 'System Telemetry & Workloads'}
          </h3>
        </div>
        <span
          className="text-xs font-mono"
          style={{ color: style.colors.mutedForeground }}
        >
          {isLight ? 'REF: SW-480' : 'LIVE FEED'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="transition-all hover:translate-y-[-1px]"
              style={{
                padding: style.componentRules.card.padding,
                borderRadius: style.componentRules.card.borderRadius,
                border: style.componentRules.card.border,
                backgroundColor: style.componentRules.card.background,
                boxShadow: style.componentRules.card.shadow,
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className="text-xs font-medium"
                  style={{
                    color: style.colors.mutedForeground,
                    fontFamily: style.typography.headingFont,
                  }}
                >
                  {item.title}
                </span>
                <div
                  className="p-1.5 border"
                  style={{
                    borderColor: style.colors.borderSubtle,
                    backgroundColor: style.colors.surfaceElevated,
                    borderRadius: style.shapesEffects.borderRadius.sm,
                    color: isLight ? style.colors.accent : style.colors.primary,
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="flex items-baseline justify-between">
                <span
                  className="text-2xl font-bold tracking-tight"
                  style={{
                    color: style.colors.foreground,
                    fontFamily: style.typography.headingFont,
                    letterSpacing: style.typography.letterSpacing.tight,
                  }}
                >
                  {item.value}
                </span>
                <span
                  className="text-xs font-semibold px-1.5 py-0.5"
                  style={{
                    backgroundColor: isLight ? style.colors.surfaceElevated : 'rgba(16, 185, 129, 0.12)',
                    color: isLight ? style.colors.foreground : style.colors.success,
                    borderRadius: style.shapesEffects.borderRadius.sm,
                  }}
                >
                  {item.change}
                </span>
              </div>

              <p
                className="mt-2 text-xs"
                style={{ color: style.colors.mutedForeground }}
              >
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

