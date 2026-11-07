import { DesignStyle } from '@/types/style';

export const cyberDeck: DesignStyle = {
  id: 'style-cyber-deck',
  slug: 'cyber-deck',
  name: 'Cyber Deck Terminal',
  tagline: 'Phosphor green CRT vectors, monospaced HUD matrices & dark telemetry mesh',
  description:
    'A retro-futuristic terminal interface inspired by aerospace avionics, hacker decks, and cybernetic telemetry monitors.',
  category: 'cyberpunk',
  tags: ['Cyberpunk', 'Terminal', 'Hacker', 'Phosphor Green', 'Monospaced', 'Dark Mode'],
  isFeatured: true,

  philosophy: {
    direction: 'Retro-Futuristic CRT & Military Avionics HUD',
    intendedAtmosphere:
      'Immersive, tactical, and dense with real-time telemetry. Feels like an authenticated high-security terminal console.',
    visualCharacteristics: [
      'Deep CRT obsidian base (#030708) with subtle vector wireframe grids',
      'Electric phosphor green (#00FF9D) and cybernetic cyan (#00E5FF) data readouts',
      'Monospaced typography hierarchy throughout display headings and body telemetry',
      'Hairline tactical borders with micro corner ticks and glowing focus rings',
      'Subtle phosphor CRT scanline ambience and luminous green diffuse glow',
    ],
    recommendedUseCases: [
      'Cybersecurity & Threat Detection Ops Consoles',
      'High-Frequency Crypto Trading Terminals',
      'Cloud Telemetry, Cluster Monitoring & CLI Web Interfaces',
      'Web3 Protocol Dashboards & Sci-Fi Gaming UIs',
    ],
  },

  colors: {
    background: '#030708',
    foreground: '#E0FFF4',
    surface: '#081014',
    surfaceElevated: '#0E1D24',
    primary: '#00FF9D',
    primaryHover: '#33FFAE',
    primaryForeground: '#030708',
    secondary: '#0E242B',
    secondaryForeground: '#00E5FF',
    accent: '#00E5FF',
    accentForeground: '#030708',
    muted: '#09151B',
    mutedForeground: '#5C8A7B',
    border: 'rgba(0, 255, 157, 0.2)',
    borderSubtle: 'rgba(0, 255, 157, 0.1)',
    borderStrong: 'rgba(0, 255, 157, 0.45)',
    ring: '#00FF9D',
    success: '#00FF9D',
    warning: '#FFB800',
    destructive: '#FF3366',
  },

  typography: {
    headingFont: 'var(--font-geist-mono), JetBrains Mono, monospace',
    bodyFont: 'var(--font-geist-mono), JetBrains Mono, monospace',
    monospaceFont: 'var(--font-geist-mono), JetBrains Mono, monospace',
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSizes: {
      xs: '0.7rem',
      sm: '0.8rem',
      base: '0.9rem',
      lg: '1.1rem',
      xl: '1.35rem',
      '2xl': '1.75rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
    },
    lineHeights: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.7',
    },
    letterSpacing: {
      tight: '0',
      normal: '0.02em',
      wide: '0.08em',
    },
  },

  spacing: {
    scale: {
      '2xs': '0.2rem',
      xs: '0.4rem',
      sm: '0.8rem',
      md: '1.2rem',
      lg: '1.6rem',
      xl: '2.4rem',
      '2xl': '3.2rem',
      '3xl': '4.8rem',
    },
    sectionSpacing: '4rem',
    contentPadding: '1.5rem',
    componentGaps: '1rem',
  },

  shapesEffects: {
    borderRadius: {
      none: '0px',
      sm: '2px',
      md: '2px',
      lg: '4px',
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
      sm: '0 0 8px rgba(0, 255, 157, 0.15)',
      md: '0 0 16px rgba(0, 255, 157, 0.25)',
      lg: '0 0 28px rgba(0, 255, 157, 0.35)',
      colored: '0 0 20px rgba(0, 255, 157, 0.5)',
    },
    elevation: '1',
    backdropBlur: '16px',
  },

  layout: {
    maxContentWidth: '1280px',
    gridColumns: '12',
    columnGap: '1.25rem',
    alignmentPrinciples: 'Dense telemetry matrix aligned to monospaced coordinate brackets',
  },

  interaction: {
    hoverBehavior: 'Phosphor glow intensification + coordinate scanline pulse (100ms)',
    focusBehavior: 'Sharp 2px #00FF9D outline with 0 0 10px #00FF9D glow',
    transitions: 'all 120ms ease-out',
    animationPreferences: 'Instant raster scanline transitions with subtle digital flicker',
  },

  componentRules: {
    button: {
      padding: '0.55rem 1.15rem',
      borderRadius: '2px',
      border: '1px solid #00FF9D',
      fontWeight: '600',
      shadow: '0 0 10px rgba(0, 255, 157, 0.3)',
    },
    card: {
      padding: '1.5rem',
      borderRadius: '2px',
      border: '1px solid rgba(0, 255, 157, 0.25)',
      background: '#081014',
      shadow: '0 0 16px rgba(0, 255, 157, 0.1)',
    },
    input: {
      padding: '0.55rem 0.85rem',
      borderRadius: '2px',
      border: '1px solid rgba(0, 255, 157, 0.3)',
      background: '#04090C',
      focusRing: '2px solid #00FF9D',
    },
    navigation: {
      height: '60px',
      background: '#030708',
      borderBottom: '1px solid rgba(0, 255, 157, 0.25)',
      backdropFilter: 'blur(16px)',
    },
    badge: {
      padding: '0.2rem 0.5rem',
      borderRadius: '2px',
      fontSize: '0.7rem',
      fontWeight: '600',
      border: '1px solid rgba(0, 255, 157, 0.4)',
    },
  },
};

