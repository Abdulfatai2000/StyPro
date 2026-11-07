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
      <div className="linear-card p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#9499ad]">
            Customization State
          </span>
          <span
            className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${
              isCustomized
                ? 'border-[#5e6ad2]/30 bg-[#5e6ad2]/15 text-[#818cf8]'
                : 'border-white/[0.08] bg-white/[0.04] text-[#9499ad]'
            }`}
          >
            {isCustomized ? `${overrideCount} Active Override${overrideCount === 1 ? '' : 's'}` : 'Original Presets'}
          </span>
        </div>

        <p className="text-xs text-[#9499ad] leading-relaxed">
          {isCustomized
            ? 'Modifications are merged into the live preview canvas and stored in your browser session.'
            : 'Using canonical design system tokens. Customize colors, fonts, or geometry on the left.'}
        </p>

        {isCustomized && modifiedColors.length > 0 && (
          <div className="pt-2 border-t border-white/[0.08] space-y-2">
            <span className="text-xs font-semibold text-white block">
              Modified Tokens Diff:
            </span>
            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {modifiedColors.map((item) => (
                <div
                  key={item.token}
                  className="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                >
                  <span className="text-white font-medium truncate max-w-[90px]">{item.token}</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="line-through text-[#9499ad]">{item.original}</span>
                    <span className="text-[#818cf8] font-semibold">{item.custom}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Prompt CTA Card */}
      <div className="p-5 rounded-xl border border-[#5e6ad2]/30 bg-[#5e6ad2]/10 space-y-3 shadow-[0_0_24px_rgba(94,106,210,0.15)]">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#818cf8]">
          <Terminal className="w-4 h-4" />
          <span>Ready to Build?</span>
        </div>
        <h4 className="text-sm font-bold text-white font-display">
          Generate AI Coding Prompt
        </h4>
        <p className="text-xs text-[#9499ad] leading-relaxed">
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
      <div className="linear-card p-4 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#818cf8]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Design Guidance</span>
        </div>
        <h4 className="text-xs font-bold text-white">
          {baseStyle.philosophy.direction}
        </h4>
        <p className="text-xs text-[#9499ad] leading-relaxed">
          {baseStyle.philosophy.intendedAtmosphere}
        </p>
        <div className="pt-2 border-t border-white/[0.08] space-y-1.5">
          <span className="text-xs font-semibold text-white block">
            Best Suited For:
          </span>
          {baseStyle.philosophy.recommendedUseCases.slice(0, 3).map((useCase, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-xs text-[#9499ad]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{useCase}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
