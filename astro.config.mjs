// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://shred686.github.io',
  base: process.env.NODE_ENV === 'production' ? '/wti-solutions-com' : undefined
});
