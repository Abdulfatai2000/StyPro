'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { DesignStyle } from '@/types/style';
import { formatColor } from '@/lib/style-utils';

interface StylePaletteProps {
  style: DesignStyle;
}

export function StylePalette({ style }: StylePaletteProps) {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (tokenName: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const tokenGroups = [
    {
      group: 'Base Surfaces & Canvas',
      tokens: [
        { name: 'background', label: 'Background', value: style.colors.background },
        { name: 'surface', label: 'Surface', value: style.colors.surface },
        { name: 'surfaceElevated', label: 'Surface Elevated', value: style.colors.surfaceElevated },
        { name: 'foreground', label: 'Foreground (Text)', value: style.colors.foreground },
      ],
    },
    {
      group: 'Primary Brand & Accents',
      tokens: [
        { name: 'primary', label: 'Primary', value: style.colors.primary },
        { name: 'primaryHover', label: 'Primary Hover', value: style.colors.primaryHover },
        { name: 'secondary', label: 'Secondary', value: style.colors.secondary },
        { name: 'accent', label: 'Accent Highlight', value: style.colors.accent },
      ],
    },
    {
      group: 'Borders & Structure',
      tokens: [
        { name: 'border', label: 'Border Default', value: style.colors.border },
        { name: 'borderSubtle', label: 'Border Subtle', value: style.colors.borderSubtle },
        { name: 'borderStrong', label: 'Border Strong', value: style.colors.borderStrong },
        { name: 'ring', label: 'Focus Ring', value: style.colors.ring },
      ],
    },
    {
      group: 'Semantic Status',
      tokens: [
        { name: 'success', label: 'Success', value: style.colors.success },
        { name: 'warning', label: 'Warning', value: style.colors.warning },
        { name: 'destructive', label: 'Destructive', value: style.colors.destructive },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#F4F5F8]">Semantic Colour Tokens</h3>
          <p className="text-xs text-[#8C92A4]">
            Click any color token to copy its value to clipboard
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tokenGroups.map((group, gIdx) => (
          <div
            key={gIdx}
            className="rounded-xl border border-white/[0.08] bg-[#090A0F] p-5 space-y-4"
          >
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5E6AD2] font-mono">
              {group.group}
            </h4>

            <div className="space-y-3">
              {group.tokens.map((token) => {
                const isCopied = copiedToken === token.name;
                return (
                  <button
                    key={token.name}
                    type="button"
                    onClick={() => copyToClipboard(token.name, token.value)}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg border border-white/[0.04] bg-[#050506] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {/* Color Preview Block */}
                      <div
                        className="w-7 h-7 rounded border border-white/[0.15] shadow-sm shrink-0"
                        style={{ backgroundColor: token.value }}
                      />
                      <div className="truncate">
                        <span className="block text-xs font-medium text-[#F4F5F8]">
                          {token.label}
                        </span>
                        <span className="block text-[11px] font-mono text-[#8C92A4]">
                          {formatColor(token.value)}
                        </span>
                      </div>
                    </div>

                    <div className="text-[#8C92A4] group-hover:text-[#F4F5F8] transition-colors pl-2">
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

