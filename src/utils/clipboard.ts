/**
 * Copies the provided text to clipboard
 * @param text - The text to copy to clipboard
 * @returns A promise that resolves when the text is copied
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      // For modern browsers with Clipboard API
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      
      // Make the textarea out of viewport
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      
      textArea.focus();
      textArea.select();
      
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      return success;
    }
  } catch (error) {
    console.error('Failed to copy text: ', error);
    return false;
  }
}; 