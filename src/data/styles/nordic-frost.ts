import { DesignStyle } from '@/types/style';

export const nordicFrost: DesignStyle = {
  id: 'style-nordic-frost',
  slug: 'nordic-frost',
  name: 'Nordic Calm',
  tagline: 'Warm bone-white spaces, muted lichen sage & organic Scandi tranquility',
  description:
    'A calming, humanistic Scandinavian minimalist design system combining warm organic neutrals, muted lichen green, terracotta accents, and generous airy whitespace.',
  category: 'minimalist',
  tags: ['Scandinavian', 'Minimalist', 'Organic', 'Warm Light', 'Calm', 'Editorial'],
  isFeatured: false,

  philosophy: {
    direction: 'Scandinavian Hygge & Organic Minimalism',
    intendedAtmosphere:
      'Serene, warm, tactile, and peaceful. Eliminates sensory fatigue through gentle earth tones, soft shadows, and generous spatial cadence.',
    visualCharacteristics: [
      'Warm bone-white canvas (#FAF9F6) paired with soft porcelain card surfaces (#FFFFFF)',
      'Earthy lichen sage green (#5B7065) and terracotta accents (#C86D51)',
      'Gentle slate charcoal typography (#24272A) avoiding harsh pitch black contrast',
      'Soft rounded organic corners (8px - 10px radius)',
      'Subtle warm stone borders (#EAE6DF) with diffuse low-contrast drop shadows',
      'Expansive intentional whitespace providing effortless reading tranquility',
    ],
    recommendedUseCases: [
      'Wellness, Mindfulness & Mental Health Applications',
      'Sustainable Architecture & Interior Design Platforms',
      'Artisan eCommerce & Thoughtful Creator Publishing',
      'Calm Productivity & Distraction-Free Note Taking',
    ],
  },

  colors: {
    background: '#FAF9F6',
    foreground: '#24272A',
    surface: '#FFFFFF',
    surfaceElevated: '#F3F1EC',
    primary: '#5B7065',
    primaryHover: '#4B5E54',
    primaryForeground: '#FFFFFF',
    secondary: '#EBE7E0',
    secondaryForeground: '#3A3F44',
    accent: '#C86D51',
    accentForeground: '#FFFFFF',
    muted: '#F0ECE5',
    mutedForeground: '#7B848B',
    border: '#E8E3DA',
    borderSubtle: '#F2EFEA',
    borderStrong: '#D6CFC4',
    ring: '#5B7065',
    success: '#4D7C5F',
    warning: '#D48C46',
    destructive: '#C04A42',
  },

  typography: {
    headingFont: 'var(--font-geist-sans), Optima, sans-serif',
    bodyFont: 'var(--font-geist-sans), -apple-system, sans-serif',
    monospaceFont: 'var(--font-geist-mono), monospace',
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
      lg: '1.2rem',
      xl: '1.4rem',
      '2xl': '1.85rem',
      '3xl': '2.4rem',
      '4xl': '3.25rem',
    },
    lineHeights: {
      tight: '1.2',
      normal: '1.6',
      relaxed: '1.85',
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.04em',
    },
  },

  spacing: {
    scale: {
      '2xs': '0.25rem',
      xs: '0.5rem',
      sm: '0.875rem',
      md: '1.25rem',
      lg: '1.75rem',
      xl: '2.5rem',
      '2xl': '3.75rem',
      '3xl': '5rem',
    },
    sectionSpacing: '5rem',
    contentPadding: '2rem',
    componentGaps: '1.5rem',
  },

  shapesEffects: {
    borderRadius: {
      none: '0px',
      sm: '6px',
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
      sm: '0 1px 3px rgba(36, 39, 42, 0.04)',
      md: '0 4px 12px rgba(36, 39, 42, 0.05)',
      lg: '0 10px 24px rgba(36, 39, 42, 0.07)',
      colored: '0 4px 14px rgba(200, 109, 81, 0.15)',
    },
    elevation: '1',
    backdropBlur: '0px',
  },

  layout: {
    maxContentWidth: '1200px',
    gridColumns: '12',
    columnGap: '2rem',
    alignmentPrinciples: 'Airy asymmetric whitespace with centered contemplative reading rhythm',
  },

  interaction: {
    hoverBehavior: 'Gentle warmth shift + soft organic elevation (180ms ease)',
    focusBehavior: 'Visible 2px #5B7065 outline with 2px stone offset',
    transitions: 'all 180ms cubic-bezier(0.16, 1, 0.3, 1)',
    animationPreferences: 'Gentle, humanistic easing curves with zero abrupt motion',
  },

  componentRules: {
    button: {
      padding: '0.65rem 1.35rem',
      borderRadius: '8px',
      border: '1px solid #5B7065',
      fontWeight: '500',
      shadow: '0 1px 2px rgba(36, 39, 42, 0.05)',
    },
    card: {
      padding: '2rem',
      borderRadius: '10px',
      border: '1px solid #E8E3DA',
      background: '#FFFFFF',
      shadow: '0 4px 12px rgba(36, 39, 42, 0.04)',
    },
    input: {
      padding: '0.65rem 0.95rem',
      borderRadius: '8px',
      border: '1px solid #D6CFC4',
      background: '#FFFFFF',
      focusRing: '2px solid #5B7065',
    },
    navigation: {
      height: '68px',
      background: '#FAF9F6',
      borderBottom: '1px solid #E8E3DA',
      backdropFilter: 'none',
    },
    badge: {
      padding: '0.25rem 0.65rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500',
      border: '1px solid #D6CFC4',
    },
  },
};

