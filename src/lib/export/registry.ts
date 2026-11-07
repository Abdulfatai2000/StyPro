import { ExportFormat, ExportTarget } from './types';

export const EXPORT_TARGETS: Record<ExportFormat, ExportTarget> = {
  css: {
    id: 'css',
    label: 'CSS Custom Properties',
    extension: '.css',
    mimeType: 'text/css;charset=utf-8',
    description:
      'Standard W3C :root CSS variables covering colors, typography, spacing, radius, and shadows.',
    defaultFilename: (slug: string) => `${slug}-tokens.css`,
  },
  tailwind: {
    id: 'tailwind',
    label: 'Tailwind CSS Theme',
    extension: '.ts',
    mimeType: 'text/javascript;charset=utf-8',
    description:
      'Modern Tailwind CSS configuration compatible with Tailwind v4 @theme and Tailwind v3 themes.',
    defaultFilename: (slug: string) => `tailwind.${slug}.config.ts`,
  },
  dtcg: {
    id: 'dtcg',
    label: 'DTCG JSON Tokens',
    extension: '.json',
    mimeType: 'application/json;charset=utf-8',
    description:
      'W3C Design Tokens Community Group (DTCG) standard format for Style Dictionary and Figma tokens.',
    defaultFilename: (slug: string) => `${slug}-tokens.json`,
  },
  markdown: {
    id: 'markdown',
    label: 'Design System Markdown',
    extension: '.md',
    mimeType: 'text/markdown;charset=utf-8',
    description:
      'Comprehensive design system documentation and AI coding assistant specification.',
    defaultFilename: (slug: string) => `${slug}-design-system.md`,
  },
};

export function getExportTargets(): ExportTarget[] {
  return Object.values(EXPORT_TARGETS);
}

export function getExportTarget(format: ExportFormat): ExportTarget {
  const target = EXPORT_TARGETS[format];
  if (!target) {
    throw new Error(`[StyPro] Unsupported export format requested: "${format}"`);
  }
  return target;
}

