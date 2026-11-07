import { DesignStyle } from '@/types/style';
import { CustomizationOverrides } from '@/types/customizer';

export type ExportFormat = 'css' | 'tailwind' | 'dtcg' | 'markdown';

export interface ExportTarget {
  id: ExportFormat;
  label: string;
  extension: string;
  mimeType: string;
  description: string;
  defaultFilename: (slug: string) => string;
}

export type TokenCategory =
  | 'color'
  | 'fontFamily'
  | 'fontSize'
  | 'fontWeight'
  | 'lineHeight'
  | 'letterSpacing'
  | 'spacing'
  | 'borderRadius'
  | 'borderWidth'
  | 'shadow'
  | 'transition';

export interface NormalizedTokenLeaf {
  key: string;
  path: string[];
  cssVarName: string;
  category: TokenCategory;
  value: string;
  description?: string;
}

export interface NormalizedTokens {
  styleName: string;
  styleSlug: string;
  isCustomized: boolean;
  tokens: NormalizedTokenLeaf[];
  byCategory: Record<TokenCategory, NormalizedTokenLeaf[]>;
}

export interface ExportValidationIssue {
  path: string;
  message: string;
  severity: 'error' | 'warning';
}

export interface ExportValidationResult {
  isValid: boolean;
  issues: ExportValidationIssue[];
}

export interface ExportResult {
  format: ExportFormat;
  code: string;
  filename: string;
  mimeType: string;
}

export interface SerializerOptions {
  style: DesignStyle;
  overrides?: CustomizationOverrides;
  normalized: NormalizedTokens;
  tailwindVersion?: 'v4' | 'v3';
}

