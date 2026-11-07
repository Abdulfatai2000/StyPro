import { SerializerOptions, ExportResult } from '../types';
import { getExportTarget } from '../registry';

interface DtcgTokenNode {
  $value: string | number | boolean;
  $type?: string;
  $description?: string;
}

interface DtcgRoot {
  $name: string;
  $schema: string;
  version: string;
  metadata: {
    styleName: string;
    styleSlug: string;
    isCustomized: boolean;
    generatedBy: string;
    exportedAt: string;
  };
  color: Record<string, DtcgTokenNode>;
  typography: {
    fontFamily: Record<string, DtcgTokenNode>;
    fontSize: Record<string, DtcgTokenNode>;
    fontWeight: Record<string, DtcgTokenNode>;
    lineHeight: Record<string, DtcgTokenNode>;
    letterSpacing: Record<string, DtcgTokenNode>;
  };
  spacing: Record<string, DtcgTokenNode>;
  borderRadius: Record<string, DtcgTokenNode>;
  borderWidth: Record<string, DtcgTokenNode>;
  shadow: Record<string, DtcgTokenNode>;
  transition: Record<string, DtcgTokenNode>;
}

export function serializeToDtcg(options: SerializerOptions): ExportResult {
  const { normalized, style } = options;
  const target = getExportTarget('dtcg');

  const dtcgTree: DtcgRoot = {
    $name: `StyPro Tokens — ${normalized.styleName}`,
    $schema: 'https://design-tokens.github.io/community-group/format/',
    version: '1.0.0',
    metadata: {
      styleName: normalized.styleName,
      styleSlug: normalized.styleSlug,
      isCustomized: normalized.isCustomized,
      generatedBy: 'StyPro (From Style to Prompt to Code)',
      exportedAt: new Date().toISOString(),
    },
    color: {},
    typography: {
      fontFamily: {},
      fontSize: {},
      fontWeight: {},
      lineHeight: {},
      letterSpacing: {},
    },
    spacing: {},
    borderRadius: {},
    borderWidth: {},
    shadow: {},
    transition: {},
  };

  // Map normalized tokens into DTCG $value & $type format
  for (const token of normalized.tokens) {
    const node: DtcgTokenNode = {
      $value: token.value,
      $description: token.description,
    };

    switch (token.category) {
      case 'color':
        node.$type = 'color';
        dtcgTree.color[token.key] = node;
        break;
      case 'fontFamily':
        node.$type = 'fontFamily';
        dtcgTree.typography.fontFamily[token.key] = node;
        break;
      case 'fontSize':
        node.$type = 'dimension';
        dtcgTree.typography.fontSize[token.key] = node;
        break;
      case 'fontWeight':
        node.$type = 'fontWeight';
        dtcgTree.typography.fontWeight[token.key] = node;
        break;
      case 'lineHeight':
        node.$type = 'number';
        dtcgTree.typography.lineHeight[token.key] = node;
        break;
      case 'letterSpacing':
        node.$type = 'dimension';
        dtcgTree.typography.letterSpacing[token.key] = node;
        break;
      case 'spacing':
        node.$type = 'dimension';
        dtcgTree.spacing[token.key] = node;
        break;
      case 'borderRadius':
        node.$type = 'dimension';
        dtcgTree.borderRadius[token.key] = node;
        break;
      case 'borderWidth':
        node.$type = 'dimension';
        dtcgTree.borderWidth[token.key] = node;
        break;
      case 'shadow':
        node.$type = 'shadow';
        dtcgTree.shadow[token.key] = node;
        break;
      case 'transition':
        node.$type = 'duration';
        dtcgTree.transition[token.key] = node;
        break;
    }
  }

  const code = JSON.stringify(dtcgTree, null, 2);

  return {
    format: 'dtcg',
    code,
    filename: target.defaultFilename(style.slug),
    mimeType: target.mimeType,
  };
}

