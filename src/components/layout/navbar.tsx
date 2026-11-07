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
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#08090c]/80 backdrop-blur-xl">
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
                    'flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-160',
                    isActive
                      ? 'text-white bg-white/[0.08] shadow-xs'
                      : 'text-[#9499ad] hover:text-white hover:bg-white/[0.04]'
                  )}
                >
                  {Icon && <Icon className="w-4 h-4 text-[#818cf8]" />}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/explore" className="btn-primary text-xs !py-2 !px-3.5">
              <span>Explore 12 Styles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#9499ad] hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </PageContainer>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0e1017] px-4 pt-3 pb-5 space-y-2 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  isActive
                    ? 'text-white bg-white/[0.08]'
                    : 'text-[#9499ad] hover:text-white hover:bg-white/[0.04]'
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
