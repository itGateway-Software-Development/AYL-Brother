import { onMounted, onUnmounted } from "vue";

export function useZoom() {
  const handleResize = () => {
    const zoomLevel = Math.round(window.devicePixelRatio * 100);
    // document.body.style.zoom = 100;
  };

  onMounted(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
}
