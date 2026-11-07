import { DesignStyle } from '@/types/style';

export const glassAurora: DesignStyle = {
  id: 'style-glass-aurora',
  slug: 'glass-aurora',
  name: 'Glassmorphic Aurora',
  tagline: 'Multi-layered frosted glass surfaces, soft fluid violet-pink aurora depth & spatial pills',
  description:
    'A spatial translucency design language featuring multi-layered frosted glass cards, fluid radial gradients, smooth pill geometry, and soft chromatic edge highlights.',
  category: 'spatial-glass',
  tags: ['Glassmorphism', 'Spatial', 'Aurora Gradient', 'Translucent', 'Soft 3D', 'Dark Mode'],
  isFeatured: true,

  philosophy: {
    direction: 'Spatial Fluidity & Luminous Depth',
    intendedAtmosphere:
      'Ethereal, premium, and multi-layered. Elements feel suspended in ambient space with optical frosted diffusion and glowing edge refractions.',
    visualCharacteristics: [
      'Deep cosmic base (#08081A) overlaid with soft fluid violet and pink aurora blooms',
      'Translucent frosted glass surfaces (rgba(255, 255, 255, 0.05)) with 24px backdrop diffusion',
      'Vibrant violet (#8B5CF6) and hot magenta pink (#EC4899) dynamic lighting accents',
      'Smooth squircle and full pill corner radii (14px - 18px) for organic tactile comfort',
      'Subtle top-edge glass reflections and diffuse luminous drop shadows',
    ],
    recommendedUseCases: [
      'Spatial Computing & WebXR Application Consoles',
      'Modern Media Streaming & Music Creation Workspaces',
      'Generative AI Creative Studios & Canvas Tools',
      'Next-Gen Consumer Lifestyle & Social Applications',
    ],
  },

  colors: {
    background: '#08081A',
    foreground: '#F5F5FC',
    surface: 'rgba(255, 255, 255, 0.05)',
    surfaceElevated: 'rgba(255, 255, 255, 0.1)',
    primary: '#8B5CF6',
    primaryHover: '#9D74FF',
    primaryForeground: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.08)',
    secondaryForeground: '#E9E7FD',
    accent: '#EC4899',
    accentForeground: '#FFFFFF',
    muted: 'rgba(255, 255, 255, 0.03)',
    mutedForeground: '#9897BD',
    border: 'rgba(255, 255, 255, 0.12)',
    borderSubtle: 'rgba(255, 255, 255, 0.07)',
    borderStrong: 'rgba(255, 255, 255, 0.22)',
    ring: '#8B5CF6',
    success: '#10B981',
    warning: '#F59E0B',
    destructive: '#F43F5E',
  },

  typography: {
    headingFont: 'var(--font-geist-sans), Inter, sans-serif',
    bodyFont: 'var(--font-geist-sans), Inter, sans-serif',
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
      lg: '1.15rem',
      xl: '1.35rem',
      '2xl': '1.75rem',
      '3xl': '2.25rem',
      '4xl': '3.25rem',
    },
    lineHeights: {
      tight: '1.15',
      normal: '1.5',
      relaxed: '1.7',
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.03em',
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
      '3xl': '4.5rem',
    },
    sectionSpacing: '4.5rem',
    contentPadding: '1.75rem',
    componentGaps: '1.25rem',
  },

  shapesEffects: {
    borderRadius: {
      none: '0px',
      sm: '8px',
      md: '14px',
      lg: '20px',
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
      sm: '0 4px 12px rgba(0, 0, 0, 0.3)',
      md: '0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      lg: '0 16px 48px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
      colored: '0 8px 32px rgba(139, 92, 246, 0.35)',
    },
    elevation: '2',
    backdropBlur: '24px',
    gradients: {
      surface: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
      glow: 'radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.25), transparent 70%)',
    },
  },

  layout: {
    maxContentWidth: '1240px',
    gridColumns: '12',
    columnGap: '1.5rem',
    alignmentPrinciples: 'Floating centered glass slabs with balanced ambient breathing room',
  },

  interaction: {
    hoverBehavior: 'Card illumination + gentle backdrop blur increase with micro chromatic lift',
    focusBehavior: 'Visible 2px #8B5CF6 glow ring with frosted offset',
    transitions: 'all 240ms cubic-bezier(0.16, 1, 0.3, 1)',
    animationPreferences: 'Gentle, organic floating transitions with smooth damping',
  },

  componentRules: {
    button: {
      padding: '0.65rem 1.35rem',
      borderRadius: '9999px',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      fontWeight: '600',
      shadow: '0 4px 16px rgba(139, 92, 246, 0.3)',
    },
    card: {
      padding: '1.75rem',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      background: 'rgba(255, 255, 255, 0.04)',
      shadow: '0 8px 32px rgba(0, 0, 0, 0.45)',
    },
    input: {
      padding: '0.7rem 1.1rem',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.14)',
      background: 'rgba(0, 0, 0, 0.25)',
      focusRing: '2px solid #8B5CF6',
    },
    navigation: {
      height: '66px',
      background: 'rgba(8, 8, 26, 0.7)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(24px)',
    },
    badge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500',
      border: '1px solid rgba(255, 255, 255, 0.16)',
    },
  },
};

