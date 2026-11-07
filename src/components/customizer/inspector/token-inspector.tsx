'use client';

import React from 'react';
import { Sparkles, CheckCircle2, Terminal, ArrowRight } from 'lucide-react';
import { DesignStyle } from '@/types/style';
import { CustomizationOverrides } from '@/types/customizer';
import { getOverrideCount } from '@/lib/customizer/resolver';

interface TokenInspectorProps {
  baseStyle: DesignStyle;
  overrides: CustomizationOverrides;
  onOpenPrompt: () => void;
}

export function TokenInspector({
  baseStyle,
  overrides,
  onOpenPrompt,
}: TokenInspectorProps) {
  const overrideCount = getOverrideCount(overrides);
  const isCustomized = overrideCount > 0;

  // Compute modified color items
  const modifiedColors = Object.entries(overrides.colors || {}).map(([key, newVal]) => ({
    token: key,
    original: baseStyle.colors[key as keyof typeof baseStyle.colors],
    custom: newVal,
  }));

  return (
    <div className="space-y-5 font-sans">
      {/* Customization Status Card */}
      <div className="software-card p-4 space-y-3 bg-white">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#454c58]">
            Customization State
          </span>
          <span
            className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${
              isCustomized
                ? 'border-[#074ce0]/20 bg-[#074ce0]/10 text-[#074ce0]'
                : 'border-[#dde0e6] bg-[#f3f4f6] text-[#454c58]'
            }`}
          >
            {isCustomized ? `${overrideCount} Active Override${overrideCount === 1 ? '' : 's'}` : 'Original Presets'}
          </span>
        </div>

        <p className="text-xs text-[#454c58] leading-relaxed">
          {isCustomized
            ? 'Modifications are merged into the live preview canvas and stored in your browser session.'
            : 'Using canonical design system tokens. Customize colors, fonts, or geometry on the left.'}
        </p>

        {isCustomized && modifiedColors.length > 0 && (
          <div className="pt-2 border-t border-[#dde0e6] space-y-2">
            <span className="text-xs font-semibold text-[#16191f] block">
              Modified Tokens Diff:
            </span>
            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {modifiedColors.map((item) => (
                <div
                  key={item.token}
                  className="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-[#f3f4f6] border border-[#dde0e6]"
                >
                  <span className="text-[#16191f] font-medium truncate max-w-[90px]">{item.token}</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="line-through text-[#454c58]">{item.original}</span>
                    <span className="text-[#074ce0] font-semibold">{item.custom}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Prompt CTA Card */}
      <div className="software-card p-5 space-y-3 bg-white border border-[#074ce0]/20 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#074ce0]">
          <Terminal className="w-4 h-4" />
          <span>Ready to Build?</span>
        </div>
        <h4 className="text-sm font-bold text-[#16191f] font-display">
          Generate AI Coding Prompt
        </h4>
        <p className="text-xs text-[#454c58] leading-relaxed">
          Transform your customized tokens into an implementation prompt for Antigravity, Cursor, or Claude Code.
        </p>
        <button
          type="button"
          onClick={onOpenPrompt}
          className="btn-primary w-full text-xs !py-2 justify-center"
        >
          <span>Generate Design Prompt</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Style Design Philosophy Card */}
      <div className="software-card p-4 space-y-3 bg-white">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#074ce0]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Design Guidance</span>
        </div>
        <h4 className="text-xs font-bold text-[#16191f]">
          {baseStyle.philosophy.direction}
        </h4>
        <p className="text-xs text-[#454c58] leading-relaxed">
          {baseStyle.philosophy.intendedAtmosphere}
        </p>
        <div className="pt-2 border-t border-[#dde0e6] space-y-1.5">
          <span className="text-xs font-semibold text-[#16191f] block">
            Best Suited For:
          </span>
          {baseStyle.philosophy.recommendedUseCases.slice(0, 3).map((useCase, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-xs text-[#454c58]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{useCase}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
