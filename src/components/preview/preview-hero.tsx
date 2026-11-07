import React from 'react';
import { ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { DesignStyle } from '@/types/style';

interface PreviewHeroProps {
  style: DesignStyle;
}

export function PreviewHero({ style }: PreviewHeroProps) {
  const isLight = style.slug === 'swiss-minimalist';

  return (
    <div
      className="p-6 md:p-10 border-b transition-colors relative overflow-hidden"
      style={{
        backgroundColor: style.colors.background,
        borderColor: style.colors.border,
        color: style.colors.foreground,
      }}
    >
      {/* Background ambient lighting for modern dark */}
      {style.shapesEffects.gradients?.glow && (
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{ background: style.shapesEffects.gradients.glow }}
        />
      )}

      <div className="relative z-10 max-w-3xl space-y-5">
        {/* Style Badge */}
        <div className="inline-flex items-center gap-2">
          <span
            style={{
              padding: style.componentRules.badge.padding,
              borderRadius: style.componentRules.badge.borderRadius,
              fontSize: style.componentRules.badge.fontSize,
              fontWeight: style.componentRules.badge.fontWeight,
              border: style.componentRules.badge.border,
              backgroundColor: isLight ? style.colors.surfaceElevated : 'rgba(94, 106, 210, 0.12)',
              color: isLight ? style.colors.accent : style.colors.accentForeground,
            }}
          >
            {isLight ? 'DIE NEUE GRAPHIK — 01' : 'ENGINEERED RELEASE v2.4'}
          </span>
        </div>

        {/* Hero Title */}
        <h1
          className="font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl leading-tight"
          style={{
            fontFamily: style.typography.headingFont,
            letterSpacing: style.typography.letterSpacing.tight,
            color: style.colors.foreground,
          }}
        >
          {isLight
            ? 'Typographic order. Systematic clarity.'
            : 'Deploy autonomous intelligence with surgical reliability.'}
        </h1>

        {/* Hero Description */}
        <p
          className="text-sm md:text-base leading-relaxed max-w-2xl"
          style={{
            fontFamily: style.typography.bodyFont,
            color: style.colors.mutedForeground,
          }}
        >
          {isLight
            ? 'Structured layouts governed by strict modular baseline grids. Uncompromised communication through disciplined visual hierarchy and intentional negative space.'
            : 'Next-generation cloud control plane providing real-time telemetry, automated zero-downtime rollouts, and multi-region edge mesh routing.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Primary Button */}
          <button
            type="button"
            className="inline-flex items-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
            style={{
              padding: style.componentRules.button.padding,
              borderRadius: style.componentRules.button.borderRadius,
              border: style.componentRules.button.border,
              backgroundColor: style.colors.primary,
              color: style.colors.primaryForeground,
              fontWeight: style.componentRules.button.fontWeight,
              boxShadow: style.componentRules.button.shadow,
              fontFamily: style.typography.headingFont,
              fontSize: style.typography.fontSizes.sm,
            }}
          >
            <span>{isLight ? 'View Specimen' : 'Start Deploying'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary Button */}
          <button
            type="button"
            className="inline-flex items-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
            style={{
              padding: style.componentRules.button.padding,
              borderRadius: style.componentRules.button.borderRadius,
              border: `1px solid ${style.colors.border}`,
              backgroundColor: style.colors.surface,
              color: style.colors.foreground,
              fontWeight: style.componentRules.button.fontWeight,
              fontFamily: style.typography.headingFont,
              fontSize: style.typography.fontSizes.sm,
            }}
          >
            {isLight ? (
              <span>Documentation</span>
            ) : (
              <>
                <Terminal className="w-4 h-4 text-[#5E6AD2]" />
                <span>Documentation</span>
              </>
            )}
          </button>
        </div>

        {/* Feature Checkpoints */}
        <div className="flex flex-wrap items-center gap-6 pt-3 text-xs" style={{ color: style.colors.mutedForeground }}>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" style={{ color: style.colors.success }} />
            <span>99.99% Guaranteed SLA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" style={{ color: style.colors.success }} />
            <span>SOC2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" style={{ color: style.colors.success }} />
            <span>Sub-10ms Global Latency</span>
          </div>
        </div>
      </div>
    </div>
  );
}

