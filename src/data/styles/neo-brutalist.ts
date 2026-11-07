import { DesignStyle } from '@/types/style';

export const neoBrutalist: DesignStyle = {
  id: 'style-neo-brutalist',
  slug: 'neo-brutalist',
  name: 'Neo-Brutalist Pop',
  tagline: 'High-contrast stark borders, hard offset drop shadows & unapologetic saturated color pops',
  description:
    'A high-energy, raw digital brutalist system combining thick 2.5px stark black borders, zero-blur hard drop shadows, and vibrant electric canary and cyber coral accents.',
  category: 'neo-brutalist',
  tags: ['Neo-Brutalism', 'High Contrast', 'Hard Shadows', 'Vibrant', 'Bold Typography'],
  isFeatured: true,

  philosophy: {
    direction: 'Unapologetic Tactile Brutalism',
    intendedAtmosphere:
      'Playful, rebellious, punchy, and utterly distinct from sterile corporate SaaS. Every container is physical, high-contrast, and tangible.',
    visualCharacteristics: [
      'Stark warm off-white canvas (#FFFDF5) paired with pure ink black borders (#0A0A0A)',
      'Zero-blur hard offset shadows (4px 4px 0px #0A0A0A) giving tactile physical lift',
      'Electric canary yellow (#FFE600) and vibrant cyber coral (#FF5E5B) action focal points',
      'Sharp rectangular geometry (0px border radius) contrasted with full pill badges',
      'Heavy 2.5px border thickness on all buttons, cards, and input controls',
      'High-impact display typography with bold weights and tight tracking',
    ],
    recommendedUseCases: [
      'Indie Hacker SaaS & Developer Tools',
      'Creative Agency & Portfolio Platforms',
      'Hackathons & Web3 / Fintech Rebel Brands',
      'Devrel Landing Pages & Community Hubs',
    ],
  },

  colors: {
    background: '#FFFDF5',
    foreground: '#0A0A0A',
    surface: '#FFFFFF',
    surfaceElevated: '#FFF9E6',
    primary: '#FFE600',
    primaryHover: '#FFD600',
    primaryForeground: '#0A0A0A',
    secondary: '#00F0FF',
    secondaryForeground: '#0A0A0A',
    accent: '#FF5E5B',
    accentForeground: '#FFFFFF',
    muted: '#F0EFEA',
    mutedForeground: '#525252',
    border: '#0A0A0A',
    borderSubtle: '#0A0A0A',
    borderStrong: '#0A0A0A',
    ring: '#0A0A0A',
    success: '#00D084',
    warning: '#FFA800',
    destructive: '#FF3B30',
  },

  typography: {
    headingFont: 'var(--font-geist-sans), Inter, Impact, sans-serif',
    bodyFont: 'var(--font-geist-sans), Inter, sans-serif',
    monospaceFont: 'var(--font-geist-mono), Courier New, monospace',
    fontWeights: {
      regular: 400,
      medium: 600,
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
      '3xl': '2.5rem',
      '4xl': '3.5rem',
    },
    lineHeights: {
      tight: '1.1',
      normal: '1.45',
      relaxed: '1.65',
    },
    letterSpacing: {
      tight: '-0.03em',
      normal: '0',
      wide: '0.04em',
    },
  },

  spacing: {
    scale: {
      '2xs': '0.25rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1.25rem',
      lg: '1.75rem',
      xl: '2.5rem',
      '2xl': '3.5rem',
      '3xl': '5rem',
    },
    sectionSpacing: '4.5rem',
    contentPadding: '1.75rem',
    componentGaps: '1.25rem',
  },

  shapesEffects: {
    borderRadius: {
      none: '0px',
      sm: '0px',
      md: '0px',
      lg: '0px',
      full: '9999px',
    },
    borderThickness: {
      thin: '2px',
      medium: '2.5px',
      thick: '3.5px',
    },
    borderStyle: 'solid',
    shadows: {
      none: 'none',
      sm: '2px 2px 0px #0A0A0A',
      md: '4px 4px 0px #0A0A0A',
      lg: '6px 6px 0px #0A0A0A',
      colored: '4px 4px 0px #FF5E5B',
    },
    elevation: '2',
    backdropBlur: '0px',
  },

  layout: {
    maxContentWidth: '1240px',
    gridColumns: '12',
    columnGap: '1.5rem',
    alignmentPrinciples: 'Offset physical block alignment with stark black perimeter framing',
  },

  interaction: {
    hoverBehavior: 'Active push-down: translate(-2px, -2px) with expanding 6px hard shadow',
    focusBehavior: 'Solid 3px #0A0A0A outline with 2px offset',
    transitions: 'all 120ms cubic-bezier(0, 0, 0.2, 1)',
    animationPreferences: 'Instantaneous tactile snaps mimicking physical push buttons',
  },

  componentRules: {
    button: {
      padding: '0.75rem 1.5rem',
      borderRadius: '0px',
      border: '2.5px solid #0A0A0A',
      fontWeight: '700',
      shadow: '3px 3px 0px #0A0A0A',
    },
    card: {
      padding: '1.75rem',
      borderRadius: '0px',
      border: '2.5px solid #0A0A0A',
      background: '#FFFFFF',
      shadow: '5px 5px 0px #0A0A0A',
    },
    input: {
      padding: '0.75rem 1rem',
      borderRadius: '0px',
      border: '2.5px solid #0A0A0A',
      background: '#FFFFFF',
      focusRing: '3px solid #FFE600',
    },
    navigation: {
      height: '68px',
      background: '#FFFDF5',
      borderBottom: '2.5px solid #0A0A0A',
      backdropFilter: 'none',
    },
    badge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '700',
      border: '2px solid #0A0A0A',
    },
  },
};
