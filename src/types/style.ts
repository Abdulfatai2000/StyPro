export type StyleCategory =
  | 'developer-tool'
  | 'minimalist'
  | 'editorial'
  | 'neo-brutalist'
  | 'enterprise'
  | 'cyberpunk'
  | 'spatial-glass'
  | 'playful';

export interface StyleColors {
  background: string;
  foreground: string;
  surface: string;
  surfaceElevated: string;
  primary: string;
  primaryHover: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  borderSubtle: string;
  borderStrong: string;
  ring: string;
  success: string;
  warning: string;
  destructive: string;
}

export interface StyleTypography {
  headingFont: string;
  bodyFont: string;
  monospaceFont: string;
  fontWeights: {
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  fontSizes: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  lineHeights: {
    tight: string;
    normal: string;
    relaxed: string;
  };
  letterSpacing: {
    tight: string;
    normal: string;
    wide: string;
  };
}

export interface StyleSpacing {
  scale: {
    '2xs': string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  sectionSpacing: string;
  contentPadding: string;
  componentGaps: string;
}

export interface StyleShapesEffects {
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  borderThickness: {
    thin: string;
    medium: string;
    thick: string;
  };
  borderStyle: 'solid' | 'dashed' | 'dotted';
  shadows: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    colored?: string;
  };
  elevation: string;
  backdropBlur: string;
  gradients?: {
    surface?: string;
    glow?: string;
  };
}

export interface StyleLayout {
  maxContentWidth: string;
  gridColumns: string;
  columnGap: string;
  alignmentPrinciples: string;
}

export interface StyleInteraction {
  hoverBehavior: string;
  focusBehavior: string;
  transitions: string;
  animationPreferences: string;
}

export interface StyleComponentRules {
  button: {
    padding: string;
    borderRadius: string;
    border: string;
    fontWeight: string;
    shadow: string;
  };
  card: {
    padding: string;
    borderRadius: string;
    border: string;
    background: string;
    shadow: string;
  };
  input: {
    padding: string;
    borderRadius: string;
    border: string;
    background: string;
    focusRing: string;
  };
  navigation: {
    height: string;
    background: string;
    borderBottom: string;
    backdropFilter: string;
  };
  badge: {
    padding: string;
    borderRadius: string;
    fontSize: string;
    fontWeight: string;
    border: string;
  };
}

export interface DesignStyle {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: StyleCategory;
  tags: string[];
  isFeatured: boolean;

  philosophy: {
    direction: string;
    intendedAtmosphere: string;
    visualCharacteristics: string[];
    recommendedUseCases: string[];
  };

  colors: StyleColors;
  typography: StyleTypography;
  spacing: StyleSpacing;
  shapesEffects: StyleShapesEffects;
  layout: StyleLayout;
  interaction: StyleInteraction;
  componentRules: StyleComponentRules;
}

