import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { modernDark } from '@/data/styles/modern-dark';
import { normalizeDesignTokens } from '@/lib/export/normalize-tokens';
import { validateNormalizedTokens } from '@/lib/export/validate-tokens';

describe('Design Token Normalization & Validation', () => {
  test('normalizes canonical Modern Dark style without errors', () => {
    const normalized = normalizeDesignTokens(modernDark);

    assert.equal(normalized.styleSlug, 'modern-dark');
    assert.equal(normalized.isCustomized, false);
    assert.ok(normalized.tokens.length > 30, 'Should generate comprehensive token list');

    // Check categories exist
    assert.ok(normalized.byCategory.color.length > 10);
    assert.ok(normalized.byCategory.fontFamily.length >= 3);
    assert.ok(normalized.byCategory.spacing.length > 5);
    assert.ok(normalized.byCategory.borderRadius.length >= 4);
    assert.ok(normalized.byCategory.shadow.length >= 3);

    // Validate tokens
    const validation = validateNormalizedTokens(normalized);
    assert.equal(validation.isValid, true, 'Canonical tokens must pass validation');
    assert.equal(validation.issues.length, 0);
  });

  test('normalizes customized style with overrides', () => {
    const overrides = {
      colors: { primary: '#FF0055' },
      typography: { headingWeight: 900 },
      spacing: { componentGaps: '2rem' },
      geometry: { buttonRadius: '9999px' },
      effects: {},
      motion: {},
    };

    const customized = JSON.parse(JSON.stringify(modernDark));
    customized.colors.primary = '#FF0055';
    customized.spacing.componentGaps = '2rem';

    const normalized = normalizeDesignTokens(customized, overrides);
    assert.equal(normalized.isCustomized, true);

    const primaryToken = normalized.tokens.find((t) => t.key === 'primary');
    assert.ok(primaryToken);
    assert.equal(primaryToken?.value, '#FF0055');

    const gapToken = normalized.tokens.find((t) => t.key === 'componentGaps');
    assert.ok(gapToken);
    assert.equal(gapToken?.value, '2rem');

    const validation = validateNormalizedTokens(normalized);
    assert.equal(validation.isValid, true);
  });

  test('detects invalid hex values in validation', () => {
    const corrupted = JSON.parse(JSON.stringify(modernDark));
    corrupted.colors.primary = '#ZZZZZZ';

    const normalized = normalizeDesignTokens(corrupted);
    const validation = validateNormalizedTokens(normalized);

    assert.equal(validation.isValid, false);
    assert.ok(validation.issues.some((i) => i.path.includes('primary')));
  });
});
