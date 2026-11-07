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
    <div className="space-y-6 font-sans">
      {/* Category Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#dde0e6]">
        <div>
          <h3 className="text-base font-bold text-[#16191f] font-display">Effects & Interaction Dynamics</h3>
          <p className="text-xs text-[#454c58] mt-0.5">
            Backdrop frosted glass, transition speeds, and accessibility.
          </p>
        </div>
        {isDirty && (
          <button
            type="button"
            onClick={onResetCategory}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#074ce0] hover:text-white bg-[#074ce0]/10 hover:bg-[#074ce0] rounded-md border border-[#074ce0]/30 transition-colors cursor-pointer"
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
            <span className="font-semibold text-[#16191f]">Backdrop Frosted Blur</span>
            <span className="font-mono text-[#074ce0] font-bold">{currentBlur}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['0px', '8px', '12px', '20px'].map((blur) => (
              <button
                key={blur}
                type="button"
                onClick={() => onEffectsChange({ backdropBlur: blur })}
                className={`py-2 text-xs font-mono rounded-md border transition-colors cursor-pointer ${
                  currentBlur === blur
                    ? 'border-[#074ce0] bg-[#074ce0] text-white font-bold'
                    : 'border-[#dde0e6] bg-white text-[#454c58] hover:text-[#16191f]'
                }`}
              >
                {blur === '0px' ? 'None (0px)' : blur}
              </button>
            ))}
          </div>
        </div>

        {/* Transition Speed */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-[#16191f]">
            Interaction Transition Duration
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'fast', label: 'Snappy (100ms)' },
              { id: 'normal', label: 'Smooth (160ms)' },
              { id: 'slow', label: 'Cinematic (300ms)' },
            ].map((speed) => (
              <button
                key={speed.id}
                type="button"
                onClick={() => onMotionChange({ transitionSpeed: speed.id as 'fast' | 'normal' | 'slow' })}
                className={`py-2 px-2 text-xs rounded-md border transition-colors cursor-pointer font-medium ${
                  currentSpeed === speed.id && !isReducedMotion
                    ? 'border-[#074ce0] bg-[#074ce0] text-white'
                    : 'border-[#dde0e6] bg-white text-[#454c58] hover:text-[#16191f]'
                }`}
              >
                {speed.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accessibility: Reduced Motion */}
        <div className="pt-2 border-t border-[#dde0e6]">
          <div className="flex items-center justify-between p-3 rounded-lg border border-[#dde0e6] bg-white">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-semibold text-[#16191f]">
                  Respect Reduced Motion
                </span>
              </div>
              <p className="text-xs text-[#454c58]">
                Disables transitions and animations for motion sensitivity
              </p>
            </div>
            <button
              type="button"
              onClick={() => onMotionChange({ reducedMotion: !isReducedMotion })}
              className={`w-11 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                isReducedMotion ? 'bg-[#074ce0]' : 'bg-[#dde0e6]'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
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
