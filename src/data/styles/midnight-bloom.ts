import { DesignStyle } from '@/types/style';

export const midnightBloom: DesignStyle = {
  id: 'style-midnight-bloom',
  slug: 'midnight-bloom',
  name: 'Midnight Bloom',
  tagline: 'Deep obsidian sapphire canvas with radiant emerald accents & golden precision',
  description:
    'An elite, high-trust fintech and wealth-management design system pairing deep space navy tones with luminescent emerald green and gilded amber metrics.',
  category: 'enterprise',
  tags: ['Fintech', 'Luxury Dark', 'Emerald Accent', 'High Trust', 'Data-Dense'],
  isFeatured: true,

  philosophy: {
    direction: 'Prestige Financial Architecture',
    intendedAtmosphere:
      'Executive, sovereign, exceptionally precise, and secure. Evoking high-value institutional intelligence and wealth growth.',
    visualCharacteristics: [
      'Deep obsidian sapphire canvas (#030712) with micro-fine slate borders (#1E293B)',
      'Luminescent emerald green primary (#10B981) indicating upward yield, success, and security',
      'Refined champagne gold accent (#F59E0B) for sovereign status badges and key metrics',
      'Restrained 8px radius geometry delivering disciplined executive structure',
      'Subtle emerald ambient glows on active financial surfaces and primary CTAs',
      'Tabular mono numerals engineered for rapid scanability and financial audits',
    ],
    recommendedUseCases: [
      'Next-Gen Fintech & Neobanking Portals',
      'Institutional Investment & Asset Management Dashboards',
      'Crypto Wealth & DeFi Protocol Interfaces',
      'Executive Intelligence & Corporate Treasury Software',
    ],
  },

  colors: {
    background: '#030712',
    foreground: '#F9FAFB',
    surface: '#0B0F19',
    surfaceElevated: '#111827',
    primary: '#10B981',
    primaryHover: '#059669',
    primaryForeground: '#022C22',
    secondary: '#6366F1',
    secondaryForeground: '#EEF2FF',
    accent: '#F59E0B',
    accentForeground: '#451A03',
    muted: '#1F2937',
    mutedForeground: '#9CA3AF',
    border: '#1F2937',
    borderSubtle: '#111827',
    borderStrong: '#374151',
    ring: '#10B981',
    success: '#10B981',
    warning: '#F59E0B',
    destructive: '#EF4444',
  },

  typography: {
    headingFont: 'var(--font-geist-sans), "Plus Jakarta Sans", sans-serif',
    bodyFont: 'var(--font-geist-sans), "Plus Jakarta Sans", sans-serif',
    monospaceFont: 'var(--font-geist-mono), "JetBrains Mono", monospace',
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    lineHeights: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.7',
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0em',
      wide: '0.04em',
    },
  },

  spacing: {
    scale: {
      '2xs': '0.25rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem',
    },
    sectionSpacing: '4.5rem',
    contentPadding: '1.75rem',
    componentGaps: '1.25rem',
  },

  shapesEffects: {
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      full: '9999px',
    },
    borderThickness: {
      thin: '1px',
      medium: '1.5px',
      thick: '2px',
    },
    borderStyle: 'solid',
    shadows: {
      none: 'none',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.6)',
      md: '0 4px 16px -2px rgba(0, 0, 0, 0.7), 0 0 12px rgba(16, 185, 129, 0.05)',
      lg: '0 12px 32px -4px rgba(0, 0, 0, 0.8), 0 0 24px rgba(16, 185, 129, 0.08)',
      colored: '0 0 20px rgba(16, 185, 129, 0.25), 0 4px 12px rgba(0, 0, 0, 0.5)',
    },
    elevation: '1',
    backdropBlur: '12px',
    gradients: {
      surface: 'linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 100%)',
      glow: 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
    },
  },

  layout: {
    maxContentWidth: '1360px',
    gridColumns: '12',
    columnGap: '1.5rem',
    alignmentPrinciples: 'Data-dense asymmetric modular grid with prominent KPI metrics telemetry',
  },

  interaction: {
    hoverBehavior: 'Luminescent border highlight transition with subtle emerald aura glow',
    focusBehavior: '2px emerald ring outline (#10B981) with 2px offset',
    transitions: 'all 160ms cubic-bezier(0.16, 1, 0.3, 1)',
    animationPreferences: 'Precise financial value counts with smooth state cross-fades',
  },

  componentRules: {
    button: {
      padding: '0.625rem 1.25rem',
      borderRadius: '8px',
      border: '1px solid rgba(16, 185, 129, 0.3)',
      fontWeight: '600',
      shadow: '0 2px 8px rgba(16, 185, 129, 0.2)',
    },
    card: {
      padding: '1.5rem',
      borderRadius: '8px',
      border: '1px solid #1F2937',
      background: '#0B0F19',
      shadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
    },
    input: {
      padding: '0.625rem 0.875rem',
      borderRadius: '8px',
      border: '1px solid #1F2937',
      background: '#030712',
      focusRing: '2px solid #10B981',
    },
    navigation: {
      height: '64px',
      background: 'rgba(3, 7, 18, 0.85)',
      borderBottom: '1px solid #1F2937',
      backdropFilter: 'blur(16px)',
    },
    badge: {
      padding: '0.2rem 0.625rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '600',
      border: '1px solid rgba(16, 185, 129, 0.3)',
    },
  },
};
