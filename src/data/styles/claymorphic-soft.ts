import { DesignStyle } from '@/types/style';

export const claymorphicSoft: DesignStyle = {
  id: 'style-claymorphic-soft',
  slug: 'claymorphic-soft',
  name: 'Claymorphic Soft',
  tagline: 'Tactile 3D inflated surfaces, soft pastel palettes & friendly squircle geometry',
  description:
    'A delightfully friendly, tactile design system featuring rounded 3D clay volumes, soft ambient multi-layer drop shadows, warm marshmallow surfaces, and organic bouncy micro-interactions.',
  category: 'playful',
  tags: ['Claymorphism', 'Soft 3D', 'Pastel', 'Squircles', 'Tactile UI'],
  isFeatured: false,

  philosophy: {
    direction: 'Tactile Inflated Clay Aesthetic',
    intendedAtmosphere:
      'Approachable, soft, inviting, tactile, and stress-free. Making software feel like comforting physical toys and polished ceramic objects.',
    visualCharacteristics: [
      'Warm milky porcelain canvas (#F8F7F2) with soft marshmallow white cards (#FFFFFF)',
      'Dual-depth soft inflated shadows pairing diffused outer blur with subtle inner white highlights',
      'Gentle lavender purple primary (#7C3AED) balanced by warm peach coral (#FB7185) accents',
      'Generous 16px to 24px squircle corner radii across all cards, buttons, and badges',
      'Pill-shaped action buttons that invite confident, playful physical tapping',
      'Zero harsh stark black borders; soft, low-contrast tonal transitions',
    ],
    recommendedUseCases: [
      'Consumer Mobile & Web Apps (Habit Trackers, Wellbeing, Journaling)',
      'Kids & EdTech Learning Platforms',
      'Friendly Collaboration & Whiteboarding Tools',
      'Community Chat & Creative Social Hubs',
    ],
  },

  colors: {
    background: '#F8F7F2',
    foreground: '#2D283E',
    surface: '#FFFFFF',
    surfaceElevated: '#F2EFEB',
    primary: '#7C3AED',
    primaryHover: '#6D28D9',
    primaryForeground: '#FFFFFF',
    secondary: '#38BDF8',
    secondaryForeground: '#0C4A6E',
    accent: '#FB7185',
    accentForeground: '#FFFFFF',
    muted: '#EDEAE4',
    mutedForeground: '#78716C',
    border: '#E8E3DA',
    borderSubtle: '#F0ECE4',
    borderStrong: '#D6CEC2',
    ring: '#7C3AED',
    success: '#10B981',
    warning: '#F59E0B',
    destructive: '#EF4444',
  },

  typography: {
    headingFont: 'var(--font-geist-sans), "Outfit", "Plus Jakarta Sans", sans-serif',
    bodyFont: 'var(--font-geist-sans), "Plus Jakarta Sans", sans-serif',
    monospaceFont: 'var(--font-geist-mono), "Fira Code", monospace',
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
      tight: '1.25',
      normal: '1.55',
      relaxed: '1.75',
    },
    letterSpacing: {
      tight: '-0.015em',
      normal: '0em',
      wide: '0.02em',
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
      sm: '8px',
      md: '16px',
      lg: '24px',
      full: '9999px',
    },
    borderThickness: {
      thin: '1px',
      medium: '2px',
      thick: '3px',
    },
    borderStyle: 'solid',
    shadows: {
      none: 'none',
      sm: '0 4px 12px rgba(124, 58, 237, 0.06)',
      md: '0 12px 28px -6px rgba(45, 40, 62, 0.08), 0 4px 12px rgba(124, 58, 237, 0.04)',
      lg: '0 20px 40px -10px rgba(45, 40, 62, 0.12), 0 6px 16px rgba(124, 58, 237, 0.06)',
      colored: '0 12px 28px -4px rgba(124, 58, 237, 0.35)',
    },
    elevation: '2',
    backdropBlur: '8px',
  },

  layout: {
    maxContentWidth: '1200px',
    gridColumns: '12',
    columnGap: '1.75rem',
    alignmentPrinciples: 'Pill-rounded floating modular containers with generous breathable padding',
  },

  interaction: {
    hoverBehavior: 'Gentle spring lift with expanding soft pastel shadow glow',
    focusBehavior: '3px solid #7C3AED ring with 2px soft offset',
    transitions: 'all 220ms cubic-bezier(0.34, 1.56, 0.64, 1)',
    animationPreferences: 'Playful bouncy spring physics with squishy tactile feedback',
  },

  componentRules: {
    button: {
      padding: '0.75rem 1.75rem',
      borderRadius: '9999px',
      border: 'none',
      fontWeight: '600',
      shadow: '0 8px 20px -4px rgba(124, 58, 237, 0.3)',
    },
    card: {
      padding: '1.75rem',
      borderRadius: '20px',
      border: '1px solid #E8E3DA',
      background: '#FFFFFF',
      shadow: '0 12px 32px -8px rgba(45, 40, 62, 0.07)',
    },
    input: {
      padding: '0.75rem 1.25rem',
      borderRadius: '14px',
      border: '1.5px solid #E8E3DA',
      background: '#FFFFFF',
      focusRing: '3px solid #7C3AED',
    },
    navigation: {
      height: '70px',
      background: 'rgba(248, 247, 242, 0.88)',
      borderBottom: '1px solid #E8E3DA',
      backdropFilter: 'blur(12px)',
    },
    badge: {
      padding: '0.3rem 0.875rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '600',
      border: '1px solid #EDEAE4',
    },
  },
};
