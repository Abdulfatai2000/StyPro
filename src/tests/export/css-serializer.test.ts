import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { modernDark } from '@/data/styles/modern-dark';
import { swissMinimalist } from '@/data/styles/swiss-minimalist';
import { normalizeDesignTokens } from '@/lib/export/normalize-tokens';
import { serializeToCss } from '@/lib/export/serializers/css';

describe('CSS Variable Serializer', () => {
  test('serializes canonical Modern Dark into valid CSS', () => {
    const normalized = normalizeDesignTokens(modernDark);
    const result = serializeToCss({ style: modernDark, normalized });

    assert.equal(result.format, 'css');
    assert.equal(result.filename, 'modern-dark-tokens.css');
    assert.ok(result.code.includes(':root {'));
    assert.ok(result.code.includes('--sty-color-background: #050506;'));
    assert.ok(result.code.includes('--sty-color-primary: #5E6AD2;'));
    assert.ok(result.code.includes('--sty-radius-md: 6px;'));
    assert.ok(result.code.includes('/* --- Base Canvas & Surfaces --- */'));
    assert.ok(result.code.includes('/* --- Brand Actions & Accents --- */'));
  });

  test('serializes customized values into CSS variables', () => {
    const overrides = {
      colors: { primary: '#00F0FF', background: '#000000' },
      typography: {},
      spacing: {},
      geometry: { buttonRadius: '16px' },
      effects: {},
      motion: {},
    };

    const customized = JSON.parse(JSON.stringify(modernDark));
    customized.colors.primary = '#00F0FF';
    customized.colors.background = '#000000';

    const normalized = normalizeDesignTokens(customized, overrides);
    const result = serializeToCss({ style: customized, overrides, normalized });

    assert.ok(result.code.includes('Customized Derivative System'));
    assert.ok(result.code.includes('--sty-color-primary: #00F0FF;'));
    assert.ok(result.code.includes('--sty-color-background: #000000;'));
  });

  test('serializes Swiss Minimalist with light mode tokens', () => {
    const normalized = normalizeDesignTokens(swissMinimalist);
    const result = serializeToCss({ style: swissMinimalist, normalized });

    assert.equal(result.filename, 'swiss-minimalist-tokens.css');
    assert.ok(result.code.includes('--sty-color-background: #F7F7F8;'));
    assert.ok(result.code.includes('--sty-color-accent: #E11D48;'));
  });
});

