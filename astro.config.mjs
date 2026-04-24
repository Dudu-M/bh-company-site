// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()]
  },
  // site: 'https://Dudu-M.github.io',
  // build: {
  //   inlineStylesheets: 'auto',
  // },
  // compressHTML: true,
});