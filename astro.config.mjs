// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import yaml from '@rollup/plugin-yaml';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sdn3ngraji.netlify.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss(), yaml()],
  },
});
