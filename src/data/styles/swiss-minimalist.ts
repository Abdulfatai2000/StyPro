import { DesignStyle } from '@/types/style';

export const swissMinimalist: DesignStyle = {
  id: 'style-swiss-minimalist',
  slug: 'swiss-minimalist',
  name: 'Swiss Minimalist',
  tagline: 'Asymmetric grid discipline, bold editorial typography & pure functional light space',
  description:
    'A timeless design philosophy anchored in the International Typographic Style (Die Neue Graphik), featuring strong typographic scale, strict geometric grids, and uncompromised clarity.',
  category: 'editorial',
  tags: ['Light Mode', 'Swiss Style', 'Editorial', 'Typography Led', 'Grid System', 'Minimalist'],
  isFeatured: true,

  philosophy: {
    direction: 'International Typographic & Grid-Driven Objectivity',
    intendedAtmosphere:
      'Intellectual, crisp, authoritative, and profoundly legible. Pure content-first architecture where typography and white space replace superfluous decorative chrome.',
    visualCharacteristics: [
      'Light architectural neutral canvas (#F7F7F8) paired with pure white surfaces (#FFFFFF)',
      'High-contrast stark ink black typography (#0D0D11) with deep vermillion-red accent (#E11D48)',
      'Razor-sharp geometric corners (0px - 2px radius) with crisp architectural lines',
      'Strict geometric grid hierarchy with asymmetric weight distribution and large display numerals',
      'Hairline borders (#E2E2E6) with flat or microscopic 1px elevation shadows',
      'Generous functional whitespace establishing effortless readability',
    ],
    recommendedUseCases: [
      'Design Engineering & Architecture Portfolios',
      'High-End Editorial Publications & Whitepapers',
      'Research Institutions & Think-Tank Knowledge Hubs',
      'Fintech & Legal Systems Demanding Authoritative Clarity',
      'Modern Typography Specimen Tools',
    ],
  },

  colors: {
    background: '#F7F7F8',
    foreground: '#0D0D11',
    surface: '#FFFFFF',
    surfaceElevated: '#ECECEF',
    primary: '#0D0D11',
    primaryHover: '#26262F',
    primaryForeground: '#FFFFFF',
    secondary: '#E8E8EC',
    secondaryForeground: '#0D0D11',
    accent: '#E11D48', // International Swiss Vermillion Red
    accentForeground: '#FFFFFF',
    muted: '#F0F0F3',
    mutedForeground: '#656573',
    border: '#E2E2E6',
    borderSubtle: '#EEEEF2',
    borderStrong: '#C8C8D0',
    ring: '#0D0D11',
    success: '#059669',
    warning: '#D97706',
    destructive: '#DC2626',
  },

  typography: {
    headingFont: 'var(--font-geist-sans), Helvetica Neue, Arial, sans-serif',
    bodyFont: 'var(--font-geist-sans), Helvetica Neue, Arial, sans-serif',
    monospaceFont: 'var(--font-geist-mono), Courier New, monospace',
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 700,
      bold: 900,
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.75rem',
      '4xl': '3.75rem',
    },
    lineHeights: {
      tight: '1.05',
      normal: '1.45',
      relaxed: '1.65',
    },
    letterSpacing: {
      tight: '-0.035em',
      normal: '-0.01em',
      wide: '0.06em',
    },
  },

  spacing: {
    scale: {
      '2xs': '0.25rem',
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
      '2xl': '4.5rem',
      '3xl': '6rem',
    },
    sectionSpacing: '5rem',
    contentPadding: '2rem',
    componentGaps: '1.5rem',
  },

  shapesEffects: {
    borderRadius: {
      none: '0px',
      sm: '0px',
      md: '2px',
      lg: '2px',
      full: '0px',
    },
    borderThickness: {
      thin: '1px',
      medium: '1.5px',
      thick: '2px',
    },
    borderStyle: 'solid',
    shadows: {
      none: 'none',
      sm: '0 1px 2px rgba(0, 0, 0, 0.04)',
      md: '0 2px 6px rgba(0, 0, 0, 0.06)',
      lg: '0 8px 18px rgba(0, 0, 0, 0.08)',
      colored: 'none',
    },
    elevation: '0',
    backdropBlur: '0px',
  },

  layout: {
    maxContentWidth: '1280px',
    gridColumns: '12',
    columnGap: '2rem',
    alignmentPrinciples: 'Rigid baseline grid, left-anchored typography with stark asymmetric negative space',
  },

  interaction: {
    hoverBehavior: 'High contrast black/vermillion invert with zero motion delay (100ms)',
    focusBehavior: 'Solid 2px #0D0D11 outline with 2px offset',
    transitions: 'all 100ms ease',
    animationPreferences: 'Instantaneous, abrupt state switches reflecting print graphic precision',
  },

  componentRules: {
    button: {
      padding: '0.75rem 1.5rem',
      borderRadius: '0px',
      border: '1.5px solid #0D0D11',
      fontWeight: '600',
      shadow: 'none',
    },
    card: {
      padding: '2rem',
      borderRadius: '0px',
      border: '1px solid #E2E2E6',
      background: '#FFFFFF',
      shadow: 'none',
    },
    input: {
      padding: '0.75rem 1rem',
      borderRadius: '0px',
      border: '1px solid #0D0D11',
      background: '#FFFFFF',
      focusRing: '2px solid #0D0D11',
    },
    navigation: {
      height: '68px',
      background: '#FFFFFF',
      borderBottom: '1px solid #E2E2E6',
      backdropFilter: 'none',
    },
    badge: {
      padding: '0.25rem 0.5rem',
      borderRadius: '0px',
      fontSize: '0.7rem',
      fontWeight: '700',
      border: '1px solid #0D0D11',
    },
  },
};
