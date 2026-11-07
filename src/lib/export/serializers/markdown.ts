import { SerializerOptions, ExportResult } from '../types';
import { getExportTarget } from '../registry';

export function serializeToMarkdown(options: SerializerOptions): ExportResult {
  const { normalized, style } = options;
  const target = getExportTarget('markdown');
  const s = style;

  const colorTable = Object.entries(s.colors)
    .map(([k, v]) => `| \`${k}\` | \`${v}\` | ${k.includes('bg') ? 'Background/Surface' : k.includes('text') || k.includes('fg') ? 'Foreground' : 'Accent/Border'} |`)
    .join('\n');

  const code = `# DESIGN SYSTEM SPECIFICATION: ${s.name.toUpperCase()}
> Standard: StyPro Design System Specification
> Mode: ${normalized.isCustomized ? 'Customized Derivative System' : 'Canonical Style Standard'}
> Target Slug: \`${s.slug}\`
> Generated: 2026

---

## 1. Executive Summary & Direction
- **System Name:** ${s.name}
- **Category:** ${s.category}
- **Tagline:** ${s.tagline}
- **Description:** ${s.description}
- **Philosophy & Direction:** ${s.philosophy.direction}
- **Intended Atmosphere:** ${s.philosophy.intendedAtmosphere}

---

## 2. Visual Identity & Aesthetic Characteristics
${s.philosophy.visualCharacteristics.map((c) => `- ${c}`).join('\n')}

### Recommended Product Use Cases
${s.philosophy.recommendedUseCases.map((u) => `- ${u}`).join('\n')}

---

## 3. Semantic Colour System
| Token Name | Value | Role Scope |
|---|---|---|
${colorTable}

---

## 4. Typography Hierarchy
- **Heading Font:** \`${s.typography.headingFont}\`
- **Body Font:** \`${s.typography.bodyFont}\`
- **Monospace Font:** \`${s.typography.monospaceFont}\`

### Typographic Scale
- **Display 4XL:** \`${s.typography.fontSizes['4xl']}\` (Weight: \`${s.typography.fontWeights.bold}\`)
- **Heading 2XL:** \`${s.typography.fontSizes['2xl']}\` (Weight: \`${s.typography.fontWeights.semibold}\`)
- **Heading LG:** \`${s.typography.fontSizes.lg}\` (Weight: \`${s.typography.fontWeights.medium}\`)
- **Body Standard:** \`${s.typography.fontSizes.base}\` (Weight: \`${s.typography.fontWeights.regular}\`, Line Height: \`${s.typography.lineHeights.normal}\`)
- **Caption / Mono:** \`${s.typography.fontSizes.xs}\` (Weight: \`${s.typography.fontWeights.regular}\`, Tracking: \`${s.typography.letterSpacing.wide}\`)

---

## 5. Spacing System & Layout Rhythm
- **Component Gaps:** \`${s.spacing.componentGaps}\`
- **Surface / Card Padding:** \`${s.spacing.contentPadding}\`
- **Major Section Spacing:** \`${s.spacing.sectionSpacing}\`
- **Container Maximum Width:** \`${s.layout.maxContentWidth}\`
- **Grid Layout Architecture:** \`${s.layout.gridColumns}\`-column grid, column gap: \`${s.layout.columnGap}\`

---

## 6. Geometry, Elevation & Shadows
- **General Element Radius:** \`${s.shapesEffects.borderRadius.md}\`
- **Button Radius:** \`${s.componentRules.button.borderRadius}\`
- **Card Radius:** \`${s.componentRules.card.borderRadius}\`
- **Input Radius:** \`${s.componentRules.input.borderRadius}\`
- **Border Thickness:** \`${s.shapesEffects.borderThickness.thin}\`
- **Border Style:** \`${s.shapesEffects.borderStyle}\`
- **Default Card Shadow:** \`${s.componentRules.card.shadow}\`
- **Backdrop Blur:** \`${s.shapesEffects.backdropBlur}\`

---

## 7. Component Blueprints
- **Navigation:** Height: \`${s.componentRules.navigation.height}\`, Background: \`${s.componentRules.navigation.background}\`, Border: \`${s.componentRules.navigation.borderBottom}\`
- **Buttons (Primary):** Padding: \`${s.componentRules.button.padding}\`, Radius: \`${s.componentRules.button.borderRadius}\`, Background: \`${s.colors.primary}\`, Text: \`${s.colors.primaryForeground}\`
- **Buttons (Secondary):** Padding: \`${s.componentRules.button.padding}\`, Radius: \`${s.componentRules.button.borderRadius}\`, Background: \`${s.colors.surface}\`, Text: \`${s.colors.foreground}\`
- **Cards:** Padding: \`${s.componentRules.card.padding}\`, Background: \`${s.componentRules.card.background}\`, Radius: \`${s.componentRules.card.borderRadius}\`
- **Input Fields:** Padding: \`${s.componentRules.input.padding}\`, Radius: \`${s.componentRules.input.borderRadius}\`, Background: \`${s.componentRules.input.background}\`

---

## 8. Interaction, Motion & Accessibility
- **Transitions:** \`${s.interaction.transitions}\`
- **Focus Rings:** Visible \`${s.colors.ring}\` outline with 2px offset.
- **Accessibility (WCAG 2.1 AA):** All foreground text must achieve minimum 4.5:1 contrast against its background surface. Respect \`prefers-reduced-motion\`.

---

## 9. Explicit Anti-Patterns (Avoid)
- ❌ Do NOT use generic rainbow or pastel gradient text on every headline.
- ❌ Do NOT add exaggerated neon glow cards or tacky glassmorphism.
- ❌ Do NOT mix mismatched rounded button styles with square cards.
- ❌ Do NOT use low-contrast grey text that violates WCAG AA readability.

---

## 10. Frontend Implementation Checklist
- [ ] Import semantic color tokens into stylesheet or theme variables.
- [ ] Configure typography font families and font weights.
- [ ] Set up layout container max width (\`${s.layout.maxContentWidth}\`).
- [ ] Implement card and button primitives adhering to radius (\`${s.shapesEffects.borderRadius.md}\`).
- [ ] Test keyboard navigation focus indicators and contrast ratios.
`;

  return {
    format: 'markdown',
    code,
    filename: target.defaultFilename(style.slug),
    mimeType: target.mimeType,
  };
}

