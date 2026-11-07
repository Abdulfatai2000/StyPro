import { DesignStyle } from './style';

export type CustomizerTab = 'customize' | 'prompt';

export type CustomizationCategory =
  | 'colors'
  | 'typography'
  | 'spacing'
  | 'geometry'
  | 'effects'
  | 'motion';

export interface ColorOverrides {
  background?: string;
  foreground?: string;
  surface?: string;
  surfaceElevated?: string;
  primary?: string;
  primaryHover?: string;
  primaryForeground?: string;
  secondary?: string;
  secondaryForeground?: string;
  accent?: string;
  accentForeground?: string;
  muted?: string;
  mutedForeground?: string;
  border?: string;
  borderSubtle?: string;
  borderStrong?: string;
  ring?: string;
  success?: string;
  warning?: string;
  destructive?: string;
}

export interface TypographyOverrides {
  headingFont?: string;
  bodyFont?: string;
  monospaceFont?: string;
  headingWeight?: number;
  bodyWeight?: number;
  scaleRatio?: 'compact' | 'normal' | 'expressive';
  lineHeight?: 'tight' | 'normal' | 'relaxed';
  letterSpacing?: 'tight' | 'normal' | 'wide';
}

export interface SpacingOverrides {
  scaleMultiplier?: number; // e.g. 1 = 100%, 0.85 = compact, 1.2 = generous
  componentGaps?: string;
  sectionSpacing?: string;
  contentPadding?: string;
  containerMaxWidth?: string;
}

export interface GeometryOverrides {
  borderRadiusGeneral?: string;
  buttonRadius?: string;
  cardRadius?: string;
  inputRadius?: string;
  borderThickness?: string;
  shadowLevel?: 'none' | 'sm' | 'md' | 'lg' | 'colored';
}

export interface EffectsOverrides {
  backdropBlur?: string;
  surfaceOpacity?: number;
  glowEnabled?: boolean;
}

export interface MotionOverrides {
  transitionSpeed?: 'fast' | 'normal' | 'slow';
  hoverScaleEnabled?: boolean;
  reducedMotion?: boolean;
}

export interface CustomizationOverrides {
  colors: ColorOverrides;
  typography: TypographyOverrides;
  spacing: SpacingOverrides;
  geometry: GeometryOverrides;
  effects: EffectsOverrides;
  motion: MotionOverrides;
}

export interface CustomizerState {
  baseStyle: DesignStyle;
  overrides: CustomizationOverrides;
  resolvedStyle: DesignStyle;
  activeCategory: CustomizationCategory;
  isDirty: boolean;
  dirtyCount: number;
}

