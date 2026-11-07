import React from 'react';
import { Search, User } from 'lucide-react';
import { DesignStyle } from '@/types/style';

interface PreviewNavbarProps {
  style: DesignStyle;
}

export function PreviewNavbar({ style }: PreviewNavbarProps) {
  const isLight = style.slug === 'swiss-minimalist';

  return (
    <div
      className="w-full flex items-center justify-between px-6 border-b transition-colors"
      style={{
        height: style.componentRules.navigation.height,
        backgroundColor: style.componentRules.navigation.background,
        borderColor: style.colors.border,
        backdropFilter: style.componentRules.navigation.backdropFilter,
        color: style.colors.foreground,
      }}
    >
      {/* Brand logo in preview */}
      <div className="flex items-center gap-3">
        <div
          className="w-7 h-7 flex items-center justify-center font-bold text-xs"
          style={{
            backgroundColor: style.colors.primary,
            color: style.colors.primaryForeground,
            borderRadius: style.shapesEffects.borderRadius.sm,
          }}
        >
          {isLight ? 'SW' : 'MD'}
        </div>
        <span
          className="font-bold tracking-tight text-sm"
          style={{ fontFamily: style.typography.headingFont }}
        >
          Acme {isLight ? 'Studio' : 'Cloud'}
        </span>
      </div>

      {/* Nav items */}
      <div className="hidden sm:flex items-center gap-6 text-xs font-medium">
        <span
          className="cursor-pointer transition-opacity hover:opacity-100"
          style={{ color: style.colors.foreground }}
        >
          Dashboard
        </span>
        <span
          className="cursor-pointer transition-opacity hover:opacity-75"
          style={{ color: style.colors.mutedForeground }}
        >
          Analytics
        </span>
        <span
          className="cursor-pointer transition-opacity hover:opacity-75"
          style={{ color: style.colors.mutedForeground }}
        >
          Deployments
        </span>
        <span
          className="cursor-pointer transition-opacity hover:opacity-75"
          style={{ color: style.colors.mutedForeground }}
        >
          Settings
        </span>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-2 px-2.5 py-1 text-xs border"
          style={{
            borderColor: style.colors.borderSubtle,
            backgroundColor: style.colors.surface,
            borderRadius: style.shapesEffects.borderRadius.sm,
            color: style.colors.mutedForeground,
          }}
        >
          <Search className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Search...</span>
          <kbd
            className="text-[10px] px-1 py-0.5 border"
            style={{
              borderColor: style.colors.border,
              borderRadius: style.shapesEffects.borderRadius.none,
            }}
          >
            ⌘K
          </kbd>
        </div>

        <div
          className="w-7 h-7 flex items-center justify-center border text-xs cursor-pointer"
          style={{
            borderColor: style.colors.border,
            backgroundColor: style.colors.surface,
            borderRadius: style.shapesEffects.borderRadius.full,
            color: style.colors.foreground,
          }}
        >
          <User className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}

