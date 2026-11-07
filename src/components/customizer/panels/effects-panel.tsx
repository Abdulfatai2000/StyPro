'use client';

import React from 'react';
import { RotateCcw, ShieldCheck } from 'lucide-react';
import { StyleShapesEffects } from '@/types/style';
import { EffectsOverrides, MotionOverrides } from '@/types/customizer';

interface EffectsPanelProps {
  baseShapes: StyleShapesEffects;
  effectsOverrides: EffectsOverrides;
  motionOverrides: MotionOverrides;
  onEffectsChange: (overrides: Partial<EffectsOverrides>) => void;
  onMotionChange: (overrides: Partial<MotionOverrides>) => void;
  onResetCategory: () => void;
  isDirty: boolean;
}

export function EffectsPanel({
  baseShapes,
  effectsOverrides,
  motionOverrides,
  onEffectsChange,
  onMotionChange,
  onResetCategory,
  isDirty,
}: EffectsPanelProps) {
  const currentBlur = effectsOverrides.backdropBlur || baseShapes.backdropBlur;
  const currentSpeed = motionOverrides.transitionSpeed || 'normal';
  const isReducedMotion = Boolean(motionOverrides.reducedMotion);

  return (
    <div className="space-y-6">
      {/* Category Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div>
          <h3 className="text-sm font-bold text-[#F4F5F8]">Effects & Interaction Dynamics</h3>
          <p className="text-xs text-[#8C92A4]">
            Backdrop frosted glass, transition speeds, and accessibility.
          </p>
        </div>
        {isDirty && (
          <button
            type="button"
            onClick={onResetCategory}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-[#5E6AD2] hover:text-white bg-[#5E6AD2]/10 hover:bg-[#5E6AD2]/20 rounded border border-[#5E6AD2]/30 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Effects</span>
          </button>
        )}
      </div>

      <div className="space-y-5">
        {/* Backdrop Blur */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-medium text-[#F4F5F8]">Backdrop Frosted Blur</span>
            <span className="font-mono text-[#5E6AD2]">{currentBlur}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['0px', '8px', '12px', '20px'].map((blur) => (
              <button
                key={blur}
                type="button"
                onClick={() => onEffectsChange({ backdropBlur: blur })}
                className={`py-1.5 text-xs font-mono rounded border transition-all cursor-pointer ${
                  currentBlur === blur
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/15 text-white font-bold'
                    : 'border-white/[0.08] bg-[#050506] text-[#8C92A4] hover:text-white'
                }`}
              >
                {blur === '0px' ? 'None (0px)' : blur}
              </button>
            ))}
          </div>
        </div>

        {/* Transition Speed */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-[#F4F5F8]">
            Interaction Transition Duration
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'fast', label: 'Snappy (100ms)' },
              { id: 'normal', label: 'Smooth (200ms)' },
              { id: 'slow', label: 'Cinematic (350ms)' },
            ].map((speed) => (
              <button
                key={speed.id}
                type="button"
                onClick={() => onMotionChange({ transitionSpeed: speed.id as 'fast' | 'normal' | 'slow' })}
                className={`py-1.5 px-2 text-xs rounded border transition-all cursor-pointer ${
                  currentSpeed === speed.id && !isReducedMotion
                    ? 'border-[#5E6AD2] bg-[#5E6AD2]/15 text-white font-medium'
                    : 'border-white/[0.08] bg-[#050506] text-[#8C92A4] hover:text-white'
                }`}
              >
                {speed.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accessibility: Reduced Motion */}
        <div className="pt-2 border-t border-white/[0.06]">
          <div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.08] bg-[#050506]">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="text-xs font-medium text-[#F4F5F8]">
                  Respect Reduced Motion
                </span>
              </div>
              <p className="text-[11px] text-[#8C92A4]">
                Disables transitions and animations for motion sensitivity
              </p>
            </div>
            <button
              type="button"
              onClick={() => onMotionChange({ reducedMotion: !isReducedMotion })}
              className={`w-10 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                isReducedMotion ? 'bg-[#5E6AD2]' : 'bg-white/[0.1]'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  isReducedMotion ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

