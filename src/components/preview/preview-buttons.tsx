import React from 'react';
import { ArrowRight, Flame, Trash2 } from 'lucide-react';
import { DesignStyle } from '@/types/style';

interface PreviewButtonsProps {
  style: DesignStyle;
}

export function PreviewButtons({ style }: PreviewButtonsProps) {
  const isLight = style.slug === 'swiss-minimalist';

  return (
    <div
      className="p-6 md:p-8 space-y-8"
      style={{
        backgroundColor: style.colors.background,
        color: style.colors.foreground,
      }}
    >
      {/* Buttons Showcase */}
      <div>
        <h4
          className="text-xs font-semibold uppercase tracking-wider mb-4"
          style={{
            fontFamily: style.typography.headingFont,
            color: style.colors.mutedForeground,
          }}
        >
          Button Hierarchy & Interaction States
        </h4>
        <div className="flex flex-wrap items-center gap-3">
          {/* Primary */}
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
              fontSize: '0.875rem',
            }}
          >
            <span>Primary Action</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary */}
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
              fontSize: '0.875rem',
            }}
          >
            <span>Secondary Action</span>
          </button>

          {/* Subtle Accent / Tertiary */}
          <button
            type="button"
            className="inline-flex items-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
            style={{
              padding: style.componentRules.button.padding,
              borderRadius: style.componentRules.button.borderRadius,
              border: isLight ? `1px solid ${style.colors.accent}` : `1px solid rgba(94, 106, 210, 0.3)`,
              backgroundColor: isLight ? 'transparent' : 'rgba(94, 106, 210, 0.1)',
              color: isLight ? style.colors.accent : style.colors.accentForeground,
              fontWeight: style.componentRules.button.fontWeight,
              fontSize: '0.875rem',
            }}
          >
            <Flame className="w-4 h-4" />
            <span>Accent Highlight</span>
          </button>

          {/* Destructive */}
          <button
            type="button"
            className="inline-flex items-center gap-1.5 cursor-pointer transition-all active:scale-[0.98]"
            style={{
              padding: style.componentRules.button.padding,
              borderRadius: style.componentRules.button.borderRadius,
              border: `1px solid ${style.colors.destructive}`,
              backgroundColor: isLight ? 'transparent' : 'rgba(239, 68, 68, 0.1)',
              color: style.colors.destructive,
              fontWeight: style.componentRules.button.fontWeight,
              fontSize: '0.875rem',
            }}
          >
            <Trash2 className="w-4 h-4" />
            <span>Destructive</span>
          </button>
        </div>
      </div>

      {/* Badges & Tags */}
      <div>
        <h4
          className="text-xs font-semibold uppercase tracking-wider mb-4"
          style={{
            fontFamily: style.typography.headingFont,
            color: style.colors.mutedForeground,
          }}
        >
          Badges, Tags & Semantic Chips
        </h4>
        <div className="flex flex-wrap items-center gap-2.5">
          <span
            style={{
              padding: style.componentRules.badge.padding,
              borderRadius: style.componentRules.badge.borderRadius,
              border: style.componentRules.badge.border,
              fontSize: style.componentRules.badge.fontSize,
              fontWeight: style.componentRules.badge.fontWeight,
              backgroundColor: isLight ? '#0D0D11' : '#5E6AD2',
              color: '#FFFFFF',
            }}
          >
            Default Brand
          </span>
          <span
            style={{
              padding: style.componentRules.badge.padding,
              borderRadius: style.componentRules.badge.borderRadius,
              border: `1px solid ${style.colors.border}`,
              fontSize: style.componentRules.badge.fontSize,
              fontWeight: style.componentRules.badge.fontWeight,
              backgroundColor: style.colors.surface,
              color: style.colors.foreground,
            }}
          >
            Neutral Surface
          </span>
          <span
            style={{
              padding: style.componentRules.badge.padding,
              borderRadius: style.componentRules.badge.borderRadius,
              border: `1px solid ${style.colors.success}`,
              fontSize: style.componentRules.badge.fontSize,
              fontWeight: style.componentRules.badge.fontWeight,
              backgroundColor: isLight ? 'transparent' : 'rgba(16, 185, 129, 0.12)',
              color: style.colors.success,
            }}
          >
            ● Operational (99.9%)
          </span>
          <span
            style={{
              padding: style.componentRules.badge.padding,
              borderRadius: style.componentRules.badge.borderRadius,
              border: `1px solid ${style.colors.warning}`,
              fontSize: style.componentRules.badge.fontSize,
              fontWeight: style.componentRules.badge.fontWeight,
              backgroundColor: isLight ? 'transparent' : 'rgba(245, 158, 11, 0.12)',
              color: style.colors.warning,
            }}
          >
            ▲ Maintenance Warning
          </span>
        </div>
      </div>
    </div>
  );
}

