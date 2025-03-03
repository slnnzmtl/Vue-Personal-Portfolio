import { ref, onMounted, onUnmounted } from "vue";

export function useBackgroundColor(elementRef: HTMLElement) {
  const isDarkBackground = ref(true);

  const checkBackgroundColor = () => {
    const element = elementRef;
    if (!element) return;

    // Get the background color at the element's position
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Create a small canvas to sample the color
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;

    // Capture the screen at the element's position
    canvas.width = 1;
    canvas.height = 1;
    context.drawWindow(window, x, y, 1, 1, "rgb(0, 0, 0)");

    // Get color data
    const [r, g, b] = context.getImageData(0, 0, 1, 1).data;

    // Calculate relative luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Update state based on luminance (threshold 0.5)
    isDarkBackground.value = luminance < 0.5;
  };

  const observer = new IntersectionObserver(checkBackgroundColor, {
    threshold: [0, 0.5, 1],
  });

  onMounted(() => {
    if (elementRef) {
      observer.observe(elementRef);
      window.addEventListener("scroll", checkBackgroundColor);
    }
  });

  onUnmounted(() => {
    observer.disconnect();
    window.removeEventListener("scroll", checkBackgroundColor);
  });

  return {
    isDarkBackground,
  };
}
