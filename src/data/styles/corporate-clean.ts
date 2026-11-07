import { DesignStyle } from '@/types/style';

export const corporateClean: DesignStyle = {
  id: 'style-corporate-clean',
  slug: 'corporate-clean',
  name: 'Corporate Enterprise SaaS',
  tagline: 'Trustworthy slate architecture, high-density data tables & crisp cobalt utility',
  description:
    'A high-density, professional enterprise design system engineered for B2B cloud consoles, multi-tenant financial workspaces, and mission-critical SaaS platforms.',
  category: 'enterprise',
  tags: ['Enterprise', 'SaaS', 'High Density', 'Clean Light', 'Corporate', 'Data Heavy'],
  isFeatured: false,

  philosophy: {
    direction: 'Trustworthy Institutional Utility & Dense Information Architecture',
    intendedAtmosphere:
      'Professional, reliable, crisp, and predictable. Designed for enterprise power users managing deep multi-column tables, audit logs, and complex workflows.',
    visualCharacteristics: [
      'Clean neutral slate canvas (#F8FAFC) paired with crisp pure white card surfaces (#FFFFFF)',
      'Authoritative royal cobalt blue (#2563EB) primary actions with sky blue (#0EA5E9) telemetry accents',
      'High-contrast slate dark typography (#0F172A) with legible muted secondary labels (#64748B)',
      'Predictable 6px corner radii on buttons, cards, and modal dialogs',
      'Hairline borders (#E2E8F0) providing distinct table grid separators and card boundaries',
      'Subtle 1px micro-shadows designed for dense multi-pane interfaces',
    ],
    recommendedUseCases: [
      'Enterprise Resource Planning (ERP) & CRM Platforms',
      'Corporate Banking, Billing & Payroll Dashboards',
      'Compliance, Security & Governance Portals',
      'B2B Multi-Tenant Account Management Consoles',
    ],
  },

  colors: {
    background: '#F8FAFC',
    foreground: '#0F172A',
    surface: '#FFFFFF',
    surfaceElevated: '#F1F5F9',
    primary: '#2563EB',
    primaryHover: '#1D4ED8',
    primaryForeground: '#FFFFFF',
    secondary: '#E2E8F0',
    secondaryForeground: '#1E293B',
    accent: '#0EA5E9',
    accentForeground: '#FFFFFF',
    muted: '#F1F5F9',
    mutedForeground: '#64748B',
    border: '#E2E8F0',
    borderSubtle: '#F1F5F9',
    borderStrong: '#CBD5E1',
    ring: '#2563EB',
    success: '#16A34A',
    warning: '#D97706',
    destructive: '#DC2626',
  },

  typography: {
    headingFont: 'var(--font-geist-sans), Inter, system-ui, sans-serif',
    bodyFont: 'var(--font-geist-sans), Inter, system-ui, sans-serif',
    monospaceFont: 'var(--font-geist-mono), Consolas, monospace',
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '0.95rem',
      lg: '1.125rem',
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
      tight: '-0.015em',
      normal: '0',
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
    sectionSpacing: '3.5rem',
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
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      colored: '0 2px 10px rgba(37, 99, 235, 0.2)',
    },
    elevation: '1',
    backdropBlur: '0px',
  },

  layout: {
    maxContentWidth: '1360px',
    gridColumns: '12',
    columnGap: '1rem',
    alignmentPrinciples: 'Rigid enterprise grid with strict baseline vertical cadence for dense data rows',
  },

  interaction: {
    hoverBehavior: 'Clean border darkening + subtle surface highlight (120ms)',
    focusBehavior: 'Solid 2px #2563EB outline with 2px offset',
    transitions: 'all 120ms ease',
    animationPreferences: 'Instantaneous functional transitions prioritizing operational speed',
  },

  componentRules: {
    button: {
      padding: '0.55rem 1.15rem',
      borderRadius: '6px',
      border: '1px solid #2563EB',
      fontWeight: '500',
      shadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    },
    card: {
      padding: '1.5rem',
      borderRadius: '6px',
      border: '1px solid #E2E8F0',
      background: '#FFFFFF',
      shadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    },
    input: {
      padding: '0.55rem 0.85rem',
      borderRadius: '6px',
      border: '1px solid #CBD5E1',
      background: '#FFFFFF',
      focusRing: '2px solid #2563EB',
    },
    navigation: {
      height: '60px',
      background: '#FFFFFF',
      borderBottom: '1px solid #E2E8F0',
      backdropFilter: 'none',
    },
    badge: {
      padding: '0.2rem 0.55rem',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '500',
      border: '1px solid #CBD5E1',
    },
  },
};
