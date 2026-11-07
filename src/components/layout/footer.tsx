import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { PageContainer } from '@/components/layout/page-container';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#050506] mt-auto">
      <PageContainer>
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand presentation */}
          <div className="md:col-span-2 space-y-4">
            <Logo variant="stacked" size="md" className="!items-start !text-left" />
            <p className="text-sm text-[#8C92A4] max-w-sm leading-relaxed">
              StyPro bridges the gap between visual inspiration and production frontend code. Discover curated design systems, inspect real component behavior, and generate battle-tested AI coding prompts.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#636A7E]">
              <span>DISCOVER</span>
              <span>→</span>
              <span>PREVIEW</span>
              <span>→</span>
              <span>CUSTOMIZE</span>
              <span>→</span>
              <span>GENERATE</span>
              <span>→</span>
              <span>EXPORT</span>
            </div>
          </div>

          {/* Pilot Styles */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F4F5F8]">
              Pilot Styles
            </h4>
            <ul className="space-y-2 text-sm text-[#9BA1B0]">
              <li>
                <Link
                  href="/styles/modern-dark"
                  className="hover:text-[#F4F5F8] transition-colors flex items-center justify-between group"
                >
                  <span>Modern Dark</span>
                  <span className="text-xs font-mono text-[#5E6AD2] opacity-0 group-hover:opacity-100 transition-opacity">
                    View →
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/styles/swiss-minimalist"
                  className="hover:text-[#F4F5F8] transition-colors flex items-center justify-between group"
                >
                  <span>Swiss Minimalist</span>
                  <span className="text-xs font-mono text-[#5E6AD2] opacity-0 group-hover:opacity-100 transition-opacity">
                    View →
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/explore"
                  className="text-xs text-[#5E6AD2] hover:underline pt-1 inline-block"
                >
                  View all catalogue styles →
                </Link>
              </li>
            </ul>
          </div>

          {/* Product links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F4F5F8]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#9BA1B0]">
              <li>
                <Link href="/" className="hover:text-[#F4F5F8] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-[#F4F5F8] transition-colors">
                  Explore Catalogue
                </Link>
              </li>
              <li>
                <a href="#workflow" className="hover:text-[#F4F5F8] transition-colors">
                  5-Step Workflow
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[#F4F5F8] transition-colors">
                  Developer Benefits
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#636A7E]">
          <p>© {currentYear} StyPro. Built for modern developers and AI-assisted builders.</p>
          <p className="font-mono">From Style to Prompt to Code</p>
        </div>
      </PageContainer>
    </footer>
  );
}

