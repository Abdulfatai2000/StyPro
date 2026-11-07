/**
 * Validates whether a given string is a valid HEX color code.
 * Supports #RGB, #RGBA, #RRGGBB, #RRGGBBAA.
 */
export function isValidHex(hex: string): boolean {
  return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(hex.trim());
}

/**
 * Normalizes a hex string by trimming and adding '#' prefix if missing.
 */
export function normalizeHex(input: string): string {
  let cleaned = input.trim();
  if (!cleaned.startsWith('#')) {
    cleaned = '#' + cleaned;
  }
  return cleaned;
}

/**
 * Calculates relative luminance according to WCAG 2.1 specifications.
 */
export function getRelativeLuminance(hex: string): number {
  if (!isValidHex(hex)) return 0.5;

  let c = hex.substring(1);
  if (c.length === 3) {
    c = c.split('').map((char) => char + char).join('');
  }
  if (c.length >= 6) {
    c = c.substring(0, 6);
  }

  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;

  const toLinear = (val: number) =>
    val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);

  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/**
 * Returns WCAG contrast ratio between two hex colors (between 1 and 21).
 */
export function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = getRelativeLuminance(hex1);
  const lum2 = getRelativeLuminance(hex2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}
