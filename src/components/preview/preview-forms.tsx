'use client';

import React, { useState } from 'react';
import { Check, ChevronDown, Send } from 'lucide-react';
import { DesignStyle } from '@/types/style';

interface PreviewFormsProps {
  style: DesignStyle;
}

export function PreviewForms({ style }: PreviewFormsProps) {
  const [agreed, setAgreed] = useState(true);
  const [env, setEnv] = useState('production');
  const isLight = style.slug === 'swiss-minimalist';

  return (
    <div
      className="p-6 md:p-8 transition-colors"
      style={{
        backgroundColor: style.colors.background,
        color: style.colors.foreground,
      }}
    >
      <div className="mb-4">
        <h3
          className="text-xs font-semibold uppercase tracking-wider"
          style={{
            fontFamily: style.typography.headingFont,
            color: style.colors.mutedForeground,
          }}
        >
          {isLight ? '03 / Data Entry & Controls' : 'Configuration & Environment Controls'}
        </h3>
      </div>

      <div
        className="max-w-2xl border p-6"
        style={{
          borderRadius: style.componentRules.card.borderRadius,
          border: style.componentRules.card.border,
          backgroundColor: style.componentRules.card.background,
          boxShadow: style.componentRules.card.shadow,
        }}
      >
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Input 1 */}
            <div className="space-y-1.5">
              <label
                className="block text-xs font-medium"
                style={{
                  color: style.colors.foreground,
                  fontFamily: style.typography.headingFont,
                }}
              >
                {isLight ? 'Publication Identifier' : 'Cluster Service Name'}
              </label>
              <input
                type="text"
                defaultValue={isLight ? 'GRAPHIK-SPEC-2026' : 'stypro-api-edge'}
                className="w-full text-xs outline-none transition-all"
                style={{
                  padding: style.componentRules.input.padding,
                  borderRadius: style.componentRules.input.borderRadius,
                  border: style.componentRules.input.border,
                  backgroundColor: style.componentRules.input.background,
                  color: style.colors.foreground,
                  fontFamily: style.typography.monospaceFont,
                }}
              />
            </div>

            {/* Input 2 / Select */}
            <div className="space-y-1.5">
              <label
                className="block text-xs font-medium"
                style={{
                  color: style.colors.foreground,
                  fontFamily: style.typography.headingFont,
                }}
              >
                {isLight ? 'Grid Resolution' : 'Target Region'}
              </label>
              <div className="relative">
                <select
                  value={env}
                  onChange={(e) => setEnv(e.target.value)}
                  className="w-full text-xs outline-none appearance-none pr-8 cursor-pointer"
                  style={{
                    padding: style.componentRules.input.padding,
                    borderRadius: style.componentRules.input.borderRadius,
                    border: style.componentRules.input.border,
                    backgroundColor: style.componentRules.input.background,
                    color: style.colors.foreground,
                    fontFamily: style.typography.bodyFont,
                  }}
                >
                  <option value="production">
                    {isLight ? '12-Column Baseline' : 'US-East (Virginia) — Production'}
                  </option>
                  <option value="staging">
                    {isLight ? '16-Column Fluid' : 'EU-Central (Frankfurt) — Staging'}
                  </option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
              </div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2.5 pt-1">
            <button
              type="button"
              role="checkbox"
              aria-checked={agreed}
              onClick={() => setAgreed(!agreed)}
              className="w-4 h-4 flex items-center justify-center transition-colors cursor-pointer"
              style={{
                borderRadius: style.shapesEffects.borderRadius.sm,
                border: `1px solid ${agreed ? style.colors.primary : style.colors.border}`,
                backgroundColor: agreed ? style.colors.primary : style.colors.surface,
                color: style.colors.primaryForeground,
              }}
            >
              {agreed && <Check className="w-3 h-3 stroke-[3]" />}
            </button>
            <span
              className="text-xs cursor-pointer select-none"
              onClick={() => setAgreed(!agreed)}
              style={{ color: style.colors.mutedForeground }}
            >
              {isLight
                ? 'Strict adherence to international layout proportions'
                : 'Enable automatic blue-green traffic cutover upon healthcheck'}
            </span>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: style.colors.borderSubtle }}>
            <span
              className="text-[11px] font-mono"
              style={{ color: style.colors.mutedForeground }}
            >
              Status: Ready
            </span>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 cursor-pointer transition-all active:scale-[0.98]"
              style={{
                padding: '0.5rem 1rem',
                borderRadius: style.componentRules.button.borderRadius,
                border: style.componentRules.button.border,
                backgroundColor: style.colors.primary,
                color: style.colors.primaryForeground,
                fontWeight: style.componentRules.button.fontWeight,
                fontSize: '0.8rem',
              }}
            >
              <span>{isLight ? 'Apply Layout Spec' : 'Save Changes'}</span>
              <Send className="w-3 h-3" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

