import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { modernDark } from '@/data/styles/modern-dark';
import { swissMinimalist } from '@/data/styles/swiss-minimalist';
import { normalizeDesignTokens } from '@/lib/export/normalize-tokens';
import { serializeToDtcg } from '@/lib/export/serializers/dtcg';

describe('DTCG JSON Token Serializer', () => {
  test('serializes canonical Modern Dark into valid DTCG format', () => {
    const normalized = normalizeDesignTokens(modernDark);
    const result = serializeToDtcg({ style: modernDark, normalized });

    assert.equal(result.format, 'dtcg');
    assert.equal(result.filename, 'modern-dark-tokens.json');

    const parsed = JSON.parse(result.code);
    assert.equal(parsed.metadata.styleSlug, 'modern-dark');
    assert.equal(parsed.metadata.isCustomized, false);

    // Verify DTCG properties
    assert.ok(parsed.color.primary);
    assert.equal(parsed.color.primary.$value, '#5E6AD2');
    assert.equal(parsed.color.primary.$type, 'color');

    assert.ok(parsed.typography.fontFamily.heading);
    assert.equal(parsed.typography.fontFamily.heading.$type, 'fontFamily');

    assert.ok(parsed.spacing.md);
    assert.equal(parsed.spacing.md.$type, 'dimension');
  });

  test('serializes customized values accurately in DTCG', () => {
    const overrides = {
      colors: { primary: '#FF1493' },
      typography: {},
      spacing: {},
      geometry: {},
      effects: {},
      motion: {},
    };

    const customized = JSON.parse(JSON.stringify(modernDark));
    customized.colors.primary = '#FF1493';

    const normalized = normalizeDesignTokens(customized, overrides);
    const result = serializeToDtcg({ style: customized, overrides, normalized });

    const parsed = JSON.parse(result.code);
    assert.equal(parsed.metadata.isCustomized, true);
    assert.equal(parsed.color.primary.$value, '#FF1493');
  });

  test('serializes Swiss Minimalist and validates JSON structure', () => {
    const normalized = normalizeDesignTokens(swissMinimalist);
    const result = serializeToDtcg({ style: swissMinimalist, normalized });

    const parsed = JSON.parse(result.code);
    assert.equal(parsed.metadata.styleSlug, 'swiss-minimalist');
    assert.equal(parsed.color.background.$value, '#F7F7F8');
  });
});

