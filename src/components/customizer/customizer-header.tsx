'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, RotateCcw, SlidersHorizontal, Terminal, Download } from 'lucide-react';
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
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#08090c]/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3 font-sans">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left: Back Link & Style Info */}
        <div className="flex items-center gap-4">
          <Link
            href={`/styles/${style.slug}`}
            className="flex items-center gap-1.5 text-xs text-[#9499ad] hover:text-white font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to Spec</span>
          </Link>

          <div className="h-4 w-px bg-white/[0.08] hidden sm:block" />

          <div className="flex items-center gap-2">
            <h1 className="text-sm font-bold text-white font-display">{style.name}</h1>
            <span className="text-xs text-[#9499ad] hidden md:inline font-mono">
              ({style.slug})
            </span>
            {isDirty && (
              <span className="text-xs px-2.5 py-0.5 bg-[#5e6ad2]/15 text-[#818cf8] border border-[#5e6ad2]/30 rounded-full font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8]" />
                {dirtyCount} Modified
              </span>
            )}
          </div>
        </div>

        {/* Center: Mode Tabs */}
        <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/[0.08]">
          <button
            type="button"
            onClick={() => onTabChange('customize')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'customize'
                ? 'bg-[#5e6ad2] text-white shadow-xs'
                : 'text-[#9499ad] hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Customizer</span>
          </button>
          <button
            type="button"
            onClick={() => onTabChange('prompt')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'prompt'
                ? 'bg-[#5e6ad2] text-white shadow-xs'
                : 'text-[#9499ad] hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>AI Prompt</span>
          </button>
        </div>

        {/* Right: Reset & Export */}
        <div className="flex items-center gap-3">
          {isDirty && (
            <button
              type="button"
              onClick={onResetAll}
              className="flex items-center gap-1.5 text-xs text-[#9499ad] hover:text-red-400 px-2 py-1 font-medium transition-colors cursor-pointer"
              title="Reset all modifications back to style baseline"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset All</span>
            </button>
          )}

          <Link
            href={`/export/${style.slug}`}
            className="btn-primary text-xs !py-1.5 !px-3"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Tokens</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
