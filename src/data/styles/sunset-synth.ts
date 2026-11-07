import { DesignStyle } from '@/types/style';

export const sunsetSynth: DesignStyle = {
  id: 'style-sunset-synth',
  slug: 'sunset-synth',
  name: 'Sunset Synthwave',
  tagline: '80s retro-futurism, glowing neon fuchsia, laser cyan & twilight gradients',
  description:
    'An intoxicating 1980s retro-futurist design system featuring deep violet twilight backgrounds, electric magenta lasers, glowing neon gradients, and arcade grid aesthetics.',
  category: 'cyberpunk',
  tags: ['Synthwave', 'Retrofuturism', 'Neon Glow', '80s Arcade', 'Vibrant Dark'],
  isFeatured: false,

  philosophy: {
    direction: 'Electrified 80s Outrun Futurism',
    intendedAtmosphere:
      'High-voltage, nostalgic, cinematic, and thrilling. Evoking endless sunset highways, chrome supercars, and pulsing synthesizers.',
    visualCharacteristics: [
      'Deep twilight space violet background (#0D0221) with dark orchid card surfaces (#190B38)',
      'Blazing laser fuchsia primary (#FF007F) with intense neon ambient emission',
      'Electric hyper-cyan secondary (#00F0FF) delivering maximum cross-spectrum contrast',
      'Warm sunset tangerine accent (#FF8E3C) evoking golden dusk horizons',
      'Radiant multi-layer neon glow drop shadows illuminating bordering elements',
      'Sleek modern geometric radius (6px) with high-saturation action badges',
    ],
    recommendedUseCases: [
      'Gaming Portals, Esports Tournaments & Streamer Dashboards',
      'Audio Production, Synthesizer & Music Creation Web Apps',
      'Creative Agency Showcases & Event Landing Pages',
      'Web3 Entertainment, Metaverse Experiences & NFT Drops',
    ],
  },

  colors: {
    background: '#0D0221',
    foreground: '#FEEBFA',
    surface: '#190B38',
    surfaceElevated: '#261447',
    primary: '#FF007F',
    primaryHover: '#E60072',
    primaryForeground: '#FFFFFF',
    secondary: '#00F0FF',
    secondaryForeground: '#0D0221',
    accent: '#FF8E3C',
    accentForeground: '#0D0221',
    muted: '#2A1A54',
    mutedForeground: '#B5A5D5',
    border: '#3D2475',
    borderSubtle: '#261447',
    borderStrong: '#6B38B8',
    ring: '#FF007F',
    success: '#00FFB2',
    warning: '#FFE600',
    destructive: '#FF2A6D',
  },

  typography: {
    headingFont: 'var(--font-geist-sans), "Orbitron", "Montserrat", sans-serif',
    bodyFont: 'var(--font-geist-sans), "Inter", sans-serif',
    monospaceFont: 'var(--font-geist-mono), "Share Tech Mono", monospace',
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
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
    },
    lineHeights: {
      tight: '1.15',
      normal: '1.5',
      relaxed: '1.7',
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0.02em',
      wide: '0.08em',
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
      sm: '3px',
      md: '6px',
      lg: '10px',
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
      sm: '0 2px 8px rgba(255, 0, 127, 0.15)',
      md: '0 0 16px rgba(255, 0, 127, 0.3), 0 4px 12px rgba(0, 0, 0, 0.6)',
      lg: '0 0 32px rgba(255, 0, 127, 0.45), 0 8px 24px rgba(0, 0, 0, 0.8)',
      colored: '0 0 24px rgba(0, 240, 255, 0.5), 0 0 8px rgba(255, 0, 127, 0.6)',
    },
    elevation: '3',
    backdropBlur: '12px',
    gradients: {
      surface: 'linear-gradient(135deg, rgba(255, 0, 127, 0.08) 0%, rgba(0, 240, 255, 0.04) 100%)',
      glow: 'radial-gradient(ellipse at 50% 0%, rgba(255, 0, 127, 0.3) 0%, transparent 70%)',
    },
  },

  layout: {
    maxContentWidth: '1280px',
    gridColumns: '12',
    columnGap: '1.5rem',
    alignmentPrinciples: 'Vibrant neon grid alignment with dramatic glowing focal boundaries',
  },

  interaction: {
    hoverBehavior: 'Intense dual-color cyan-magenta neon blooming with scale(1.02)',
    focusBehavior: '2px solid #00F0FF outline with 4px neon fuchsia glow aura',
    transitions: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    animationPreferences: 'High-energy electronic pulses, chromatic ripples, and glowing borders',
  },

  componentRules: {
    button: {
      padding: '0.625rem 1.5rem',
      borderRadius: '6px',
      border: '1px solid #FF007F',
      fontWeight: '700',
      shadow: '0 0 16px rgba(255, 0, 127, 0.4)',
    },
    card: {
      padding: '1.5rem',
      borderRadius: '6px',
      border: '1px solid #3D2475',
      background: '#190B38',
      shadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
    },
    input: {
      padding: '0.625rem 1rem',
      borderRadius: '6px',
      border: '1px solid #3D2475',
      background: '#0D0221',
      focusRing: '2px solid #00F0FF',
    },
    navigation: {
      height: '66px',
      background: 'rgba(25, 11, 56, 0.85)',
      borderBottom: '1px solid #3D2475',
      backdropFilter: 'blur(16px)',
    },
    badge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '700',
      border: '1px solid #00F0FF',
    },
  },
};
