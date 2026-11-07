'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Copy,
  Check,
  Download,
  FileCode,
} from 'lucide-react';
import { DesignStyle } from '@/types/style';
import { ExportFormat, getExportTargets } from '@/lib/export';
import { exportDesignSystem } from '@/lib/export';
import { loadCustomization } from '@/lib/customizer/storage';
import { resolveCustomizedStyle, getOverrideCount } from '@/lib/customizer/resolver';
import { downloadFile } from '@/lib/export/download';

interface ExportWorkspaceProps {
  baseStyle: DesignStyle;
}

export function ExportWorkspace({ baseStyle }: ExportWorkspaceProps) {
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('css');
  const [tailwindVersion, setTailwindVersion] = useState<'v4' | 'v3'>('v4');
  const [isCopied, setIsCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Load user customizations if present
  const overrides = typeof window !== 'undefined' ? loadCustomization(baseStyle.slug) : {
    colors: {},
    typography: {},
    spacing: {},
    geometry: {},
    effects: {},
    motion: {},
  };

  const resolvedStyle = resolveCustomizedStyle(baseStyle, overrides);
  const overrideCount = getOverrideCount(overrides);
  const isCustomized = overrideCount > 0;

  // Generate current export
  const exportResult = exportDesignSystem(selectedFormat, {
    style: resolvedStyle,
    overrides,
    tailwindVersion,
  });

  const targets = getExportTargets();
  const currentTarget = targets.find((t) => t.id === selectedFormat)!;

  const handleCopy = () => {
    navigator.clipboard.writeText(exportResult.code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDownload = () => {
    const success = downloadFile(
      exportResult.filename,
      exportResult.code,
      exportResult.mimeType
    );
    if (success) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 2000);
    }
  };

  const lineCount = exportResult.code.split('\n').length;
  const byteSize = new Blob([exportResult.code]).size;
  const sizeFormatted = (byteSize / 1024).toFixed(1) + ' KB';

  return (
    <div className="flex flex-col min-h-screen bg-[#050506]">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#050506]/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Back links */}
          <div className="flex items-center gap-4">
            <Link
              href={`/customize/${baseStyle.slug}`}
              className="flex items-center gap-1.5 text-xs text-[#8C92A4] hover:text-[#F4F5F8] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Customizer</span>
            </Link>

            <div className="h-4 w-px bg-white/[0.1] hidden sm:block" />

            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold text-[#F4F5F8]">{baseStyle.name}</h1>
              <span className="text-[11px] font-mono text-[#8C92A4]">
                Export Hub
              </span>
              {isCustomized && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#5E6AD2]/15 text-[#5E6AD2] border border-[#5E6AD2]/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2]" />
                  {overrideCount} Customizations Applied
                </span>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg border border-white/[0.1] bg-[#090A0F] text-[#F4F5F8] hover:bg-white/[0.04] transition-all cursor-pointer"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Copied Code!' : 'Copy Code'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-[#5E6AD2] hover:bg-[#6E79D8] text-white transition-all shadow-[0_0_15px_rgba(94,106,210,0.3)] cursor-pointer"
            >
              {downloadSuccess ? (
                <Check className="w-3.5 h-3.5" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>{downloadSuccess ? 'Downloaded!' : `Download ${exportResult.filename}`}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Export Experience */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-6">
        {/* Format Selector Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {targets.map((target) => {
            const isSelected = selectedFormat === target.id;
            return (
              <button
                key={target.id}
                type="button"
                onClick={() => setSelectedFormat(target.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/10 shadow-[0_4px_20px_rgba(94,106,210,0.15)]'
                    : 'border-white/[0.08] bg-[#090A0F] hover:border-white/[0.14]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`p-2 rounded-lg border text-xs font-mono font-bold ${
                      isSelected
                        ? 'border-[#5E6AD2] bg-[#5E6AD2]/20 text-white'
                        : 'border-white/[0.08] bg-white/[0.02] text-[#8C92A4]'
                    }`}
                  >
                    {target.extension}
                  </div>
                  {isSelected && (
                    <span className="text-[10px] font-mono text-[#5E6AD2] font-semibold">
                      ● Active
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-[#F4F5F8] mb-1">
                  {target.label}
                </h3>
                <p className="text-xs text-[#8C92A4] leading-relaxed line-clamp-2">
                  {target.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Format-specific sub-options */}
        {selectedFormat === 'tailwind' && (
          <div className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.08] bg-[#090A0F]">
            <div className="space-y-0.5">
              <span className="text-xs font-medium text-[#F4F5F8]">
                Tailwind Architecture Target
              </span>
              <p className="text-[11px] text-[#8C92A4]">
                Choose between modern CSS-first Tailwind v4 @theme or classic Tailwind v3 config
              </p>
            </div>

            <div className="flex items-center gap-1 bg-[#050506] p-1 rounded-lg border border-white/[0.08]">
              <button
                type="button"
                onClick={() => setTailwindVersion('v4')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                  tailwindVersion === 'v4'
                    ? 'bg-[#151824] text-white'
                    : 'text-[#8C92A4] hover:text-white'
                }`}
              >
                Tailwind v4 (@theme)
              </button>
              <button
                type="button"
                onClick={() => setTailwindVersion('v3')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                  tailwindVersion === 'v3'
                    ? 'bg-[#151824] text-white'
                    : 'text-[#8C92A4] hover:text-white'
                }`}
              >
                Tailwind v3 (config.ts)
              </button>
            </div>
          </div>
        )}

        {/* Code Viewer Container */}
        <div className="rounded-xl border border-white/[0.1] bg-[#090A0F] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          {/* Viewer Titlebar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.08] bg-[#0D0F17]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-[#F4F5F8] font-medium">
                {exportResult.filename}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#8C92A4]">
              <span>Lines: {lineCount}</span>
              <span>Size: {sizeFormatted}</span>
              <span>Format: {selectedFormat.toUpperCase()}</span>
            </div>
          </div>

          {/* Code Viewer Area */}
          <div className="p-4 bg-[#050506] relative">
            <pre className="w-full max-h-[600px] overflow-y-auto p-4 font-mono text-xs leading-relaxed rounded-lg border border-white/[0.06] bg-[#07080B] text-[#E2E4ED] whitespace-pre-wrap selection:bg-[#5E6AD2]/30">
              {exportResult.code}
            </pre>
          </div>

          {/* Viewer Footer Guidance */}
          <div className="px-4 py-3 border-t border-white/[0.06] bg-[#0D0F17] flex items-center justify-between text-xs text-[#8C92A4]">
            <div className="flex items-center gap-1.5">
              <FileCode className="w-3.5 h-3.5 text-[#5E6AD2]" />
              <span>
                {currentTarget.description}
              </span>
            </div>

            <button
              type="button"
              onClick={handleDownload}
              className="text-[#5E6AD2] hover:underline flex items-center gap-1 cursor-pointer font-mono"
            >
              <span>Download {currentTarget.extension}</span>
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
