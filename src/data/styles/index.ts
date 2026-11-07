import { DesignStyle, StyleCategory } from '@/types/style';
import { modernDark } from './modern-dark';
import { swissMinimalist } from './swiss-minimalist';
import { neoBrutalist } from './neo-brutalist';
import { cyberDeck } from './cyber-deck';
import { glassAurora } from './glass-aurora';
import { corporateClean } from './corporate-clean';
import { nordicFrost } from './nordic-frost';
import { midnightBloom } from './midnight-bloom';
import { paperInk } from './paper-ink';
import { sunsetSynth } from './sunset-synth';
import { claymorphicSoft } from './claymorphic-soft';
import { monochromeWireframe } from './monochrome-wireframe';

export const allStyles: DesignStyle[] = [
  modernDark,
  swissMinimalist,
  neoBrutalist,
  cyberDeck,
  glassAurora,
  corporateClean,
  nordicFrost,
  midnightBloom,
  paperInk,
  sunsetSynth,
  claymorphicSoft,
  monochromeWireframe,
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

export {
  modernDark,
  swissMinimalist,
  neoBrutalist,
  cyberDeck,
  glassAurora,
  corporateClean,
  nordicFrost,
  midnightBloom,
  paperInk,
  sunsetSynth,
  claymorphicSoft,
  monochromeWireframe,
};
