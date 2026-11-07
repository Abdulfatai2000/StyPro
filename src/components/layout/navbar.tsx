'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { PageContainer } from '@/components/layout/page-container';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Explore Styles', href: '/explore', icon: Compass },
    { label: 'Workflow', href: '/#workflow' },
    { label: 'Why StyPro', href: '/#benefits' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dde0e6] bg-[#fcfcfd]/90 backdrop-blur-md">
      <PageContainer>
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="horizontal" size="md" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1.5 px-3.5 py-2 text-[14px] font-medium rounded-lg transition-colors duration-160',
                    isActive
                      ? 'text-[#074ce0] bg-[#074ce0]/10 font-semibold'
                      : 'text-[#454c58] hover:text-[#16191f] hover:bg-[#f3f4f6]'
                  )}
                >
                  {Icon && <Icon className="w-4 h-4 text-[#074ce0]" />}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/explore" className="btn-primary text-[14px] !py-2 !px-4">
              <span>Explore 12 Styles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#454c58] hover:text-[#16191f] hover:bg-[#f3f4f6] rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </PageContainer>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#dde0e6] bg-[#ffffff] px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block px-3 py-2 text-[15px] font-medium rounded-lg transition-colors',
                  isActive
                    ? 'text-[#074ce0] bg-[#074ce0]/10 font-semibold'
                    : 'text-[#454c58] hover:text-[#16191f] hover:bg-[#f3f4f6]'
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/explore"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center !py-2.5"
            >
              Explore 12 Styles →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
