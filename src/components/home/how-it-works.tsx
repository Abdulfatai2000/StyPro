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
      status: 'Ready',
    },
    {
      number: '02',
      title: 'Preview',
      description:
        'Inspect realistic UI compositions—dashboards, telemetry charts, navigation bars, and forms—in real time.',
      icon: Eye,
      status: 'Ready',
    },
    {
      number: '03',
      title: 'Customize',
      description:
        'Fine-tune semantic color tokens, typography scales, corner radii, and shadow elevations with live preview feedback.',
      icon: SlidersHorizontal,
      status: 'Ready',
    },
    {
      number: '04',
      title: 'Generate',
      description:
        'Synthesize deterministic, implementation-ready prompts tailored for coding agents like Antigravity, Cursor, and Claude Code.',
      icon: Terminal,
      status: 'Ready',
    },
    {
      number: '05',
      title: 'Export',
      description:
        'Download complete design artifacts: Tailwind CSS configurations, CSS custom properties, DTCG JSON tokens, and markdown specs.',
      icon: Download,
      status: 'Ready',
    },
  ];

  return (
    <section id="workflow" className="py-20 md:py-28 bg-[#08090c] text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#818cf8] bg-[#5e6ad2]/10 px-3 py-1 rounded-full border border-[#5e6ad2]/25">
            <span>The End-to-End Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            From Style to Prompt to Code
          </h2>
          <p className="text-base text-[#9499ad] leading-relaxed font-body">
            StyPro delivers a structured 5-step bridge between creative inspiration and production frontend implementation.
          </p>
        </div>

        {/* Numbered Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="linear-card p-5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold font-mono text-[#818cf8] bg-[#5e6ad2]/15 px-2 py-0.5 rounded border border-[#5e6ad2]/25">
                      {step.number}
                    </span>
                    <span className="text-[11px] text-[#9499ad] font-medium bg-white/[0.05] px-2 py-0.5 rounded">
                      {step.status}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white mb-3 group-hover:bg-[#5e6ad2] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 font-display">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#9499ad] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
