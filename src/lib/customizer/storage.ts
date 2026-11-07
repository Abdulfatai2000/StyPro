import { CustomizationOverrides } from '@/types/customizer';
import { getInitialOverrides } from './resolver';

const STORAGE_PREFIX = 'stypro_customization_v1_';

export function loadCustomization(slug: string): CustomizationOverrides {
  if (typeof window === 'undefined') {
    return getInitialOverrides();
  }

  try {
    const raw = window.localStorage.getItem(`${STORAGE_PREFIX}${slug}`);
    if (!raw) return getInitialOverrides();

    const parsed = JSON.parse(raw);
    return {
      colors: parsed.colors || {},
      typography: parsed.typography || {},
      spacing: parsed.spacing || {},
      geometry: parsed.geometry || {},
      effects: parsed.effects || {},
      motion: parsed.motion || {},
    };
  } catch (err) {
    console.warn(`[StyPro] Failed to load customization for "${slug}":`, err);
    return getInitialOverrides();
  }
}

export function saveCustomization(slug: string, overrides: CustomizationOverrides): void {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(`${STORAGE_PREFIX}${slug}`, JSON.stringify(overrides));
  } catch (err) {
    console.warn(`[StyPro] Failed to save customization for "${slug}":`, err);
  }
}

export function clearCustomization(slug: string): void {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.removeItem(`${STORAGE_PREFIX}${slug}`);
  } catch (err) {
    console.warn(`[StyPro] Failed to clear customization for "${slug}":`, err);
  }
}
