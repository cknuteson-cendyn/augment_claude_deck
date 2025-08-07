import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // For GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  server: {
    port: 8080,
    open: true
  }
});