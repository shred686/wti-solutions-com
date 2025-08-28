// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Development config - no base path
export default defineConfig({
  integrations: [tailwind()],
  base: undefined,
  site: undefined
}); 