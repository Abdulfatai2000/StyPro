import { DesignStyle } from '@/types/style';
import {
  CustomizationOverrides,
  CustomizationCategory,
} from '@/types/customizer';

export function getInitialOverrides(): CustomizationOverrides {
  return {
    colors: {},
    typography: {},
    spacing: {},
    geometry: {},
    effects: {},
    motion: {},
  };
}

/**
 * Creates an immutably resolved DesignStyle by merging user customization overrides
 * over the base style definition without ever mutating the base style.
 */
export function resolveCustomizedStyle(
  baseStyle: DesignStyle,
  overrides: CustomizationOverrides
): DesignStyle {
  // Deep clone base style
  const resolved: DesignStyle = JSON.parse(JSON.stringify(baseStyle));

  // 1. Colors merge
  if (overrides.colors) {
    resolved.colors = {
      ...resolved.colors,
      ...overrides.colors,
    };
  }

  // 2. Typography merge
  if (overrides.typography) {
    const t = overrides.typography;
    if (t.headingFont) resolved.typography.headingFont = t.headingFont;
    if (t.bodyFont) resolved.typography.bodyFont = t.bodyFont;
    if (t.monospaceFont) resolved.typography.monospaceFont = t.monospaceFont;
    if (t.headingWeight) resolved.typography.fontWeights.bold = t.headingWeight;
    if (t.bodyWeight) resolved.typography.fontWeights.regular = t.bodyWeight;

    if (t.lineHeight) {
      if (t.lineHeight === 'tight') resolved.typography.lineHeights.normal = '1.25';
      if (t.lineHeight === 'normal') resolved.typography.lineHeights.normal = '1.5';
      if (t.lineHeight === 'relaxed') resolved.typography.lineHeights.normal = '1.75';
    }

    if (t.letterSpacing) {
      if (t.letterSpacing === 'tight') resolved.typography.letterSpacing.normal = '-0.025em';
      if (t.letterSpacing === 'normal') resolved.typography.letterSpacing.normal = '0em';
      if (t.letterSpacing === 'wide') resolved.typography.letterSpacing.normal = '0.04em';
    }
  }

  // 3. Spacing merge
  if (overrides.spacing) {
    const s = overrides.spacing;
    if (s.componentGaps) resolved.spacing.componentGaps = s.componentGaps;
    if (s.contentPadding) resolved.spacing.contentPadding = s.contentPadding;
    if (s.sectionSpacing) resolved.spacing.sectionSpacing = s.sectionSpacing;
    if (s.containerMaxWidth) resolved.layout.maxContentWidth = s.containerMaxWidth;
  }

  // 4. Geometry merge
  if (overrides.geometry) {
    const g = overrides.geometry;
    if (g.borderRadiusGeneral) {
      resolved.shapesEffects.borderRadius.md = g.borderRadiusGeneral;
    }
    if (g.buttonRadius) {
      resolved.componentRules.button.borderRadius = g.buttonRadius;
    }
    if (g.cardRadius) {
      resolved.componentRules.card.borderRadius = g.cardRadius;
    }
    if (g.inputRadius) {
      resolved.componentRules.input.borderRadius = g.inputRadius;
    }
    if (g.borderThickness) {
      resolved.shapesEffects.borderThickness.thin = g.borderThickness;
      resolved.componentRules.button.border = `${g.borderThickness} solid ${resolved.colors.border}`;
      resolved.componentRules.card.border = `${g.borderThickness} solid ${resolved.colors.border}`;
      resolved.componentRules.input.border = `${g.borderThickness} solid ${resolved.colors.border}`;
    }
    if (g.shadowLevel) {
      if (g.shadowLevel === 'none') {
        resolved.shapesEffects.shadows.md = 'none';
        resolved.componentRules.card.shadow = 'none';
        resolved.componentRules.button.shadow = 'none';
      } else if (g.shadowLevel === 'sm') {
        resolved.shapesEffects.shadows.md = '0 1px 3px rgba(0,0,0,0.3)';
        resolved.componentRules.card.shadow = '0 1px 3px rgba(0,0,0,0.3)';
      } else if (g.shadowLevel === 'md') {
        resolved.shapesEffects.shadows.md = '0 4px 16px rgba(0,0,0,0.5)';
        resolved.componentRules.card.shadow = '0 4px 16px rgba(0,0,0,0.5)';
      } else if (g.shadowLevel === 'lg') {
        resolved.shapesEffects.shadows.md = '0 12px 32px rgba(0,0,0,0.75)';
        resolved.componentRules.card.shadow = '0 12px 32px rgba(0,0,0,0.75)';
      } else if (g.shadowLevel === 'colored') {
        resolved.shapesEffects.shadows.md = `0 8px 24px -4px ${resolved.colors.primary}40`;
        resolved.componentRules.card.shadow = `0 8px 24px -4px ${resolved.colors.primary}40`;
      }
    }
  }

  // 5. Effects merge
  if (overrides.effects) {
    const e = overrides.effects;
    if (e.backdropBlur) resolved.shapesEffects.backdropBlur = e.backdropBlur;
  }

  // 6. Motion merge
  if (overrides.motion) {
    const m = overrides.motion;
    if (m.transitionSpeed) {
      if (m.transitionSpeed === 'fast') resolved.interaction.transitions = 'all 100ms ease';
      if (m.transitionSpeed === 'normal') resolved.interaction.transitions = 'all 200ms ease';
      if (m.transitionSpeed === 'slow') resolved.interaction.transitions = 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)';
    }
    if (m.reducedMotion) {
      resolved.interaction.transitions = 'none';
      resolved.interaction.animationPreferences = 'Strict prefers-reduced-motion: zero continuous transitions';
    }
  }

  return resolved;
}

/**
 * Counts how many total overrides are active across all categories.
 */
export function getOverrideCount(overrides: CustomizationOverrides): number {
  let count = 0;
  count += Object.keys(overrides.colors || {}).length;
  count += Object.keys(overrides.typography || {}).length;
  count += Object.keys(overrides.spacing || {}).length;
  count += Object.keys(overrides.geometry || {}).length;
  count += Object.keys(overrides.effects || {}).length;
  count += Object.keys(overrides.motion || {}).length;
  return count;
}

/**
 * Checks if a specific category has any active overrides.
 */
export function isCategoryDirty(
  category: CustomizationCategory,
  overrides: CustomizationOverrides
): boolean {
  const cat = overrides[category];
  return cat ? Object.keys(cat).length > 0 : false;
}
