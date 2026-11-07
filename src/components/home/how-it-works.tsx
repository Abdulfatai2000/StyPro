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
    <section id="workflow" className="py-20 md:py-28 bg-[#16191f] text-[#fcfcfd]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-[#074ce0] bg-[#074ce0]/10 px-3 py-1 rounded-full border border-[#074ce0]/25">
            <span>The End-to-End Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#fcfcfd] font-display">
            From Style to Prompt to Code
          </h2>
          <p className="text-base text-[#d0d4dd] leading-relaxed font-body">
            StyPro delivers a structured 5-step bridge between creative inspiration and production frontend implementation.
          </p>
        </div>

        {/* Numbered Process Steps Linked Across Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-[12px] border border-white/[0.1] bg-[#1f242d] hover:border-[#074ce0] transition-all duration-160 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold font-mono text-[#074ce0] bg-[#074ce0]/15 px-2 py-0.5 rounded">
                      {step.number}
                    </span>
                    <span className="text-[11px] text-[#d0d4dd] font-medium bg-white/[0.06] px-2 py-0.5 rounded">
                      {step.status}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-[10px] bg-white/[0.08] flex items-center justify-center text-[#ffffff] mb-3 group-hover:bg-[#074ce0] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-[#fcfcfd] mb-1.5 font-display">
                    {step.title}
                  </h3>

                  <p className="text-[13px] text-[#d0d4dd] leading-relaxed">
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
