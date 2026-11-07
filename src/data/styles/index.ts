import { DesignStyle, StyleCategory } from '@/types/style';
import { modernDark } from './modern-dark';
import { swissMinimalist } from './swiss-minimalist';

export const allStyles: DesignStyle[] = [
  modernDark,
  swissMinimalist,
];

export function getAllStyles(): DesignStyle[] {
  return allStyles;
}

export function getStyleBySlug(slug: string): DesignStyle | undefined {
  return allStyles.find((style) => style.slug === slug);
}

export function getFeaturedStyles(): DesignStyle[] {
  return allStyles.filter((style) => style.isFeatured);
}

export function getStylesByCategory(category: StyleCategory): DesignStyle[] {
  return allStyles.filter((style) => style.category === category);
}

export function getAllCategories(): { id: StyleCategory | 'all'; label: string }[] {
  return [
    { id: 'all', label: 'All Styles' },
    { id: 'developer-tool', label: 'Developer Tools' },
    { id: 'editorial', label: 'Editorial' },
    { id: 'minimalist', label: 'Minimalist' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'neo-brutalist', label: 'Neo-Brutalist' },
    { id: 'cyberpunk', label: 'Cyberpunk' },
    { id: 'spatial-glass', label: 'Spatial Glass' },
    { id: 'playful', label: 'Playful' },
  ];
}

export { modernDark, swissMinimalist };

