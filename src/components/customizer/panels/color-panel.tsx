'use client';

import React, { useState } from 'react';
import { RotateCcw, AlertCircle } from 'lucide-react';
import { StyleColors } from '@/types/style';
import { ColorOverrides } from '@/types/customizer';
import { isValidHex, normalizeHex } from '@/lib/customizer/color-utils';

interface ColorPanelProps {
  baseColors: StyleColors;
  colorOverrides: ColorOverrides;
  onColorChange: (token: keyof StyleColors, value: string) => void;
  onResetCategory: () => void;
  isDirty: boolean;
}

export function ColorPanel({
  baseColors,
  colorOverrides,
  onColorChange,
  onResetCategory,
  isDirty,
}: ColorPanelProps) {
  // Temporary input state for manual typing before committing
  const [inputValues, setInputValues] = useState<Record<string, string>>({});

  const tokenGroups: {
    group: string;
    description: string;
    tokens: (keyof StyleColors)[];
  }[] = [
    {
      group: 'Base Canvas & Surfaces',
      description: 'Foundational layers and primary text contrast',
      tokens: ['background', 'surface', 'surfaceElevated', 'foreground'],
    },
    {
      group: 'Brand Actions & Accents',
      description: 'Primary interaction points and focal emphasis',
      tokens: ['primary', 'primaryHover', 'primaryForeground', 'secondary', 'accent'],
    },
    {
      group: 'Borders & Dividers',
      description: 'Structural card outlines, focus rings, and dividers',
      tokens: ['border', 'borderSubtle', 'borderStrong', 'ring'],
    },
    {
      group: 'Semantic Status',
      description: 'Feedback alerts, health states, and badges',
      tokens: ['success', 'warning', 'destructive'],
    },
  ];

  const handleTextChange = (token: keyof StyleColors, rawValue: string) => {
    setInputValues((prev) => ({ ...prev, [token]: rawValue }));

    const normalized = normalizeHex(rawValue);
    if (isValidHex(normalized)) {
      onColorChange(token, normalized);
    }
  };

  const handleColorPickerChange = (token: keyof StyleColors, hex: string) => {
    setInputValues((prev) => ({ ...prev, [token]: hex.toUpperCase() }));
    onColorChange(token, hex.toUpperCase());
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Category Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div>
          <h3 className="text-base font-bold text-white font-display">Semantic Color Palette</h3>
          <p className="text-xs text-[#9499ad] mt-0.5">
            Fine-tune hex colors. Changes immediately reflect in the preview.
          </p>
        </div>
        {isDirty && (
          <button
            type="button"
            onClick={onResetCategory}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#818cf8] hover:text-white bg-[#5e6ad2]/15 hover:bg-[#5e6ad2] rounded-md border border-[#5e6ad2]/30 transition-colors cursor-pointer"
            title="Reset colors to style defaults"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Colors</span>
          </button>
        )}
      </div>

      {/* Groups */}
      <div className="space-y-6">
        {tokenGroups.map((group, idx) => (
          <div key={idx} className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#818cf8]">
              {group.group}
            </h4>

            <div className="space-y-2">
              {group.tokens.map((token) => {
                const currentValue = colorOverrides[token] || baseColors[token];
                const isOverridden = Boolean(colorOverrides[token]);
                const displayInput = inputValues[token] ?? currentValue;
                const isInvalid = !isValidHex(normalizeHex(displayInput)) && !displayInput.startsWith('rgba');

                // Color picker needs standard 6-digit hex
                const pickerValue = currentValue.startsWith('#') && currentValue.length >= 7
                  ? currentValue.substring(0, 7)
                  : '#5e6ad2';

                return (
                  <div
                    key={token}
                    className={`flex items-center justify-between p-2.5 rounded-lg border transition-all ${
                      isOverridden
                        ? 'border-[#5e6ad2]/40 bg-[#5e6ad2]/10'
                        : 'border-white/[0.08] bg-white/[0.03]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Native Color Picker wrapper */}
                      <label className="relative w-8 h-8 rounded-md border border-white/[0.15] overflow-hidden cursor-pointer shadow-xs shrink-0">
                        <input
                          type="color"
                          value={pickerValue}
                          onChange={(e) => handleColorPickerChange(token, e.target.value)}
                          className="absolute -top-2 -left-2 w-12 h-12 cursor-pointer opacity-0"
                          aria-label={`Pick color for ${token}`}
                        />
                        <div
                          className="w-full h-full"
                          style={{ backgroundColor: currentValue }}
                        />
                      </label>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-medium text-white font-mono">
                            {token}
                          </span>
                          {isOverridden && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8]" title="Customized" />
                          )}
                        </div>
                        <span className="text-[11px] text-[#9499ad] font-mono">
                          Default: {baseColors[token]}
                        </span>
                      </div>
                    </div>

                    {/* Direct Hex Input */}
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <input
                          type="text"
                          value={displayInput}
                          onChange={(e) => handleTextChange(token, e.target.value)}
                          maxLength={9}
                          className={`w-24 px-2 py-1 text-xs font-mono uppercase rounded-md bg-[#0c0d12] border text-center transition-colors focus:outline-none ${
                            isInvalid
                              ? 'border-red-500 text-red-400'
                              : isOverridden
                              ? 'border-[#5e6ad2] text-[#818cf8] font-semibold'
                              : 'border-white/[0.1] text-white focus:border-[#5e6ad2]'
                          }`}
                        />
                        {isInvalid && (
                          <AlertCircle className="w-3 h-3 text-red-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
