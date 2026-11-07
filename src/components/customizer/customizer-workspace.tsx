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
    <div className="flex flex-col min-h-screen bg-[#050506]">
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
          <section className="lg:col-span-4 border-r border-white/[0.08] bg-[#090A0F]/80 flex flex-col h-auto lg:h-[calc(100vh-65px)] lg:sticky lg:top-[65px] overflow-hidden">
            {/* Category Selector Tabs */}
            <div className="flex items-center gap-1 p-2 border-b border-white/[0.08] bg-[#0D0F17] overflow-x-auto scrollbar-none">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeCategory === cat.id;
                const isCatDirty = isCategoryDirty(cat.id, overrides);
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-[#151824] text-[#F4F5F8] shadow-sm'
                        : 'text-[#8C92A4] hover:text-[#F4F5F8] hover:bg-white/[0.02]'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#5E6AD2]' : ''}`} />
                    <span>{cat.label}</span>
                    {isCatDirty && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2]" />
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
          <section className="lg:col-span-5 p-4 sm:p-6 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider text-[#8C92A4]">
                    Real-time Preview Canvas
                  </h2>
                  <p className="text-xs text-[#636A7E]">
                    Reflects active token overrides immediately
                  </p>
                </div>
                {isDirty && (
                  <span className="text-[11px] font-mono text-[#5E6AD2]">
                    ● Live Customizing
                  </span>
                )}
              </div>

              {/* The Live Preview rendered with the resolved custom tokens! */}
              <StylePreview style={resolvedStyle} />
            </div>
          </section>

          {/* RIGHT PANEL: Design Context & Diff Inspector (3 cols on lg) */}
          <aside className="lg:col-span-3 border-l border-white/[0.08] bg-[#07080B] p-5 h-auto lg:h-[calc(100vh-65px)] lg:sticky lg:top-[65px] overflow-y-auto">
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

