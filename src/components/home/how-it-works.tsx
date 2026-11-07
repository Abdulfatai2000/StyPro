import React from 'react';
import { Compass, Eye, SlidersHorizontal, Terminal, Download } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description:
        'Browse curated design languages spanning engineered dark SaaS to high-impact Swiss minimal editorial systems.',
      icon: Compass,
      status: 'Available Now',
      phase: 'Phase 1',
      isActive: true,
    },
    {
      number: '02',
      title: 'Preview',
      description:
        'Inspect realistic UI compositions—dashboards, telemetry charts, navigation bars, and forms—in real time.',
      icon: Eye,
      status: 'Available Now',
      phase: 'Phase 1',
      isActive: true,
    },
    {
      number: '03',
      title: 'Customize',
      description:
        'Fine-tune semantic color tokens, typography scales, corner radii, and shadow elevations with live preview feedback.',
      icon: SlidersHorizontal,
      status: 'Coming Soon',
      phase: 'Phase 2',
      isActive: false,
    },
    {
      number: '04',
      title: 'Generate',
      description:
        'Synthesize deterministic, implementation-ready prompts tailored for coding agents like Antigravity, Cursor, and Claude Code.',
      icon: Terminal,
      status: 'Coming Soon',
      phase: 'Phase 3',
      isActive: false,
    },
    {
      number: '05',
      title: 'Export',
      description:
        'Download complete design artifacts: Tailwind CSS configurations, CSS custom properties, DTCG JSON tokens, and markdown specs.',
      icon: Download,
      status: 'Coming Soon',
      phase: 'Phase 3',
      isActive: false,
    },
  ];

  return (
    <section id="workflow" className="py-16 md:py-24 border-t border-white/[0.08]">
      <div className="max-w-2xl mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#5E6AD2]">
          <span>The End-to-End Workflow</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-[#F4F5F8]">
          From Style to Prompt to Code
        </h2>
        <p className="text-sm text-[#8C92A4] leading-relaxed">
          StyPro delivers a structured 5-step bridge between creative inspiration and production frontend implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className={`relative flex flex-col justify-between rounded-xl border p-5 transition-all ${
                step.isActive
                  ? 'border-[#5E6AD2]/40 bg-[#090A0F] shadow-[0_4px_20px_rgba(94,106,210,0.1)]'
                  : 'border-white/[0.06] bg-[#07080B] opacity-80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#5E6AD2]">
                    {step.number}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      step.isActive
                        ? 'border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981]'
                        : 'border-white/[0.08] bg-white/[0.02] text-[#8C92A4]'
                    }`}
                  >
                    {step.status}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#5E6AD2] mb-3">
                  <Icon className="w-4 h-4" />
                </div>

                <h3 className="text-base font-bold text-[#F4F5F8] mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-[#8C92A4] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#636A7E]">
                <span>{step.phase}</span>
                {step.isActive ? (
                  <span className="text-[#10B981]">● Live</span>
                ) : (
                  <span>Upcoming</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

