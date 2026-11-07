'use client';

import React, { useState } from 'react';
import {
  Copy,
  Check,
  RotateCcw,
  Terminal,
  Edit3,
  Eye,
  Bot,
} from 'lucide-react';
import { DesignStyle } from '@/types/style';
import { CustomizationOverrides } from '@/types/customizer';
import { generateDesignPrompt } from '@/lib/prompt-generator';

interface PromptInspectorProps {
  baseStyle: DesignStyle;
  resolvedStyle: DesignStyle;
  overrides: CustomizationOverrides;
  onClose?: () => void;
}

export function PromptInspector({
  baseStyle,
  resolvedStyle,
  overrides,
}: PromptInspectorProps) {
  const [selectedAgent, setSelectedAgent] = useState<'antigravity' | 'cursor' | 'claude-code'>('antigravity');
  const [promptText, setPromptText] = useState<string>(() =>
    generateDesignPrompt({
      baseStyle,
      resolvedStyle,
      overrides,
      targetAgent: 'antigravity',
    })
  );
  const [isCopied, setIsCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Regenerate prompt when agent changes or user clicks regenerate
  const handleRegenerate = (agent = selectedAgent) => {
    const fresh = generateDesignPrompt({
      baseStyle,
      resolvedStyle,
      overrides,
      targetAgent: agent,
    });
    setPromptText(fresh);
    setIsEditing(false);
  };

  const handleAgentSelect = (agent: 'antigravity' | 'cursor' | 'claude-code') => {
    setSelectedAgent(agent);
    handleRegenerate(agent);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const wordCount = promptText.trim().split(/\s+/).length;
  const charCount = promptText.length;
  const tokenEstimate = Math.round(charCount / 4);

  return (
    <div className="rounded-xl border border-[#dde0e6] bg-white overflow-hidden shadow-sm space-y-0 font-sans">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-[#dde0e6] bg-[#fcfcfd]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#074ce0]/10 border border-[#074ce0]/20 flex items-center justify-center text-[#074ce0]">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-[#16191f] font-display">Design System AI Prompt</h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Deterministic
              </span>
            </div>
            <p className="text-xs text-[#454c58] mt-0.5">
              Structured markdown specification ready for direct injection into coding agents.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className={`btn-secondary text-xs !py-1.5 !px-3 ${
              isEditing ? '!border-[#074ce0] !text-[#074ce0]' : ''
            }`}
          >
            {isEditing ? <Eye className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
            <span>{isEditing ? 'Preview Mode' : 'Edit Prompt'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleRegenerate()}
            className="btn-secondary text-xs !py-1.5 !px-3"
            title="Regenerate with current active tokens"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Regenerate</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="btn-primary text-xs !py-1.5 !px-3"
          >
            {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{isCopied ? 'Copied Prompt!' : 'Copy Entire Prompt'}</span>
          </button>
        </div>
      </div>

      {/* Target Agent Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 border-b border-[#dde0e6] bg-[#fcfcfd] text-xs">
        <div className="flex items-center gap-2">
          <span className="text-[#454c58] font-medium text-xs">Format Target:</span>
          <div className="flex items-center gap-1 bg-[#f3f4f6] p-1 rounded-lg border border-[#dde0e6]">
            {[
              { id: 'antigravity', label: 'Google Antigravity' },
              { id: 'cursor', label: 'Cursor AI' },
              { id: 'claude-code', label: 'Claude Code' },
            ].map((agent) => (
              <button
                key={agent.id}
                type="button"
                onClick={() => handleAgentSelect(agent.id as 'antigravity' | 'cursor' | 'claude-code')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  selectedAgent === agent.id
                    ? 'bg-[#074ce0] text-white shadow-xs'
                    : 'text-[#454c58] hover:text-[#16191f]'
                }`}
              >
                {agent.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-[#454c58]">
          <span>Words: {wordCount}</span>
          <span>Chars: {charCount}</span>
          <span>Tokens: ~{tokenEstimate}</span>
        </div>
      </div>

      {/* Content Area: View or Edit */}
      <div className="p-4 bg-[#f8f9fa]">
        {isEditing ? (
          <textarea
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            rows={22}
            className="w-full p-4 font-mono text-xs leading-relaxed rounded-lg border border-[#dde0e6] bg-white text-[#16191f] focus:border-[#074ce0] focus:ring-1 focus:ring-[#074ce0] focus:outline-none resize-y"
            placeholder="Edit prompt specification..."
          />
        ) : (
          <div className="relative">
            <pre className="w-full max-h-[540px] overflow-y-auto p-4 font-mono text-xs leading-relaxed rounded-lg border border-[#dde0e6] bg-[#16191f] text-[#fcfcfd] whitespace-pre-wrap selection:bg-[#074ce0]/40">
              {promptText}
            </pre>
          </div>
        )}
      </div>

      {/* Bottom Footer Tip */}
      <div className="px-4 py-3 border-t border-[#dde0e6] bg-[#fcfcfd] flex items-center justify-between text-xs text-[#454c58]">
        <div className="flex items-center gap-1.5">
          <Bot className="w-4 h-4 text-[#074ce0]" />
          <span>
            Paste this directly into the instructions or prompt with your coding assistant.
          </span>
        </div>
        <span className="font-mono text-xs text-[#454c58]">
          Derived from {resolvedStyle.name} tokens
        </span>
      </div>
    </div>
  );
}
