/**
 * Triggers a client-side file download safely using Blob and temporary object URL.
 */
export function downloadFile(
  filename: string,
  content: string,
  mimeType: string = 'text/plain;charset=utf-8'
): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 100);
    return true;
  } catch (err) {
    console.error('[StyPro] Client-side download failed:', err);
    return false;
  }
}

