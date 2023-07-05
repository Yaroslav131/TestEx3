import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@store': '/src/store',
      '@api': '/src/api',
      '@helpers': '/src/helpers',
      '@customTypes': '/src/types',
      '@assets': '/src/assets',
      '@':'/src'
    },
  },
});