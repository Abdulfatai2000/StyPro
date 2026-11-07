import { NormalizedTokens, ExportValidationResult, ExportValidationIssue } from './types';
import { isValidHex } from '@/lib/customizer/color-utils';

export function validateNormalizedTokens(normalized: NormalizedTokens): ExportValidationResult {
  const issues: ExportValidationIssue[] = [];

  if (!normalized.styleSlug || !normalized.styleName) {
    issues.push({
      path: 'meta',
      message: 'Missing style slug or style name in normalized tokens',
      severity: 'error',
    });
  }

  if (normalized.tokens.length === 0) {
    issues.push({
      path: 'tokens',
      message: 'Normalized token set is empty',
      severity: 'error',
    });
  }

  for (const token of normalized.tokens) {
    // 1. Check for empty values
    if (!token.value || token.value.trim() === '') {
      issues.push({
        path: token.path.join('.'),
        message: `Token "${token.cssVarName}" has an empty value`,
        severity: 'error',
      });
      continue;
    }

    // 2. Validate color tokens
    if (token.category === 'color') {
      const v = token.value.trim();
      const isHex = v.startsWith('#');
      const isRgb = v.startsWith('rgb');
      const isNamed = ['transparent', 'currentColor', 'inherit'].includes(v);

      if (isHex && !isValidHex(v)) {
        issues.push({
          path: token.path.join('.'),
          message: `Token "${token.cssVarName}" has invalid hex color syntax: "${v}"`,
          severity: 'error',
        });
      } else if (!isHex && !isRgb && !isNamed) {
        issues.push({
          path: token.path.join('.'),
          message: `Token "${token.cssVarName}" uses unrecognized color format: "${v}"`,
          severity: 'warning',
        });
      }
    }

    // 3. Check for unbalanced quotes or brackets
    const singleQuotes = (token.value.match(/'/g) || []).length;
    const doubleQuotes = (token.value.match(/"/g) || []).length;
    if (singleQuotes % 2 !== 0 || doubleQuotes % 2 !== 0) {
      issues.push({
        path: token.path.join('.'),
        message: `Token "${token.cssVarName}" has mismatched quotation marks`,
        severity: 'warning',
      });
    }
  }

  const hasErrors = issues.some((i) => i.severity === 'error');

  return {
    isValid: !hasErrors,
    issues,
  };
}

