import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // optional: opens browser on dev start
  },
  build: {
    outDir: 'dist',
  },
  // 👇 this tells Vite to fallback to index.html for SPA routes
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
