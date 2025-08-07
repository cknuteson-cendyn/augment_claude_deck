import { defineConfig } from 'vite';

export default defineConfig({
  base: '/augment_claude_deck/', // For GitHub Pages repo name
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