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
    <div className="flex flex-col min-h-screen bg-[#08090c] text-[#f4f5f8] font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#08090c]/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Back links */}
          <div className="flex items-center gap-4">
            <Link
              href={`/customize/${baseStyle.slug}`}
              className="flex items-center gap-1.5 text-xs text-[#9499ad] hover:text-white font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Customizer</span>
            </Link>

            <div className="h-4 w-px bg-white/[0.08] hidden sm:block" />

            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold text-white font-display">{baseStyle.name}</h1>
              <span className="text-xs text-[#9499ad]">
                Export Hub
              </span>
              {isCustomized && (
                <span className="text-xs px-2.5 py-0.5 bg-[#5e6ad2]/15 text-[#818cf8] border border-[#5e6ad2]/30 rounded-full font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8]" />
                  {overrideCount} Modified
                </span>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleCopy}
              className="btn-secondary text-xs !py-1.5 !px-3"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Copied Code!' : 'Copy Code'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="btn-primary text-xs !py-1.5 !px-3"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {targets.map((target) => {
            const isSelected = selectedFormat === target.id;
            return (
              <button
                key={target.id}
                type="button"
                onClick={() => setSelectedFormat(target.id)}
                className={`linear-card p-5 text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? '!border-[#5e6ad2] bg-[#5e6ad2]/10 ring-1 ring-[#5e6ad2]/40 shadow-md'
                    : 'hover:border-white/[0.16]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${
                      isSelected
                        ? 'border-[#5e6ad2] bg-[#5e6ad2] text-white'
                        : 'border-white/[0.08] bg-white/[0.04] text-[#9499ad]'
                    }`}
                  >
                    {target.extension}
                  </div>
                  {isSelected && (
                    <span className="text-xs text-[#818cf8] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8]" />
                      Selected
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-white mb-1">
                  {target.label}
                </h3>
                <p className="text-xs text-[#9499ad] leading-relaxed line-clamp-2">
                  {target.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Format-specific sub-options */}
        {selectedFormat === 'tailwind' && (
          <div className="linear-card p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-sm font-bold text-white">
                Tailwind Architecture Target
              </span>
              <p className="text-xs text-[#9499ad]">
                Choose between modern CSS-first Tailwind v4 @theme or classic Tailwind v3 config
              </p>
            </div>

            <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/[0.08]">
              <button
                type="button"
                onClick={() => setTailwindVersion('v4')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  tailwindVersion === 'v4'
                    ? 'bg-[#5e6ad2] text-white shadow-xs'
                    : 'text-[#9499ad] hover:text-white'
                }`}
              >
                Tailwind v4 (@theme)
              </button>
              <button
                type="button"
                onClick={() => setTailwindVersion('v3')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  tailwindVersion === 'v3'
                    ? 'bg-[#5e6ad2] text-white shadow-xs'
                    : 'text-[#9499ad] hover:text-white'
                }`}
              >
                Tailwind v3 (config.ts)
              </button>
            </div>
          </div>
        )}

        {/* Code Viewer Container */}
        <div className="linear-card overflow-hidden shadow-2xl">
          {/* Viewer Titlebar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.08] bg-[#0a0c10]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f87171] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] inline-block" />
              </div>
              <span className="text-xs font-mono text-white font-bold">
                {exportResult.filename}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#9499ad]">
              <span>{lineCount} lines</span>
              <span>{sizeFormatted}</span>
              <span>{selectedFormat.toUpperCase()}</span>
            </div>
          </div>

          {/* Code Viewer Area */}
          <div className="p-4 bg-[#08090c]">
            <pre className="w-full max-h-[600px] overflow-y-auto p-4 font-mono text-xs leading-relaxed rounded-lg border border-white/[0.08] bg-[#0c0d12] text-[#f4f5f8] whitespace-pre-wrap selection:bg-[#5e6ad2]/40">
              {exportResult.code}
            </pre>
          </div>

          {/* Viewer Footer Guidance */}
          <div className="px-4 py-3 border-t border-white/[0.08] bg-[#0a0c10] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#9499ad]">
            <div className="flex items-center gap-1.5">
              <FileCode className="w-4 h-4 text-[#818cf8]" />
              <span>
                {currentTarget.description}
              </span>
            </div>

            <button
              type="button"
              onClick={handleDownload}
              className="text-[#818cf8] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
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
