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
    <section id="benefits" className="py-16 md:py-24 border-t border-white/[0.08]">
      <div className="max-w-2xl mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#5E6AD2]">
          <span>Developer Problems Solved</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-[#F4F5F8]">
          Why StyPro Exists
        </h2>
        <p className="text-sm text-[#8C92A4] leading-relaxed">
          Developers know what kind of interface they want, but lack the tools to communicate that visual direction precisely to AI coding assistants.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="flex items-start gap-4 p-6 rounded-xl border border-white/[0.08] bg-[#090A0F] hover:border-white/[0.14] transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#5E6AD2] shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-[#F4F5F8]">{p.title}</h3>
                <p className="text-xs text-[#8C92A4] leading-relaxed">{p.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

