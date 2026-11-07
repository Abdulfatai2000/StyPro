import { DesignStyle } from '@/types/style';
import { CustomizationOverrides } from '@/types/customizer';
import { getOverrideCount } from '@/lib/customizer/resolver';

export interface PromptGeneratorOptions {
  baseStyle: DesignStyle;
  resolvedStyle: DesignStyle;
  overrides: CustomizationOverrides;
  targetAgent?: 'antigravity' | 'cursor' | 'claude-code' | 'generic';
}

export function generateDesignPrompt({
  baseStyle,
  resolvedStyle,
  overrides,
  targetAgent = 'antigravity',
}: PromptGeneratorOptions): string {
  const isCustomized = getOverrideCount(overrides) > 0;
  const s = resolvedStyle;

  const agentHeader =
    targetAgent === 'antigravity'
      ? 'ANTIGRAVITY CODING AGENT'
      : targetAgent === 'cursor'
      ? 'CURSOR AI / COMPOSER'
      : targetAgent === 'claude-code'
      ? 'CLAUDE CODE CLI AGENT'
      : 'AI FRONTEND ASSISTANT';

  return `# SYSTEM DESIGN SPECIFICATION: ${s.name.toUpperCase()}
> Tailored for: ${agentHeader}
> Source: StyPro (From Style to Prompt to Code)
> Mode: ${isCustomized ? 'Customized Derivative System' : 'Canonical Design Specification'}
> Generated: 2026

---

## 1. PROJECT CONTEXT & DIRECTIVE
You are acting as an expert Senior Frontend Design Systems Engineer. Your objective is to implement or refine frontend interfaces strictly conforming to the **${s.name}** visual language defined in this specification. 

Every UI component you write (React, Next.js, HTML/Tailwind) MUST strictly use the exact token values, typography scales, geometric boundaries, and interaction behaviors documented below. Do not deviate, improvise generic gradients, or fall back to generic Tailwind presets.

${
  isCustomized
    ? `### Customization Overrides Notice
This design system has been tailored with intentional user customizations:
${Object.keys(overrides.colors || {}).length > 0 ? `- Custom Palette: Colors modified (${Object.keys(overrides.colors).join(', ')})` : ''}
${Object.keys(overrides.typography || {}).length > 0 ? `- Custom Typography: Font styles updated` : ''}
${Object.keys(overrides.spacing || {}).length > 0 ? `- Custom Spacing: Layout and gaps adjusted` : ''}
${Object.keys(overrides.geometry || {}).length > 0 ? `- Custom Geometry: Corner radius and borders modified` : ''}
All specifications below reflect these resolved custom values.`
    : `This specification represents the canonical, unadulterated ${s.name} standard.`
}

---

## 2. DESIGN PHILOSOPHY & ATMOSPHERE
- **Design Direction:** ${s.philosophy.direction}
- **Intended Atmosphere:** ${s.philosophy.intendedAtmosphere}
- **Primary Domain Alignment:** ${s.philosophy.recommendedUseCases.join(' · ')}

---

## 3. VISUAL IDENTITY & CHARACTERISTICS
The interface MUST visibly uphold these core aesthetic pillars:
${s.philosophy.visualCharacteristics.map((c) => `- ${c}`).join('\n')}

---

## 4. SEMANTIC COLOUR SYSTEM
Apply these EXACT hexadecimal color values across all component layers. Do not approximate.

### Base Canvas & Surfaces
| Token Role | Hex/RGB Value | Usage Scope |
|---|---|---|
| \`bg-primary\` | \`${s.colors.background}\` | Root viewport canvas & background |
| \`bg-surface\` | \`${s.colors.surface}\` | Standard card surfaces & sidebars |
| \`bg-surface-elevated\` | \`${s.colors.surfaceElevated}\` | Popovers, active items, modal containers |
| \`text-primary\` | \`${s.colors.foreground}\` | Primary headings, active labels, high contrast |
| \`text-secondary\` | \`${s.colors.secondaryForeground || s.colors.foreground}\` | Standard body paragraphs, sub-headers |
| \`text-muted\` | \`${s.colors.mutedForeground}\` | Secondary hints, timestamp telemetry, table headers |

### Action & Brand Accents
| Token Role | Hex/RGB Value | Usage Scope |
|---|---|---|
| \`color-primary\` | \`${s.colors.primary}\` | Primary CTA buttons, key active indicator pills |
| \`color-primary-hover\` | \`${s.colors.primaryHover}\` | Hover state for primary action buttons |
| \`color-primary-fg\` | \`${s.colors.primaryForeground}\` | Text/icons rendered inside primary elements |
| \`color-secondary\` | \`${s.colors.secondary}\` | Subtle action buttons, secondary badges |
| \`color-accent\` | \`${s.colors.accent}\` | Highlighting specific focal items, accent borders |

### Borders & Structural Dividers
| Token Role | Hex/RGB Value | Usage Scope |
|---|---|---|
| \`border-default\` | \`${s.colors.border}\` | Card containers, section dividers, table rows |
| \`border-subtle\` | \`${s.colors.borderSubtle}\` | Inner divider lines, subtle badge boundaries |
| \`border-strong\` | \`${s.colors.borderStrong}\` | Focus state borders, active tab highlights |
| \`focus-ring\` | \`${s.colors.ring}\` | Accessible keyboard focus indicator |

### Semantic Status
- **Success:** \`${s.colors.success}\` (Health checks, successful deployments, green badges)
- **Warning:** \`${s.colors.warning}\` (Pending processes, maintenance advisories)
- **Destructive:** \`${s.colors.destructive}\` (Errors, delete actions, cluster termination)

---

## 5. TYPOGRAPHY HIERARCHY
- **Heading Font:** \`${s.typography.headingFont}\`
- **Body Font:** \`${s.typography.bodyFont}\`
- **Monospace Font:** \`${s.typography.monospaceFont}\`

### Typographic Scale & Weights
- **Display 4XL:** \`${s.typography.fontSizes['4xl']}\` | Weight: \`${s.typography.fontWeights.bold}\`
- **Heading 2XL:** \`${s.typography.fontSizes['2xl']}\` | Weight: \`${s.typography.fontWeights.semibold}\`
- **Heading LG:** \`${s.typography.fontSizes.lg}\` | Weight: \`${s.typography.fontWeights.medium}\`
- **Body Standard:** \`${s.typography.fontSizes.base}\` | Weight: \`${s.typography.fontWeights.regular}\` | Line Height: \`${s.typography.lineHeights.normal}\`
- **Caption / Mono:** \`${s.typography.fontSizes.xs}\` | Weight: \`${s.typography.fontWeights.regular}\` | Letter Spacing: \`${s.typography.letterSpacing.wide}\`

---

## 6. SPACING & LAYOUT SYSTEM
- **Base Component Gaps:** \`${s.spacing.componentGaps}\`
- **Card & Content Padding:** \`${s.spacing.contentPadding}\`
- **Major Section Spacing:** \`${s.spacing.sectionSpacing}\`
- **Max Content Container Width:** \`${s.layout.maxContentWidth}\`
- **Grid Architecture:** Strict \`${s.layout.gridColumns}\`-column grid layout with \`${s.layout.columnGap}\` column gutters.

---

## 7. GEOMETRY, BORDERS & ELEVATION
- **Border Radius (General Elements):** \`${s.shapesEffects.borderRadius.md}\`
- **Border Radius (Cards & Panels):** \`${s.componentRules.card.borderRadius}\`
- **Border Radius (Buttons & Pills):** \`${s.componentRules.button.borderRadius}\`
- **Border Radius (Inputs):** \`${s.componentRules.input.borderRadius}\`
- **Border Thickness:** \`${s.shapesEffects.borderThickness.thin}\` (\`${s.shapesEffects.borderStyle}\`)
- **Default Card Shadow:** \`${s.componentRules.card.shadow}\`
- **Backdrop Blur:** \`${s.shapesEffects.backdropBlur}\`

---

## 8. COMPONENT BLUEPRINTS & STYLING RULES

### A. Navigation Bar
- **Height:** \`${s.componentRules.navigation.height}\`
- **Background:** \`${s.componentRules.navigation.background}\`
- **Border:** \`${s.componentRules.navigation.borderBottom}\`
- **Backdrop Filter:** \`${s.componentRules.navigation.backdropFilter}\`
- **Composition:** Fixed/sticky top, logo left, navigation links center, user actions right.

### B. Action Buttons
- **Primary:** Padding: \`${s.componentRules.button.padding}\`, Background: \`${s.colors.primary}\`, Text: \`${s.colors.primaryForeground}\`, Radius: \`${s.componentRules.button.borderRadius}\`, Shadow: \`${s.componentRules.button.shadow}\`.
- **Secondary:** Padding: \`${s.componentRules.button.padding}\`, Background: \`${s.colors.surface}\`, Text: \`${s.colors.foreground}\`, Border: \`${s.shapesEffects.borderThickness.thin} solid ${s.colors.border}\`.

### C. Container Cards
- **Padding:** \`${s.componentRules.card.padding}\`
- **Background:** \`${s.componentRules.card.background}\`
- **Border:** \`${s.componentRules.card.border}\`
- **Corner Radius:** \`${s.componentRules.card.borderRadius}\`
- **Shadow:** \`${s.componentRules.card.shadow}\`

### D. Inputs & Form Fields
- **Padding:** \`${s.componentRules.input.padding}\`
- **Background:** \`${s.componentRules.input.background}\`
- **Border:** \`${s.componentRules.input.border}\`
- **Focus Indicator:** \`${s.componentRules.input.focusRing}\`

---

## 9. INTERACTION, MOTION & MICRO-STATES
- **Hover Transitions:** \`${s.interaction.transitions}\`
- **Focus Rings:** Visible \`${s.colors.ring}\` outline with 2px offset on all interactive controls.
- **Animation Philosophy:** ${s.interaction.animationPreferences}

---

## 10. RESPONSIVE BREAKPOINT BEHAVIOR
- **Mobile (<640px):** Single-column stacked layouts, hamburger flyout navigation, compact padding (\`1rem\`), display font scaled down to \`1.75rem\`.
- **Tablet (640px - 1024px):** 2-column card grids, visible secondary navigation, \`1.5rem\` gutters.
- **Desktop (>1024px):** Multi-column dashboard layouts, sticky sidebar or header, max container clamped to \`${s.layout.maxContentWidth}\`.

---

## 11. ACCESSIBILITY REQUIREMENTS (WCAG 2.1 AA)
- Ensure all text-to-background contrast ratios strictly meet or exceed **4.5:1** for standard text and **3:1** for large headings.
- Interactive controls MUST display a discernible focus outline (\`${s.colors.ring}\`) when navigated via keyboard.
- Honor \`prefers-reduced-motion\`: disable all spatial animations and transitions when the user requests reduced motion.
- Form inputs must include explicit HTML labels with \`htmlFor\` association.

---

## 12. IMPLEMENTATION GUIDANCE
When writing frontend components:
\`\`\`tsx
// Example Token Mapping in React / Tailwind
export const SystemTokens = {
  colors: {
    bg: "${s.colors.background}",
    surface: "${s.colors.surface}",
    primary: "${s.colors.primary}",
    primaryFg: "${s.colors.primaryForeground}",
    border: "${s.colors.border}",
    text: "${s.colors.foreground}",
    textMuted: "${s.colors.mutedForeground}",
  },
  radius: "${s.shapesEffects.borderRadius.md}",
};
\`\`\`

---

## 13. EXPLICIT ANTI-PATTERNS (DO NOT DO)
- ❌ **DO NOT** use generic rainbow or pastel gradient text on every headline.
- ❌ **DO NOT** add exaggerated neon glow cards or tacky glassmorphism unless explicitly requested.
- ❌ **DO NOT** mix rounded bubbly buttons (e.g. \`rounded-full\`) with sharp rectangular cards. Maintain geometric consistency.
- ❌ **DO NOT** use low-contrast grey text on dark backgrounds that fails WCAG AA standards.
- ❌ **DO NOT** generate empty placeholder cards without clear typographic hierarchy.
`;
}
