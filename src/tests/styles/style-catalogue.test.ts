import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  allStyles,
  getAllStyles,
  getStyleBySlug,
  getFeaturedStyles,
  getStylesByCategory,
  getAllCategories,
} from '@/data/styles';
import {
  normalizeDesignTokens,
  validateNormalizedTokens,
  exportDesignSystem,
} from '@/lib/export';

describe('Design Style Catalogue Integrity', () => {
  it('contains exactly 12 production-grade design systems', () => {
    assert.equal(allStyles.length, 12, 'Style catalogue must contain exactly 12 styles');
    assert.equal(getAllStyles().length, 12);
  });

  it('guarantees unique IDs and Slugs across all 12 styles', () => {
    const ids = new Set<string>();
    const slugs = new Set<string>();

    for (const style of allStyles) {
      assert.ok(style.id, `Style ${style.name} must have an id`);
      assert.ok(!ids.has(style.id), `Duplicate style id detected: ${style.id}`);
      ids.add(style.id);

      assert.ok(style.slug, `Style ${style.name} must have a slug`);
      assert.ok(!slugs.has(style.slug), `Duplicate style slug detected: ${style.slug}`);
      slugs.add(style.slug);
    }
  });

  it('validates all style categories belong to the recognized taxonomy', () => {
    const allowedCategories = new Set([
      'developer-tool',
      'minimalist',
      'editorial',
      'neo-brutalist',
      'enterprise',
      'cyberpunk',
      'spatial-glass',
      'playful',
    ]);

    for (const style of allStyles) {
      assert.ok(
        allowedCategories.has(style.category),
        `Style ${style.slug} has invalid category: ${style.category}`
      );
    }
  });

  it('has at least one featured style', () => {
    const featured = getFeaturedStyles();
    assert.ok(featured.length > 0, 'There should be at least one featured style');
  });

  it('resolves every style by slug accurately', () => {
    for (const style of allStyles) {
      const found = getStyleBySlug(style.slug);
      assert.ok(found, `Expected to find style by slug: ${style.slug}`);
      assert.equal(found?.id, style.id);
    }

    assert.equal(getStyleBySlug('non-existent-slug'), undefined);
  });

  it('provides category listing with All option', () => {
    const categories = getAllCategories();
    assert.ok(categories.length >= 8);
    assert.equal(categories[0].id, 'all');

    for (const cat of categories) {
      if (cat.id !== 'all') {
        const styles = getStylesByCategory(cat.id);
        assert.ok(Array.isArray(styles));
      }
    }
  });

  it('successfully normalizes and validates tokens for every style', () => {
    for (const style of allStyles) {
      const normalized = normalizeDesignTokens(style);
      assert.ok(normalized, `Normalized token set must exist for ${style.slug}`);

      const validation = validateNormalizedTokens(normalized);
      const errors = validation.issues.filter((i) => i.severity === 'error');
      assert.equal(
        validation.isValid,
        true,
        `Validation failed for ${style.slug}: ${errors.map((e) => e.message).join(', ')}`
      );
      assert.equal(errors.length, 0);
    }
  });

  it('serializes all 12 styles across all 4 export engines without throwing', () => {
    for (const style of allStyles) {
      // 1. CSS
      const cssResult = exportDesignSystem('css', { style });
      assert.ok(cssResult.code.includes(':root'), `CSS output missing :root for ${style.slug}`);
      assert.ok(cssResult.code.includes(style.colors.primary));

      // 2. Tailwind v4
      const twV4Result = exportDesignSystem('tailwind', { style, tailwindVersion: 'v4' });
      assert.ok(twV4Result.code.includes('@theme'), `Tailwind v4 output missing @theme for ${style.slug}`);

      // 3. Tailwind v3
      const twV3Result = exportDesignSystem('tailwind', { style, tailwindVersion: 'v3' });
      assert.ok(twV3Result.code.includes('tailwind.config.ts'), `Tailwind v3 config header missing for ${style.slug}`);

      // 4. DTCG JSON
      const dtcgResult = exportDesignSystem('dtcg', { style });
      const parsedJson = JSON.parse(dtcgResult.code);
      assert.ok(parsedJson.color, `DTCG JSON output missing color tree for ${style.slug}`);

      // 5. Markdown
      const mdResult = exportDesignSystem('markdown', { style });
      assert.ok(
        mdResult.code.includes(`# DESIGN SYSTEM SPECIFICATION: ${style.name.toUpperCase()}`),
        `Markdown output missing header for ${style.slug}`
      );
    }
  });
});
