'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, RotateCcw, SlidersHorizontal, Terminal } from 'lucide-react';
import { DesignStyle } from '@/types/style';
import { CustomizerTab } from '@/types/customizer';

interface CustomizerHeaderProps {
  style: DesignStyle;
  activeTab: CustomizerTab;
  onTabChange: (tab: CustomizerTab) => void;
  isDirty: boolean;
  dirtyCount: number;
  onResetAll: () => void;
}

export function CustomizerHeader({
  style,
  activeTab,
  onTabChange,
  isDirty,
  dirtyCount,
  onResetAll,
}: CustomizerHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#050506]/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3.5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left: Back Link & Style Info */}
        <div className="flex items-center gap-4">
          <Link
            href={`/styles/${style.slug}`}
            className="flex items-center gap-1.5 text-xs text-[#8C92A4] hover:text-[#F4F5F8] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to Spec</span>
          </Link>

          <div className="h-4 w-px bg-white/[0.1] hidden sm:block" />

          <div className="flex items-center gap-2">
            <h1 className="text-sm font-bold text-[#F4F5F8]">{style.name}</h1>
            <span className="text-[11px] font-mono text-[#8C92A4] hidden md:inline">
              / {style.slug}
            </span>
            {isDirty && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#5E6AD2]/15 text-[#5E6AD2] border border-[#5E6AD2]/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] animate-pulse" />
                {dirtyCount} Modified
              </span>
            )}
          </div>
        </div>

        {/* Center: Mode Tabs */}
        <div className="flex items-center gap-1 bg-[#090A0F] p-1 rounded-lg border border-white/[0.08]">
          <button
            type="button"
            onClick={() => onTabChange('customize')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              activeTab === 'customize'
                ? 'bg-[#151824] text-white shadow-sm'
                : 'text-[#8C92A4] hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#5E6AD2]" />
            <span>Visual Customizer</span>
          </button>
          <button
            type="button"
            onClick={() => onTabChange('prompt')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              activeTab === 'prompt'
                ? 'bg-[#151824] text-white shadow-sm'
                : 'text-[#8C92A4] hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-[#5E6AD2]" />
            <span>AI Design Prompt</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {isDirty && (
            <button
              type="button"
              onClick={onResetAll}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#8C92A4] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] rounded-md border border-white/[0.08] transition-all cursor-pointer"
              title="Reset all modifications back to original style defaults"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset All</span>
            </button>
          )}

          {activeTab === 'customize' ? (
            <button
              type="button"
              onClick={() => onTabChange('prompt')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md bg-[#5E6AD2] hover:bg-[#6E79D8] text-white transition-all shadow-[0_0_15px_rgba(94,106,210,0.3)] cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Generate Prompt</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onTabChange('customize')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md bg-[#5E6AD2] hover:bg-[#6E79D8] text-white transition-all cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Back to Customizer</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

