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
    { label: 'How it Works', href: '/#workflow' },
    { label: 'Benefits', href: '/#benefits' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#050506]/85 backdrop-blur-md">
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
                    'flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium rounded-md transition-colors',
                    isActive
                      ? 'text-[#F4F5F8] bg-white/[0.06]'
                      : 'text-[#9BA1B0] hover:text-[#F4F5F8] hover:bg-white/[0.04]'
                  )}
                >
                  {Icon && <Icon className="w-4 h-4 text-[#5E6AD2]" />}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 rounded-md bg-[#5E6AD2] hover:bg-[#6E79D8] text-white px-4 py-2 text-sm font-medium shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-150 hover:shadow-[0_0_20px_rgba(94,106,210,0.35)]"
            >
              <span>Explore Styles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#9BA1B0] hover:text-[#F4F5F8] hover:bg-white/[0.05] rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </PageContainer>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#090A0F] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block px-3 py-2 text-base font-medium rounded-md transition-colors',
                  isActive
                    ? 'text-[#F4F5F8] bg-white/[0.08]'
                    : 'text-[#9BA1B0] hover:text-[#F4F5F8] hover:bg-white/[0.04]'
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
              className="flex items-center justify-center gap-2 w-full rounded-md bg-[#5E6AD2] text-white px-4 py-2.5 text-sm font-medium shadow-sm"
            >
              <span>Explore Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

