// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://charming-taiyaki-deba4a.netlify.app',
  integrations: [preact()]
});