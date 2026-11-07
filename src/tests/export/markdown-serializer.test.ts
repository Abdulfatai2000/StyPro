import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { modernDark } from '@/data/styles/modern-dark';
import { swissMinimalist } from '@/data/styles/swiss-minimalist';
import { normalizeDesignTokens } from '@/lib/export/normalize-tokens';
import { serializeToMarkdown } from '@/lib/export/serializers/markdown';

describe('Markdown Design-System Serializer', () => {
  test('serializes canonical Modern Dark into complete Markdown specification', () => {
    const normalized = normalizeDesignTokens(modernDark);
    const result = serializeToMarkdown({ style: modernDark, normalized });

    assert.equal(result.format, 'markdown');
    assert.equal(result.filename, 'modern-dark-design-system.md');
    assert.ok(result.code.includes('# DESIGN SYSTEM SPECIFICATION: MODERN DARK'));
    assert.ok(result.code.includes('## 3. Semantic Colour System'));
    assert.ok(result.code.includes('| `background` | `#050506` |'));
    assert.ok(result.code.includes('| `primary` | `#5E6AD2` |'));
    assert.ok(result.code.includes('## 4. Typography Hierarchy'));
    assert.ok(result.code.includes('## 10. Frontend Implementation Checklist'));
    assert.ok(result.code.includes('## 9. Explicit Anti-Patterns'));
  });

  test('serializes customized values into Markdown tables', () => {
    const overrides = {
      colors: { primary: '#FF5500' },
      typography: {},
      spacing: {},
      geometry: {},
      effects: {},
      motion: {},
    };

    const customized = JSON.parse(JSON.stringify(modernDark));
    customized.colors.primary = '#FF5500';

    const normalized = normalizeDesignTokens(customized, overrides);
    const result = serializeToMarkdown({ style: customized, overrides, normalized });

    assert.ok(result.code.includes('Customized Derivative System'));
    assert.ok(result.code.includes('| `primary` | `#FF5500` |'));
  });

  test('serializes Swiss Minimalist specification', () => {
    const normalized = normalizeDesignTokens(swissMinimalist);
    const result = serializeToMarkdown({ style: swissMinimalist, normalized });

    assert.equal(result.filename, 'swiss-minimalist-design-system.md');
    assert.ok(result.code.includes('# DESIGN SYSTEM SPECIFICATION: SWISS MINIMALIST'));
    assert.ok(result.code.includes('| `background` | `#F7F7F8` |'));
  });
});

