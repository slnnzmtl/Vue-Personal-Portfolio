import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    tailwindcss(),
    vue()
  ],
  resolve: {
    alias: {
      '@/*': fileURLToPath(new URL('./src/*', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      '@fontsource': fileURLToPath(new URL('./node_modules/@fontsource', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
    }
  }
})