'use client';

import React, { useState } from 'react';
import { Palette, Type, Maximize2, Box, Sliders, LucideIcon } from 'lucide-react';
import { DesignStyle, StyleColors } from '@/types/style';
import {
  CustomizationOverrides,
  CustomizationCategory,
  CustomizerTab,
} from '@/types/customizer';
import {
  getInitialOverrides,
  resolveCustomizedStyle,
  getOverrideCount,
  isCategoryDirty,
} from '@/lib/customizer/resolver';
import {
  loadCustomization,
  saveCustomization,
  clearCustomization,
} from '@/lib/customizer/storage';
import { CustomizerHeader } from './customizer-header';
import { ColorPanel } from './panels/color-panel';
import { TypographyPanel } from './panels/typography-panel';
import { SpacingPanel } from './panels/spacing-panel';
import { GeometryPanel } from './panels/geometry-panel';
import { EffectsPanel } from './panels/effects-panel';
import { TokenInspector } from './inspector/token-inspector';
import { StylePreview } from '@/components/preview/style-preview';
import { PromptInspector } from './prompt/prompt-inspector';

interface CustomizerWorkspaceProps {
  baseStyle: DesignStyle;
}

export function CustomizerWorkspace({ baseStyle }: CustomizerWorkspaceProps) {
  const [activeTab, setActiveTab] = useState<CustomizerTab>('customize');
  const [activeCategory, setActiveCategory] = useState<CustomizationCategory>('colors');
  const [overrides, setOverrides] = useState<CustomizationOverrides>(() => {
    if (typeof window !== 'undefined') {
      return loadCustomization(baseStyle.slug);
    }
    return getInitialOverrides();
  });

  // Save to localStorage on overrides change
  const updateOverrides = (newOverrides: CustomizationOverrides) => {
    setOverrides(newOverrides);
    saveCustomization(baseStyle.slug, newOverrides);
  };

  // Compute resolved style
  const resolvedStyle = resolveCustomizedStyle(baseStyle, overrides);
  const dirtyCount = getOverrideCount(overrides);
  const isDirty = dirtyCount > 0;

  // Handlers for individual categories
  const handleColorChange = (token: keyof StyleColors, value: string) => {
    const updated: CustomizationOverrides = {
      ...overrides,
      colors: {
        ...overrides.colors,
        [token]: value,
      },
    };
    updateOverrides(updated);
  };

  const handleResetCategory = (category: CustomizationCategory) => {
    const updated: CustomizationOverrides = {
      ...overrides,
      [category]: {},
    };
    updateOverrides(updated);
  };

  const handleResetAll = () => {
    const clean = getInitialOverrides();
    setOverrides(clean);
    clearCustomization(baseStyle.slug);
  };

  const categories: { id: CustomizationCategory; label: string; icon: LucideIcon }[] = [
    { id: 'colors', label: 'Colors', icon: Palette },
    { id: 'typography', label: 'Typography', icon: Type },
    { id: 'spacing', label: 'Spacing', icon: Maximize2 },
    { id: 'geometry', label: 'Geometry', icon: Box },
    { id: 'effects', label: 'Effects & Motion', icon: Sliders },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#08090c] text-[#f4f5f8] font-sans">
      {/* Top Header */}
      <CustomizerHeader
        style={baseStyle}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isDirty={isDirty}
        dirtyCount={dirtyCount}
        onResetAll={handleResetAll}
      />

      {/* Main Workspace Body */}
      {activeTab === 'prompt' ? (
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto w-full">
          <PromptInspector
            baseStyle={baseStyle}
            resolvedStyle={resolvedStyle}
            overrides={overrides}
          />
        </main>
      ) : (
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-65px)]">
          {/* LEFT PANEL: Customization Controls (4 cols on lg) */}
          <section className="lg:col-span-4 border-r border-white/[0.08] bg-[#0c0d12] flex flex-col h-auto lg:h-[calc(100vh-65px)] lg:sticky lg:top-[65px] overflow-hidden">
            {/* Category Selector Tabs */}
            <div className="flex items-center gap-1.5 p-2.5 border-b border-white/[0.08] bg-[#0c0d12] overflow-x-auto scrollbar-none">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeCategory === cat.id;
                const isCatDirty = isCategoryDirty(cat.id, overrides);
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-[#5e6ad2] text-white border-[#5e6ad2]'
                        : 'text-[#9499ad] hover:text-white border-transparent hover:bg-white/[0.04]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                    {isCatDirty && (
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-[#818cf8]'}`} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Category Panel Body */}
            <div className="flex-1 p-5 overflow-y-auto">
              {activeCategory === 'colors' && (
                <ColorPanel
                  baseColors={baseStyle.colors}
                  colorOverrides={overrides.colors}
                  onColorChange={handleColorChange}
                  onResetCategory={() => handleResetCategory('colors')}
                  isDirty={isCategoryDirty('colors', overrides)}
                />
              )}

              {activeCategory === 'typography' && (
                <TypographyPanel
                  baseTypography={baseStyle.typography}
                  typographyOverrides={overrides.typography}
                  onChange={(t) =>
                    updateOverrides({
                      ...overrides,
                      typography: { ...overrides.typography, ...t },
                    })
                  }
                  onResetCategory={() => handleResetCategory('typography')}
                  isDirty={isCategoryDirty('typography', overrides)}
                />
              )}

              {activeCategory === 'spacing' && (
                <SpacingPanel
                  baseSpacing={baseStyle.spacing}
                  baseLayout={baseStyle.layout}
                  spacingOverrides={overrides.spacing}
                  onChange={(s) =>
                    updateOverrides({
                      ...overrides,
                      spacing: { ...overrides.spacing, ...s },
                    })
                  }
                  onResetCategory={() => handleResetCategory('spacing')}
                  isDirty={isCategoryDirty('spacing', overrides)}
                />
              )}

              {activeCategory === 'geometry' && (
                <GeometryPanel
                  baseShapes={baseStyle.shapesEffects}
                  baseRules={baseStyle.componentRules}
                  geometryOverrides={overrides.geometry}
                  onChange={(g) =>
                    updateOverrides({
                      ...overrides,
                      geometry: { ...overrides.geometry, ...g },
                    })
                  }
                  onResetCategory={() => handleResetCategory('geometry')}
                  isDirty={isCategoryDirty('geometry', overrides)}
                />
              )}

              {activeCategory === 'effects' && (
                <EffectsPanel
                  baseShapes={baseStyle.shapesEffects}
                  effectsOverrides={overrides.effects}
                  motionOverrides={overrides.motion}
                  onEffectsChange={(e) =>
                    updateOverrides({
                      ...overrides,
                      effects: { ...overrides.effects, ...e },
                    })
                  }
                  onMotionChange={(m) =>
                    updateOverrides({
                      ...overrides,
                      motion: { ...overrides.motion, ...m },
                    })
                  }
                  onResetCategory={() => {
                    handleResetCategory('effects');
                    handleResetCategory('motion');
                  }}
                  isDirty={
                    isCategoryDirty('effects', overrides) ||
                    isCategoryDirty('motion', overrides)
                  }
                />
              )}
            </div>
          </section>

          {/* CENTER PANEL: Live Design Preview (5 cols on lg) */}
          <section className="lg:col-span-5 p-4 sm:p-6 overflow-y-auto bg-[#08090c]">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-[#818cf8]">
                    Realtime Preview Canvas
                  </h2>
                  <p className="text-xs text-[#9499ad] mt-0.5">
                    Reflects active token overrides immediately
                  </p>
                </div>
                {isDirty && (
                  <span className="text-xs font-semibold text-[#818cf8] bg-[#5e6ad2]/15 px-2.5 py-0.5 rounded-full border border-[#5e6ad2]/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8]" />
                    Live Overrides
                  </span>
                )}
              </div>

              {/* The Live Preview rendered with the resolved custom tokens */}
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/[0.1]">
                <StylePreview style={resolvedStyle} />
              </div>
            </div>
          </section>

          {/* RIGHT PANEL: Design Context & Diff Inspector (3 cols on lg) */}
          <aside className="lg:col-span-3 border-l border-white/[0.08] bg-[#0c0d12] p-5 h-auto lg:h-[calc(100vh-65px)] lg:sticky lg:top-[65px] overflow-y-auto">
            <TokenInspector
              baseStyle={baseStyle}
              overrides={overrides}
              onOpenPrompt={() => setActiveTab('prompt')}
            />
          </aside>
        </main>
      )}
    </div>
  );
}
