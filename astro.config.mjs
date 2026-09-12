import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://luismarques.ch',
  build: {
    // The CSS is small; inlining it removes the render-blocking request.
    inlineStylesheets: 'always',
  },
});
