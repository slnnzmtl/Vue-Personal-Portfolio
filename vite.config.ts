import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss(), vue()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    watch: {
      usePolling: true,
    },
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@/*": fileURLToPath(new URL("./src/*", import.meta.url)),
      "@/components": fileURLToPath(
        new URL("./src/components", import.meta.url),
      ),
      "@/composables": fileURLToPath(
        new URL("./src/composables", import.meta.url),
      ),
      "@/styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      "@/stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
      "@/modals": fileURLToPath(new URL("./src/modals", import.meta.url)),
      "@/assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/mixins/_scrollbar.scss";`,
      },
    },
  },
});
