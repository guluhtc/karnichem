import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Configure for SPA - serve index.html for all routes
    historyApiFallback: {
      // Handle all routes that don't match assets
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/products\/.*/, to: '/index.html' },
        { from: /^\/blog\/.*/, to: '/index.html' },
        { from: /^\/about$/, to: '/index.html' },
        { from: /^\/contact$/, to: '/index.html' },
        { from: /^\/testimonials$/, to: '/index.html' },
        { from: /^\/product-gallery$/, to: '/index.html' },
        { from: /./, to: '/index.html' }
      ]
    }
  },
  preview: {
    // Same configuration for preview mode
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/products\/.*/, to: '/index.html' },
        { from: /^\/blog\/.*/, to: '/index.html' },
        { from: /^\/about$/, to: '/index.html' },
        { from: /^\/contact$/, to: '/index.html' },
        { from: /^\/testimonials$/, to: '/index.html' },
        { from: /^\/product-gallery$/, to: '/index.html' },
        { from: /./, to: '/index.html' }
      ]
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
