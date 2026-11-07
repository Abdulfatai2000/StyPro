import { DesignStyle } from '@/types/style';

export const monochromeWireframe: DesignStyle = {
  id: 'style-monochrome-wireframe',
  slug: 'monochrome-wireframe',
  name: 'Monochrome Blueprint',
  tagline: 'Architectural drafting lines, sharp blueprint grids & technical schematics',
  description:
    'An ultra-precise CAD and architectural blueprint design system defined by razor-thin technical gridlines, high-precision coordinates, sharp zero-radius geometry, and cyan draft accents.',
  category: 'developer-tool',
  tags: ['Wireframe', 'Blueprint', 'CAD Drafting', 'Technical', 'High Precision'],
  isFeatured: false,

  philosophy: {
    direction: 'Architectural Blueprint Schematics',
    intendedAtmosphere:
      'Engineered, structural, ultra-precise, and transparent. Revealing the skeletal structural beauty of interface layouts without synthetic decor.',
    visualCharacteristics: [
      'Deep architectural drafting navy canvas (#090D16) with structured dark grid panels (#0E1424)',
      'Crisp blueprint cyan primary (#38BDF8) marking active nodes, focal paths, and structural vectors',
      'Construction safety amber accent (#FB923C) highlighting critical alerts and benchmark tolerances',
      'Absolute sharp geometry (0px border radius) across all cards, panels, inputs, and indicators',
      'Razor-thin 1px technical bounding boxes mimicking engineering schematics and CAD layouts',
      'Technical monospaced coordinate badges and tabular telemetry readouts',
    ],
    recommendedUseCases: [
      'DevOps, Kubernetes & Cloud Infrastructure Topologies',
      'Hardware Engineering, IoT Telemetry & Robotics Controls',
      'CAD / 3D Modeling Toolchains & Blueprint Editors',
      'Architecture, Structural Engineering & GIS Geospatial Platforms',
    ],
  },

  colors: {
    background: '#090D16',
    foreground: '#F1F5F9',
    surface: '#0E1424',
    surfaceElevated: '#141D33',
    primary: '#38BDF8',
    primaryHover: '#0EA5E9',
    primaryForeground: '#090D16',
    secondary: '#94A3B8',
    secondaryForeground: '#090D16',
    accent: '#FB923C',
    accentForeground: '#090D16',
    muted: '#1E293B',
    mutedForeground: '#64748B',
    border: '#1E293B',
    borderSubtle: '#131B2E',
    borderStrong: '#334155',
    ring: '#38BDF8',
    success: '#34D399',
    warning: '#FBBF24',
    destructive: '#F87171',
  },

  typography: {
    headingFont: 'var(--font-geist-mono), "Space Mono", "JetBrains Mono", monospace',
    bodyFont: 'var(--font-geist-sans), "Inter", sans-serif',
    monospaceFont: 'var(--font-geist-mono), "JetBrains Mono", monospace',
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.8125rem',
      base: '0.9375rem',
      lg: '1.0625rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    lineHeights: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.65',
    },
    letterSpacing: {
      tight: '-0.01em',
      normal: '0.02em',
      wide: '0.06em',
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
      sm: '0px',
      md: '0px',
      lg: '0px',
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
      sm: 'none',
      md: '0 2px 8px rgba(0, 0, 0, 0.4)',
      lg: '0 4px 16px rgba(0, 0, 0, 0.6)',
      colored: '0 0 16px rgba(56, 189, 248, 0.25)',
    },
    elevation: '1',
    backdropBlur: '4px',
  },

  layout: {
    maxContentWidth: '1320px',
    gridColumns: '12',
    columnGap: '1rem',
    alignmentPrinciples: 'Rigid orthogonal modular grid with persistent technical registration coordinates',
  },

  interaction: {
    hoverBehavior: 'Instant hairline border color shift to #38BDF8 with crosshair highlight',
    focusBehavior: '1px solid #38BDF8 outline with 1px drafting offset',
    transitions: 'none',
    animationPreferences: 'Instantaneous discrete state transitions without ease or inertia',
  },

  componentRules: {
    button: {
      padding: '0.5rem 1.25rem',
      borderRadius: '0px',
      border: '1px solid #38BDF8',
      fontWeight: '600',
      shadow: 'none',
    },
    card: {
      padding: '1.5rem',
      borderRadius: '0px',
      border: '1px solid #1E293B',
      background: '#0E1424',
      shadow: 'none',
    },
    input: {
      padding: '0.5rem 0.875rem',
      borderRadius: '0px',
      border: '1px solid #1E293B',
      background: '#090D16',
      focusRing: '1px solid #38BDF8',
    },
    navigation: {
      height: '60px',
      background: '#090D16',
      borderBottom: '1px solid #1E293B',
      backdropFilter: 'none',
    },
    badge: {
      padding: '0.15rem 0.5rem',
      borderRadius: '0px',
      fontSize: '0.75rem',
      fontWeight: '600',
      border: '1px solid #38BDF8',
    },
  },
};
