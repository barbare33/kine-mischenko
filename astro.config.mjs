import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kine-mischenko.fr',
  trailingSlash: 'always',
  // Les équivalences FR/EN sont déclarées en hreflang dans le <head> (slugs différents par langue).
  integrations: [
    sitemap({ filter: (page) => !/mentions-legales|legal-notice/.test(page) }),
  ],
});
