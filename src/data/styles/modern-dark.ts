import { DesignStyle } from '@/types/style';

export const modernDark: DesignStyle = {
  id: 'style-modern-dark',
  slug: 'modern-dark',
  name: 'Modern Dark',
  tagline: 'Engineered obsidian surfaces with precision purple highlights',
  description:
    'A high-precision, dark-mode design system built for modern developer platforms, developer tools, and data-dense SaaS dashboards.',
  category: 'developer-tool',
  tags: ['Dark Mode', 'Developer Tool', 'Linear Style', 'High Contrast', 'Minimalist'],
  isFeatured: true,

  philosophy: {
    direction: 'Engineered Precision & Atmospheric Focus',
    intendedAtmosphere:
      'Distraction-free, deeply utilitarian, and aesthetically sophisticated. Built for prolonged focus with low eye-strain and surgical contrast hierarchy.',
    visualCharacteristics: [
      'Deep obsidian base (#050506) with layered subtle surfaces',
      'Restrained StyPro purple (#5E6AD2) for focal intent and primary actions',
      'Subtle 1px micro-borders (rgba(255, 255, 255, 0.08)) providing tactile card boundaries',
      'Refined typography hierarchy with bright primary headers and muted secondary labels',
      'Micro-chamfered geometric corners (6px - 8px radius) avoiding bubbly rounds',
      'Subtle top-down edge lighting and controlled diffuse shadows',
    ],
    recommendedUseCases: [
      'Developer Tools & CLI Dashboards',
      'Cloud Infrastructure & DevOps Platforms',
      'Engineering Task Trackers & Bug Trackers',
      'Data Analytics & Monitoring Workspaces',
      'Modern AI Coding & Prompt Engineering Interfaces',
    ],
  },

  colors: {
    background: '#050506',
    foreground: '#F4F5F8',
    surface: '#0D0F17',
    surfaceElevated: '#141724',
    primary: '#5E6AD2',
    primaryHover: '#6E79D8',
    primaryForeground: '#FFFFFF',
    secondary: '#1A1E2E',
    secondaryForeground: '#E2E4ED',
    accent: '#282E47',
    accentForeground: '#A3ACDF',
    muted: '#12141F',
    mutedForeground: '#8C92A4',
    border: 'rgba(255, 255, 255, 0.08)',
    borderSubtle: 'rgba(255, 255, 255, 0.04)',
    borderStrong: 'rgba(255, 255, 255, 0.16)',
    ring: '#5E6AD2',
    success: '#10B981',
    warning: '#F59E0B',
    destructive: '#EF4444',
  },

  typography: {
    headingFont: 'var(--font-geist-sans), Inter, -apple-system, sans-serif',
    bodyFont: 'var(--font-geist-sans), Inter, -apple-system, sans-serif',
    monospaceFont: 'var(--font-geist-mono), JetBrains Mono, monospace',
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
      normal: '0',
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
    sectionSpacing: '4rem',
    contentPadding: '1.5rem',
    componentGaps: '1rem',
  },

  shapesEffects: {
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
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
      md: '0 4px 12px 0 rgba(0, 0, 0, 0.7)',
      lg: '0 12px 32px 0 rgba(0, 0, 0, 0.85)',
      colored: '0 0 20px -3px rgba(94, 106, 210, 0.35)',
    },
    elevation: '1',
    backdropBlur: '12px',
    gradients: {
      surface: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
      glow: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(94, 106, 210, 0.15), transparent 70%)',
    },
  },

  layout: {
    maxContentWidth: '1200px',
    gridColumns: '12',
    columnGap: '1.5rem',
    alignmentPrinciples: 'Strict left-aligned grid with deliberate baseline vertical rhythms',
  },

  interaction: {
    hoverBehavior: 'Subtle brightness shift + micro border glow (150ms ease)',
    focusBehavior: 'Visible 2px #5E6AD2 ring with 2px offset',
    transitions: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    animationPreferences: 'Restrained, functional transitions with zero gratuitous bounce',
  },

  componentRules: {
    button: {
      padding: '0.625rem 1.125rem',
      borderRadius: '6px',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      fontWeight: '500',
      shadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
    },
    card: {
      padding: '1.5rem',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      background: '#0D0F17',
      shadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
    },
    input: {
      padding: '0.625rem 0.875rem',
      borderRadius: '6px',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      background: '#080A10',
      focusRing: '2px solid #5E6AD2',
    },
    navigation: {
      height: '64px',
      background: 'rgba(5, 5, 6, 0.8)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(12px)',
    },
    badge: {
      padding: '0.2rem 0.6rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500',
      border: '1px solid rgba(94, 106, 210, 0.3)',
    },
  },
};

