import { SerializerOptions, ExportResult } from '../types';
import { getExportTarget } from '../registry';

export function serializeToTailwind(options: SerializerOptions): ExportResult {
  const { normalized, style, tailwindVersion = 'v4' } = options;
  const target = getExportTarget('tailwind');

  // Colors mapping
  const colorLines = Object.entries(style.colors).map(([k, v]) => {
    const kebab = k.replace(/([A-Z])/g, '-$1').toLowerCase();
    return { key: kebab, value: v };
  });

  if (tailwindVersion === 'v4') {
    // Modern Tailwind v4 @theme CSS-first export
    const v4Code = `/**
 * StyPro Tailwind CSS v4 Theme Specification — ${normalized.styleName}
 * Mode: ${normalized.isCustomized ? 'Customized Derivative System' : 'Canonical Style Standard'}
 * 
 * Integration:
 * Paste this @theme block into your global CSS entrypoint (e.g. globals.css)
 * after @import "tailwindcss";
 */

@import "tailwindcss";

@theme {
  /* --- Colors --- */
${colorLines.map((c) => `  --color-${c.key}: ${c.value};`).join('\n')}

  /* --- Fonts --- */
  --font-heading: ${style.typography.headingFont};
  --font-body: ${style.typography.bodyFont};
  --font-mono: ${style.typography.monospaceFont};

  /* --- Border Radius --- */
${Object.entries(style.shapesEffects.borderRadius).map(([k, v]) => `  --radius-${k}: ${v};`).join('\n')}

  /* --- Spacing --- */
${Object.entries(style.spacing.scale).map(([k, v]) => `  --spacing-${k}: ${v};`).join('\n')}
  --spacing-gap: ${style.spacing.componentGaps};
  --spacing-padding: ${style.spacing.contentPadding};
  --spacing-section: ${style.spacing.sectionSpacing};

  /* --- Shadows --- */
${Object.entries(style.shapesEffects.shadows).filter(([, v]) => v).map(([k, v]) => `  --shadow-${k}: ${v};`).join('\n')}
}

/*
 * Example Tailwind v4 Utility Usage:
 * <div class="bg-surface text-foreground rounded-md border border-border p-padding shadow-md">
 *   <button class="bg-primary text-primary-foreground font-heading rounded-sm px-4 py-2 hover:bg-primary-hover">
 *     Action
 *   </button>
 * </div>
 */
`;

    return {
      format: 'tailwind',
      code: v4Code,
      filename: `tailwind.${style.slug}.v4.css`,
      mimeType: 'text/css;charset=utf-8',
    };
  }

  // Classic Tailwind v3 Config Export (TypeScript)
  const v3Code = `import type { Config } from 'tailwindcss';

/**
 * StyPro Tailwind CSS v3 Theme Configuration — ${normalized.styleName}
 * Mode: ${normalized.isCustomized ? 'Customized Derivative System' : 'Canonical Style Standard'}
 * 
 * Integration:
 * Merge this theme configuration into your tailwind.config.ts / tailwind.config.js
 */
const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
${colorLines.map((c) => `        '${c.key}': '${c.value}',`).join('\n')}
      },
      fontFamily: {
        heading: ['${style.typography.headingFont.split(',')[0].replace(/['"]/g, '')}', 'sans-serif'],
        body: ['${style.typography.bodyFont.split(',')[0].replace(/['"]/g, '')}', 'sans-serif'],
        mono: ['${style.typography.monospaceFont.split(',')[0].replace(/['"]/g, '')}', 'monospace'],
      },
      borderRadius: {
${Object.entries(style.shapesEffects.borderRadius).map(([k, v]) => `        '${k}': '${v}',`).join('\n')}
      },
      spacing: {
${Object.entries(style.spacing.scale).map(([k, v]) => `        '${k}': '${v}',`).join('\n')}
        'gap': '${style.spacing.componentGaps}',
        'content': '${style.spacing.contentPadding}',
        'section': '${style.spacing.sectionSpacing}',
      },
      boxShadow: {
${Object.entries(style.shapesEffects.shadows).filter(([, v]) => v).map(([k, v]) => `        '${k}': '${v}',`).join('\n')}
      },
      maxWidth: {
        'container': '${style.layout.maxContentWidth}',
      },
    },
  },
  plugins: [],
};

export default config;
`;

  return {
    format: 'tailwind',
    code: v3Code,
    filename: target.defaultFilename(style.slug),
    mimeType: target.mimeType,
  };
}

