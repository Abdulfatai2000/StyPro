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
    <div className="space-y-6">
      {/* Customization Status Card */}
      <div className="p-4 rounded-xl border border-white/[0.08] bg-[#090A0F] space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-[#8C92A4]">
            Customization State
          </span>
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
              isCustomized
                ? 'border-[#5E6AD2]/40 bg-[#5E6AD2]/10 text-[#5E6AD2]'
                : 'border-white/[0.08] bg-white/[0.02] text-[#8C92A4]'
            }`}
          >
            {isCustomized ? `${overrideCount} Active Override${overrideCount === 1 ? '' : 's'}` : 'Original Presets'}
          </span>
        </div>

        <p className="text-xs text-[#8C92A4] leading-relaxed">
          {isCustomized
            ? 'Modifications are merged into the live preview canvas and stored in your browser session.'
            : 'Using canonical design system tokens. Customize colors, fonts, or geometry on the left.'}
        </p>

        {isCustomized && modifiedColors.length > 0 && (
          <div className="pt-2 border-t border-white/[0.06] space-y-2">
            <span className="text-[11px] font-mono text-[#F4F5F8] block">
              Modified Tokens Diff:
            </span>
            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {modifiedColors.map((item) => (
                <div
                  key={item.token}
                  className="flex items-center justify-between text-[11px] font-mono p-1.5 rounded bg-[#050506] border border-white/[0.04]"
                >
                  <span className="text-[#9BA1B0] truncate max-w-[90px]">{item.token}</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="line-through text-[#636A7E]">{item.original}</span>
                    <span className="text-[#5E6AD2] font-semibold">{item.custom}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Prompt CTA Card */}
      <div className="p-4 rounded-xl border border-[#5E6AD2]/30 bg-[#5E6AD2]/5 space-y-3 shadow-[0_0_20px_rgba(94,106,210,0.08)]">
        <div className="flex items-center gap-2 text-xs font-mono text-[#5E6AD2]">
          <Terminal className="w-4 h-4" />
          <span>Ready to Build?</span>
        </div>
        <h4 className="text-sm font-bold text-[#F4F5F8]">
          Generate AI Coding Prompt
        </h4>
        <p className="text-xs text-[#8C92A4] leading-relaxed">
          Transform your customized tokens into an implementation prompt for Antigravity, Cursor, or Claude Code.
        </p>
        <button
          type="button"
          onClick={onOpenPrompt}
          className="w-full py-2 px-3 rounded-lg bg-[#5E6AD2] hover:bg-[#6E79D8] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
        >
          <span>Generate Design Prompt</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Style Design Philosophy Card */}
      <div className="p-4 rounded-xl border border-white/[0.08] bg-[#090A0F] space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9BA1B0]">
          <Sparkles className="w-3.5 h-3.5 text-[#5E6AD2]" />
          <span>Design Guidance</span>
        </div>
        <h4 className="text-xs font-bold text-[#F4F5F8]">
          {baseStyle.philosophy.direction}
        </h4>
        <p className="text-xs text-[#8C92A4] leading-relaxed">
          {baseStyle.philosophy.intendedAtmosphere}
        </p>
        <div className="pt-2 border-t border-white/[0.06] space-y-1.5">
          <span className="text-[11px] font-semibold text-[#F4F5F8] block">
            Best Suited For:
          </span>
          {baseStyle.philosophy.recommendedUseCases.slice(0, 3).map((useCase, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#8C92A4]">
              <CheckCircle2 className="w-3 h-3 text-[#10B981] shrink-0" />
              <span>{useCase}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

