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
    <div className="rounded-xl border border-white/[0.12] bg-[#090A0F] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)] space-y-0">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-white/[0.08] bg-[#0D0F17]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#5E6AD2]/15 border border-[#5E6AD2]/30 flex items-center justify-center text-[#5E6AD2]">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-[#F4F5F8]">Design System AI Prompt</h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/25">
                Deterministic
              </span>
            </div>
            <p className="text-xs text-[#8C92A4]">
              Structured markdown specification ready for direct injection into coding agents.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
              isEditing
                ? 'bg-[#5E6AD2]/20 border-[#5E6AD2] text-white'
                : 'bg-[#050506] border-white/[0.08] text-[#9BA1B0] hover:text-white'
            }`}
          >
            {isEditing ? <Eye className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
            <span>{isEditing ? 'Preview Mode' : 'Edit Prompt'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleRegenerate()}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-white/[0.08] bg-[#050506] text-[#9BA1B0] hover:text-white transition-all cursor-pointer"
            title="Regenerate with current active tokens"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Regenerate</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-[#5E6AD2] hover:bg-[#6E79D8] text-white transition-all shadow-[0_0_15px_rgba(94,106,210,0.3)] cursor-pointer"
          >
            {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{isCopied ? 'Copied to Clipboard!' : 'Copy Entire Prompt'}</span>
          </button>
        </div>
      </div>

      {/* Target Agent Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 border-b border-white/[0.06] bg-[#050506] text-xs">
        <div className="flex items-center gap-2">
          <span className="text-[#8C92A4] font-mono text-[11px]">Format Target:</span>
          <div className="flex items-center gap-1 bg-[#090A0F] p-0.5 rounded border border-white/[0.08]">
            {[
              { id: 'antigravity', label: 'Google Antigravity' },
              { id: 'cursor', label: 'Cursor AI / Composer' },
              { id: 'claude-code', label: 'Claude Code' },
            ].map((agent) => (
              <button
                key={agent.id}
                type="button"
                onClick={() => handleAgentSelect(agent.id as 'antigravity' | 'cursor' | 'claude-code')}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                  selectedAgent === agent.id
                    ? 'bg-[#151824] text-white font-medium'
                    : 'text-[#8C92A4] hover:text-white'
                }`}
              >
                {agent.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-mono text-[#636A7E]">
          <span>Words: {wordCount}</span>
          <span>Chars: {charCount}</span>
          <span>Tokens: ~{tokenEstimate}</span>
        </div>
      </div>

      {/* Content Area: View or Edit */}
      <div className="p-4 bg-[#050506]">
        {isEditing ? (
          <textarea
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            rows={22}
            className="w-full p-4 font-mono text-xs leading-relaxed rounded-lg border border-white/[0.1] bg-[#090A0F] text-[#F4F5F8] focus:border-[#5E6AD2] focus:outline-none resize-y"
            placeholder="Edit prompt specification..."
          />
        ) : (
          <div className="relative">
            <pre className="w-full max-h-[540px] overflow-y-auto p-4 font-mono text-xs leading-relaxed rounded-lg border border-white/[0.08] bg-[#090A0F] text-[#E2E4ED] whitespace-pre-wrap selection:bg-[#5E6AD2]/30">
              {promptText}
            </pre>
          </div>
        )}
      </div>

      {/* Bottom Footer Tip */}
      <div className="px-4 py-3 border-t border-white/[0.06] bg-[#0D0F17] flex items-center justify-between text-[11px] text-[#8C92A4]">
        <div className="flex items-center gap-1.5">
          <Bot className="w-3.5 h-3.5 text-[#5E6AD2]" />
          <span>
            Paste this directly into the system prompt or conversation with your coding assistant.
          </span>
        </div>
        <span className="font-mono text-[#636A7E]">
          Generated from resolved {resolvedStyle.name} tokens
        </span>
      </div>
    </div>
  );
}

