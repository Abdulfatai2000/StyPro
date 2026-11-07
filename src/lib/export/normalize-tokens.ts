import { DesignStyle } from '@/types/style';
import { CustomizationOverrides } from '@/types/customizer';
import { getOverrideCount } from '@/lib/customizer/resolver';
import { NormalizedTokens, NormalizedTokenLeaf, TokenCategory } from './types';

function createLeaf(
  category: TokenCategory,
  key: string,
  path: string[],
  cssVarName: string,
  value: string,
  description?: string
): NormalizedTokenLeaf {
  return {
    category,
    key,
    path,
    cssVarName,
    value: String(value).trim(),
    description,
  };
}

export function normalizeDesignTokens(
  style: DesignStyle,
  overrides?: CustomizationOverrides
): NormalizedTokens {
  const isCustomized = overrides ? getOverrideCount(overrides) > 0 : false;
  const leaves: NormalizedTokenLeaf[] = [];

  // 1. Color tokens
  const colorKeys = Object.keys(style.colors) as (keyof typeof style.colors)[];
  for (const k of colorKeys) {
    const val = style.colors[k];
    const kebab = k.replace(/([A-Z])/g, '-$1').toLowerCase();
    leaves.push(
      createLeaf('color', k, ['colors', k], `--sty-color-${kebab}`, val, `Semantic color token for ${k}`)
    );
  }

  // 2. Typography: font families
  leaves.push(
    createLeaf('fontFamily', 'heading', ['typography', 'headingFont'], '--sty-font-heading', style.typography.headingFont, 'Primary display & heading font stack'),
    createLeaf('fontFamily', 'body', ['typography', 'bodyFont'], '--sty-font-body', style.typography.bodyFont, 'Standard body text font stack'),
    createLeaf('fontFamily', 'mono', ['typography', 'monospaceFont'], '--sty-font-mono', style.typography.monospaceFont, 'Code, numbers & telemetry font stack')
  );

  // 3. Typography: font sizes
  for (const [k, v] of Object.entries(style.typography.fontSizes)) {
    leaves.push(
      createLeaf('fontSize', k, ['typography', 'fontSizes', k], `--sty-font-size-${k}`, v, `Font size token ${k}`)
    );
  }

  // 4. Typography: font weights
  for (const [k, v] of Object.entries(style.typography.fontWeights)) {
    leaves.push(
      createLeaf('fontWeight', k, ['typography', 'fontWeights', k], `--sty-font-weight-${k}`, String(v), `Font weight token ${k}`)
    );
  }

  // 5. Typography: line heights & letter spacing
  for (const [k, v] of Object.entries(style.typography.lineHeights)) {
    leaves.push(
      createLeaf('lineHeight', k, ['typography', 'lineHeights', k], `--sty-line-height-${k}`, v, `Line height ratio ${k}`)
    );
  }
  for (const [k, v] of Object.entries(style.typography.letterSpacing)) {
    leaves.push(
      createLeaf('letterSpacing', k, ['typography', 'letterSpacing', k], `--sty-tracking-${k}`, v, `Letter spacing ${k}`)
    );
  }

  // 6. Spacing scale & layout
  for (const [k, v] of Object.entries(style.spacing.scale)) {
    leaves.push(
      createLeaf('spacing', k, ['spacing', 'scale', k], `--sty-space-${k}`, v, `Spacing increment ${k}`)
    );
  }
  leaves.push(
    createLeaf('spacing', 'componentGaps', ['spacing', 'componentGaps'], '--sty-gap-default', style.spacing.componentGaps, 'Default component gap'),
    createLeaf('spacing', 'contentPadding', ['spacing', 'contentPadding'], '--sty-padding-content', style.spacing.contentPadding, 'Standard content padding'),
    createLeaf('spacing', 'sectionSpacing', ['spacing', 'sectionSpacing'], '--sty-space-section', style.spacing.sectionSpacing, 'Major vertical section rhythm'),
    createLeaf('spacing', 'containerMaxWidth', ['layout', 'maxContentWidth'], '--sty-container-max', style.layout.maxContentWidth, 'Maximum layout viewport width')
  );

  // 7. Border radius & borders
  for (const [k, v] of Object.entries(style.shapesEffects.borderRadius)) {
    leaves.push(
      createLeaf('borderRadius', k, ['shapesEffects', 'borderRadius', k], `--sty-radius-${k}`, v, `Border radius token ${k}`)
    );
  }
  for (const [k, v] of Object.entries(style.shapesEffects.borderThickness)) {
    leaves.push(
      createLeaf('borderWidth', k, ['shapesEffects', 'borderThickness', k], `--sty-border-width-${k}`, v, `Border thickness ${k}`)
    );
  }

  // 8. Shadows & elevation
  for (const [k, v] of Object.entries(style.shapesEffects.shadows)) {
    if (v) {
      leaves.push(
        createLeaf('shadow', k, ['shapesEffects', 'shadows', k], `--sty-shadow-${k}`, v, `Elevation shadow ${k}`)
      );
    }
  }

  // 9. Motion / transitions
  leaves.push(
    createLeaf('transition', 'default', ['interaction', 'transitions'], '--sty-transition-default', style.interaction.transitions, 'Standard interactive state transition')
  );

  // Organize by category
  const byCategory: Record<TokenCategory, NormalizedTokenLeaf[]> = {
    color: [],
    fontFamily: [],
    fontSize: [],
    fontWeight: [],
    lineHeight: [],
    letterSpacing: [],
    spacing: [],
    borderRadius: [],
    borderWidth: [],
    shadow: [],
    transition: [],
  };

  for (const leaf of leaves) {
    byCategory[leaf.category].push(leaf);
  }

  return {
    styleName: style.name,
    styleSlug: style.slug,
    isCustomized,
    tokens: leaves,
    byCategory,
  };
}

