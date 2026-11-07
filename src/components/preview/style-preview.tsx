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
    <div className="w-full rounded-xl border border-white/[0.12] bg-[#090A0F] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
      {/* Window Titlebar / Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.08] bg-[#0D0F17]">
        {/* Left window indicators & info */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-[#8C92A4] hidden sm:inline">
            preview://{style.slug}
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded border border-white/[0.08] bg-white/[0.03] text-[#9BA1B0] font-medium">
            {style.name}
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 bg-[#050506] p-1 rounded-lg border border-white/[0.08]">
          <button
            type="button"
            onClick={() => setActiveTab('app')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded transition-all cursor-pointer ${
              activeTab === 'app'
                ? 'bg-[#151824] text-[#F4F5F8] shadow-sm'
                : 'text-[#8C92A4] hover:text-[#F4F5F8]'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-[#5E6AD2]" />
            <span>App Simulation</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('components')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded transition-all cursor-pointer ${
              activeTab === 'components'
                ? 'bg-[#151824] text-[#F4F5F8] shadow-sm'
                : 'text-[#8C92A4] hover:text-[#F4F5F8]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5 text-[#5E6AD2]" />
            <span>Component Specimen</span>
          </button>
        </div>
      </div>

      {/* Dynamic Style Scope Container */}
      <div
        className="w-full transition-all duration-200"
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

