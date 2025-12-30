// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://Dudu-M.github.io',
  base: '/bh-company-site',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});