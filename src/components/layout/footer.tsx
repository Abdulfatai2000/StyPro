import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { PageContainer } from '@/components/layout/page-container';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#16191f] text-[#d0d4dd] mt-auto font-body text-[14px]">
      <PageContainer>
        <div className="py-14 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Presentation */}
          <div className="md:col-span-2 space-y-4">
            <Logo variant="stacked" size="md" isDark className="!items-start !text-left" />
            <p className="text-sm text-[#d0d4dd] max-w-sm leading-relaxed">
              StyPro bridges the gap between visual inspiration and production frontend code. Discover curated design systems, inspect real component behavior, and generate battle-tested AI coding prompts.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#074ce0]">
              <span>Discover</span>
              <span className="text-[#454c58]">•</span>
              <span>Preview</span>
              <span className="text-[#454c58]">•</span>
              <span>Customize</span>
              <span className="text-[#454c58]">•</span>
              <span>Generate</span>
              <span className="text-[#454c58]">•</span>
              <span>Export</span>
            </div>
          </div>

          {/* Directory Column 1: Featured Systems */}
          <div className="space-y-3">
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#fcfcfd]">
              Curated Systems
            </h4>
            <ul className="space-y-2 text-sm text-[#d0d4dd]">
              <li>
                <Link
                  href="/styles/corporate-clean"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Corporate Clean SaaS</span>
                  <span className="text-xs text-[#074ce0]">View →</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/styles/modern-dark"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Modern Dark</span>
                  <span className="text-xs text-[#074ce0]">View →</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/styles/swiss-minimalist"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Swiss Minimalist</span>
                  <span className="text-xs text-[#074ce0]">View →</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/explore"
                  className="text-xs font-semibold text-[#074ce0] hover:underline pt-1 inline-block"
                >
                  Explore All 12 Styles →
                </Link>
              </li>
            </ul>
          </div>

          {/* Directory Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#fcfcfd]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#d0d4dd]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-white transition-colors">
                  Explore Catalogue
                </Link>
              </li>
              <li>
                <a href="#workflow" className="hover:text-white transition-colors">
                  5-Step Workflow
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">
                  Why StyPro
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rule & Metadata Row */}
        <div className="py-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#d0d4dd]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} StyPro Platform.</span>
            <span className="text-[#454c58]">•</span>
            <span>Zero Backend • Complete Privacy</span>
          </div>
          <div className="flex items-center gap-3">
            <span>W3C DTCG Standard</span>
            <span className="text-[#454c58]">•</span>
            <span>CSS Variables & Tailwind v4</span>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
