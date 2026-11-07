import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { modernDark } from '@/data/styles/modern-dark';
import { swissMinimalist } from '@/data/styles/swiss-minimalist';
import { normalizeDesignTokens } from '@/lib/export/normalize-tokens';
import { serializeToTailwind } from '@/lib/export/serializers/tailwind';

describe('Tailwind Theme Serializer', () => {
  test('serializes Tailwind v4 @theme configuration', () => {
    const normalized = normalizeDesignTokens(modernDark);
    const result = serializeToTailwind({ style: modernDark, normalized, tailwindVersion: 'v4' });

    assert.equal(result.format, 'tailwind');
    assert.ok(result.code.includes('@theme {'));
    assert.ok(result.code.includes('--color-primary: #5E6AD2;'));
    assert.ok(result.code.includes('--color-background: #050506;'));
    assert.ok(result.code.includes('--radius-md: 6px;'));
    assert.ok(result.code.includes('--spacing-gap: 1rem;'));
    assert.equal(result.filename, 'tailwind.modern-dark.v4.css');
  });

  test('serializes Tailwind v3 TypeScript configuration', () => {
    const normalized = normalizeDesignTokens(modernDark);
    const result = serializeToTailwind({ style: modernDark, normalized, tailwindVersion: 'v3' });

    assert.equal(result.format, 'tailwind');
    assert.ok(result.code.includes("import type { Config } from 'tailwindcss';"));
    assert.ok(result.code.includes("'primary': '#5E6AD2'"));
    assert.ok(result.code.includes("'background': '#050506'"));
    assert.ok(result.code.includes("'container': '1200px'"));
    assert.equal(result.filename, 'tailwind.modern-dark.config.ts');
  });

  test('serializes Swiss Minimalist customized values', () => {
    const customized = JSON.parse(JSON.stringify(swissMinimalist));
    customized.colors.primary = '#0000FF';

    const normalized = normalizeDesignTokens(customized);
    const result = serializeToTailwind({ style: customized, normalized, tailwindVersion: 'v4' });

    assert.ok(result.code.includes('--color-primary: #0000FF;'));
  });
});

