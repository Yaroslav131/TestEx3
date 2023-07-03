import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      store: `${path.resolve(__dirname, "./src/store/")}`,
      pages: path.resolve(__dirname, "./src/pages/"),
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
    },
  },
});