'use client';

import React, { useState } from 'react';
import { Eye, LayoutGrid } from 'lucide-react';
import { DesignStyle } from '@/types/style';
import { getStyleCssVariables } from '@/lib/style-utils';
import { PreviewNavbar } from './preview-navbar';
import { PreviewHero } from './preview-hero';
import { PreviewCards } from './preview-cards';
import { PreviewForms } from './preview-forms';
import { PreviewButtons } from './preview-buttons';

interface StylePreviewProps {
  style: DesignStyle;
  initialTab?: 'app' | 'components';
}

export function StylePreview({ style, initialTab = 'app' }: StylePreviewProps) {
  const [activeTab, setActiveTab] = useState<'app' | 'components'>(initialTab);
  const cssVars = getStyleCssVariables(style);

  return (
    <div className="w-full rounded-xl border border-[#dde0e6] bg-white overflow-hidden shadow-sm font-sans">
      {/* Window Titlebar / Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 border-b border-[#dde0e6] bg-[#fcfcfd]">
        {/* Left window indicators & info */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f87171] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] inline-block" />
          </div>
          <span className="text-xs font-mono text-[#454c58] hidden sm:inline">
            preview://{style.slug}
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full border border-[#dde0e6] bg-[#f3f4f6] text-[#16191f] font-semibold">
            {style.name}
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 bg-[#f3f4f6] p-1 rounded-lg border border-[#dde0e6]">
          <button
            type="button"
            onClick={() => setActiveTab('app')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'app'
                ? 'bg-[#074ce0] text-white shadow-xs'
                : 'text-[#454c58] hover:text-[#16191f]'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>App Simulation</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('components')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'components'
                ? 'bg-[#074ce0] text-white shadow-xs'
                : 'text-[#454c58] hover:text-[#16191f]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Component Specimens</span>
          </button>
        </div>
      </div>

      {/* Dynamic Style Scope Container */}
      <div
        className="w-full"
        style={cssVars}
      >
        {activeTab === 'app' ? (
          <div>
            <PreviewNavbar style={style} />
            <PreviewHero style={style} />
            <PreviewCards style={style} />
            <PreviewForms style={style} />
          </div>
        ) : (
          <div>
            <PreviewButtons style={style} />
            <PreviewCards style={style} />
            <PreviewForms style={style} />
          </div>
        )}
      </div>
    </div>
  );
}
