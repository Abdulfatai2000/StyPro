import React from 'react';
import { Bot, Layers, Palette, Wand2 } from 'lucide-react';

export function BenefitsSection() {
  const problems = [
    {
      title: 'Stop Generic AI Interfaces',
      description:
        'Vague prompts yield generic purple gradients and floating glass bubbles. StyPro supplies exacting tokens, typography hierarchies, and explicit anti-patterns.',
      icon: Bot,
    },
    {
      title: 'Eliminate Design Indecision',
      description:
        'Instead of staring at a blank canvas, evaluate fully articulated design philosophies with live components before writing a line of code.',
      icon: Palette,
    },
    {
      title: 'Systemic Frontend Consistency',
      description:
        'Bridge the gap between inspiration and code. Export unified design tokens that align your navigation, buttons, forms, and cards across all pages.',
      icon: Layers,
    },
    {
      title: 'Implementation-Ready Prompts',
      description:
        'Antigravity, Cursor, and Claude Code thrive on precision. Feed your coding assistant structured specifications rather than subjective advice.',
      icon: Wand2,
    },
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-[#08090c] text-white border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading & Introduction */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#818cf8] bg-[#5e6ad2]/10 px-3 py-1 rounded-full border border-[#5e6ad2]/25">
              <span>Developer Problems Solved</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display leading-[1.1]">
              Why StyPro Exists
            </h2>
            <p className="text-base text-[#9499ad] leading-relaxed font-body">
              Developers know what kind of interface they want, but lack the tools to communicate that visual direction precisely to AI coding assistants.
            </p>

            <div className="pt-4 border-t border-white/[0.08] text-sm text-[#9499ad] leading-relaxed italic">
              &ldquo;StyPro eliminates subjective aesthetic guesswork through deterministic token structures and implementation-ready system prompts.&rdquo;
            </div>
          </div>

          {/* Right Column: 2x2 Benefits Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="linear-card p-6 space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#5e6ad2]/15 border border-[#5e6ad2]/30 flex items-center justify-center text-[#818cf8] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-white font-display">{p.title}</h3>
                    <p className="text-xs text-[#9499ad] leading-relaxed">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
