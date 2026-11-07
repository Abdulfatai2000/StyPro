import { DesignStyle } from '@/types/style';
import { CustomizationOverrides } from '@/types/customizer';
import { ExportFormat, ExportResult, SerializerOptions } from './types';
import { normalizeDesignTokens } from './normalize-tokens';
import { validateNormalizedTokens } from './validate-tokens';
import { serializeToCss } from './serializers/css';
import { serializeToTailwind } from './serializers/tailwind';
import { serializeToDtcg } from './serializers/dtcg';
import { serializeToMarkdown } from './serializers/markdown';

export * from './types';
export * from './registry';
export * from './normalize-tokens';
export * from './validate-tokens';
export * from './serializers/css';
export * from './serializers/tailwind';
export * from './serializers/dtcg';
export * from './serializers/markdown';

export interface ExportDesignSystemOptions {
  style: DesignStyle;
  overrides?: CustomizationOverrides;
  tailwindVersion?: 'v4' | 'v3';
}

export function exportDesignSystem(
  format: ExportFormat,
  options: ExportDesignSystemOptions
): ExportResult {
  const { style, overrides, tailwindVersion = 'v4' } = options;

  const normalized = normalizeDesignTokens(style, overrides);
  const validation = validateNormalizedTokens(normalized);

  if (!validation.isValid) {
    const errorMessages = validation.issues
      .filter((i) => i.severity === 'error')
      .map((i) => `${i.path}: ${i.message}`)
      .join('; ');
    throw new Error(`[StyPro Export Error] Cannot export invalid token set: ${errorMessages}`);
  }

  const serializerOpts: SerializerOptions = {
    style,
    overrides,
    normalized,
    tailwindVersion,
  };

  switch (format) {
    case 'css':
      return serializeToCss(serializerOpts);
    case 'tailwind':
      return serializeToTailwind(serializerOpts);
    case 'dtcg':
      return serializeToDtcg(serializerOpts);
    case 'markdown':
      return serializeToMarkdown(serializerOpts);
    default:
      throw new Error(`[StyPro] Unsupported export format requested: ${format}`);
  }
}

