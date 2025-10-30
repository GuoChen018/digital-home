import { defineConfig } from 'astro/config';
import astroOGImage from "astro-og-image";

// https://astro.build/config
export default defineConfig({
    markdown: {
      shikiConfig: {
        // Choose from Shiki's built-in themes (or add your own)
        // https://shiki.style/themes
        theme: 'github-light',
        // Alternatively, provide multiple themes
        // https://shiki.style/guide/dual-themes
        themes: {
          light: 'github-light',
          dark: 'github-light',
        },
        // Add custom languages
        // Note: Shiki has countless langs built-in, including .astro!
        // https://shiki.style/languages
        langs: [],
        // Enable word wrap to prevent horizontal scrolling
        wrap: true,
        // Add custom transformers: https://shiki.style/guide/transformers
        // Find common transformers: https://shiki.style/packages/transformers
        transformers: [],
      },
    },
});