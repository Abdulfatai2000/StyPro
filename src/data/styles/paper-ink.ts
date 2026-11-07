import { DesignStyle } from '@/types/style';

export const paperInk: DesignStyle = {
  id: 'style-paper-ink',
  slug: 'paper-ink',
  name: 'Paper & Ink',
  tagline: 'Warm tactile parchment, sumi ink typography & literary editorial refinement',
  description:
    'A timeless editorial design system inspired by premium book arts, physical printmaking, and thoughtful literary longform publications.',
  category: 'editorial',
  tags: ['Editorial', 'Parchment', 'Serif', 'Literary', 'Warm Minimalism'],
  isFeatured: false,

  philosophy: {
    direction: 'Classical Literary Typographic System',
    intendedAtmosphere:
      'Reflective, scholarly, authoritative, and physically comforting. Treating digital screens as fine Japanese washi paper and artisanal bookbinding.',
    visualCharacteristics: [
      'Warm tactile parchment canvas (#F7F4EE) paired with deep carbon sumi ink (#1B1714)',
      'Rich terracotta crimson accent (#A72D23) for illuminated drop-caps and author signatures',
      'Hairline warm-tan borders (#E5DECE) reminiscent of fine bookbinder rule lines',
      'Classical serif display headers with generous, relaxed reading line heights (1.75)',
      'Subtle deckle-edge surface elevations without artificial synthetic drop shadows',
      'Warm antique bone cards (#FAF8F3) with generous, calming whitespace margins',
    ],
    recommendedUseCases: [
      'Digital Publishing, Journals & Thought Leadership Substack-Style Portals',
      'Literary Magazines, Poetry Archives & Cultural Essay Platforms',
      'Philosophy & Research Institute Research Publications',
      'Artisanal Coffee, Wine, Architecture & Heritage Brand Sites',
    ],
  },

  colors: {
    background: '#F7F4EE',
    foreground: '#1B1714',
    surface: '#FAF8F3',
    surfaceElevated: '#FFFFFF',
    primary: '#1B1714',
    primaryHover: '#38322C',
    primaryForeground: '#FAF8F3',
    secondary: '#8C4331',
    secondaryForeground: '#FFF7F5',
    accent: '#A72D23',
    accentForeground: '#FFFFFF',
    muted: '#ECE6D8',
    mutedForeground: '#6E645A',
    border: '#DFD7C7',
    borderSubtle: '#EBE5D8',
    borderStrong: '#C5BCAB',
    ring: '#8C4331',
    success: '#2E6F40',
    warning: '#B8741A',
    destructive: '#A72D23',
  },

  typography: {
    headingFont: 'var(--font-geist-sans), "Playfair Display", Georgia, serif',
    bodyFont: 'var(--font-geist-sans), "Source Serif Pro", Georgia, serif',
    monospaceFont: 'var(--font-geist-mono), "Courier Prime", monospace',
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSizes: {
      xs: '0.8125rem',
      sm: '0.9375rem',
      base: '1.0625rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.875rem',
      '3xl': '2.375rem',
      '4xl': '3rem',
    },
    lineHeights: {
      tight: '1.25',
      normal: '1.65',
      relaxed: '1.85',
    },
    letterSpacing: {
      tight: '-0.015em',
      normal: '0em',
      wide: '0.03em',
    },
  },

  spacing: {
    scale: {
      '2xs': '0.25rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.75rem',
      xl: '2.5rem',
      '2xl': '3.5rem',
      '3xl': '5rem',
    },
    sectionSpacing: '5rem',
    contentPadding: '2rem',
    componentGaps: '1.5rem',
  },

  shapesEffects: {
    borderRadius: {
      none: '0px',
      sm: '2px',
      md: '4px',
      lg: '6px',
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
      sm: '0 1px 2px rgba(27, 23, 20, 0.04)',
      md: '0 4px 12px rgba(27, 23, 20, 0.06)',
      lg: '0 10px 24px rgba(27, 23, 20, 0.08)',
      colored: '0 4px 16px rgba(167, 45, 35, 0.12)',
    },
    elevation: '1',
    backdropBlur: '4px',
  },

  layout: {
    maxContentWidth: '1080px',
    gridColumns: '12',
    columnGap: '2rem',
    alignmentPrinciples: 'Golden ratio typographic hierarchy with single-column reading comfort',
  },

  interaction: {
    hoverBehavior: 'Warm sepia underline reveal with gentle ink opacity transitions',
    focusBehavior: '1px solid #8C4331 outline with 2px parchment offset',
    transitions: 'all 200ms ease-out',
    animationPreferences: 'Gentle, contemplative fades mimicking turned parchment pages',
  },

  componentRules: {
    button: {
      padding: '0.625rem 1.5rem',
      borderRadius: '2px',
      border: '1px solid #1B1714',
      fontWeight: '500',
      shadow: 'none',
    },
    card: {
      padding: '2rem',
      borderRadius: '2px',
      border: '1px solid #DFD7C7',
      background: '#FAF8F3',
      shadow: '0 2px 8px rgba(27, 23, 20, 0.04)',
    },
    input: {
      padding: '0.75rem 1rem',
      borderRadius: '2px',
      border: '1px solid #DFD7C7',
      background: '#FFFFFF',
      focusRing: '1.5px solid #8C4331',
    },
    navigation: {
      height: '72px',
      background: '#F7F4EE',
      borderBottom: '1px solid #DFD7C7',
      backdropFilter: 'none',
    },
    badge: {
      padding: '0.2rem 0.625rem',
      borderRadius: '2px',
      fontSize: '0.75rem',
      fontWeight: '600',
      border: '1px solid #DFD7C7',
    },
  },
};
