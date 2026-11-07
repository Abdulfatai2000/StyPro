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
      group: 'Surfaces & Canvas',
      tokens: [
        { name: 'background', label: 'Background', value: style.colors.background },
        { name: 'surface', label: 'Surface', value: style.colors.surface },
        { name: 'surfaceElevated', label: 'Surface Elevated', value: style.colors.surfaceElevated },
        { name: 'foreground', label: 'Foreground (Text)', value: style.colors.foreground },
      ],
    },
    {
      group: 'Primary Actions & Accents',
      tokens: [
        { name: 'primary', label: 'Primary', value: style.colors.primary },
        { name: 'primaryHover', label: 'Primary Hover', value: style.colors.primaryHover },
        { name: 'secondary', label: 'Secondary', value: style.colors.secondary },
        { name: 'accent', label: 'Accent Highlight', value: style.colors.accent },
      ],
    },
    {
      group: 'Borders & Rules',
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
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-[#dde0e6]">
        <div>
          <h3 className="text-xl font-bold text-[#16191f] font-display">Semantic Color Tokens</h3>
          <p className="text-sm text-[#454c58] mt-0.5">
            Click any color swatch to copy its raw hex value to your clipboard
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tokenGroups.map((group, gIdx) => (
          <div
            key={gIdx}
            className="software-card p-5 space-y-3.5 bg-white"
          >
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#074ce0]">
              {group.group}
            </h4>

            <div className="space-y-2.5">
              {group.tokens.map((token) => {
                const isCopied = copiedToken === token.name;
                return (
                  <button
                    key={token.name}
                    type="button"
                    onClick={() => copyToClipboard(token.name, token.value)}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg border border-[#dde0e6] bg-[#fcfcfd] hover:bg-[#f3f4f6] hover:border-[#074ce0] transition-colors text-left cursor-pointer group"
                    title={`Copy ${token.name} value`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className="w-5 h-5 rounded border border-black/10 shadow-xs shrink-0"
                        style={{ backgroundColor: token.value }}
                      />
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-[#16191f] truncate">
                          {token.label}
                        </div>
                        <div className="text-[11px] text-[#454c58] font-mono">
                          {formatColor(token.value)}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 text-[#454c58] group-hover:text-[#074ce0] transition-colors">
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
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
