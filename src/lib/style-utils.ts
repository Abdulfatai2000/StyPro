import { CSSProperties } from 'react';
import { DesignStyle } from '@/types/style';

/**
 * Maps a DesignStyle object into CSS custom properties that dynamically style
 * the preview components without needing any Tailwind re-compilation.
 */
export function getStyleCssVariables(style: DesignStyle): CSSProperties {
  return {
    // Colors
    '--style-bg': style.colors.background,
    '--style-fg': style.colors.foreground,
    '--style-surface': style.colors.surface,
    '--style-surface-elevated': style.colors.surfaceElevated,
    '--style-primary': style.colors.primary,
    '--style-primary-hover': style.colors.primaryHover,
    '--style-primary-fg': style.colors.primaryForeground,
    '--style-secondary': style.colors.secondary,
    '--style-secondary-fg': style.colors.secondaryForeground,
    '--style-accent': style.colors.accent,
    '--style-accent-fg': style.colors.accentForeground,
    '--style-muted': style.colors.muted,
    '--style-muted-fg': style.colors.mutedForeground,
    '--style-border': style.colors.border,
    '--style-border-subtle': style.colors.borderSubtle,
    '--style-border-strong': style.colors.borderStrong,
    '--style-ring': style.colors.ring,
    '--style-success': style.colors.success,
    '--style-warning': style.colors.warning,
    '--style-destructive': style.colors.destructive,

    // Typography
    '--style-font-heading': style.typography.headingFont,
    '--style-font-body': style.typography.bodyFont,
    '--style-font-mono': style.typography.monospaceFont,

    // Geometry / Radius
    '--style-radius-none': style.shapesEffects.borderRadius.none,
    '--style-radius-sm': style.shapesEffects.borderRadius.sm,
    '--style-radius-md': style.shapesEffects.borderRadius.md,
    '--style-radius-lg': style.shapesEffects.borderRadius.lg,
    '--style-radius-full': style.shapesEffects.borderRadius.full,

    // Borders
    '--style-border-thin': style.shapesEffects.borderThickness.thin,
    '--style-border-medium': style.shapesEffects.borderThickness.medium,
    '--style-border-thick': style.shapesEffects.borderThickness.thick,

    // Shadows
    '--style-shadow-sm': style.shapesEffects.shadows.sm,
    '--style-shadow-md': style.shapesEffects.shadows.md,
    '--style-shadow-lg': style.shapesEffects.shadows.lg,

    // Spacing
    '--style-gap': style.spacing.componentGaps,
    '--style-padding': style.spacing.contentPadding,
  } as CSSProperties;
}

/**
 * Format a hex or color string cleanly for UI display.
 */
export function formatColor(color: string): string {
  if (color.startsWith('#')) {
    return color.toUpperCase();
  }
  return color;
}
